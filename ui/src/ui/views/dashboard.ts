import { html, nothing, type TemplateResult } from "lit";
import { formatAgo } from "../format.ts";

export interface Agent {
  id: string;
  name: string;
  role: string;
  team: "coordinator" | "tlp" | "dev";
  status: "active" | "idle" | "error" | "offline";
  currentTask?: string;
  lastActivity?: Date;
  sessionKey?: string;
}

export interface DashboardSession {
  key: string;
  agentId?: string;
  kind?: string;
  channel?: string;
  state?: string;
  lastActivity?: number;
}

export type DashboardProps = {
  connected: boolean;
  sessions: DashboardSession[];
  agents: Agent[];
  messagesByAgent: Record<string, AgentMessage[]>;
  sendingByAgent: Record<string, boolean>;
  onSendMessage: (agentId: string, message: string) => void;
  onRefreshAgent: (agentId: string) => void;
  onLoadMessages: (agentId: string) => void;
  onRefresh: () => void;
};

// Default agent registry - maps agent IDs to display info
const AGENT_REGISTRY: Record<string, Omit<Agent, "id" | "status" | "currentTask" | "lastActivity" | "sessionKey">> = {
  // Coordinators
  "pm": { name: "Avery", role: "Project Manager", team: "coordinator" },
  "dev-lead": { name: "Sage", role: "Dev Team Lead", team: "coordinator" },
  
  // TLP Specialists
  "seo": { name: "Skyler", role: "SEO Specialist", team: "tlp" },
  "websites": { name: "Jordan", role: "Website Specialist", team: "tlp" },
  "google-ads": { name: "Riley", role: "Google Ads", team: "tlp" },
  "meta-ads": { name: "Morgan", role: "FB/IG Ads", team: "tlp" },
  "ghl": { name: "Parker", role: "Patient Copilot/GHL", team: "tlp" },
  "account-mgr": { name: "Taylor", role: "Account Manager", team: "tlp" },
  "sales": { name: "Cameron", role: "Sales", team: "tlp" },
  "leads": { name: "Dakota", role: "Lead Scraper", team: "tlp" },
  "support": { name: "Sydney", role: "Support", team: "tlp" },
  "qc": { name: "Quinn", role: "Quality Control", team: "tlp" },
  "data-coord": { name: "Harper", role: "Data Coordinator", team: "tlp" },
  
  // Dev Team
  "dev-phantom": { name: "Phantom", role: "Developer", team: "dev" },
  "dev-pixel": { name: "Pixel", role: "Developer", team: "dev" },
  "dev-daemon": { name: "Daemon", role: "Developer", team: "dev" },
  "dev-schema": { name: "Schema", role: "Developer", team: "dev" },
  "dev-neural": { name: "Neural", role: "Developer", team: "dev" },
  "dev-forge": { name: "Forge", role: "Developer", team: "dev" },
  "dev-highlevel": { name: "Highlevel", role: "GHL Developer", team: "dev" },
  "dev-cipher": { name: "Cipher", role: "Developer", team: "dev" },
  "dev-scribe": { name: "Scribe", role: "Documentation", team: "dev" },
  "dev-omni": { name: "Omni", role: "Developer", team: "dev" },
};

function getAgentFromSession(session: DashboardSession): Agent | null {
  const agentId = session.agentId || session.key.split(":")[1];
  const registry = AGENT_REGISTRY[agentId];
  
  if (!registry) {
    return null;
  }
  
  let status: Agent["status"] = "offline";
  if (session.state === "running" || session.state === "active") {
    status = "active";
  } else if (session.state === "idle" || session.state === "waiting") {
    status = "idle";
  } else if (session.state === "error") {
    status = "error";
  }
  
  return {
    id: agentId,
    ...registry,
    status,
    sessionKey: session.key,
    lastActivity: session.lastActivity ? new Date(session.lastActivity) : undefined,
  };
}

function buildAgentList(sessions: DashboardSession[]): Agent[] {
  const agents: Agent[] = [];
  const seenIds = new Set<string>();
  
  for (const session of sessions) {
    const agent = getAgentFromSession(session);
    if (agent && !seenIds.has(agent.id)) {
      seenIds.add(agent.id);
      agents.push(agent);
    }
  }
  
  for (const [id, info] of Object.entries(AGENT_REGISTRY)) {
    if (!seenIds.has(id)) {
      agents.push({
        id,
        ...info,
        status: "offline",
      });
    }
  }
  
  return agents;
}

function getStatusCounts(agents: Agent[]): { active: number; idle: number; error: number } {
  return {
    active: agents.filter(a => a.status === "active").length,
    idle: agents.filter(a => a.status === "idle").length,
    error: agents.filter(a => a.status === "error").length,
  };
}

function renderStatusDot(status: Agent["status"]): TemplateResult {
  return html`<span class="dashboard-status-dot dashboard-status-dot--${status}"></span>`;
}

export interface AgentMessage {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: string;
  timestamp?: number;
  toolName?: string;
}

function formatTimestamp(ts?: number): string {
  if (!ts) return "";
  const d = new Date(ts);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function renderTerminalMessage(msg: AgentMessage): TemplateResult {
  const time = formatTimestamp(msg.timestamp);
  
  if (msg.role === "system") {
    return html`
      <div class="terminal-line terminal-line--system">
        <span class="terminal-time">${time}</span>
        <span class="terminal-prefix">SYS</span>
        <span class="terminal-content">${msg.content}</span>
      </div>
    `;
  }
  
  if (msg.role === "tool") {
    return html`
      <div class="terminal-line terminal-line--tool">
        <span class="terminal-time">${time}</span>
        <span class="terminal-prefix">TOOL</span>
        <span class="terminal-tool-name">${msg.toolName || "exec"}</span>
        <pre class="terminal-output">${msg.content}</pre>
      </div>
    `;
  }
  
  if (msg.role === "user") {
    return html`
      <div class="terminal-line terminal-line--user">
        <span class="terminal-time">${time}</span>
        <span class="terminal-prefix">YOU</span>
        <span class="terminal-content">${msg.content}</span>
      </div>
    `;
  }
  
  return html`
    <div class="terminal-line terminal-line--assistant">
      <span class="terminal-time">${time}</span>
      <span class="terminal-prefix">AI</span>
      <span class="terminal-content">${msg.content}</span>
    </div>
  `;
}

function renderAgentCard(
  agent: Agent,
  messages: AgentMessage[],
  sending: boolean,
  onSend: (agentId: string, msg: string) => void,
  onRefresh: (agentId: string) => void
): TemplateResult {
  const initials = agent.name.slice(0, 2).toUpperCase();
  
  return html`
    <article class="dashboard-card dashboard-card--${agent.status}">
      <div class="dashboard-card__header">
        <div class="dashboard-card__identity">
          <div class="dashboard-card__avatar">${initials}</div>
          <div class="dashboard-card__info">
            <h3 class="dashboard-card__name">${agent.name}</h3>
            <p class="dashboard-card__role">${agent.role}</p>
          </div>
        </div>
        ${renderStatusDot(agent.status)}
      </div>
      <div class="dashboard-card__chat">
        <div class="dashboard-card__toolbar">
          <span class="dashboard-card__session-key">${agent.sessionKey || agent.id}</span>
          <button class="btn btn-sm" @click=${() => onRefresh(agent.id)}>↻</button>
        </div>
        <div class="dashboard-card__terminal">
          ${messages.length === 0 ? html`
            <div class="terminal-empty">
              <span class="terminal-empty-icon">📟</span>
              <span>Waiting for activity...</span>
            </div>
          ` : messages.map(msg => renderTerminalMessage(msg))}
        </div>
        <div class="dashboard-card__input">
          <input 
            type="text" 
            class="input"
            placeholder="Message ${agent.name}..."
            ?disabled=${sending}
            @keydown=${(e: KeyboardEvent) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const input = e.target as HTMLInputElement;
                if (input.value.trim() && !sending) {
                  onSend(agent.id, input.value);
                  input.value = "";
                }
              }
            }}
          />
          <button 
            class="btn btn-primary btn-sm" 
            ?disabled=${sending}
            @click=${(e: Event) => {
              const input = (e.target as HTMLElement).parentElement?.querySelector("input");
              if (input?.value.trim() && !sending) {
                onSend(agent.id, input.value);
                input.value = "";
              }
            }}
          >${sending ? "..." : "Send"}</button>
        </div>
      </div>
    </article>
  `;
}

export function renderDashboard(props: DashboardProps): TemplateResult {
  const agents = props.agents.length > 0 ? props.agents : buildAgentList(props.sessions);
  const counts = getStatusCounts(agents);
  
  const coordinators = agents.filter(a => a.team === "coordinator");
  const tlp = agents.filter(a => a.team === "tlp");
  const dev = agents.filter(a => a.team === "dev");
  
  const renderCard = (agent: Agent) => renderAgentCard(
    agent,
    props.messagesByAgent[agent.id] ?? [],
    props.sendingByAgent[agent.id] ?? false,
    props.onSendMessage,
    props.onRefreshAgent
  );
  
  return html`
    <style>
      .dashboard-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        flex-wrap: wrap;
        gap: 16px;
      }
      
      .dashboard-header__stats {
        display: flex;
        gap: 16px;
        font-size: 14px;
      }
      
      .dashboard-header__stat {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .dashboard-header__stat--active { color: var(--success); }
      .dashboard-header__stat--idle { color: var(--warning); }
      .dashboard-header__stat--error { color: var(--danger); }
      
      .dashboard-controls {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      
      .dashboard-section {
        margin-bottom: 32px;
      }
      
      .dashboard-section__title {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 16px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .dashboard-section__count {
        font-size: 14px;
        color: var(--muted);
        font-weight: normal;
      }
      
      .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
      }
      
      .dashboard-card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.15s ease;
      }
      
      .dashboard-card:hover {
        border-color: var(--accent);
      }
      
      .dashboard-card--error {
        border-color: var(--danger);
      }
      
      .dashboard-card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
      }
      
      .dashboard-card__identity {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      
      .dashboard-card__avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        color: white;
        flex-shrink: 0;
      }
      
      .dashboard-card__name {
        font-size: 15px;
        font-weight: 600;
        margin: 0;
      }
      
      .dashboard-card__role {
        font-size: 13px;
        color: var(--muted);
        margin: 0;
      }
      
      /* Status dot only */
      .dashboard-status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      
      .dashboard-status-dot--active { background: var(--success, #22c55e); }
      .dashboard-status-dot--idle { background: var(--warning, #eab308); }
      .dashboard-status-dot--error { background: var(--danger, #ef4444); }
      .dashboard-status-dot--offline { background: var(--muted, #6b7280); }
      
      /* Embedded chat */
      .dashboard-card__chat {
        border-top: 1px solid var(--border);
      }
      
      .dashboard-card__toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 12px;
        background: var(--bg);
        font-size: 11px;
        border-bottom: 1px solid var(--border);
      }
      
      .dashboard-card__session-key {
        font-family: var(--mono);
        color: var(--muted);
      }
      
      .dashboard-card__terminal {
        height: 150px;
        overflow-y: auto;
        padding: 8px 12px;
        background: #0d1117;
        font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
        font-size: 12px;
        line-height: 1.5;
      }
      
      .dashboard-card__input {
        display: flex;
        gap: 6px;
        padding: 8px 12px;
        border-top: 1px solid var(--border);
        background: var(--bg);
      }
      
      .dashboard-card__input .input {
        flex: 1;
        font-size: 13px;
      }
      
      /* Terminal styles */
      .terminal-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        color: #6e7681;
        gap: 8px;
        text-align: center;
        height: 100%;
      }
      
      .terminal-empty-icon {
        font-size: 24px;
        opacity: 0.5;
      }
      
      .terminal-line {
        display: flex;
        gap: 8px;
        padding: 2px 0;
        align-items: flex-start;
      }
      
      .terminal-time {
        color: #6e7681;
        font-size: 10px;
        min-width: 50px;
        flex-shrink: 0;
      }
      
      .terminal-prefix {
        font-weight: 600;
        min-width: 32px;
        flex-shrink: 0;
        font-size: 11px;
      }
      
      .terminal-line--system .terminal-prefix { color: #8b949e; }
      .terminal-line--system .terminal-content { color: #8b949e; font-style: italic; }
      .terminal-line--user .terminal-prefix { color: #58a6ff; }
      .terminal-line--user .terminal-content { color: #c9d1d9; }
      .terminal-line--assistant .terminal-prefix { color: #7ee787; }
      .terminal-line--assistant .terminal-content { color: #c9d1d9; white-space: pre-wrap; word-break: break-word; }
      
      .terminal-line--tool {
        flex-direction: column;
        gap: 2px;
      }
      
      .terminal-line--tool .terminal-prefix { color: #d29922; }
      
      .terminal-tool-name {
        color: #f0883e;
        font-size: 10px;
        margin-left: 40px;
      }
      
      .terminal-output {
        margin: 2px 0 2px 40px;
        padding: 6px 8px;
        background: #161b22;
        border-radius: 4px;
        color: #8b949e;
        font-size: 11px;
        overflow-x: auto;
        white-space: pre-wrap;
        word-break: break-all;
        max-height: 100px;
        overflow-y: auto;
      }
      
      .terminal-content {
        font-size: 12px;
      }
      
      .btn-sm {
        padding: 4px 12px;
        font-size: 12px;
      }
    </style>
    
    <div class="dashboard-header">
      <div class="dashboard-header__stats">
        <span class="dashboard-header__stat dashboard-header__stat--active">
          <span class="statusDot ok"></span>
          <strong>${counts.active}</strong> Active
        </span>
        <span class="dashboard-header__stat dashboard-header__stat--idle">
          <span class="statusDot warning"></span>
          <strong>${counts.idle}</strong> Idle
        </span>
        <span class="dashboard-header__stat dashboard-header__stat--error">
          <span class="statusDot"></span>
          <strong>${counts.error}</strong> Error
        </span>
      </div>
      <div class="dashboard-controls">
        <input type="text" class="input" placeholder="Search agents..." style="width: 200px" />
        <button class="btn" @click=${props.onRefresh}>🔄 Refresh</button>
      </div>
    </div>
    
    ${coordinators.length > 0 ? html`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          👑 Coordinators
          <span class="dashboard-section__count">(${coordinators.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${coordinators.map(renderCard)}
        </div>
      </section>
    ` : nothing}
    
    ${tlp.length > 0 ? html`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          🏢 TLP Specialists
          <span class="dashboard-section__count">(${tlp.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${tlp.map(renderCard)}
        </div>
      </section>
    ` : nothing}
    
    ${dev.length > 0 ? html`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          💻 Dev Team
          <span class="dashboard-section__count">(${dev.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${dev.map(renderCard)}
        </div>
      </section>
    ` : nothing}
  `;
}
