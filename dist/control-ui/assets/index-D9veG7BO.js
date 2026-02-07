(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Ln=globalThis,yi=Ln.ShadowRoot&&(Ln.ShadyCSS===void 0||Ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xi=Symbol(),Ca=new WeakMap;let Zo=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==xi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(yi&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Ca.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ca.set(n,t))}return t}toString(){return this.cssText}};const Jl=e=>new Zo(typeof e=="string"?e:e+"",void 0,xi),Zl=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,i,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new Zo(n,e,xi)},Xl=(e,t)=>{if(yi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),i=Ln.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},Ta=yi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Jl(n)})(e):e;const{is:ec,defineProperty:tc,getOwnPropertyDescriptor:nc,getOwnPropertyNames:sc,getOwnPropertySymbols:ic,getPrototypeOf:ac}=Object,Gn=globalThis,_a=Gn.trustedTypes,oc=_a?_a.emptyScript:"",rc=Gn.reactiveElementPolyfillSupport,Wt=(e,t)=>e,Pn={toAttribute(e,t){switch(t){case Boolean:e=e?oc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},$i=(e,t)=>!ec(e,t),Ea={attribute:!0,type:String,converter:Pn,reflect:!1,useDefault:!1,hasChanged:$i};Symbol.metadata??=Symbol("metadata"),Gn.litPropertyMetadata??=new WeakMap;let At=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ea){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&tc(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){const{get:i,set:a}=nc(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const l=i?.call(this);a?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ea}static _$Ei(){if(this.hasOwnProperty(Wt("elementProperties")))return;const t=ac(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Wt("properties"))){const n=this.properties,s=[...sc(n),...ic(n)];for(const i of s)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)n.unshift(Ta(i))}else t!==void 0&&n.push(Ta(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Pn).toAttribute(n,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Pn;this._$Em=i;const l=o.fromAttribute(n,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,s,i=!1,a){if(t!==void 0){const o=this.constructor;if(i===!1&&(a=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??$i)(a,n)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:o}=a,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};At.elementStyles=[],At.shadowRootOptions={mode:"open"},At[Wt("elementProperties")]=new Map,At[Wt("finalized")]=new Map,rc?.({ReactiveElement:At}),(Gn.reactiveElementVersions??=[]).push("2.1.2");const wi=globalThis,La=e=>e,Fn=wi.trustedTypes,Ma=Fn?Fn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Xo="$lit$",Ge=`lit$${Math.random().toFixed(9).slice(2)}$`,er="?"+Ge,lc=`<${er}>`,gt=document,Jt=()=>gt.createComment(""),Zt=e=>e===null||typeof e!="object"&&typeof e!="function",ki=Array.isArray,cc=e=>ki(e)||typeof e?.[Symbol.iterator]=="function",xs=`[ 	
\f\r]`,Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ia=/-->/g,Ra=/>/g,nt=RegExp(`>|${xs}(?:([^\\s"'>=/]+)(${xs}*=${xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Da=/'/g,Pa=/"/g,tr=/^(?:script|style|textarea|title)$/i,nr=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=nr(1),mn=nr(2),Qe=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Fa=new WeakMap,dt=gt.createTreeWalker(gt,129);function sr(e,t){if(!ki(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ma!==void 0?Ma.createHTML(t):t}const dc=(e,t)=>{const n=e.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",o=Dt;for(let l=0;l<n;l++){const d=e[l];let u,f,g=-1,h=0;for(;h<d.length&&(o.lastIndex=h,f=o.exec(d),f!==null);)h=o.lastIndex,o===Dt?f[1]==="!--"?o=Ia:f[1]!==void 0?o=Ra:f[2]!==void 0?(tr.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=nt):f[3]!==void 0&&(o=nt):o===nt?f[0]===">"?(o=i??Dt,g=-1):f[1]===void 0?g=-2:(g=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?nt:f[3]==='"'?Pa:Da):o===Pa||o===Da?o=nt:o===Ia||o===Ra?o=Dt:(o=nt,i=void 0);const c=o===nt&&e[l+1].startsWith("/>")?" ":"";a+=o===Dt?d+lc:g>=0?(s.push(u),d.slice(0,g)+Xo+d.slice(g)+Ge+c):d+Ge+(g===-2?l:c)}return[sr(e,a+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Ws=class ir{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let a=0,o=0;const l=t.length-1,d=this.parts,[u,f]=dc(t,n);if(this.el=ir.createElement(u,s),dt.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=dt.nextNode())!==null&&d.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const g of i.getAttributeNames())if(g.endsWith(Xo)){const h=f[o++],c=i.getAttribute(g).split(Ge),p=/([.?@])?(.*)/.exec(h);d.push({type:1,index:a,name:p[2],strings:c,ctor:p[1]==="."?gc:p[1]==="?"?pc:p[1]==="@"?fc:Qn}),i.removeAttribute(g)}else g.startsWith(Ge)&&(d.push({type:6,index:a}),i.removeAttribute(g));if(tr.test(i.tagName)){const g=i.textContent.split(Ge),h=g.length-1;if(h>0){i.textContent=Fn?Fn.emptyScript:"";for(let c=0;c<h;c++)i.append(g[c],Jt()),dt.nextNode(),d.push({type:2,index:++a});i.append(g[h],Jt())}}}else if(i.nodeType===8)if(i.data===er)d.push({type:2,index:a});else{let g=-1;for(;(g=i.data.indexOf(Ge,g+1))!==-1;)d.push({type:7,index:a}),g+=Ge.length-1}a++}}static createElement(t,n){const s=gt.createElement("template");return s.innerHTML=t,s}};function _t(e,t,n=e,s){if(t===Qe)return t;let i=s!==void 0?n._$Co?.[s]:n._$Cl;const a=Zt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=i:n._$Cl=i),i!==void 0&&(t=_t(e,i._$AS(e,t.values),i,s)),t}class uc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,i=(t?.creationScope??gt).importNode(n,!0);dt.currentNode=i;let a=dt.nextNode(),o=0,l=0,d=s[0];for(;d!==void 0;){if(o===d.index){let u;d.type===2?u=new Vn(a,a.nextSibling,this,t):d.type===1?u=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(u=new hc(a,this,t)),this._$AV.push(u),d=s[++l]}o!==d?.index&&(a=dt.nextNode(),o++)}return dt.currentNode=gt,i}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let Vn=class ar{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=_t(this,t,n),Zt(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==Qe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&Zt(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ws.createElement(sr(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(n);else{const a=new uc(i,this),o=a.u(this.options);a.p(n),this.T(o),this._$AH=a}}_$AC(t){let n=Fa.get(t.strings);return n===void 0&&Fa.set(t.strings,n=new Ws(t)),n}k(t){ki(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const a of t)i===n.length?n.push(s=new ar(this.O(Jt()),this.O(Jt()),this,this.options)):s=n[i],s._$AI(a),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=La(t).nextSibling;La(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class Qn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,n=this,s,i){const a=this.strings;let o=!1;if(a===void 0)t=_t(this,t,n,0),o=!Zt(t)||t!==this._$AH&&t!==Qe,o&&(this._$AH=t);else{const l=t;let d,u;for(t=a[0],d=0;d<a.length-1;d++)u=_t(this,l[s+d],n,d),u===Qe&&(u=this._$AH[d]),o||=!Zt(u)||u!==this._$AH[d],u===v?t=v:t!==v&&(t+=(u??"")+a[d+1]),this._$AH[d]=u}o&&!i&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let gc=class extends Qn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},pc=class extends Qn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},fc=class extends Qn{constructor(t,n,s,i,a){super(t,n,s,i,a),this.type=5}_$AI(t,n=this){if((t=_t(this,t,n,0)??v)===Qe)return;const s=this._$AH,i=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==v&&(s===v||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},hc=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}};const vc={I:Vn},mc=wi.litHtmlPolyfillSupport;mc?.(Ws,Vn),(wi.litHtmlVersions??=[]).push("3.3.2");const bc=(e,t,n)=>{const s=n?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const a=n?.renderBefore??null;s._$litPart$=i=new Vn(t.insertBefore(Jt(),a),a,void 0,n??{})}return i._$AI(e),i};const Si=globalThis;let Tt=class extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};Tt._$litElement$=!0,Tt.finalized=!0,Si.litElementHydrateSupport?.({LitElement:Tt});const yc=Si.litElementPolyfillSupport;yc?.({LitElement:Tt});(Si.litElementVersions??=[]).push("4.2.2");const or=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const xc={attribute:!0,type:String,converter:Pn,reflect:!1,hasChanged:$i},$c=(e=xc,t,n)=>{const{kind:s,metadata:i}=n;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),s==="accessor"){const{name:o}=n;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(s==="setter"){const{name:o}=n;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function Yn(e){return(t,n)=>typeof n=="object"?$c(e,t,n):((s,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,n)}function k(e){return Yn({...e,state:!0,attribute:!1})}async function ye(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function wc(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function kc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Sc(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function pt(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Et(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function rr(e,t,n){if(t.length===0)return;let s=e;for(let a=0;a<t.length-1;a+=1){const o=t[a],l=t[a+1];if(typeof o=="number"){if(!Array.isArray(s))return;s[o]==null&&(s[o]=typeof l=="number"?[]:{}),s=s[o]}else{if(typeof s!="object"||s==null)return;const d=s;d[o]==null&&(d[o]=typeof l=="number"?[]:{}),s=d[o]}}const i=t[t.length-1];if(typeof i=="number"){Array.isArray(s)&&(s[i]=n);return}typeof s=="object"&&s!=null&&(s[i]=n)}function lr(e,t){if(t.length===0)return;let n=e;for(let i=0;i<t.length-1;i+=1){const a=t[i];if(typeof a=="number"){if(!Array.isArray(n))return;n=n[a]}else{if(typeof n!="object"||n==null)return;n=n[a]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function Ee(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Cc(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function cr(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Ac(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Ac(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Cc(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Et(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Et(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=pt(t.config??{}),e.configFormOriginal=pt(t.config??{}),e.configRawOriginal=n)}async function Mn(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Et(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await Ee(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Tc(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Et(e.configForm):e.configRaw,n=e.configSnapshot?.hash;if(!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await Ee(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function _c(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function $e(e,t,n){const s=pt(e.configForm??e.configSnapshot?.config??{});rr(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Et(s))}function ze(e,t){const n=pt(e.configForm??e.configSnapshot?.config??{});lr(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Et(n))}function Ec(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Lc(e){const{state:t,callbacks:n,accountId:s}=e,i=Ec(t),a=(l,d,u={})=>{const{type:f="text",placeholder:g,maxLength:h,help:c}=u,p=t.values[l]??"",m=t.fieldErrors[l],$=`nostr-profile-${l}`;return f==="textarea"?r`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${$}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${d}
          </label>
          <textarea
            id="${$}"
            .value=${p}
            placeholder=${g??""}
            maxlength=${h??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${S=>{const y=S.target;n.onFieldChange(l,y.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${c?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${c}</div>`:v}
          ${m?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${m}</div>`:v}
        </div>
      `:r`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${$}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${d}
        </label>
        <input
          id="${$}"
          type=${f}
          .value=${p}
          placeholder=${g??""}
          maxlength=${h??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${S=>{const y=S.target;n.onFieldChange(l,y.value)}}
          ?disabled=${t.saving}
        />
        ${c?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${c}</div>`:v}
        ${m?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${m}</div>`:v}
      </div>
    `},o=()=>{const l=t.values.picture;return l?r`
      <div style="margin-bottom: 12px;">
        <img
          src=${l}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${d=>{const u=d.target;u.style.display="none"}}
          @load=${d=>{const u=d.target;u.style.display="block"}}
        />
      </div>
    `:v};return r`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${s}</div>
      </div>

      ${t.error?r`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:v}

      ${t.success?r`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:v}

      ${o()}

      ${a("name","Username",{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${a("displayName","Display Name",{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${a("about","Bio",{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${a("picture","Avatar URL",{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?r`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${a("banner","Banner URL",{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${a("website","Website",{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${a("nip05","NIP-05 Identifier",{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${a("lud16","Lightning Address",{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:v}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!i}
        >
          ${t.saving?"Saving...":"Save & Publish"}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?"Importing...":"Import from Relays"}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?"Hide Advanced":"Show Advanced"}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${i?r`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:v}
    </div>
  `}function Mc(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function Ic(e,t){await wc(e,t),await ye(e,!0)}async function Rc(e){await kc(e),await ye(e,!0)}async function Dc(e){await Sc(e),await ye(e,!0)}async function Pc(e){await Mn(e),await Ee(e),await ye(e,!0)}async function Fc(e){await Ee(e),await ye(e,!0)}function Nc(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...i]=n.split(":");if(!s||i.length===0)continue;const a=s.trim(),o=i.join(":").trim();a&&o&&(t[a]=o)}return t}function dr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function ur(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Oc(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Mc(n??void 0)}function Bc(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function Uc(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function zc(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Hc(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=dr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(ur(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const a=i?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:a,success:null,fieldErrors:Nc(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await ye(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Kc(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=dr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(ur(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),i=await s.json().catch(()=>null);if(!s.ok||i?.ok===!1||!i){const d=i?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:d,success:null};return}const a=i.merged??i.imported??null,o=a?{...t.values,...a}:t.values,l=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:i.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:l},i.saved&&await ye(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function gr(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),i=n.slice(2).join(":");return!s||!i?null:{agentId:s,rest:i}}const qs=450;function an(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const i=getComputedStyle(s).overflowY;if(i==="auto"||i==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const i=s.scrollHeight-s.scrollTop-s.clientHeight,a=t&&!e.chatHasAutoScrolled;if(!(a||e.chatUserNearBottom||i<qs)){e.chatNewMessagesBelow=!0;return}a&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const l=a?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const d=n();if(!d)return;const u=d.scrollHeight-d.scrollTop-d.clientHeight;(a||e.chatUserNearBottom||u<qs)&&(d.scrollTop=d.scrollHeight,e.chatUserNearBottom=!0)},l)})})}function pr(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function jc(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<qs,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function Wc(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function Na(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function qc(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),i=document.createElement("a"),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");i.href=s,i.download=`openclaw-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(s)}function Gc(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}async function Jn(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,i]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const a=s;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Vc(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const Qc=2e3,Yc=new Set(["trace","debug","info","warn","error","fatal"]);function Jc(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function Zc(e){if(typeof e!="string")return null;const t=e.toLowerCase();return Yc.has(t)?t:null}function Xc(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,i=Zc(n?.logLevelName??n?.level),a=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,o=Jc(a);let l=null;o&&(typeof o.subsystem=="string"?l=o.subsystem:typeof o.module=="string"&&(l=o.module)),!l&&a&&a.length<120&&(l=a);let d=null;return typeof t[1]=="string"?d=t[1]:!o&&typeof t[0]=="string"?d=t[0]:typeof t.message=="string"&&(d=t.message),{raw:e,time:s,level:i,subsystem:l,message:d??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ai(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),a=(Array.isArray(s.lines)?s.lines.filter(l=>typeof l=="string"):[]).map(Xc),o=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=o?a:[...e.logsEntries,...a].slice(-Qc),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function Zn(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function ed(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{Zn(e,{quiet:!0})},5e3))}function td(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ci(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ai(e,{quiet:!0})},2e3))}function Ti(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function _i(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&Jn(e)},3e3))}function Ei(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function fr(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function hr(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const i=await e.client.request("agent.identity.get",{agentId:s});i&&(e.agentIdentityById={...e.agentIdentityById,[s]:i})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function In(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function Li(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(i=>i.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const nd=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,bn=/<\s*\/?\s*final\b[^<>]*>/gi,Oa=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function Ba(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const i of e.matchAll(n)){const a=(i.index??0)+i[1].length;t.push({start:a,end:a+i[0].length-i[1].length})}const s=/`+[^`]+`+/g;for(const i of e.matchAll(s)){const a=i.index??0,o=a+i[0].length;t.some(d=>a>=d.start&&o<=d.end)||t.push({start:a,end:o})}return t.sort((i,a)=>i.start-a.start),t}function Ua(e,t){return t.some(n=>e>=n.start&&e<n.end)}function sd(e,t){return e.trimStart()}function id(e,t){if(!e||!nd.test(e))return e;let n=e;if(bn.test(n)){bn.lastIndex=0;const l=[],d=Ba(n);for(const u of n.matchAll(bn)){const f=u.index??0;l.push({start:f,length:u[0].length,inCode:Ua(f,d)})}for(let u=l.length-1;u>=0;u--){const f=l[u];f.inCode||(n=n.slice(0,f.start)+n.slice(f.start+f.length))}}else bn.lastIndex=0;const s=Ba(n);Oa.lastIndex=0;let i="",a=0,o=!1;for(const l of n.matchAll(Oa)){const d=l.index??0,u=l[1]==="/";Ua(d,s)||(o?u&&(o=!1):(i+=n.slice(a,d),u||(o=!0)),a=d+l[0].length)}return i+=n.slice(a),sd(i)}function Xt(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function V(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",i=Math.round(n/1e3);if(i<60)return t<0?"just now":`${i}s ago`;const a=Math.round(i/60);if(a<60)return`${a}m ${s}`;const o=Math.round(a/60);return o<48?`${o}h ${s}`:`${Math.round(o/24)}d ${s}`}function vr(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function Gs(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function Vs(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function mr(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function Nn(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function $s(e){return id(e)}async function on(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function Xn(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function ad(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=Nn(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function od(e){if(e.payloadKind==="systemEvent"){const i=e.payloadText.trim();if(!i)throw new Error("System event text required.");return{kind:"systemEvent",text:i}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=Nn(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function rd(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=ad(e.cronForm),n=od(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,i=e.cronForm.agentId.trim(),a={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:i||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!a.name)throw new Error("Name required.");await e.client.request("cron.add",a),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await Xn(e),await on(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function ld(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await Xn(e),await on(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function cd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await br(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function dd(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await Xn(e),await on(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function br(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const yr="openclaw.device.auth.v1";function Mi(e){return e.trim()}function ud(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function Ii(){try{const e=window.localStorage.getItem(yr);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function xr(e){try{window.localStorage.setItem(yr,JSON.stringify(e))}catch{}}function gd(e){const t=Ii();if(!t||t.deviceId!==e.deviceId)return null;const n=Mi(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function $r(e){const t=Mi(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=Ii();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const i={token:e.token,role:t,scopes:ud(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=i,xr(n),i}function wr(e){const t=Ii();if(!t||t.deviceId!==e.deviceId)return;const n=Mi(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],xr(s)}const kr={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ue,n:Rn,Gx:za,Gy:Ha,a:ws,d:ks,h:pd}=kr,ft=32,Ri=64,fd=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},oe=(e="")=>{const t=new Error(e);throw fd(t,oe),t},hd=e=>typeof e=="bigint",vd=e=>typeof e=="string",md=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",Je=(e,t,n="")=>{const s=md(e),i=e?.length,a=t!==void 0;if(!s||a&&i!==t){const o=n&&`"${n}" `,l=a?` of length ${t}`:"",d=s?`length=${i}`:`type=${typeof e}`;oe(o+"expected Uint8Array"+l+", got "+d)}return e},es=e=>new Uint8Array(e),Sr=e=>Uint8Array.from(e),Ar=(e,t)=>e.toString(16).padStart(t,"0"),Cr=e=>Array.from(Je(e)).map(t=>Ar(t,2)).join(""),He={_0:48,_9:57,A:65,F:70,a:97,f:102},Ka=e=>{if(e>=He._0&&e<=He._9)return e-He._0;if(e>=He.A&&e<=He.F)return e-(He.A-10);if(e>=He.a&&e<=He.f)return e-(He.a-10)},Tr=e=>{const t="hex invalid";if(!vd(e))return oe(t);const n=e.length,s=n/2;if(n%2)return oe(t);const i=es(s);for(let a=0,o=0;a<s;a++,o+=2){const l=Ka(e.charCodeAt(o)),d=Ka(e.charCodeAt(o+1));if(l===void 0||d===void 0)return oe(t);i[a]=l*16+d}return i},_r=()=>globalThis?.crypto,bd=()=>_r()?.subtle??oe("crypto.subtle must be defined, consider polyfill"),en=(...e)=>{const t=es(e.reduce((s,i)=>s+Je(i).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},yd=(e=ft)=>_r().getRandomValues(es(e)),On=BigInt,ot=(e,t,n,s="bad number: out of range")=>hd(e)&&t<=e&&e<n?e:oe(s),P=(e,t=ue)=>{const n=e%t;return n>=0n?n:t+n},Er=e=>P(e,Rn),xd=(e,t)=>{(e===0n||t<=0n)&&oe("no inverse n="+e+" mod="+t);let n=P(e,t),s=t,i=0n,a=1n;for(;n!==0n;){const o=s/n,l=s%n,d=i-a*o;s=n,n=l,i=a,a=d}return s===1n?P(i,t):oe("no inverse")},$d=e=>{const t=Rr[e];return typeof t!="function"&&oe("hashes."+e+" not set"),t},Ss=e=>e instanceof ke?e:oe("Point expected"),Qs=2n**256n;class ke{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,i){const a=Qs;this.X=ot(t,0n,a),this.Y=ot(n,0n,a),this.Z=ot(s,1n,a),this.T=ot(i,0n,a),Object.freeze(this)}static CURVE(){return kr}static fromAffine(t){return new ke(t.x,t.y,1n,P(t.x*t.y))}static fromBytes(t,n=!1){const s=ks,i=Sr(Je(t,ft)),a=t[31];i[31]=a&-129;const o=Mr(i);ot(o,0n,n?Qs:ue);const d=P(o*o),u=P(d-1n),f=P(s*d+1n);let{isValid:g,value:h}=kd(u,f);g||oe("bad point: y not sqrt");const c=(h&1n)===1n,p=(a&128)!==0;return!n&&h===0n&&p&&oe("bad point: x==0, isLastByteOdd"),p!==c&&(h=P(-h)),new ke(h,o,1n,P(h*o))}static fromHex(t,n){return ke.fromBytes(Tr(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=ws,n=ks,s=this;if(s.is0())return oe("bad point: ZERO");const{X:i,Y:a,Z:o,T:l}=s,d=P(i*i),u=P(a*a),f=P(o*o),g=P(f*f),h=P(d*t),c=P(f*P(h+u)),p=P(g+P(n*P(d*u)));if(c!==p)return oe("bad point: equation left != right (1)");const m=P(i*a),$=P(o*l);return m!==$?oe("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:i}=this,{X:a,Y:o,Z:l}=Ss(t),d=P(n*l),u=P(a*i),f=P(s*l),g=P(o*i);return d===u&&f===g}is0(){return this.equals(Ct)}negate(){return new ke(P(-this.X),this.Y,this.Z,P(-this.T))}double(){const{X:t,Y:n,Z:s}=this,i=ws,a=P(t*t),o=P(n*n),l=P(2n*P(s*s)),d=P(i*a),u=t+n,f=P(P(u*u)-a-o),g=d+o,h=g-l,c=d-o,p=P(f*h),m=P(g*c),$=P(f*c),S=P(h*g);return new ke(p,m,S,$)}add(t){const{X:n,Y:s,Z:i,T:a}=this,{X:o,Y:l,Z:d,T:u}=Ss(t),f=ws,g=ks,h=P(n*o),c=P(s*l),p=P(a*g*u),m=P(i*d),$=P((n+s)*(o+l)-h-c),S=P(m-p),y=P(m+p),C=P(c-f*h),A=P($*S),T=P(y*C),_=P($*C),I=P(S*y);return new ke(A,T,I,_)}subtract(t){return this.add(Ss(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Ct;if(ot(t,1n,Rn),t===1n)return this;if(this.equals(ht))return Dd(t).p;let s=Ct,i=ht;for(let a=this;t>0n;a=a.double(),t>>=1n)t&1n?s=s.add(a):n&&(i=i.add(a));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Ct))return{x:0n,y:1n};const i=xd(s,ue);P(s*i)!==1n&&oe("invalid inverse");const a=P(t*i),o=P(n*i);return{x:a,y:o}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=Lr(n);return s[31]|=t&1n?128:0,s}toHex(){return Cr(this.toBytes())}clearCofactor(){return this.multiply(On(pd),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Rn/2n,!1).double();return Rn%2n&&(t=t.add(this)),t.is0()}}const ht=new ke(za,Ha,1n,P(za*Ha)),Ct=new ke(0n,1n,1n,0n);ke.BASE=ht;ke.ZERO=Ct;const Lr=e=>Tr(Ar(ot(e,0n,Qs),Ri)).reverse(),Mr=e=>On("0x"+Cr(Sr(Je(e)).reverse())),Ie=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ue;return n},wd=e=>{const n=e*e%ue*e%ue,s=Ie(n,2n)*n%ue,i=Ie(s,1n)*e%ue,a=Ie(i,5n)*i%ue,o=Ie(a,10n)*a%ue,l=Ie(o,20n)*o%ue,d=Ie(l,40n)*l%ue,u=Ie(d,80n)*d%ue,f=Ie(u,80n)*d%ue,g=Ie(f,10n)*a%ue;return{pow_p_5_8:Ie(g,2n)*e%ue,b2:n}},ja=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,kd=(e,t)=>{const n=P(t*t*t),s=P(n*n*t),i=wd(e*s).pow_p_5_8;let a=P(e*n*i);const o=P(t*a*a),l=a,d=P(a*ja),u=o===e,f=o===P(-e),g=o===P(-e*ja);return u&&(a=l),(f||g)&&(a=d),(P(a)&1n)===1n&&(a=P(-a)),{isValid:u||f,value:a}},Ys=e=>Er(Mr(e)),Di=(...e)=>Rr.sha512Async(en(...e)),Sd=(...e)=>$d("sha512")(en(...e)),Ir=e=>{const t=e.slice(0,ft);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(ft,Ri),s=Ys(t),i=ht.multiply(s),a=i.toBytes();return{head:t,prefix:n,scalar:s,point:i,pointBytes:a}},Pi=e=>Di(Je(e,ft)).then(Ir),Ad=e=>Ir(Sd(Je(e,ft))),Cd=e=>Pi(e).then(t=>t.pointBytes),Td=e=>Di(e.hashable).then(e.finish),_d=(e,t,n)=>{const{pointBytes:s,scalar:i}=e,a=Ys(t),o=ht.multiply(a).toBytes();return{hashable:en(o,s,n),finish:u=>{const f=Er(a+Ys(u)*i);return Je(en(o,Lr(f)),Ri)}}},Ed=async(e,t)=>{const n=Je(e),s=await Pi(t),i=await Di(s.prefix,n);return Td(_d(s,i,n))},Rr={sha512Async:async e=>{const t=bd(),n=en(e);return es(await t.digest("SHA-512",n.buffer))},sha512:void 0},Ld=(e=yd(ft))=>e,Md={getExtendedPublicKeyAsync:Pi,getExtendedPublicKey:Ad,randomSecretKey:Ld},Bn=8,Id=256,Dr=Math.ceil(Id/Bn)+1,Js=2**(Bn-1),Rd=()=>{const e=[];let t=ht,n=t;for(let s=0;s<Dr;s++){n=t,e.push(n);for(let i=1;i<Js;i++)n=n.add(t),e.push(n);t=n.double()}return e};let Wa;const qa=(e,t)=>{const n=t.negate();return e?n:t},Dd=e=>{const t=Wa||(Wa=Rd());let n=Ct,s=ht;const i=2**Bn,a=i,o=On(i-1),l=On(Bn);for(let d=0;d<Dr;d++){let u=Number(e&o);e>>=l,u>Js&&(u-=a,e+=1n);const f=d*Js,g=f,h=f+Math.abs(u)-1,c=d%2!==0,p=u<0;u===0?s=s.add(qa(c,t[g])):n=n.add(qa(p,t[h]))}return e!==0n&&oe("invalid wnaf"),{p:n,f:s}},As="openclaw-device-identity-v1";function Zs(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function Pr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),i=new Uint8Array(s.length);for(let a=0;a<s.length;a+=1)i[a]=s.charCodeAt(a);return i}function Pd(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Fr(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return Pd(new Uint8Array(t))}async function Fd(){const e=Md.randomSecretKey(),t=await Cd(e);return{deviceId:await Fr(t),publicKey:Zs(t),privateKey:Zs(e)}}async function Fi(){try{const n=localStorage.getItem(As);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const i=await Fr(Pr(s.publicKey));if(i!==s.deviceId){const a={...s,deviceId:i};return localStorage.setItem(As,JSON.stringify(a)),{deviceId:i,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await Fd(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(As,JSON.stringify(t)),e}async function Nd(e,t){const n=Pr(e),s=new TextEncoder().encode(t),i=await Ed(s,n);return Zs(i)}async function Ze(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Od(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await Ze(e)}catch(n){e.devicesError=String(n)}}async function Bd(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await Ze(e)}catch(s){e.devicesError=String(s)}}async function Ud(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await Fi(),i=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&$r({deviceId:s.deviceId,role:i,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await Ze(e)}catch(n){e.devicesError=String(n)}}async function zd(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await Fi();t.deviceId===s.deviceId&&wr({deviceId:s.deviceId,role:t.role}),await Ze(e)}catch(s){e.devicesError=String(s)}}function Hd(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Kd(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function Ni(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Hd(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);jd(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function jd(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=pt(t.file??{}))}async function Wd(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},i=Kd(t,{file:s,baseHash:n});if(!i){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(i.method,i.params),e.execApprovalsDirty=!1,await Ni(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function qd(e,t,n){const s=pt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});rr(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function Gd(e,t){const n=pt(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});lr(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Oi(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function Ye(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??Nn(e.sessionsFilterActive,0),a=t?.limit??Nn(e.sessionsFilterLimit,0),o={includeGlobal:n,includeUnknown:s};i>0&&(o.activeMinutes=i),a>0&&(o.limit=a);const l=await e.client.request("sessions.list",o);l&&(e.sessionsResult=l)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function Vd(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Ye(e)}catch(i){e.sessionsError=String(i)}}async function Qd(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),await Ye(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}function Lt(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function ts(e){return e instanceof Error?e.message:String(e)}async function rn(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=ts(n)}finally{e.skillsLoading=!1}}}function Yd(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function Jd(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await rn(e),Lt(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const i=ts(s);e.skillsError=i,Lt(e,t,{kind:"error",message:i})}finally{e.skillsBusyKey=null}}}async function Zd(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const n=e.skillEdits[t]??"";await e.client.request("skills.update",{skillKey:t,apiKey:n}),await rn(e),Lt(e,t,{kind:"success",message:"API key saved"})}catch(n){const s=ts(n);e.skillsError=s,Lt(e,t,{kind:"error",message:s})}finally{e.skillsBusyKey=null}}}async function Xd(e,t,n,s){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{const i=await e.client.request("skills.install",{name:n,installId:s,timeoutMs:12e4});await rn(e),Lt(e,t,{kind:"success",message:i?.message??"Installed"})}catch(i){const a=ts(i);e.skillsError=a,Lt(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}const eu=[{label:"Chat",tabs:["chat"]},{label:"Control",tabs:["overview","channels","instances","sessions","usage","cron"]},{label:"Agent",tabs:["agents","skills","nodes","dashboard"]},{label:"Settings",tabs:["config","debug","logs"]}],Nr={agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",nodes:"/nodes",dashboard:"/dashboard",chat:"/chat",config:"/config",debug:"/debug",logs:"/logs"},Or=new Map(Object.entries(Nr).map(([e,t])=>[t,e]));function ln(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function tn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function Bi(e,t=""){const n=ln(t),s=Nr[e];return n?`${n}${s}`:s}function Br(e,t=""){const n=ln(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let i=tn(s).toLowerCase();return i.endsWith("/index.html")&&(i="/"),i==="/"?"chat":Or.get(i)??null}function tu(e){let t=tn(e);if(t.endsWith("/index.html")&&(t=tn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const i=`/${n.slice(s).join("/")}`.toLowerCase();if(Or.has(i)){const a=n.slice(0,s);return a.length?`/${a.join("/")}`:""}}return`/${n.join("/")}`}function nu(e){switch(e){case"agents":return"folder";case"chat":return"messageSquare";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"nodes":return"monitor";case"dashboard":return"layoutDashboard";case"config":return"settings";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Xs(e){switch(e){case"agents":return"Agents";case"overview":return"Overview";case"channels":return"Channels";case"instances":return"Instances";case"sessions":return"Sessions";case"usage":return"Usage";case"cron":return"Cron Jobs";case"skills":return"Skills";case"nodes":return"Nodes";case"dashboard":return"Dashboard";case"chat":return"Chat";case"config":return"Config";case"debug":return"Debug";case"logs":return"Logs";default:return"Control"}}function su(e){switch(e){case"agents":return"Manage agent workspaces, tools, and identities.";case"overview":return"Gateway status, entry points, and a fast health read.";case"channels":return"Manage channels and settings.";case"instances":return"Presence beacons from connected clients and nodes.";case"sessions":return"Inspect active sessions and adjust per-session defaults.";case"usage":return"";case"cron":return"Schedule wakeups and recurring agent runs.";case"skills":return"Manage skill availability and API key injection.";case"nodes":return"Paired devices, capabilities, and command exposure.";case"dashboard":return"Monitor all agents, tasks, and activity in real-time.";case"chat":return"Direct gateway chat session for quick interventions.";case"config":return"Edit ~/.openclaw/openclaw.json safely.";case"debug":return"Gateway snapshots, events, and manual RPC calls.";case"logs":return"Live tail of the gateway file logs.";default:return""}}const Ur="openclaw.control.settings.v1";function iu(){const t={gatewayUrl:`${location.protocol==="https:"?"wss":"ws"}://${location.host}`,token:"",sessionKey:"main",lastActiveSessionKey:"main",theme:"system",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Ur);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?s.gatewayUrl.trim():t.gatewayUrl,token:typeof s.token=="string"?s.token:t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function au(e){localStorage.setItem(Ur,JSON.stringify(e))}const yn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,ou=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,xn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},ru=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const i=globalThis.document??null;if(!i){t();return}const a=i.documentElement,o=i,l=ou();if(!!o.startViewTransition&&!l){let u=.5,f=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")u=yn(n.pointerClientX/window.innerWidth),f=yn(n.pointerClientY/window.innerHeight);else if(n?.element){const g=n.element.getBoundingClientRect();g.width>0&&g.height>0&&typeof window<"u"&&(u=yn((g.left+g.width/2)/window.innerWidth),f=yn((g.top+g.height/2)/window.innerHeight))}a.style.setProperty("--theme-switch-x",`${u*100}%`),a.style.setProperty("--theme-switch-y",`${f*100}%`),a.classList.add("theme-transition");try{const g=o.startViewTransition?.(()=>{t()});g?.finished?g.finished.finally(()=>xn(a)):xn(a)}catch{xn(a),t()}return}t(),xn(a)};function lu(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ui(e){return e==="system"?lu():e}function vt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,au(n),t.theme!==e.theme&&(e.theme=t.theme,ns(e,Ui(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function zr(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&vt(e,{...e.settings,lastActiveSessionKey:n})}function cu(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),i=t.get("session"),a=t.get("gatewayUrl");let o=!1;if(n!=null&&(t.delete("token"),o=!0),s!=null){const d=s.trim();d&&(e.password=d),t.delete("password"),o=!0}if(i!=null){const d=i.trim();d&&(e.sessionKey=d,vt(e,{...e.settings,sessionKey:d,lastActiveSessionKey:d}))}if(a!=null){const d=a.trim();d&&d!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=d),t.delete("gatewayUrl"),o=!0}if(!o)return;const l=new URL(window.location.href);l.search=t.toString(),window.history.replaceState({},"",l.toString())}function du(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ci(e):Ti(e),t==="debug"?_i(e):Ei(e),zi(e),Kr(e,t,!1)}function uu(e,t,n){ru({nextTheme:t,applyTheme:()=>{e.theme=t,vt(e,{...e.settings,theme:t}),ns(e,Ui(t))},context:n,currentTheme:e.theme})}async function zi(e){if(e.tab==="overview"&&await jr(e),e.tab==="channels"&&await yu(e),e.tab==="instances"&&await Oi(e),e.tab==="sessions"&&await Ye(e),e.tab==="cron"&&await Un(e),e.tab==="skills"&&await rn(e),e.tab==="agents"){await Li(e),await Ee(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&hr(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(fr(e,n),e.agentsPanel==="skills"&&In(e,n),e.agentsPanel==="channels"&&ye(e,!1),e.agentsPanel==="cron"&&Un(e))}e.tab==="nodes"&&(await Zn(e),await Ze(e),await Ee(e),await Ni(e)),e.tab==="chat"&&(await Jr(e),an(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await cr(e),await Ee(e)),e.tab==="debug"&&(await Jn(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ai(e,{reset:!0}),pr(e,!0))}function gu(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?ln(e):tu(window.location.pathname)}function pu(e){e.theme=e.settings.theme??"system",ns(e,Ui(e.theme))}function ns(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function fu(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&ns(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function hu(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function vu(e,t){if(typeof window>"u")return;const n=Br(window.location.pathname,e.basePath)??"chat";Hr(e,n),Kr(e,n,t)}function mu(e){if(typeof window>"u")return;const t=Br(window.location.pathname,e.basePath);if(!t)return;const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,vt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Hr(e,t)}function Hr(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ci(e):Ti(e),t==="debug"?_i(e):Ei(e),e.connected&&zi(e)}function Kr(e,t,n){if(typeof window>"u")return;const s=tn(Bi(t,e.basePath)),i=tn(window.location.pathname),a=new URL(window.location.href);t==="chat"&&e.sessionKey?a.searchParams.set("session",e.sessionKey):a.searchParams.delete("session"),i!==s&&(a.pathname=s),n?window.history.replaceState({},"",a.toString()):window.history.pushState({},"",a.toString())}function bu(e,t,n){if(typeof window>"u")return;const s=new URL(window.location.href);s.searchParams.set("session",t),window.history.replaceState({},"",s.toString())}async function jr(e){await Promise.all([ye(e,!1),Oi(e),Ye(e),on(e),Jn(e)])}async function yu(e){await Promise.all([ye(e,!0),cr(e),Ee(e)])}async function Un(e){await Promise.all([ye(e,!1),on(e),Xn(e)])}const Ga=50,xu=80,$u=12e4;function wu(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(i=>{if(!i||typeof i!="object")return null;const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>!!i);return s.length===0?null:s.join(`
`)}function Va(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=wu(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=mr(n,$u);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function ku(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Su(e){if(e.toolStreamOrder.length<=Ga)return;const t=e.toolStreamOrder.length-Ga,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function Au(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function ei(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Au(e)}function Cu(e,t=!1){if(t){ei(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>ei(e),xu))}function ss(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],ei(e)}const Tu=5e3;function _u(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},Tu))}function Eu(e,t){if(!t)return;if(t.stream==="compaction"){_u(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},i=typeof s.toolCallId=="string"?s.toolCallId:"";if(!i)return;const a=typeof s.name=="string"?s.name:"tool",o=typeof s.phase=="string"?s.phase:"",l=o==="start"?s.args:void 0,d=o==="update"?Va(s.partialResult):o==="result"?Va(s.result):void 0,u=Date.now();let f=e.toolStreamById.get(i);f?(f.name=a,l!==void 0&&(f.args=l),d!==void 0&&(f.output=d||void 0),f.updatedAt=u):(f={toolCallId:i,runId:t.runId,sessionKey:n,name:a,args:l,output:d||void 0,startedAt:typeof t.ts=="number"?t.ts:u,updatedAt:u,message:{}},e.toolStreamById.set(i,f),e.toolStreamOrder.push(i)),f.message=ku(f),Su(e),Cu(e,o==="result")}const Lu=/^\[([^\]]+)\]\s*/,Mu=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],Cs=new WeakMap,Ts=new WeakMap;function Iu(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:Mu.some(t=>e.startsWith(`${t} `))}function _s(e){const t=e.match(Lu);if(!t)return e;const n=t[1]??"";return Iu(n)?e.slice(t[0].length):e}function ti(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?$s(s):_s(s);if(Array.isArray(s)){const i=s.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(i.length>0){const a=i.join(`
`);return n==="assistant"?$s(a):_s(a)}}return typeof t.text=="string"?n==="assistant"?$s(t.text):_s(t.text):null}function Wr(e){if(!e||typeof e!="object")return ti(e);const t=e;if(Cs.has(t))return Cs.get(t)??null;const n=ti(e);return Cs.set(t,n),n}function Qa(e){const n=e.content,s=[];if(Array.isArray(n))for(const l of n){const d=l;if(d.type==="thinking"&&typeof d.thinking=="string"){const u=d.thinking.trim();u&&s.push(u)}}if(s.length>0)return s.join(`
`);const i=Du(e);if(!i)return null;const o=[...i.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(l=>(l[1]??"").trim()).filter(Boolean);return o.length>0?o.join(`
`):null}function Ru(e){if(!e||typeof e!="object")return Qa(e);const t=e;if(Ts.has(t))return Ts.get(t)??null;const n=Qa(e);return Ts.set(t,n),n}function Du(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(i=>{const a=i;return a.type==="text"&&typeof a.text=="string"?a.text:null}).filter(i=>typeof i=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function Pu(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let Ya=!1;function Ja(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Fu(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Nu(){Ya||(Ya=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Hi(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),Ja(t)}return Nu(),Ja(Fu())}async function nn(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function Ou(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function Bu(e,t,n){if(!e.client||!e.connected)return null;const s=t.trim(),i=n&&n.length>0;if(!s&&!i)return null;const a=Date.now(),o=[];if(s&&o.push({type:"text",text:s}),i)for(const u of n)o.push({type:"image",source:{type:"base64",media_type:u.mimeType,data:u.dataUrl}});e.chatMessages=[...e.chatMessages,{role:"user",content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;const l=Hi();e.chatRunId=l,e.chatStream="",e.chatStreamStartedAt=a;const d=i?n.map(u=>{const f=Ou(u.dataUrl);return f?{type:"image",mimeType:f.mimeType,content:f.content}:null}).filter(u=>u!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:s,deliver:!1,idempotencyKey:l,attachments:d}),l}catch(u){const f=String(u);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=f,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+f}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function Uu(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function zu(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=ti(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const qr=120;function Gr(e){return e.chatSending||!!e.chatRunId}function Hu(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function Ku(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Vr(e){e.connected&&(e.chatMessage="",await Uu(e))}function ju(e,t,n,s){const i=t.trim(),a=!!(n&&n.length>0);!i&&!a||(e.chatQueue=[...e.chatQueue,{id:Hi(),text:i,createdAt:Date.now(),attachments:a?n?.map(o=>({...o})):void 0,refreshSessions:s}])}async function Qr(e,t,n){ss(e);const s=await Bu(e,t,n?.attachments),i=!!s;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&zr(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),an(e),i&&!e.chatRunId&&Yr(e),i&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),i}async function Yr(e){if(!e.connected||Gr(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Qr(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function Wu(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function qu(e,t,n){if(!e.connected)return;const s=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],l=o.length>0;if(!i&&!l)return;if(Hu(i)){await Vr(e);return}const d=Ku(i);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),Gr(e)){ju(e,i,o,d);return}await Qr(e,i,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:l?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:d})}async function Jr(e){await Promise.all([nn(e),Ye(e,{activeMinutes:qr}),ni(e)]),an(e)}const Gu=Yr;function Vu(e){const t=gr(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function Qu(e,t){const n=ln(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function ni(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=Vu(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=Qu(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const i=await s.json(),a=typeof i.avatarUrl=="string"?i.avatarUrl.trim():"";e.chatAvatarUrl=a||null}catch{e.chatAvatarUrl=null}}const Yu={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Ju={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"next-heartbeat",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},Zu=50,Xu=200,eg="Assistant";function Za(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function si(e){const t=Za(e?.name,Zu)??eg,n=Za(e?.avatar??void 0,Xu)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function tg(){return si(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function Zr(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const i=await e.client.request("agent.identity.get",s);if(!i)return;const a=si(i);e.assistantName=a.name,e.assistantAvatar=a.avatar,e.assistantAgentId=a.agentId??null}catch{}}function ii(e){return typeof e=="object"&&e!==null}function ng(e){if(!ii(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!ii(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const i=typeof e.createdAtMs=="number"?e.createdAtMs:0,a=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!i||!a?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function sg(e){if(!ii(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function Xr(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function ig(e,t){const n=Xr(e).filter(s=>s.id!==t.id);return n.push(t),n}function Xa(e,t){return Xr(e).filter(n=>n.id!==t)}function ag(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",i=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&i.push(e.nonce??""),i.join("|")}const el={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},eo=el,ai={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(el));new Set(Object.values(ai));const og=4008;class rg{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>this.handleMessage(String(t.data??""))),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let i=null,a=!1,o=this.opts.token;if(t){i=await Fi();const f=gd({deviceId:i.deviceId,role:s})?.token;o=f??this.opts.token,a=!!(f&&this.opts.token)}const l=o||this.opts.password?{token:o,password:this.opts.password}:void 0;let d;if(t&&i){const f=Date.now(),g=this.connectNonce??void 0,h=ag({deviceId:i.deviceId,clientId:this.opts.clientName??eo.CONTROL_UI,clientMode:this.opts.mode??ai.WEBCHAT,role:s,scopes:n,signedAtMs:f,token:o??null,nonce:g}),c=await Nd(i.privateKey,h);d={id:i.deviceId,publicKey:i.publicKey,signature:c,signedAt:f,nonce:g}}const u={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??eo.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??ai.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:d,caps:[],auth:l,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",u).then(f=>{f?.auth?.deviceToken&&i&&$r({deviceId:i.deviceId,role:f.auth.role??s,token:f.auth.deviceToken,scopes:f.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(f)}).catch(()=>{a&&i&&wr({deviceId:i.deviceId,role:s}),this.ws?.close(og,"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const i=n;if(i.event==="connect.challenge"){const o=i.payload,l=o&&typeof o.nonce=="string"?o.nonce:null;l&&(this.connectNonce=l,this.sendConnect());return}const a=typeof i.seq=="number"?i.seq:null;a!==null&&(this.lastSeq!==null&&a>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:a}),this.lastSeq=a);try{this.opts.onEvent?.(i)}catch(o){console.error("[gateway] event handler error:",o)}return}if(s.type==="res"){const i=n,a=this.pending.get(i.id);if(!a)return;this.pending.delete(i.id),i.ok?a.resolve(i.payload):a.reject(new Error(i.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Hi(),i={type:"req",id:s,method:t,params:n},a=new Promise((o,l)=>{this.pending.set(s,{resolve:d=>o(d),reject:l})});return this.ws.send(JSON.stringify(i)),a}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Es(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const i=t.mainKey?.trim()||"main",a=t.defaultAgentId?.trim();return n==="main"||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?s:n}function lg(e,t){if(!t?.mainSessionKey)return;const n=Es(e.sessionKey,t),s=Es(e.settings.sessionKey,t),i=Es(e.settings.lastActiveSessionKey,t),a=n||s||e.sessionKey,o={...e.settings,sessionKey:s||a,lastActiveSessionKey:i||a},l=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),l&&vt(e,o)}function tl(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new rg({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,ug(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,ss(e),Zr(e),Li(e),Zn(e,{quiet:!0}),Ze(e,{quiet:!0}),zi(e)},onClose:({code:t,reason:n})=>{e.connected=!1,t!==1012&&(e.lastError=`disconnected (${t}): ${n||"no reason"}`)},onEvent:t=>cg(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function cg(e,t){try{dg(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function dg(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;Eu(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&zr(e,n.sessionKey);const s=zu(e,n);if(s==="final"||s==="error"||s==="aborted"){ss(e),Gu(e);const i=n?.runId;i&&e.refreshSessionsAfterChat.has(i)&&(e.refreshSessionsAfterChat.delete(i),s==="final"&&Ye(e,{activeMinutes:qr}))}s==="final"&&nn(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Un(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&Ze(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=ng(t.payload);if(n){e.execApprovalQueue=ig(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=Xa(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=sg(t.payload);n&&(e.execApprovalQueue=Xa(e.execApprovalQueue,n.id))}}function ug(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&lg(e,n.sessionDefaults)}function gg(e){e.basePath=gu(),cu(e),vu(e,!0),pu(e),fu(e),window.addEventListener("popstate",e.popStateHandler),tl(e),ed(e),e.tab==="logs"&&Ci(e),e.tab==="debug"&&_i(e)}function pg(e){Gc(e)}function fg(e){window.removeEventListener("popstate",e.popStateHandler),td(e),Ti(e),Ei(e),hu(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function hg(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;an(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&pr(e,t.has("tab")||t.has("logsAutoFollow"))}const Ki={CHILD:2},ji=e=>(...t)=>({_$litDirective$:e,values:t});let Wi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const{I:vg}=vc,to=e=>e,mg=e=>e.strings===void 0,no=()=>document.createComment(""),Pt=(e,t,n)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=s.insertBefore(no(),i),o=s.insertBefore(no(),i);n=new vg(a,o,e,e.options)}else{const a=n._$AB.nextSibling,o=n._$AM,l=o!==e;if(l){let d;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(d=e._$AU)!==o._$AU&&n._$AP(d)}if(a!==i||l){let d=n._$AA;for(;d!==a;){const u=to(d).nextSibling;to(s).insertBefore(d,i),d=u}}}return n},st=(e,t,n=e)=>(e._$AI(t,n),e),bg={},yg=(e,t=bg)=>e._$AH=t,xg=e=>e._$AH,Ls=e=>{e._$AR(),e._$AA.remove()};const so=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},nl=ji(class extends Wi{constructor(e){if(super(e),e.type!==Ki.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const i=[],a=[];let o=0;for(const l of e)i[o]=s?s(l,o):o,a[o]=n(l,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const i=xg(e),{values:a,keys:o}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=o,a;const l=this.ut??=[],d=[];let u,f,g=0,h=i.length-1,c=0,p=a.length-1;for(;g<=h&&c<=p;)if(i[g]===null)g++;else if(i[h]===null)h--;else if(l[g]===o[c])d[c]=st(i[g],a[c]),g++,c++;else if(l[h]===o[p])d[p]=st(i[h],a[p]),h--,p--;else if(l[g]===o[p])d[p]=st(i[g],a[p]),Pt(e,d[p+1],i[g]),g++,p--;else if(l[h]===o[c])d[c]=st(i[h],a[c]),Pt(e,i[g],i[h]),h--,c++;else if(u===void 0&&(u=so(o,c,p),f=so(l,g,h)),u.has(l[g]))if(u.has(l[h])){const m=f.get(o[c]),$=m!==void 0?i[m]:null;if($===null){const S=Pt(e,i[g]);st(S,a[c]),d[c]=S}else d[c]=st($,a[c]),Pt(e,i[g],$),i[m]=null;c++}else Ls(i[h]),h--;else Ls(i[g]),g++;for(;c<=p;){const m=Pt(e,d[p+1]);st(m,a[c]),d[c++]=m}for(;g<=h;){const m=i[g++];m!==null&&Ls(m)}return this.ut=o,yg(e,d),Qe}}),le={messageSquare:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:r`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,layoutDashboard:r`
    <svg viewBox="0 0 24 24">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  `};function $g(e,t){const n=Bi(t,e.basePath);return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${s=>{s.defaultPrevented||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||(s.preventDefault(),e.setTab(t))}}
      title=${Xs(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${le[nu(t)]}</span>
      <span class="nav-item__text">${Xs(t)}</span>
    </a>
  `}function wg(e){const t=kg(e.hello,e.sessionsResult),n=Sg(e.sessionKey,e.sessionsResult,t),s=e.onboarding,i=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatFocusMode,l=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,d=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected}
          @change=${u=>{const f=u.target.value;e.sessionKey=f,e.chatMessage="",e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:f,lastActiveSessionKey:f}),e.loadAssistantIdentity(),bu(e,f),nn(e)}}
        >
          ${nl(n,u=>u.key,u=>r`<option value=${u.key}>
                ${u.displayName??u.key}
              </option>`)}
        </select>
      </label>
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),Jr(e)}}
        title="Refresh chat data"
      >
        ${l}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${a?"active":""}"
        ?disabled=${s}
        @click=${()=>{s||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${a}
        title=${s?"Disabled during onboarding":"Toggle assistant thinking/working output"}
      >
        ${le.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${o?"active":""}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${o}
        title=${i?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${d}
      </button>
    </div>
  `}function kg(e,t){const n=e?.snapshot,s=n?.sessionDefaults?.mainSessionKey?.trim();if(s)return s;const i=n?.sessionDefaults?.mainKey?.trim();return i||(t?.sessions?.some(a=>a.key==="main")?"main":null)}function Ms(e,t){const n=t?.label?.trim();if(n)return`${n} (${e})`;const s=t?.displayName?.trim();return s||e}function Sg(e,t,n){const s=new Set,i=[],a=n&&t?.sessions?.find(l=>l.key===n),o=t?.sessions?.find(l=>l.key===e);if(n&&(s.add(n),i.push({key:n,displayName:Ms(n,a||void 0)})),s.has(e)||(s.add(e),i.push({key:e,displayName:Ms(e,o)})),t?.sessions)for(const l of t.sessions)s.has(l.key)||(s.add(l.key),i.push({key:l.key,displayName:Ms(l.key,l)}));return i}const Ag=["system","light","dark"];function Cg(e){const t=Math.max(0,Ag.indexOf(e.theme)),n=s=>i=>{const o={element:i.currentTarget};(i.clientX||i.clientY)&&(o.pointerClientX=i.clientX,o.pointerClientY=i.clientY),e.setTheme(s,o)};return r`
    <div class="theme-toggle" style="--theme-index: ${t};">
      <div class="theme-toggle__track" role="group" aria-label="Theme">
        <span class="theme-toggle__indicator"></span>
        <button
          class="theme-toggle__button ${e.theme==="system"?"active":""}"
          @click=${n("system")}
          aria-pressed=${e.theme==="system"}
          aria-label="System theme"
          title="System"
        >
          ${Eg()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="light"?"active":""}"
          @click=${n("light")}
          aria-pressed=${e.theme==="light"}
          aria-label="Light theme"
          title="Light"
        >
          ${Tg()}
        </button>
        <button
          class="theme-toggle__button ${e.theme==="dark"?"active":""}"
          @click=${n("dark")}
          aria-pressed=${e.theme==="dark"}
          aria-label="Dark theme"
          title="Dark"
        >
          ${_g()}
        </button>
      </div>
    </div>
  `}function Tg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `}function _g(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      ></path>
    </svg>
  `}function Eg(){return r`
    <svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `}function sl(e,t){if(!e)return e;const s=e.files.some(i=>i.name===t.name)?e.files.map(i=>i.name===t.name?t:i):[...e.files,t];return{...e,files:s}}async function Is(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const n=await e.client.request("agents.files.list",{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(s=>s.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(n){e.agentFilesError=String(n)}finally{e.agentFilesLoading=!1}}}async function Lg(e,t,n,s){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!Object.hasOwn(e.agentFileContents,n)){e.agentFilesLoading=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.get",{agentId:t,name:n});if(i?.file){const a=i.file.content??"",o=e.agentFileContents[n]??"",l=e.agentFileDrafts[n],d=s?.preserveDraft??!0;e.agentFilesList=sl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:a},(!d||!Object.hasOwn(e.agentFileDrafts,n)||l===o)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:a})}}catch(i){e.agentFilesError=String(i)}finally{e.agentFilesLoading=!1}}}async function Mg(e,t,n,s){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{const i=await e.client.request("agents.files.set",{agentId:t,name:n,content:s});i?.file&&(e.agentFilesList=sl(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:s},e.agentFileDrafts={...e.agentFileDrafts,[n]:s})}catch(i){e.agentFilesError=String(i)}finally{e.agentFileSaving=!1}}}async function il(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[i,a]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);i&&(e.usageResult=i),a&&(e.usageCostSummary=a)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function Ig(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Rg(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}const Dg={bash:"exec","apply-patch":"apply_patch"},Pg={"group:memory":["memory_search","memory_get"],"group:web":["web_search","web_fetch"],"group:fs":["read","write","edit","apply_patch"],"group:runtime":["exec","process"],"group:sessions":["sessions_list","sessions_history","sessions_send","sessions_spawn","session_status"],"group:ui":["browser","canvas"],"group:automation":["cron","gateway"],"group:messaging":["message"],"group:nodes":["nodes"],"group:openclaw":["browser","canvas","nodes","cron","message","gateway","agents_list","sessions_list","sessions_history","sessions_send","sessions_spawn","session_status","memory_search","memory_get","web_search","web_fetch","image"]},Fg={minimal:{allow:["session_status"]},coding:{allow:["group:fs","group:runtime","group:sessions","group:memory","image"]},messaging:{allow:["group:messaging","sessions_list","sessions_history","sessions_send","session_status"]},full:{}};function De(e){const t=e.trim().toLowerCase();return Dg[t]??t}function Ng(e){return e?e.map(De).filter(Boolean):[]}function Og(e){const t=Ng(e),n=[];for(const s of t){const i=Pg[s];if(i){n.push(...i);continue}n.push(s)}return Array.from(new Set(n))}function Bg(e){if(!e)return;const t=Fg[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}function Ug(e){const t=e.host??"unknown",n=e.ip?`(${e.ip})`:"",s=e.mode??"",i=e.version??"";return`${t} ${n} ${s} ${i}`.trim()}function zg(e){const t=e.ts??null;return t?V(t):"n/a"}function qi(e){return e?`${Xt(e)} (${V(e)})`:"n/a"}function Hg(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function Kg(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function al(e){const t=e.state??{},n=t.nextRunAtMs?Xt(t.nextRunAtMs):"n/a",s=t.lastRunAtMs?Xt(t.lastRunAtMs):"n/a";return`${t.lastStatus??"n/a"} · next ${n} · last ${s}`}function ol(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${Xt(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${vr(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function rl(e){const t=e.payload;if(t.kind==="systemEvent")return`System: ${t.text}`;const n=`Agent: ${t.message}`,s=e.delivery;if(s&&s.mode!=="none"){const i=s.channel||s.to?` (${s.channel??"last"}${s.to?` -> ${s.to}`:""})`:"";return`${n} · ${s.mode}${i}`}return n}const io=[{id:"fs",label:"Files",tools:[{id:"read",label:"read",description:"Read file contents"},{id:"write",label:"write",description:"Create or overwrite files"},{id:"edit",label:"edit",description:"Make precise edits"},{id:"apply_patch",label:"apply_patch",description:"Patch files (OpenAI)"}]},{id:"runtime",label:"Runtime",tools:[{id:"exec",label:"exec",description:"Run shell commands"},{id:"process",label:"process",description:"Manage background processes"}]},{id:"web",label:"Web",tools:[{id:"web_search",label:"web_search",description:"Search the web"},{id:"web_fetch",label:"web_fetch",description:"Fetch web content"}]},{id:"memory",label:"Memory",tools:[{id:"memory_search",label:"memory_search",description:"Semantic search"},{id:"memory_get",label:"memory_get",description:"Read memory files"}]},{id:"sessions",label:"Sessions",tools:[{id:"sessions_list",label:"sessions_list",description:"List sessions"},{id:"sessions_history",label:"sessions_history",description:"Session history"},{id:"sessions_send",label:"sessions_send",description:"Send to session"},{id:"sessions_spawn",label:"sessions_spawn",description:"Spawn sub-agent"},{id:"session_status",label:"session_status",description:"Session status"}]},{id:"ui",label:"UI",tools:[{id:"browser",label:"browser",description:"Control web browser"},{id:"canvas",label:"canvas",description:"Control canvases"}]},{id:"messaging",label:"Messaging",tools:[{id:"message",label:"message",description:"Send messages"}]},{id:"automation",label:"Automation",tools:[{id:"cron",label:"cron",description:"Schedule tasks"},{id:"gateway",label:"gateway",description:"Gateway control"}]},{id:"nodes",label:"Nodes",tools:[{id:"nodes",label:"nodes",description:"Nodes + devices"}]},{id:"agents",label:"Agents",tools:[{id:"agents_list",label:"agents_list",description:"List agents"}]},{id:"media",label:"Media",tools:[{id:"image",label:"image",description:"Image understanding"}]}],jg=[{id:"minimal",label:"Minimal"},{id:"coding",label:"Coding"},{id:"messaging",label:"Messaging"},{id:"full",label:"Full"}];function oi(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}function $n(e){const t=e.trim();if(!t||t.length>16)return!1;let n=!1;for(let s=0;s<t.length;s+=1)if(t.charCodeAt(s)>127){n=!0;break}return!(!n||t.includes("://")||t.includes("/")||t.includes("."))}function is(e,t){const n=t?.emoji?.trim();if(n&&$n(n))return n;const s=e.identity?.emoji?.trim();if(s&&$n(s))return s;const i=t?.avatar?.trim();if(i&&$n(i))return i;const a=e.identity?.avatar?.trim();return a&&$n(a)?a:""}function ll(e,t){return t&&e===t?"default":null}function Wg(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function as(e,t){const n=e;return{entry:(n?.agents?.list??[]).find(a=>a?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function cl(e,t,n,s,i){const a=as(t,e.id),l=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||"default",d=a.entry?.model?qt(a.entry?.model):qt(a.defaults?.model),u=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,f=is(e,i)||"-",g=Array.isArray(a.entry?.skills)?a.entry?.skills:null,h=g?.length??null;return{workspace:l,model:d,identityName:u,identityEmoji:f,skillsLabel:g?`${h} selected`:"all skills",isDefault:!!(s&&e.id===s)}}function qt(e){if(!e)return"-";if(typeof e=="string")return e.trim()||"-";if(typeof e=="object"&&e){const t=e,n=t.primary?.trim();if(n){const s=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return s>0?`${n} (+${s} fallback)`:n}}return"-"}function ao(e){const t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function oo(e){if(!e)return null;if(typeof e=="string")return e.trim()||null;if(typeof e=="object"&&e){const t=e;return(typeof t.primary=="string"?t.primary:typeof t.model=="string"?t.model:typeof t.id=="string"?t.id:typeof t.value=="string"?t.value:null)?.trim()||null}return null}function qg(e){if(!e||typeof e=="string")return null;if(typeof e=="object"&&e){const t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(s=>typeof s=="string"):null}return null}function Gg(e){return e.split(",").map(t=>t.trim()).filter(Boolean)}function Vg(e){const n=e?.agents?.defaults?.models;if(!n||typeof n!="object")return[];const s=[];for(const[i,a]of Object.entries(n)){const o=i.trim();if(!o)continue;const l=a&&typeof a=="object"&&"alias"in a&&typeof a.alias=="string"?a.alias?.trim():void 0,d=l&&l!==o?`${l} (${o})`:o;s.push({value:o,label:d})}return s}function Qg(e,t){const n=Vg(e),s=t?n.some(i=>i.value===t):!1;return t&&!s&&n.unshift({value:t,label:`Current (${t})`}),n.length===0?r`
      <option value="" disabled>No configured models</option>
    `:n.map(i=>r`<option value=${i.value}>${i.label}</option>`)}function Yg(e){const t=De(e);if(!t)return{kind:"exact",value:""};if(t==="*")return{kind:"all"};if(!t.includes("*"))return{kind:"exact",value:t};const n=t.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&");return{kind:"regex",value:new RegExp(`^${n.replaceAll("\\*",".*")}$`)}}function ri(e){return Array.isArray(e)?Og(e).map(Yg).filter(t=>t.kind!=="exact"||t.value.length>0):[]}function Gt(e,t){for(const n of t)if(n.kind==="all"||n.kind==="exact"&&e===n.value||n.kind==="regex"&&n.value.test(e))return!0;return!1}function Jg(e,t){if(!t)return!0;const n=De(e),s=ri(t.deny);if(Gt(n,s))return!1;const i=ri(t.allow);return!!(i.length===0||Gt(n,i)||n==="apply_patch"&&Gt("exec",i))}function ro(e,t){if(!Array.isArray(t)||t.length===0)return!1;const n=De(e),s=ri(t);return!!(Gt(n,s)||n==="apply_patch"&&Gt("exec",s))}function Zg(e){const t=e.agentsList?.agents??[],n=e.agentsList?.defaultId??null,s=e.selectedAgentId??n??t[0]?.id??null,i=s?t.find(a=>a.id===s)??null:null;return r`
    <div class="agents-layout">
      <section class="card agents-sidebar">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Agents</div>
            <div class="card-sub">${t.length} configured.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
        <div class="agent-list" style="margin-top: 12px;">
          ${t.length===0?r`
                  <div class="muted">No agents found.</div>
                `:t.map(a=>{const o=ll(a.id,n),l=is(a,e.agentIdentityById[a.id]??null);return r`
                    <button
                      type="button"
                      class="agent-row ${s===a.id?"active":""}"
                      @click=${()=>e.onSelectAgent(a.id)}
                    >
                      <div class="agent-avatar">
                        ${l||oi(a).slice(0,1)}
                      </div>
                      <div class="agent-info">
                        <div class="agent-title">${oi(a)}</div>
                        <div class="agent-sub mono">${a.id}</div>
                      </div>
                      ${o?r`<span class="agent-pill">${o}</span>`:v}
                    </button>
                  `})}
        </div>
      </section>
      <section class="agents-main">
        ${i?r`
              ${Xg(i,n,e.agentIdentityById[i.id]??null)}
              ${ep(e.activePanel,a=>e.onSelectPanel(a))}
              ${e.activePanel==="overview"?tp({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,agentIdentityError:e.agentIdentityError,agentIdentityLoading:e.agentIdentityLoading,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave,onModelChange:e.onModelChange,onModelFallbacksChange:e.onModelFallbacksChange}):v}
              ${e.activePanel==="files"?up({agentId:i.id,agentFilesList:e.agentFilesList,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,onLoadFiles:e.onLoadFiles,onSelectFile:e.onSelectFile,onFileDraftChange:e.onFileDraftChange,onFileReset:e.onFileReset,onFileSave:e.onFileSave}):v}
              ${e.activePanel==="tools"?pp({agentId:i.id,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,onProfileChange:e.onToolsProfileChange,onOverridesChange:e.onToolsOverridesChange,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
              ${e.activePanel==="skills"?hp({agentId:i.id,report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,activeAgentId:e.agentSkillsAgentId,configForm:e.configForm,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configDirty,filter:e.skillsFilter,onFilterChange:e.onSkillsFilterChange,onRefresh:e.onSkillsRefresh,onToggle:e.onAgentSkillToggle,onClear:e.onAgentSkillsClear,onDisableAll:e.onAgentSkillsDisableAll,onConfigReload:e.onConfigReload,onConfigSave:e.onConfigSave}):v}
              ${e.activePanel==="channels"?cp({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess,onRefresh:e.onChannelsRefresh}):v}
              ${e.activePanel==="cron"?dp({agent:i,defaultId:n,configForm:e.configForm,agentFilesList:e.agentFilesList,agentIdentity:e.agentIdentityById[i.id]??null,jobs:e.cronJobs,status:e.cronStatus,loading:e.cronLoading,error:e.cronError,onRefresh:e.onCronRefresh}):v}
            `:r`
                <div class="card">
                  <div class="card-title">Select an agent</div>
                  <div class="card-sub">Pick an agent to inspect its workspace and tools.</div>
                </div>
              `}
      </section>
    </div>
  `}function Xg(e,t,n){const s=ll(e.id,t),i=oi(e),a=e.identity?.theme?.trim()||"Agent workspace and routing.",o=is(e,n);return r`
    <section class="card agent-header">
      <div class="agent-header-main">
        <div class="agent-avatar agent-avatar--lg">
          ${o||i.slice(0,1)}
        </div>
        <div>
          <div class="card-title">${i}</div>
          <div class="card-sub">${a}</div>
        </div>
      </div>
      <div class="agent-header-meta">
        <div class="mono">${e.id}</div>
        ${s?r`<span class="agent-pill">${s}</span>`:v}
      </div>
    </section>
  `}function ep(e,t){return r`
    <div class="agent-tabs">
      ${[{id:"overview",label:"Overview"},{id:"files",label:"Files"},{id:"tools",label:"Tools"},{id:"skills",label:"Skills"},{id:"channels",label:"Channels"},{id:"cron",label:"Cron Jobs"}].map(s=>r`
          <button
            class="agent-tab ${e===s.id?"active":""}"
            type="button"
            @click=${()=>t(s.id)}
          >
            ${s.label}
          </button>
        `)}
    </div>
  `}function tp(e){const{agent:t,configForm:n,agentFilesList:s,agentIdentity:i,agentIdentityLoading:a,agentIdentityError:o,configLoading:l,configSaving:d,configDirty:u,onConfigReload:f,onConfigSave:g,onModelChange:h,onModelFallbacksChange:c}=e,p=as(n,t.id),$=(s&&s.agentId===t.id?s.workspace:null)||p.entry?.workspace||p.defaults?.workspace||"default",S=p.entry?.model?qt(p.entry?.model):qt(p.defaults?.model),y=qt(p.defaults?.model),C=oo(p.entry?.model)||(S!=="-"?ao(S):null),A=oo(p.defaults?.model)||(y!=="-"?ao(y):null),T=C??A??null,_=qg(p.entry?.model),I=_?_.join(", "):"",z=i?.name?.trim()||t.identity?.name?.trim()||t.name?.trim()||p.entry?.name||"-",se=is(t,i)||"-",F=Array.isArray(p.entry?.skills)?p.entry?.skills:null,H=F?.length??null,ce=a?"Loading…":o?"Unavailable":"",E=!!(e.defaultId&&t.id===e.defaultId);return r`
    <section class="card">
      <div class="card-title">Overview</div>
      <div class="card-sub">Workspace paths and identity metadata.</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${$}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${S}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${z}</div>
          ${ce?r`<div class="agent-kv-sub muted">${ce}</div>`:v}
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${E?"yes":"no"}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${se}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${F?`${H} selected`:"all skills"}</div>
        </div>
      </div>

      <div class="agent-model-select" style="margin-top: 20px;">
        <div class="label">Model Selection</div>
        <div class="row" style="gap: 12px; flex-wrap: wrap;">
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Primary model${E?" (default)":""}</span>
            <select
              .value=${T??""}
              ?disabled=${!n||l||d}
              @change=${B=>h(t.id,B.target.value||null)}
            >
              ${E?v:r`
                      <option value="">
                        ${A?`Inherit default (${A})`:"Inherit default"}
                      </option>
                    `}
              ${Qg(n,T??void 0)}
            </select>
          </label>
          <label class="field" style="min-width: 260px; flex: 1;">
            <span>Fallbacks (comma-separated)</span>
            <input
              .value=${I}
              ?disabled=${!n||l||d}
              placeholder="provider/model, provider/model"
              @input=${B=>c(t.id,Gg(B.target.value))}
            />
          </label>
        </div>
        <div class="row" style="justify-content: flex-end; gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${l}
            @click=${f}
          >
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${d||!u}
            @click=${g}
          >
            ${d?"Saving…":"Save"}
          </button>
        </div>
      </div>
    </section>
  `}function dl(e,t){return r`
    <section class="card">
      <div class="card-title">Agent Context</div>
      <div class="card-sub">${t}</div>
      <div class="agents-overview-grid" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Workspace</div>
          <div class="mono">${e.workspace}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Primary Model</div>
          <div class="mono">${e.model}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Name</div>
          <div>${e.identityName}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Identity Emoji</div>
          <div>${e.identityEmoji}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Skills Filter</div>
          <div>${e.skillsLabel}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Default</div>
          <div>${e.isDefault?"yes":"no"}</div>
        </div>
      </div>
    </section>
  `}function np(e,t){const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function sp(e){if(!e)return[];const t=new Set;for(const i of e.channelOrder??[])t.add(i);for(const i of e.channelMeta??[])t.add(i.id);for(const i of Object.keys(e.channelAccounts??{}))t.add(i);const n=[],s=e.channelOrder?.length?e.channelOrder:Array.from(t);for(const i of s)t.has(i)&&(n.push(i),t.delete(i));for(const i of t)n.push(i);return n.map(i=>({id:i,label:np(e,i),accounts:e.channelAccounts?.[i]??[]}))}const ip=["groupPolicy","streamMode","dmPolicy"];function ap(e,t){if(!e)return null;const s=(e.channels??{})[t];if(s&&typeof s=="object")return s;const i=e[t];return i&&typeof i=="object"?i:null}function op(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function rp(e,t){const n=ap(e,t);return n?ip.flatMap(s=>s in n?[{label:s,value:op(n[s])}]:[]):[]}function lp(e){let t=0,n=0,s=0;for(const i of e){const a=i.probe&&typeof i.probe=="object"&&"ok"in i.probe?!!i.probe.ok:!1;(i.connected===!0||i.running===!0||a)&&(t+=1),i.configured&&(n+=1),i.enabled&&(s+=1)}return{total:e.length,connected:t,configured:n,enabled:s}}function cp(e){const t=cl(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=sp(e.snapshot),s=e.lastSuccess?V(e.lastSuccess):"never";return r`
    <section class="grid grid-cols-2">
      ${dl(t,"Workspace, identity, and model configuration.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Channels</div>
            <div class="card-sub">Gateway-wide channel status snapshot.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="muted" style="margin-top: 8px;">
          Last refresh: ${s}
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
        ${e.snapshot?v:r`
                <div class="callout info" style="margin-top: 12px">Load channels to see live status.</div>
              `}
        ${n.length===0?r`
                <div class="muted" style="margin-top: 16px">No channels found.</div>
              `:r`
              <div class="list" style="margin-top: 16px;">
                ${n.map(i=>{const a=lp(i.accounts),o=a.total?`${a.connected}/${a.total} connected`:"no accounts",l=a.configured?`${a.configured} configured`:"not configured",d=a.total?`${a.enabled} enabled`:"disabled",u=rp(e.configForm,i.id);return r`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${i.label}</div>
                        <div class="list-sub mono">${i.id}</div>
                      </div>
                      <div class="list-meta">
                        <div>${o}</div>
                        <div>${l}</div>
                        <div>${d}</div>
                        ${u.length>0?u.map(f=>r`<div>${f.label}: ${f.value}</div>`):v}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </section>
    </section>
  `}function dp(e){const t=cl(e.agent,e.configForm,e.agentFilesList,e.defaultId,e.agentIdentity),n=e.jobs.filter(s=>s.agentId===e.agent.id);return r`
    <section class="grid grid-cols-2">
      ${dl(t,"Workspace and scheduling targets.")}
      <section class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Scheduler</div>
            <div class="card-sub">Gateway cron status.</div>
          </div>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${qi(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}
      </section>
    </section>
    <section class="card">
      <div class="card-title">Agent Cron Jobs</div>
      <div class="card-sub">Scheduled jobs targeting this agent.</div>
      ${n.length===0?r`
              <div class="muted" style="margin-top: 16px">No jobs assigned.</div>
            `:r`
              <div class="list" style="margin-top: 16px;">
                ${n.map(s=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${s.name}</div>
                      ${s.description?r`<div class="list-sub">${s.description}</div>`:v}
                      <div class="chip-row" style="margin-top: 6px;">
                        <span class="chip">${ol(s)}</span>
                        <span class="chip ${s.enabled?"chip-ok":"chip-warn"}">
                          ${s.enabled?"enabled":"disabled"}
                        </span>
                        <span class="chip">${s.sessionTarget}</span>
                      </div>
                    </div>
                    <div class="list-meta">
                      <div class="mono">${al(s)}</div>
                      <div class="muted">${rl(s)}</div>
                    </div>
                  </div>
                `)}
              </div>
            `}
    </section>
  `}function up(e){const t=e.agentFilesList?.agentId===e.agentId?e.agentFilesList:null,n=t?.files??[],s=e.agentFileActive??null,i=s?n.find(d=>d.name===s)??null:null,a=s?e.agentFileContents[s]??"":"",o=s?e.agentFileDrafts[s]??a:"",l=s?o!==a:!1;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Core Files</div>
          <div class="card-sub">Bootstrap persona, identity, and tool guidance.</div>
        </div>
        <button
          class="btn btn--sm"
          ?disabled=${e.agentFilesLoading}
          @click=${()=>e.onLoadFiles(e.agentId)}
        >
          ${e.agentFilesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${t?r`<div class="muted mono" style="margin-top: 8px;">Workspace: ${t.workspace}</div>`:v}
      ${e.agentFilesError?r`<div class="callout danger" style="margin-top: 12px;">${e.agentFilesError}</div>`:v}
      ${t?r`
              <div class="agent-files-grid" style="margin-top: 16px;">
                <div class="agent-files-list">
                  ${n.length===0?r`
                          <div class="muted">No files found.</div>
                        `:n.map(d=>gp(d,s,()=>e.onSelectFile(d.name)))}
                </div>
                <div class="agent-files-editor">
                  ${i?r`
                          <div class="agent-file-header">
                            <div>
                              <div class="agent-file-title mono">${i.name}</div>
                              <div class="agent-file-sub mono">${i.path}</div>
                            </div>
                            <div class="agent-file-actions">
                              <button
                                class="btn btn--sm"
                                ?disabled=${!l}
                                @click=${()=>e.onFileReset(i.name)}
                              >
                                Reset
                              </button>
                              <button
                                class="btn btn--sm primary"
                                ?disabled=${e.agentFileSaving||!l}
                                @click=${()=>e.onFileSave(i.name)}
                              >
                                ${e.agentFileSaving?"Saving…":"Save"}
                              </button>
                            </div>
                          </div>
                          ${i.missing?r`
                                  <div class="callout info" style="margin-top: 10px">
                                    This file is missing. Saving will create it in the agent workspace.
                                  </div>
                                `:v}
                          <label class="field" style="margin-top: 12px;">
                            <span>Content</span>
                            <textarea
                              .value=${o}
                              @input=${d=>e.onFileDraftChange(i.name,d.target.value)}
                            ></textarea>
                          </label>
                        `:r`
                          <div class="muted">Select a file to edit.</div>
                        `}
                </div>
              </div>
            `:r`
              <div class="callout info" style="margin-top: 12px">
                Load the agent workspace files to edit core instructions.
              </div>
            `}
    </section>
  `}function gp(e,t,n){const s=e.missing?"Missing":`${Wg(e.size)} · ${V(e.updatedAtMs??null)}`;return r`
    <button
      type="button"
      class="agent-file-row ${t===e.name?"active":""}"
      @click=${n}
    >
      <div>
        <div class="agent-file-name mono">${e.name}</div>
        <div class="agent-file-meta">${s}</div>
      </div>
      ${e.missing?r`
              <span class="agent-pill warn">missing</span>
            `:v}
    </button>
  `}function pp(e){const t=as(e.configForm,e.agentId),n=t.entry?.tools??{},s=t.globalTools??{},i=n.profile??s.profile??"full",a=n.profile?"agent override":s.profile?"global default":"default",o=Array.isArray(n.allow)&&n.allow.length>0,l=Array.isArray(s.allow)&&s.allow.length>0,d=!!e.configForm&&!e.configLoading&&!e.configSaving&&!o,u=o?[]:Array.isArray(n.alsoAllow)?n.alsoAllow:[],f=o?[]:Array.isArray(n.deny)?n.deny:[],g=o?{allow:n.allow??[],deny:n.deny??[]}:Bg(i)??void 0,h=io.flatMap(S=>S.tools.map(y=>y.id)),c=S=>{const y=Jg(S,g),C=ro(S,u),A=ro(S,f);return{allowed:(y||C)&&!A,baseAllowed:y,denied:A}},p=h.filter(S=>c(S).allowed).length,m=(S,y)=>{const C=new Set(u.map(I=>De(I)).filter(I=>I.length>0)),A=new Set(f.map(I=>De(I)).filter(I=>I.length>0)),T=c(S).baseAllowed,_=De(S);y?(A.delete(_),T||C.add(_)):(C.delete(_),A.add(_)),e.onOverridesChange(e.agentId,[...C],[...A])},$=S=>{const y=new Set(u.map(A=>De(A)).filter(A=>A.length>0)),C=new Set(f.map(A=>De(A)).filter(A=>A.length>0));for(const A of h){const T=c(A).baseAllowed,_=De(A);S?(C.delete(_),T||y.add(_)):(y.delete(_),C.add(_))}e.onOverridesChange(e.agentId,[...y],[...C])};return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Tool Access</div>
          <div class="card-sub">
            Profile + per-tool overrides for this agent.
            <span class="mono">${p}/${h.length}</span> enabled.
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button
            class="btn btn--sm"
            ?disabled=${!d}
            @click=${()=>$(!0)}
          >
            Enable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${!d}
            @click=${()=>$(!1)}
          >
            Disable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            Reload Config
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?v:r`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to adjust tool profiles.
              </div>
            `}
      ${o?r`
              <div class="callout info" style="margin-top: 12px">
                This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.
              </div>
            `:v}
      ${l?r`
              <div class="callout info" style="margin-top: 12px">
                Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.
              </div>
            `:v}

      <div class="agent-tools-meta" style="margin-top: 16px;">
        <div class="agent-kv">
          <div class="label">Profile</div>
          <div class="mono">${i}</div>
        </div>
        <div class="agent-kv">
          <div class="label">Source</div>
          <div>${a}</div>
        </div>
        ${e.configDirty?r`
                <div class="agent-kv">
                  <div class="label">Status</div>
                  <div class="mono">unsaved</div>
                </div>
              `:v}
      </div>

      <div class="agent-tools-presets" style="margin-top: 16px;">
        <div class="label">Quick Presets</div>
        <div class="agent-tools-buttons">
          ${jg.map(S=>r`
              <button
                class="btn btn--sm ${i===S.id?"active":""}"
                ?disabled=${!d}
                @click=${()=>e.onProfileChange(e.agentId,S.id,!0)}
              >
                ${S.label}
              </button>
            `)}
          <button
            class="btn btn--sm"
            ?disabled=${!d}
            @click=${()=>e.onProfileChange(e.agentId,null,!1)}
          >
            Inherit
          </button>
        </div>
      </div>

      <div class="agent-tools-grid" style="margin-top: 20px;">
        ${io.map(S=>r`
            <div class="agent-tools-section">
              <div class="agent-tools-header">${S.label}</div>
              <div class="agent-tools-list">
                ${S.tools.map(y=>{const{allowed:C}=c(y.id);return r`
                    <div class="agent-tool-row">
                      <div>
                        <div class="agent-tool-title mono">${y.label}</div>
                        <div class="agent-tool-sub">${y.description}</div>
                      </div>
                      <label class="cfg-toggle">
                        <input
                          type="checkbox"
                          .checked=${C}
                          ?disabled=${!d}
                          @change=${A=>m(y.id,A.target.checked)}
                        />
                        <span class="cfg-toggle__track"></span>
                      </label>
                    </div>
                  `})}
              </div>
            </div>
          `)}
      </div>
    </section>
  `}const wn=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function fp(e){const t=new Map;for(const a of wn)t.set(a.id,{id:a.id,label:a.label,skills:[]});const n=wn.find(a=>a.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const a of e){const o=a.bundled?n:wn.find(l=>l.sources.includes(a.source));o?t.get(o.id)?.skills.push(a):s.skills.push(a)}const i=wn.map(a=>t.get(a.id)).filter(a=>!!(a&&a.skills.length>0));return s.skills.length>0&&i.push(s),i}function hp(e){const t=!!e.configForm&&!e.configLoading&&!e.configSaving,n=as(e.configForm,e.agentId),s=Array.isArray(n.entry?.skills)?n.entry?.skills:void 0,i=new Set((s??[]).map(c=>c.trim()).filter(Boolean)),a=s!==void 0,o=!!(e.report&&e.activeAgentId===e.agentId),l=o?e.report?.skills??[]:[],d=e.filter.trim().toLowerCase(),u=d?l.filter(c=>[c.name,c.description,c.source].join(" ").toLowerCase().includes(d)):l,f=fp(u),g=a?l.filter(c=>i.has(c.name)).length:l.length,h=l.length;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">
            Per-agent skill allowlist and workspace skills.
            ${h>0?r`<span class="mono">${g}/${h}</span>`:v}
          </div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onClear(e.agentId)}>
            Use All
          </button>
          <button class="btn btn--sm" ?disabled=${!t} @click=${()=>e.onDisableAll(e.agentId)}>
            Disable All
          </button>
          <button
            class="btn btn--sm"
            ?disabled=${e.configLoading}
            @click=${e.onConfigReload}
          >
            Reload Config
          </button>
          <button class="btn btn--sm" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn btn--sm primary"
            ?disabled=${e.configSaving||!e.configDirty}
            @click=${e.onConfigSave}
          >
            ${e.configSaving?"Saving…":"Save"}
          </button>
        </div>
      </div>

      ${e.configForm?v:r`
              <div class="callout info" style="margin-top: 12px">
                Load the gateway config to set per-agent skills.
              </div>
            `}
      ${a?r`
              <div class="callout info" style="margin-top: 12px">This agent uses a custom skill allowlist.</div>
            `:r`
              <div class="callout info" style="margin-top: 12px">
                All skills are enabled. Disabling any skill will create a per-agent allowlist.
              </div>
            `}
      ${!o&&!e.loading?r`
              <div class="callout info" style="margin-top: 12px">
                Load skills for this agent to view workspace-specific entries.
              </div>
            `:v}
      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${c=>e.onFilterChange(c.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${u.length} shown</div>
      </div>

      ${u.length===0?r`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:r`
              <div class="agent-skills-groups" style="margin-top: 16px;">
                ${f.map(c=>vp(c,{agentId:e.agentId,allowSet:i,usingAllowlist:a,editable:t,onToggle:e.onToggle}))}
              </div>
            `}
    </section>
  `}function vp(e,t){const n=e.id==="workspace"||e.id==="built-in";return r`
    <details class="agent-skills-group" ?open=${!n}>
      <summary class="agent-skills-header">
        <span>${e.label}</span>
        <span class="muted">${e.skills.length}</span>
      </summary>
      <div class="list skills-grid">
        ${e.skills.map(s=>mp(s,{agentId:t.agentId,allowSet:t.allowSet,usingAllowlist:t.usingAllowlist,editable:t.editable,onToggle:t.onToggle}))}
      </div>
    </details>
  `}function mp(e,t){const n=t.usingAllowlist?t.allowSet.has(e.name):!0,s=[...e.missing.bins.map(a=>`bin:${a}`),...e.missing.env.map(a=>`env:${a}`),...e.missing.config.map(a=>`config:${a}`),...e.missing.os.map(a=>`os:${a}`)],i=[];return e.disabled&&i.push("disabled"),e.blockedByAllowlist&&i.push("blocked by allowlist"),r`
    <div class="list-item agent-skill-row">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${e.description}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
          ${e.disabled?r`
                  <span class="chip chip-warn">disabled</span>
                `:v}
        </div>
        ${s.length>0?r`<div class="muted" style="margin-top: 6px;">Missing: ${s.join(", ")}</div>`:v}
        ${i.length>0?r`<div class="muted" style="margin-top: 6px;">Reason: ${i.join(", ")}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${n}
            ?disabled=${!t.editable}
            @change=${a=>t.onToggle(t.agentId,e.name,a.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </label>
      </div>
    </div>
  `}function Pe(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function ul(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Pe(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function os(e){return e.filter(t=>typeof t=="string").join(".")}function Se(e,t){const n=os(e),s=t[n];if(s)return s;const i=n.split(".");for(const[a,o]of Object.entries(t)){if(!a.includes("*"))continue;const l=a.split(".");if(l.length!==i.length)continue;let d=!0;for(let u=0;u<i.length;u+=1)if(l[u]!=="*"&&l[u]!==i[u]){d=!1;break}if(d)return o}}function We(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function bp(e){const t=os(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}const yp=new Set(["title","description","default","nullable"]);function xp(e){return Object.keys(e??{}).filter(n=>!yp.has(n)).length===0}function $p(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const sn={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function je(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,d=e.showLabel??!0,u=Pe(t),f=Se(s,i),g=f?.label??t.title??We(String(s.at(-1))),h=f?.help??t.description,c=os(s);if(a.has(c))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(t.anyOf||t.oneOf){const m=(t.anyOf??t.oneOf??[]).filter(T=>!(T.type==="null"||Array.isArray(T.type)&&T.type.includes("null")));if(m.length===1)return je({...e,schema:m[0]});const $=T=>{if(T.const!==void 0)return T.const;if(T.enum&&T.enum.length===1)return T.enum[0]},S=m.map($),y=S.every(T=>T!==void 0);if(y&&S.length>0&&S.length<=5){const T=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${g}</label>`:v}
          ${h?r`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${S.map(_=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${_===T||String(_)===String(T)?"active":""}"
                ?disabled=${o}
                @click=${()=>l(s,_)}
              >
                ${String(_)}
              </button>
            `)}
          </div>
        </div>
      `}if(y&&S.length>5)return co({...e,options:S,value:n??t.default});const C=new Set(m.map(T=>Pe(T)).filter(Boolean)),A=new Set([...C].map(T=>T==="integer"?"number":T));if([...A].every(T=>["string","number","boolean"].includes(T))){const T=A.has("string"),_=A.has("number");if(A.has("boolean")&&A.size===1)return je({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(T||_)return lo({...e,inputType:_&&!T?"number":"text"})}}if(t.enum){const p=t.enum;if(p.length<=5){const m=n??t.default;return r`
        <div class="cfg-field">
          ${d?r`<label class="cfg-field__label">${g}</label>`:v}
          ${h?r`<div class="cfg-field__help">${h}</div>`:v}
          <div class="cfg-segmented">
            ${p.map($=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${$===m||String($)===String(m)?"active":""}"
                ?disabled=${o}
                @click=${()=>l(s,$)}
              >
                ${String($)}
              </button>
            `)}
          </div>
        </div>
      `}return co({...e,options:p,value:n??t.default})}if(u==="object")return kp(e);if(u==="array")return Sp(e);if(u==="boolean"){const p=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${o?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${h?r`<span class="cfg-toggle-row__help">${h}</span>`:v}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${p}
            ?disabled=${o}
            @change=${m=>l(s,m.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return u==="number"||u==="integer"?wp(e):u==="string"?lo({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${u}. Use Raw mode.</div>
    </div>
  `}function lo(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o,inputType:l}=e,d=e.showLabel??!0,u=Se(s,i),f=u?.label??t.title??We(String(s.at(-1))),g=u?.help??t.description,h=u?.sensitive??bp(s),c=u?.placeholder??(h?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),p=n??"";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${f}</label>`:v}
      ${g?r`<div class="cfg-field__help">${g}</div>`:v}
      <div class="cfg-input-wrap">
        <input
          type=${h?"password":l}
          class="cfg-input"
          placeholder=${c}
          .value=${p==null?"":String(p)}
          ?disabled=${a}
          @input=${m=>{const $=m.target.value;if(l==="number"){if($.trim()===""){o(s,void 0);return}const S=Number($);o(s,Number.isNaN(S)?$:S);return}o(s,$)}}
          @change=${m=>{if(l==="number")return;const $=m.target.value;o(s,$.trim())}}
        />
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${a}
            @click=${()=>o(s,t.default)}
          >↺</button>
        `:v}
      </div>
    </div>
  `}function wp(e){const{schema:t,value:n,path:s,hints:i,disabled:a,onPatch:o}=e,l=e.showLabel??!0,d=Se(s,i),u=d?.label??t.title??We(String(s.at(-1))),f=d?.help??t.description,g=n??t.default??"",h=typeof g=="number"?g:0;return r`
    <div class="cfg-field">
      ${l?r`<label class="cfg-field__label">${u}</label>`:v}
      ${f?r`<div class="cfg-field__help">${f}</div>`:v}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${g==null?"":String(g)}
          ?disabled=${a}
          @input=${c=>{const p=c.target.value,m=p===""?void 0:Number(p);o(s,m)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${a}
          @click=${()=>o(s,h+1)}
        >+</button>
      </div>
    </div>
  `}function co(e){const{schema:t,value:n,path:s,hints:i,disabled:a,options:o,onPatch:l}=e,d=e.showLabel??!0,u=Se(s,i),f=u?.label??t.title??We(String(s.at(-1))),g=u?.help??t.description,h=n??t.default,c=o.findIndex(m=>m===h||String(m)===String(h)),p="__unset__";return r`
    <div class="cfg-field">
      ${d?r`<label class="cfg-field__label">${f}</label>`:v}
      ${g?r`<div class="cfg-field__help">${g}</div>`:v}
      <select
        class="cfg-select"
        ?disabled=${a}
        .value=${c>=0?String(c):p}
        @change=${m=>{const $=m.target.value;l(s,$===p?void 0:o[Number($)])}}
      >
        <option value=${p}>Select...</option>
        ${o.map((m,$)=>r`
          <option value=${String($)}>${String(m)}</option>
        `)}
      </select>
    </div>
  `}function kp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,d=Se(s,i),u=d?.label??t.title??We(String(s.at(-1))),f=d?.help??t.description,g=n??t.default,h=g&&typeof g=="object"&&!Array.isArray(g)?g:{},c=t.properties??{},m=Object.entries(c).toSorted((C,A)=>{const T=Se([...s,C[0]],i)?.order??0,_=Se([...s,A[0]],i)?.order??0;return T!==_?T-_:C[0].localeCompare(A[0])}),$=new Set(Object.keys(c)),S=t.additionalProperties,y=!!S&&typeof S=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${m.map(([C,A])=>je({schema:A,value:h[C],path:[...s,C],hints:i,unsupported:a,disabled:o,onPatch:l}))}
        ${y?uo({schema:S,value:h,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:$,onPatch:l}):v}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${u}</span>
        <span class="cfg-object__chevron">${sn.chevronDown}</span>
      </summary>
      ${f?r`<div class="cfg-object__help">${f}</div>`:v}
      <div class="cfg-object__content">
        ${m.map(([C,A])=>je({schema:A,value:h[C],path:[...s,C],hints:i,unsupported:a,disabled:o,onPatch:l}))}
        ${y?uo({schema:S,value:h,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:$,onPatch:l}):v}
      </div>
    </details>
  `}function Sp(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,onPatch:l}=e,d=e.showLabel??!0,u=Se(s,i),f=u?.label??t.title??We(String(s.at(-1))),g=u?.help??t.description,h=Array.isArray(t.items)?t.items[0]:t.items;if(!h)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${f}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const c=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${d?r`<span class="cfg-array__label">${f}</span>`:v}
        <span class="cfg-array__count">${c.length} item${c.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${o}
          @click=${()=>{const p=[...c,ul(h)];l(s,p)}}
        >
          <span class="cfg-array__add-icon">${sn.plus}</span>
          Add
        </button>
      </div>
      ${g?r`<div class="cfg-array__help">${g}</div>`:v}

      ${c.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${c.map((p,m)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${m+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${o}
                  @click=${()=>{const $=[...c];$.splice(m,1),l(s,$)}}
                >
                  ${sn.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${je({schema:h,value:p,path:[...s,m],hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:l})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function uo(e){const{schema:t,value:n,path:s,hints:i,unsupported:a,disabled:o,reservedKeys:l,onPatch:d}=e,u=xp(t),f=Object.entries(n??{}).filter(([g])=>!l.has(g));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${o}
          @click=${()=>{const g={...n};let h=1,c=`custom-${h}`;for(;c in g;)h+=1,c=`custom-${h}`;g[c]=u?{}:ul(t),d(s,g)}}
        >
          <span class="cfg-map__add-icon">${sn.plus}</span>
          Add Entry
        </button>
      </div>

      ${f.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${f.map(([g,h])=>{const c=[...s,g],p=$p(h);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${g}
                    ?disabled=${o}
                    @change=${m=>{const $=m.target.value.trim();if(!$||$===g)return;const S={...n};$ in S||(S[$]=S[g],delete S[g],d(s,S))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${u?r`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${p}
                          ?disabled=${o}
                          @change=${m=>{const $=m.target,S=$.value.trim();if(!S){d(c,void 0);return}try{d(c,JSON.parse(S))}catch{$.value=p}}}
                        ></textarea>
                      `:je({schema:t,value:h,path:c,hints:i,unsupported:a,disabled:o,showLabel:!1,onPatch:d})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${o}
                  @click=${()=>{const m={...n};delete m[g],d(s,m)}}
                >
                  ${sn.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const go={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Gi={env:{label:"Environment Variables",description:"Environment variables passed to the gateway process"},update:{label:"Updates",description:"Auto-update settings and release channel"},agents:{label:"Agents",description:"Agent configurations, models, and identities"},auth:{label:"Authentication",description:"API keys and authentication profiles"},channels:{label:"Channels",description:"Messaging channels (Telegram, Discord, Slack, etc.)"},messages:{label:"Messages",description:"Message handling and routing settings"},commands:{label:"Commands",description:"Custom slash commands"},hooks:{label:"Hooks",description:"Webhooks and event hooks"},skills:{label:"Skills",description:"Skill packs and capabilities"},tools:{label:"Tools",description:"Tool configurations (browser, search, etc.)"},gateway:{label:"Gateway",description:"Gateway server settings (port, auth, binding)"},wizard:{label:"Setup Wizard",description:"Setup wizard state and history"},meta:{label:"Metadata",description:"Gateway metadata and version information"},logging:{label:"Logging",description:"Log levels and output configuration"},browser:{label:"Browser",description:"Browser automation settings"},ui:{label:"UI",description:"User interface preferences"},models:{label:"Models",description:"AI model configurations and providers"},bindings:{label:"Bindings",description:"Key bindings and shortcuts"},broadcast:{label:"Broadcast",description:"Broadcast and notification settings"},audio:{label:"Audio",description:"Audio input/output settings"},session:{label:"Session",description:"Session management and persistence"},cron:{label:"Cron",description:"Scheduled tasks and automation"},web:{label:"Web",description:"Web server and API settings"},discovery:{label:"Discovery",description:"Service discovery and networking"},canvasHost:{label:"Canvas Host",description:"Canvas rendering and display"},talk:{label:"Talk",description:"Voice and speech settings"},plugins:{label:"Plugins",description:"Plugin management and extensions"}};function po(e){return go[e]??go.default}function Ap(e,t,n){if(!n)return!0;const s=n.toLowerCase(),i=Gi[e];return e.toLowerCase().includes(s)||i&&(i.label.toLowerCase().includes(s)||i.description.toLowerCase().includes(s))?!0:Kt(t,s)}function Kt(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,i]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||Kt(i,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const i of s)if(i&&Kt(i,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&Kt(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&Kt(s,t))return!0}return!1}function Cp(e){if(!e.schema)return r`
      <div class="muted">Schema unavailable.</div>
    `;const t=e.schema,n=e.value??{};if(Pe(t)!=="object"||!t.properties)return r`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;const s=new Set(e.unsupportedPaths??[]),i=t.properties,a=e.searchQuery??"",o=e.activeSection,l=e.activeSubsection??null,u=Object.entries(i).toSorted((g,h)=>{const c=Se([g[0]],e.uiHints)?.order??50,p=Se([h[0]],e.uiHints)?.order??50;return c!==p?c-p:g[0].localeCompare(h[0])}).filter(([g,h])=>!(o&&g!==o||a&&!Ap(g,h,a)));let f=null;if(o&&l&&u.length===1){const g=u[0]?.[1];g&&Pe(g)==="object"&&g.properties&&g.properties[l]&&(f={sectionKey:o,subsectionKey:l,schema:g.properties[l]})}return u.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${le.search}</div>
        <div class="config-empty__text">
          ${a?`No settings match "${a}"`:"No settings in this section"}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${f?(()=>{const{sectionKey:g,subsectionKey:h,schema:c}=f,p=Se([g,h],e.uiHints),m=p?.label??c.title??We(h),$=p?.help??c.description??"",S=n[g],y=S&&typeof S=="object"?S[h]:void 0,C=`config-section-${g}-${h}`;return r`
              <section class="config-section-card" id=${C}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${po(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${m}</h3>
                    ${$?r`<p class="config-section-card__desc">${$}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${je({schema:c,value:y,path:[g,h],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():u.map(([g,h])=>{const c=Gi[g]??{label:g.charAt(0).toUpperCase()+g.slice(1),description:h.description??""};return r`
              <section class="config-section-card" id="config-section-${g}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${po(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${c.label}</h3>
                    ${c.description?r`<p class="config-section-card__desc">${c.description}</p>`:v}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${je({schema:h,value:n[g],path:[g],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const Tp=new Set(["title","description","default","nullable"]);function _p(e){return Object.keys(e??{}).filter(n=>!Tp.has(n)).length===0}function gl(e){const t=e.filter(i=>i!=null),n=t.length!==e.length,s=[];for(const i of t)s.some(a=>Object.is(a,i))||s.push(i);return{enumValues:s,nullable:n}}function pl(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:Vt(e,[])}function Vt(e,t){const n=new Set,s={...e},i=os(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const l=Ep(e,t);return l||{schema:e,unsupportedPaths:[i]}}const a=Array.isArray(e.type)&&e.type.includes("null"),o=Pe(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=o??e.type,s.nullable=a||e.nullable,s.enum){const{enumValues:l,nullable:d}=gl(s.enum);s.enum=l,d&&(s.nullable=!0),l.length===0&&n.add(i)}if(o==="object"){const l=e.properties??{},d={};for(const[u,f]of Object.entries(l)){const g=Vt(f,[...t,u]);g.schema&&(d[u]=g.schema);for(const h of g.unsupportedPaths)n.add(h)}if(s.properties=d,e.additionalProperties===!0)n.add(i);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!_p(e.additionalProperties)){const u=Vt(e.additionalProperties,[...t,"*"]);s.additionalProperties=u.schema??e.additionalProperties,u.unsupportedPaths.length>0&&n.add(i)}}else if(o==="array"){const l=Array.isArray(e.items)?e.items[0]:e.items;if(!l)n.add(i);else{const d=Vt(l,[...t,"*"]);s.items=d.schema??l,d.unsupportedPaths.length>0&&n.add(i)}}else o!=="string"&&o!=="number"&&o!=="integer"&&o!=="boolean"&&!s.enum&&n.add(i);return{schema:s,unsupportedPaths:Array.from(n)}}function Ep(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],i=[];let a=!1;for(const l of n){if(!l||typeof l!="object")return null;if(Array.isArray(l.enum)){const{enumValues:d,nullable:u}=gl(l.enum);s.push(...d),u&&(a=!0);continue}if("const"in l){if(l.const==null){a=!0;continue}s.push(l.const);continue}if(Pe(l)==="null"){a=!0;continue}i.push(l)}if(s.length>0&&i.length===0){const l=[];for(const d of s)l.some(u=>Object.is(u,d))||l.push(d);return{schema:{...e,enum:l,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){const l=Vt(i[0],t);return l.schema&&(l.schema.nullable=a||l.schema.nullable),l}const o=new Set(["string","number","integer","boolean"]);return i.length>0&&s.length===0&&i.every(l=>l.type&&o.has(String(l.type)))?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}function Lp(e,t){let n=e;for(const s of t){if(!n)return null;const i=Pe(n);if(i==="object"){const a=n.properties??{};if(typeof s=="string"&&a[s]){n=a[s];continue}const o=n.additionalProperties;if(typeof s=="string"&&o&&typeof o=="object"){n=o;continue}return null}if(i==="array"){if(typeof s!="number")return null;n=(Array.isArray(n.items)?n.items[0]:n.items)??null;continue}return null}return n}function Mp(e,t){const s=(e.channels??{})[t],i=e[t];return(s&&typeof s=="object"?s:null)??(i&&typeof i=="object"?i:null)??{}}const Ip=["groupPolicy","streamMode","dmPolicy"];function Rp(e){if(e==null)return"n/a";if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)}catch{return"n/a"}}function Dp(e){const t=Ip.flatMap(n=>n in e?[[n,e[n]]]:[]);return t.length===0?null:r`
    <div class="status-list" style="margin-top: 12px;">
      ${t.map(([n,s])=>r`
          <div>
            <span class="label">${n}</span>
            <span>${Rp(s)}</span>
          </div>
        `)}
    </div>
  `}function Pp(e){const t=pl(e.schema),n=t.schema;if(!n)return r`
      <div class="callout danger">Schema unavailable. Use Raw.</div>
    `;const s=Lp(n,["channels",e.channelId]);if(!s)return r`
      <div class="callout danger">Channel config schema unavailable.</div>
    `;const i=e.configValue??{},a=Mp(i,e.channelId);return r`
    <div class="config-form">
      ${je({schema:s,value:a,path:["channels",e.channelId],hints:e.uiHints,unsupported:new Set(t.unsupportedPaths),disabled:e.disabled,showLabel:!1,onPatch:e.onPatch})}
    </div>
    ${Dp(a)}
  `}function qe(e){const{channelId:t,props:n}=e,s=n.configSaving||n.configSchemaLoading;return r`
    <div style="margin-top: 16px;">
      ${n.configSchemaLoading?r`
              <div class="muted">Loading config schema…</div>
            `:Pp({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?"Saving…":"Save"}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          Reload
        </button>
      </div>
    </div>
  `}function Fp(e){const{props:t,discord:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"discord",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Np(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Google Chat</div>
      <div class="card-sub">Chat API webhook status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?n.configured?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?n.running?"Yes":"No":"n/a"}</span>
        </div>
        <div>
          <span class="label">Credential</span>
          <span>${n?.credentialSource??"n/a"}</span>
        </div>
        <div>
          <span class="label">Audience</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"googlechat",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Op(e){const{props:t,imessage:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">macOS bridge status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"imessage",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function fo(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:"n/a"}function Bp(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:i,profileFormState:a,profileFormCallbacks:o,onEditProfile:l}=e,d=s[0],u=n?.configured??d?.configured??!1,f=n?.running??d?.running??!1,g=n?.publicKey??d?.publicKey,h=n?.lastStartAt??d?.lastStartAt??null,c=n?.lastError??d?.lastError??null,p=s.length>1,m=a!=null,$=y=>{const C=y.publicKey,A=y.profile,T=A?.displayName??A?.name??y.name??y.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${T}</div>
          <div class="account-card-id">${y.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${y.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${y.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Public Key</span>
            <span class="monospace" title="${C??""}">${fo(C)}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${y.lastInboundAt?V(y.lastInboundAt):"n/a"}</span>
          </div>
          ${y.lastError?r`
                <div class="account-card-error">${y.lastError}</div>
              `:v}
        </div>
      </div>
    `},S=()=>{if(m&&o)return Lc({state:a,callbacks:o,accountId:s[0]?.accountId??"default"});const y=d?.profile??n?.profile,{name:C,displayName:A,about:T,picture:_,nip05:I}=y??{},z=C||A||T||_||I;return r`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">Profile</div>
          ${u?r`
                <button
                  class="btn btn-sm"
                  @click=${l}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  Edit Profile
                </button>
              `:v}
        </div>
        ${z?r`
              <div class="status-list">
                ${_?r`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${_}
                          alt="Profile picture"
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${Y=>{Y.target.style.display="none"}}
                        />
                      </div>
                    `:v}
                ${C?r`<div><span class="label">Name</span><span>${C}</span></div>`:v}
                ${A?r`<div><span class="label">Display Name</span><span>${A}</span></div>`:v}
                ${T?r`<div><span class="label">About</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${T}</span></div>`:v}
                ${I?r`<div><span class="label">NIP-05</span><span>${I}</span></div>`:v}
              </div>
            `:r`
                <div style="color: var(--text-muted); font-size: 13px">
                  No profile set. Click "Edit Profile" to add your name, bio, and avatar.
                </div>
              `}
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">Nostr</div>
      <div class="card-sub">Decentralized DMs via Nostr relays (NIP-04).</div>
      ${i}

      ${p?r`
            <div class="account-card-list">
              ${s.map(y=>$(y))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${u?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${f?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Public Key</span>
                <span class="monospace" title="${g??""}"
                  >${fo(g)}</span
                >
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${h?V(h):"n/a"}</span>
              </div>
            </div>
          `}

      ${c?r`<div class="callout danger" style="margin-top: 12px;">${c}</div>`:v}

      ${S()}

      ${qe({channelId:"nostr",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>Refresh</button>
      </div>
    </div>
  `}function Up(e){if(!e&&e!==0)return"n/a";const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function zp(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const i=s[e],a=typeof i?.configured=="boolean"&&i.configured,o=typeof i?.running=="boolean"&&i.running,l=typeof i?.connected=="boolean"&&i.connected,u=(n.channelAccounts?.[e]??[]).some(f=>f.configured||f.running||f.connected);return a||o||l||u}function Hp(e,t){return t?.[e]?.length??0}function fl(e,t){const n=Hp(e,t);return n<2?v:r`<div class="account-count">Accounts (${n})</div>`}function Kp(e){const{props:t,signal:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">signal-cli status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${n?.baseUrl??"n/a"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"signal",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function jp(e){const{props:t,slack:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">Socket mode status and channel configuration.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last start</span>
          <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
        </div>
        <div>
          <span class="label">Last probe</span>
          <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"slack",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function Wp(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:i}=e,a=s.length>1,o=l=>{const u=l.probe?.bot?.username,f=l.name||l.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${u?`@${u}`:f}
          </div>
          <div class="account-card-id">${l.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">Running</span>
            <span>${l.running?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Configured</span>
            <span>${l.configured?"Yes":"No"}</span>
          </div>
          <div>
            <span class="label">Last inbound</span>
            <span>${l.lastInboundAt?V(l.lastInboundAt):"n/a"}</span>
          </div>
          ${l.lastError?r`
                <div class="account-card-error">
                  ${l.lastError}
                </div>
              `:v}
        </div>
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">Telegram</div>
      <div class="card-sub">Bot status and channel configuration.</div>
      ${i}

      ${a?r`
            <div class="account-card-list">
              ${s.map(l=>o(l))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${n?.configured?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${n?.running?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Mode</span>
                <span>${n?.mode??"n/a"}</span>
              </div>
              <div>
                <span class="label">Last start</span>
                <span>${n?.lastStartAt?V(n.lastStartAt):"n/a"}</span>
              </div>
              <div>
                <span class="label">Last probe</span>
                <span>${n?.lastProbeAt?V(n.lastProbeAt):"n/a"}</span>
              </div>
            </div>
          `}

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            Probe ${n.probe.ok?"ok":"failed"} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:v}

      ${qe({channelId:"telegram",props:t})}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Probe
        </button>
      </div>
    </div>
  `}function qp(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">Link WhatsApp Web and monitor connection health.</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">Configured</span>
          <span>${n?.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Linked</span>
          <span>${n?.linked?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Running</span>
          <span>${n?.running?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n?.connected?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Last connect</span>
          <span>
            ${n?.lastConnectedAt?V(n.lastConnectedAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Last message</span>
          <span>
            ${n?.lastMessageAt?V(n.lastMessageAt):"n/a"}
          </span>
        </div>
        <div>
          <span class="label">Auth age</span>
          <span>
            ${n?.authAgeMs!=null?Up(n.authAgeMs):"n/a"}
          </span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:v}

      ${t.whatsappMessage?r`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:v}

      ${t.whatsappQrDataUrl?r`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:v}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?"Working…":"Show QR"}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          Relink
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          Wait for scan
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          Logout
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          Refresh
        </button>
      </div>

      ${qe({channelId:"whatsapp",props:t})}
    </div>
  `}function Gp(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,i=t?.discord??null,a=t?.googlechat??null,o=t?.slack??null,l=t?.signal??null,d=t?.imessage??null,u=t?.nostr??null,g=Vp(e.snapshot).map((h,c)=>({key:h,enabled:zp(h,e),order:c})).toSorted((h,c)=>h.enabled!==c.enabled?h.enabled?-1:1:h.order-c.order);return r`
    <section class="grid grid-cols-2">
      ${g.map(h=>Qp(h.key,e,{whatsapp:n,telegram:s,discord:i,googlechat:a,slack:o,signal:l,imessage:d,nostr:u,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Channel health</div>
          <div class="card-sub">Channel status snapshots from the gateway.</div>
        </div>
        <div class="muted">${e.lastSuccessAt?V(e.lastSuccessAt):"n/a"}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):"No snapshot yet."}
      </pre>
    </section>
  `}function Vp(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr"]}function Qp(e,t,n){const s=fl(e,n.channelAccounts);switch(e){case"whatsapp":return qp({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return Wp({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return Fp({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return Np({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return jp({props:t,slack:n.slack,accountCountLabel:s});case"signal":return Kp({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return Op({props:t,imessage:n.imessage,accountCountLabel:s});case"nostr":{const i=n.channelAccounts?.nostr??[],a=i[0],o=a?.accountId??"default",l=a?.profile??null,d=t.nostrProfileAccountId===o?t.nostrProfileFormState:null,u=d?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return Bp({props:t,nostr:n.nostr,nostrAccounts:i,accountCountLabel:s,profileFormState:d,profileFormCallbacks:u,onEditProfile:()=>t.onNostrProfileEdit(o,l)})}default:return Yp(e,t,n.channelAccounts??{})}}function Yp(e,t,n){const s=Zp(t.snapshot,e),i=t.snapshot?.channels?.[e],a=typeof i?.configured=="boolean"?i.configured:void 0,o=typeof i?.running=="boolean"?i.running:void 0,l=typeof i?.connected=="boolean"?i.connected:void 0,d=typeof i?.lastError=="string"?i.lastError:void 0,u=n[e]??[],f=fl(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">Channel status and configuration.</div>
      ${f}

      ${u.length>0?r`
            <div class="account-card-list">
              ${u.map(g=>nf(g))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">Configured</span>
                <span>${a==null?"n/a":a?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Running</span>
                <span>${o==null?"n/a":o?"Yes":"No"}</span>
              </div>
              <div>
                <span class="label">Connected</span>
                <span>${l==null?"n/a":l?"Yes":"No"}</span>
              </div>
            </div>
          `}

      ${d?r`<div class="callout danger" style="margin-top: 12px;">
            ${d}
          </div>`:v}

      ${qe({channelId:e,props:t})}
    </div>
  `}function Jp(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function Zp(e,t){return Jp(e)[t]?.label??e?.channelLabels?.[t]??t}const Xp=600*1e3;function hl(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<Xp:!1}function ef(e){return e.running?"Yes":hl(e)?"Active":"No"}function tf(e){return e.connected===!0?"Yes":e.connected===!1?"No":hl(e)?"Active":"n/a"}function nf(e){const t=ef(e),n=tf(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">Running</span>
          <span>${t}</span>
        </div>
        <div>
          <span class="label">Configured</span>
          <span>${e.configured?"Yes":"No"}</span>
        </div>
        <div>
          <span class="label">Connected</span>
          <span>${n}</span>
        </div>
        <div>
          <span class="label">Last inbound</span>
          <span>${e.lastInboundAt?V(e.lastInboundAt):"n/a"}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:v}
      </div>
    </div>
  `}const Qt=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),Qt(s,t);return!0},zn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},vl=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),of(t)}};function sf(e){this._$AN!==void 0?(zn(this),this._$AM=e,vl(this)):this._$AM=e}function af(e,t=!1,n=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let a=n;a<s.length;a++)Qt(s[a],!1),zn(s[a]);else s!=null&&(Qt(s,!1),zn(s));else Qt(this,e)}const of=e=>{e.type==Ki.CHILD&&(e._$AP??=af,e._$AQ??=sf)};class rf extends Wi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),vl(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Qt(this,t),zn(this))}setValue(t){if(mg(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Rs=new WeakMap,lf=ji(class extends rf{render(e){return v}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),v}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Rs.get(t);n===void 0&&(n=new WeakMap,Rs.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Rs.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class li extends Wi{constructor(t){if(super(t),this.it=v,t.type!==Ki.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===Qe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}li.directiveName="unsafeHTML",li.resultType=1;const ci=ji(li);const{entries:ml,setPrototypeOf:ho,isFrozen:cf,getPrototypeOf:df,getOwnPropertyDescriptor:uf}=Object;let{freeze:ve,seal:Ae,create:di}=Object,{apply:ui,construct:gi}=typeof Reflect<"u"&&Reflect;ve||(ve=function(t){return t});Ae||(Ae=function(t){return t});ui||(ui=function(t,n){for(var s=arguments.length,i=new Array(s>2?s-2:0),a=2;a<s;a++)i[a-2]=arguments[a];return t.apply(n,i)});gi||(gi=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return new t(...s)});const kn=me(Array.prototype.forEach),gf=me(Array.prototype.lastIndexOf),vo=me(Array.prototype.pop),Ft=me(Array.prototype.push),pf=me(Array.prototype.splice),Dn=me(String.prototype.toLowerCase),Ds=me(String.prototype.toString),Ps=me(String.prototype.match),Nt=me(String.prototype.replace),ff=me(String.prototype.indexOf),hf=me(String.prototype.trim),Ce=me(Object.prototype.hasOwnProperty),fe=me(RegExp.prototype.test),Ot=vf(TypeError);function me(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return ui(e,t,s)}}function vf(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return gi(e,n)}}function j(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Dn;ho&&ho(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const a=n(i);a!==i&&(cf(t)||(t[s]=a),i=a)}e[i]=!0}return e}function mf(e){for(let t=0;t<e.length;t++)Ce(e,t)||(e[t]=null);return e}function Re(e){const t=di(null);for(const[n,s]of ml(e))Ce(e,n)&&(Array.isArray(s)?t[n]=mf(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Re(s):t[n]=s);return t}function Bt(e,t){for(;e!==null;){const s=uf(e,t);if(s){if(s.get)return me(s.get);if(typeof s.value=="function")return me(s.value)}e=df(e)}function n(){return null}return n}const mo=ve(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Fs=ve(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ns=ve(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),bf=ve(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Os=ve(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),yf=ve(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),bo=ve(["#text"]),yo=ve(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Bs=ve(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),xo=ve(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Sn=ve(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xf=Ae(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$f=Ae(/<%[\w\W]*|[\w\W]*%>/gm),wf=Ae(/\$\{[\w\W]*/gm),kf=Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sf=Ae(/^aria-[\-\w]+$/),bl=Ae(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Af=Ae(/^(?:\w+script|data):/i),Cf=Ae(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yl=Ae(/^html$/i),Tf=Ae(/^[a-z][.\w]*(-[.\w]+)+$/i);var $o=Object.freeze({__proto__:null,ARIA_ATTR:Sf,ATTR_WHITESPACE:Cf,CUSTOM_ELEMENT:Tf,DATA_ATTR:kf,DOCTYPE_NAME:yl,ERB_EXPR:$f,IS_ALLOWED_URI:bl,IS_SCRIPT_OR_DATA:Af,MUSTACHE_EXPR:xf,TMPLIT_EXPR:wf});const Ut={element:1,text:3,progressingInstruction:7,comment:8,document:9},_f=function(){return typeof window>"u"?null:window},Ef=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(s=n.getAttribute(i));const a="dompurify"+(s?"#"+s:"");try{return t.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},wo=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function xl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_f();const t=U=>xl(U);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==Ut.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,i=s.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:l,Element:d,NodeFilter:u,NamedNodeMap:f=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:h,trustedTypes:c}=e,p=d.prototype,m=Bt(p,"cloneNode"),$=Bt(p,"remove"),S=Bt(p,"nextSibling"),y=Bt(p,"childNodes"),C=Bt(p,"parentNode");if(typeof o=="function"){const U=n.createElement("template");U.content&&U.content.ownerDocument&&(n=U.content.ownerDocument)}let A,T="";const{implementation:_,createNodeIterator:I,createDocumentFragment:z,getElementsByTagName:Y}=n,{importNode:se}=s;let F=wo();t.isSupported=typeof ml=="function"&&typeof C=="function"&&_&&_.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:H,ERB_EXPR:ce,TMPLIT_EXPR:E,DATA_ATTR:B,ARIA_ATTR:ie,IS_SCRIPT_OR_DATA:ae,ATTR_WHITESPACE:Z,CUSTOM_ELEMENT:te}=$o;let{IS_ALLOWED_URI:M}=$o,R=null;const D=j({},[...mo,...Fs,...Ns,...Os,...bo]);let K=null;const xe=j({},[...yo,...Bs,...xo,...Sn]);let Q=Object.seal(di(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),we=null,X=null;const pe=Object.seal(di(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Fe=!0,Ne=!0,Xe=!1,la=!0,yt=!1,dn=!0,et=!1,ds=!1,us=!1,xt=!1,un=!1,gn=!1,ca=!0,da=!1;const Kl="user-content-";let gs=!0,It=!1,$t={},Le=null;const ps=j({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ua=null;const ga=j({},["audio","video","img","source","image","track"]);let fs=null;const pa=j({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pn="http://www.w3.org/1998/Math/MathML",fn="http://www.w3.org/2000/svg",Oe="http://www.w3.org/1999/xhtml";let wt=Oe,hs=!1,vs=null;const jl=j({},[pn,fn,Oe],Ds);let hn=j({},["mi","mo","mn","ms","mtext"]),vn=j({},["annotation-xml"]);const Wl=j({},["title","style","font","a","script"]);let Rt=null;const ql=["application/xhtml+xml","text/html"],Gl="text/html";let ne=null,kt=null;const Vl=n.createElement("form"),fa=function(b){return b instanceof RegExp||b instanceof Function},ms=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(kt&&kt===b)){if((!b||typeof b!="object")&&(b={}),b=Re(b),Rt=ql.indexOf(b.PARSER_MEDIA_TYPE)===-1?Gl:b.PARSER_MEDIA_TYPE,ne=Rt==="application/xhtml+xml"?Ds:Dn,R=Ce(b,"ALLOWED_TAGS")?j({},b.ALLOWED_TAGS,ne):D,K=Ce(b,"ALLOWED_ATTR")?j({},b.ALLOWED_ATTR,ne):xe,vs=Ce(b,"ALLOWED_NAMESPACES")?j({},b.ALLOWED_NAMESPACES,Ds):jl,fs=Ce(b,"ADD_URI_SAFE_ATTR")?j(Re(pa),b.ADD_URI_SAFE_ATTR,ne):pa,ua=Ce(b,"ADD_DATA_URI_TAGS")?j(Re(ga),b.ADD_DATA_URI_TAGS,ne):ga,Le=Ce(b,"FORBID_CONTENTS")?j({},b.FORBID_CONTENTS,ne):ps,we=Ce(b,"FORBID_TAGS")?j({},b.FORBID_TAGS,ne):Re({}),X=Ce(b,"FORBID_ATTR")?j({},b.FORBID_ATTR,ne):Re({}),$t=Ce(b,"USE_PROFILES")?b.USE_PROFILES:!1,Fe=b.ALLOW_ARIA_ATTR!==!1,Ne=b.ALLOW_DATA_ATTR!==!1,Xe=b.ALLOW_UNKNOWN_PROTOCOLS||!1,la=b.ALLOW_SELF_CLOSE_IN_ATTR!==!1,yt=b.SAFE_FOR_TEMPLATES||!1,dn=b.SAFE_FOR_XML!==!1,et=b.WHOLE_DOCUMENT||!1,xt=b.RETURN_DOM||!1,un=b.RETURN_DOM_FRAGMENT||!1,gn=b.RETURN_TRUSTED_TYPE||!1,us=b.FORCE_BODY||!1,ca=b.SANITIZE_DOM!==!1,da=b.SANITIZE_NAMED_PROPS||!1,gs=b.KEEP_CONTENT!==!1,It=b.IN_PLACE||!1,M=b.ALLOWED_URI_REGEXP||bl,wt=b.NAMESPACE||Oe,hn=b.MATHML_TEXT_INTEGRATION_POINTS||hn,vn=b.HTML_INTEGRATION_POINTS||vn,Q=b.CUSTOM_ELEMENT_HANDLING||{},b.CUSTOM_ELEMENT_HANDLING&&fa(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Q.tagNameCheck=b.CUSTOM_ELEMENT_HANDLING.tagNameCheck),b.CUSTOM_ELEMENT_HANDLING&&fa(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Q.attributeNameCheck=b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),b.CUSTOM_ELEMENT_HANDLING&&typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Q.allowCustomizedBuiltInElements=b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),yt&&(Ne=!1),un&&(xt=!0),$t&&(R=j({},bo),K=[],$t.html===!0&&(j(R,mo),j(K,yo)),$t.svg===!0&&(j(R,Fs),j(K,Bs),j(K,Sn)),$t.svgFilters===!0&&(j(R,Ns),j(K,Bs),j(K,Sn)),$t.mathMl===!0&&(j(R,Os),j(K,xo),j(K,Sn))),b.ADD_TAGS&&(typeof b.ADD_TAGS=="function"?pe.tagCheck=b.ADD_TAGS:(R===D&&(R=Re(R)),j(R,b.ADD_TAGS,ne))),b.ADD_ATTR&&(typeof b.ADD_ATTR=="function"?pe.attributeCheck=b.ADD_ATTR:(K===xe&&(K=Re(K)),j(K,b.ADD_ATTR,ne))),b.ADD_URI_SAFE_ATTR&&j(fs,b.ADD_URI_SAFE_ATTR,ne),b.FORBID_CONTENTS&&(Le===ps&&(Le=Re(Le)),j(Le,b.FORBID_CONTENTS,ne)),b.ADD_FORBID_CONTENTS&&(Le===ps&&(Le=Re(Le)),j(Le,b.ADD_FORBID_CONTENTS,ne)),gs&&(R["#text"]=!0),et&&j(R,["html","head","body"]),R.table&&(j(R,["tbody"]),delete we.tbody),b.TRUSTED_TYPES_POLICY){if(typeof b.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof b.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=b.TRUSTED_TYPES_POLICY,T=A.createHTML("")}else A===void 0&&(A=Ef(c,i)),A!==null&&typeof T=="string"&&(T=A.createHTML(""));ve&&ve(b),kt=b}},ha=j({},[...Fs,...Ns,...bf]),va=j({},[...Os,...yf]),Ql=function(b){let L=C(b);(!L||!L.tagName)&&(L={namespaceURI:wt,tagName:"template"});const N=Dn(b.tagName),J=Dn(L.tagName);return vs[b.namespaceURI]?b.namespaceURI===fn?L.namespaceURI===Oe?N==="svg":L.namespaceURI===pn?N==="svg"&&(J==="annotation-xml"||hn[J]):!!ha[N]:b.namespaceURI===pn?L.namespaceURI===Oe?N==="math":L.namespaceURI===fn?N==="math"&&vn[J]:!!va[N]:b.namespaceURI===Oe?L.namespaceURI===fn&&!vn[J]||L.namespaceURI===pn&&!hn[J]?!1:!va[N]&&(Wl[N]||!ha[N]):!!(Rt==="application/xhtml+xml"&&vs[b.namespaceURI]):!1},Me=function(b){Ft(t.removed,{element:b});try{C(b).removeChild(b)}catch{$(b)}},tt=function(b,L){try{Ft(t.removed,{attribute:L.getAttributeNode(b),from:L})}catch{Ft(t.removed,{attribute:null,from:L})}if(L.removeAttribute(b),b==="is")if(xt||un)try{Me(L)}catch{}else try{L.setAttribute(b,"")}catch{}},ma=function(b){let L=null,N=null;if(us)b="<remove></remove>"+b;else{const ee=Ps(b,/^[\r\n\t ]+/);N=ee&&ee[0]}Rt==="application/xhtml+xml"&&wt===Oe&&(b='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+b+"</body></html>");const J=A?A.createHTML(b):b;if(wt===Oe)try{L=new h().parseFromString(J,Rt)}catch{}if(!L||!L.documentElement){L=_.createDocument(wt,"template",null);try{L.documentElement.innerHTML=hs?T:J}catch{}}const de=L.body||L.documentElement;return b&&N&&de.insertBefore(n.createTextNode(N),de.childNodes[0]||null),wt===Oe?Y.call(L,et?"html":"body")[0]:et?L.documentElement:de},ba=function(b){return I.call(b.ownerDocument||b,b,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},bs=function(b){return b instanceof g&&(typeof b.nodeName!="string"||typeof b.textContent!="string"||typeof b.removeChild!="function"||!(b.attributes instanceof f)||typeof b.removeAttribute!="function"||typeof b.setAttribute!="function"||typeof b.namespaceURI!="string"||typeof b.insertBefore!="function"||typeof b.hasChildNodes!="function")},ya=function(b){return typeof l=="function"&&b instanceof l};function Be(U,b,L){kn(U,N=>{N.call(t,b,L,kt)})}const xa=function(b){let L=null;if(Be(F.beforeSanitizeElements,b,null),bs(b))return Me(b),!0;const N=ne(b.nodeName);if(Be(F.uponSanitizeElement,b,{tagName:N,allowedTags:R}),dn&&b.hasChildNodes()&&!ya(b.firstElementChild)&&fe(/<[/\w!]/g,b.innerHTML)&&fe(/<[/\w!]/g,b.textContent)||b.nodeType===Ut.progressingInstruction||dn&&b.nodeType===Ut.comment&&fe(/<[/\w]/g,b.data))return Me(b),!0;if(!(pe.tagCheck instanceof Function&&pe.tagCheck(N))&&(!R[N]||we[N])){if(!we[N]&&wa(N)&&(Q.tagNameCheck instanceof RegExp&&fe(Q.tagNameCheck,N)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(N)))return!1;if(gs&&!Le[N]){const J=C(b)||b.parentNode,de=y(b)||b.childNodes;if(de&&J){const ee=de.length;for(let be=ee-1;be>=0;--be){const Ue=m(de[be],!0);Ue.__removalCount=(b.__removalCount||0)+1,J.insertBefore(Ue,S(b))}}}return Me(b),!0}return b instanceof d&&!Ql(b)||(N==="noscript"||N==="noembed"||N==="noframes")&&fe(/<\/no(script|embed|frames)/i,b.innerHTML)?(Me(b),!0):(yt&&b.nodeType===Ut.text&&(L=b.textContent,kn([H,ce,E],J=>{L=Nt(L,J," ")}),b.textContent!==L&&(Ft(t.removed,{element:b.cloneNode()}),b.textContent=L)),Be(F.afterSanitizeElements,b,null),!1)},$a=function(b,L,N){if(ca&&(L==="id"||L==="name")&&(N in n||N in Vl))return!1;if(!(Ne&&!X[L]&&fe(B,L))){if(!(Fe&&fe(ie,L))){if(!(pe.attributeCheck instanceof Function&&pe.attributeCheck(L,b))){if(!K[L]||X[L]){if(!(wa(b)&&(Q.tagNameCheck instanceof RegExp&&fe(Q.tagNameCheck,b)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(b))&&(Q.attributeNameCheck instanceof RegExp&&fe(Q.attributeNameCheck,L)||Q.attributeNameCheck instanceof Function&&Q.attributeNameCheck(L,b))||L==="is"&&Q.allowCustomizedBuiltInElements&&(Q.tagNameCheck instanceof RegExp&&fe(Q.tagNameCheck,N)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(N))))return!1}else if(!fs[L]){if(!fe(M,Nt(N,Z,""))){if(!((L==="src"||L==="xlink:href"||L==="href")&&b!=="script"&&ff(N,"data:")===0&&ua[b])){if(!(Xe&&!fe(ae,Nt(N,Z,"")))){if(N)return!1}}}}}}}return!0},wa=function(b){return b!=="annotation-xml"&&Ps(b,te)},ka=function(b){Be(F.beforeSanitizeAttributes,b,null);const{attributes:L}=b;if(!L||bs(b))return;const N={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:K,forceKeepAttr:void 0};let J=L.length;for(;J--;){const de=L[J],{name:ee,namespaceURI:be,value:Ue}=de,St=ne(ee),ys=Ue;let re=ee==="value"?ys:hf(ys);if(N.attrName=St,N.attrValue=re,N.keepAttr=!0,N.forceKeepAttr=void 0,Be(F.uponSanitizeAttribute,b,N),re=N.attrValue,da&&(St==="id"||St==="name")&&(tt(ee,b),re=Kl+re),dn&&fe(/((--!?|])>)|<\/(style|title|textarea)/i,re)){tt(ee,b);continue}if(St==="attributename"&&Ps(re,"href")){tt(ee,b);continue}if(N.forceKeepAttr)continue;if(!N.keepAttr){tt(ee,b);continue}if(!la&&fe(/\/>/i,re)){tt(ee,b);continue}yt&&kn([H,ce,E],Aa=>{re=Nt(re,Aa," ")});const Sa=ne(b.nodeName);if(!$a(Sa,St,re)){tt(ee,b);continue}if(A&&typeof c=="object"&&typeof c.getAttributeType=="function"&&!be)switch(c.getAttributeType(Sa,St)){case"TrustedHTML":{re=A.createHTML(re);break}case"TrustedScriptURL":{re=A.createScriptURL(re);break}}if(re!==ys)try{be?b.setAttributeNS(be,ee,re):b.setAttribute(ee,re),bs(b)?Me(b):vo(t.removed)}catch{tt(ee,b)}}Be(F.afterSanitizeAttributes,b,null)},Yl=function U(b){let L=null;const N=ba(b);for(Be(F.beforeSanitizeShadowDOM,b,null);L=N.nextNode();)Be(F.uponSanitizeShadowNode,L,null),xa(L),ka(L),L.content instanceof a&&U(L.content);Be(F.afterSanitizeShadowDOM,b,null)};return t.sanitize=function(U){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L=null,N=null,J=null,de=null;if(hs=!U,hs&&(U="<!-->"),typeof U!="string"&&!ya(U))if(typeof U.toString=="function"){if(U=U.toString(),typeof U!="string")throw Ot("dirty is not a string, aborting")}else throw Ot("toString is not a function");if(!t.isSupported)return U;if(ds||ms(b),t.removed=[],typeof U=="string"&&(It=!1),It){if(U.nodeName){const Ue=ne(U.nodeName);if(!R[Ue]||we[Ue])throw Ot("root node is forbidden and cannot be sanitized in-place")}}else if(U instanceof l)L=ma("<!---->"),N=L.ownerDocument.importNode(U,!0),N.nodeType===Ut.element&&N.nodeName==="BODY"||N.nodeName==="HTML"?L=N:L.appendChild(N);else{if(!xt&&!yt&&!et&&U.indexOf("<")===-1)return A&&gn?A.createHTML(U):U;if(L=ma(U),!L)return xt?null:gn?T:""}L&&us&&Me(L.firstChild);const ee=ba(It?U:L);for(;J=ee.nextNode();)xa(J),ka(J),J.content instanceof a&&Yl(J.content);if(It)return U;if(xt){if(un)for(de=z.call(L.ownerDocument);L.firstChild;)de.appendChild(L.firstChild);else de=L;return(K.shadowroot||K.shadowrootmode)&&(de=se.call(s,de,!0)),de}let be=et?L.outerHTML:L.innerHTML;return et&&R["!doctype"]&&L.ownerDocument&&L.ownerDocument.doctype&&L.ownerDocument.doctype.name&&fe(yl,L.ownerDocument.doctype.name)&&(be="<!DOCTYPE "+L.ownerDocument.doctype.name+`>
`+be),yt&&kn([H,ce,E],Ue=>{be=Nt(be,Ue," ")}),A&&gn?A.createHTML(be):be},t.setConfig=function(){let U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ms(U),ds=!0},t.clearConfig=function(){kt=null,ds=!1},t.isValidAttribute=function(U,b,L){kt||ms({});const N=ne(U),J=ne(b);return $a(N,J,L)},t.addHook=function(U,b){typeof b=="function"&&Ft(F[U],b)},t.removeHook=function(U,b){if(b!==void 0){const L=gf(F[U],b);return L===-1?void 0:pf(F[U],L,1)[0]}return vo(F[U])},t.removeHooks=function(U){F[U]=[]},t.removeAllHooks=function(){F=wo()},t}var pi=xl();function Vi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var bt=Vi();function $l(e){bt=e}var Yt={exec:()=>null};function W(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(he.caret,"$1"),n=n.replace(i,o),s},getRegex:()=>new RegExp(n,t)};return s}var Lf=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),he={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Mf=/^(?:[ \t]*(?:\n|$))+/,If=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Rf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,cn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Df=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qi=/(?:[*+-]|\d{1,9}[.)])/,wl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kl=W(wl).replace(/bull/g,Qi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Pf=W(wl).replace(/bull/g,Qi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ff=/^[^\n]+/,Ji=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Nf=W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ji).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Of=W(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qi).getRegex(),rs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Bf=W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zi).replace("tag",rs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Sl=W(Yi).replace("hr",cn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rs).getRegex(),Uf=W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Sl).getRegex(),Xi={blockquote:Uf,code:If,def:Nf,fences:Rf,heading:Df,hr:cn,html:Bf,lheading:kl,list:Of,newline:Mf,paragraph:Sl,table:Yt,text:Ff},ko=W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",cn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rs).getRegex(),zf={...Xi,lheading:Pf,table:ko,paragraph:W(Yi).replace("hr",cn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ko).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rs).getRegex()},Hf={...Xi,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(Yi).replace("hr",cn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Al=/^( {2,}|\\)\n(?!\s*$)/,Wf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ls=/[\p{P}\p{S}]/u,ea=/[\s\p{P}\p{S}]/u,Cl=/[^\s\p{P}\p{S}]/u,qf=W(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ea).getRegex(),Tl=/(?!~)[\p{P}\p{S}]/u,Gf=/(?!~)[\s\p{P}\p{S}]/u,Vf=/(?:[^\s\p{P}\p{S}]|~)/u,Qf=W(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Lf?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),_l=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Yf=W(_l,"u").replace(/punct/g,ls).getRegex(),Jf=W(_l,"u").replace(/punct/g,Tl).getRegex(),El="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Zf=W(El,"gu").replace(/notPunctSpace/g,Cl).replace(/punctSpace/g,ea).replace(/punct/g,ls).getRegex(),Xf=W(El,"gu").replace(/notPunctSpace/g,Vf).replace(/punctSpace/g,Gf).replace(/punct/g,Tl).getRegex(),eh=W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Cl).replace(/punctSpace/g,ea).replace(/punct/g,ls).getRegex(),th=W(/\\(punct)/,"gu").replace(/punct/g,ls).getRegex(),nh=W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sh=W(Zi).replace("(?:-->|$)","-->").getRegex(),ih=W("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",sh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Hn=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ah=W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Hn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ll=W(/^!?\[(label)\]\[(ref)\]/).replace("label",Hn).replace("ref",Ji).getRegex(),Ml=W(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ji).getRegex(),oh=W("reflink|nolink(?!\\()","g").replace("reflink",Ll).replace("nolink",Ml).getRegex(),So=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ta={_backpedal:Yt,anyPunctuation:th,autolink:nh,blockSkip:Qf,br:Al,code:jf,del:Yt,emStrongLDelim:Yf,emStrongRDelimAst:Zf,emStrongRDelimUnd:eh,escape:Kf,link:ah,nolink:Ml,punctuation:qf,reflink:Ll,reflinkSearch:oh,tag:ih,text:Wf,url:Yt},rh={...ta,link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",Hn).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Hn).getRegex()},fi={...ta,emStrongRDelimAst:Xf,emStrongLDelim:Jf,url:W(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",So).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:W(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",So).getRegex()},lh={...fi,br:W(Al).replace("{2,}","*").getRegex(),text:W(fi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},An={normal:Xi,gfm:zf,pedantic:Hf},zt={normal:ta,gfm:fi,breaks:lh,pedantic:rh},ch={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ao=e=>ch[e];function Ke(e,t){if(t){if(he.escapeTest.test(e))return e.replace(he.escapeReplace,Ao)}else if(he.escapeTestNoEncode.test(e))return e.replace(he.escapeReplaceNoEncode,Ao);return e}function Co(e){try{e=encodeURI(e).replace(he.percentDecode,"%")}catch{return null}return e}function To(e,t){let n=e.replace(he.findPipe,(a,o,l)=>{let d=!1,u=o;for(;--u>=0&&l[u]==="\\";)d=!d;return d?"|":" |"}),s=n.split(he.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(he.slashPipe,"|");return s}function Ht(e,t,n){let s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function dh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function _o(e,t,n,s,i){let a=t.href,o=t.title||null,l=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let d={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,d}function uh(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let i=s[1];return t.split(`
`).map(a=>{let o=a.match(n.other.beginningSpace);if(o===null)return a;let[l]=o;return l.length>=i.length?a.slice(i.length):a}).join(`
`)}var Kn=class{options;rules;lexer;constructor(e){this.options=e||bt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ht(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=uh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=Ht(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ht(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Ht(t[0],`
`).split(`
`),s="",i="",a=[];for(;n.length>0;){let o=!1,l=[],d;for(d=0;d<n.length;d++)if(this.rules.other.blockquoteStart.test(n[d]))l.push(n[d]),o=!0;else if(!o)l.push(n[d]);else break;n=n.slice(d);let u=l.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,i=i?`${i}
${f}`:f;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,a,!0),this.lexer.state.top=g,n.length===0)break;let h=a.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let c=h,p=c.raw+`
`+n.join(`
`),m=this.blockquote(p);a[a.length-1]=m,s=s.substring(0,s.length-c.raw.length)+m.raw,i=i.substring(0,i.length-c.text.length)+m.text;break}else if(h?.type==="list"){let c=h,p=c.raw+`
`+n.join(`
`),m=this.list(p);a[a.length-1]=m,s=s.substring(0,s.length-h.raw.length)+m.raw,i=i.substring(0,i.length-c.raw.length)+m.raw,n=p.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let d=!1,u="",f="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;u=t[0],e=e.substring(u.length);let g=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,m=>" ".repeat(3*m.length)),h=e.split(`
`,1)[0],c=!g.trim(),p=0;if(this.options.pedantic?(p=2,f=g.trimStart()):c?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,f=g.slice(p),p+=t[1].length),c&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,e=e.substring(h.length+1),d=!0),!d){let m=this.rules.other.nextBulletRegex(p),$=this.rules.other.hrRegex(p),S=this.rules.other.fencesBeginRegex(p),y=this.rules.other.headingBeginRegex(p),C=this.rules.other.htmlBeginRegex(p);for(;e;){let A=e.split(`
`,1)[0],T;if(h=A,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),T=h):T=h.replace(this.rules.other.tabCharGlobal,"    "),S.test(h)||y.test(h)||C.test(h)||m.test(h)||$.test(h))break;if(T.search(this.rules.other.nonSpaceChar)>=p||!h.trim())f+=`
`+T.slice(p);else{if(c||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(g)||y.test(g)||$.test(g))break;f+=`
`+h}!c&&!h.trim()&&(c=!0),u+=A+`
`,e=e.substring(A.length+1),g=T.slice(p)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),i.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]}),i.raw+=u}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let d of i.items){if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),d.task){if(d.text=d.text.replace(this.rules.other.listReplaceTask,""),d.tokens[0]?.type==="text"||d.tokens[0]?.type==="paragraph"){d.tokens[0].raw=d.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),d.tokens[0].text=d.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(d.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};d.checked=f.checked,i.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=f.raw+d.tokens[0].raw,d.tokens[0].text=f.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(f)):d.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):d.tokens.unshift(f)}}if(!i.loose){let u=d.tokens.filter(g=>g.type==="space"),f=u.length>0&&u.some(g=>this.rules.other.anyLine.test(g.raw));i.loose=f}}if(i.loose)for(let d of i.items){d.loose=!0;for(let u of d.tokens)u.type==="text"&&(u.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=To(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let o of s)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(let o of i)a.rows.push(To(o,a.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[d]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let a=Ht(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{let a=dh(t[2],"()");if(a===-2)return;if(a>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],i=a[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),_o(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return _o(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...s[0]].length-1,a,o,l=i,d=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(s=u.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(o=[...a].length,s[3]||s[4]){l+=o;continue}else if((s[5]||s[6])&&i%3&&!((i+o)%3)){d+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+d);let f=[...s[0]][0].length,g=e.slice(0,i+s.index+f+o);if(Math.min(i,o)%2){let c=g.slice(1,-1);return{type:"em",raw:g,text:c,tokens:this.lexer.inlineTokens(c)}}let h=g.slice(2,-2);return{type:"strong",raw:g,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Te=class hi{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||bt,this.options.tokenizer=this.options.tokenizer||new Kn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:he,block:An.normal,inline:zt.normal};this.options.pedantic?(n.block=An.pedantic,n.inline=zt.pedantic):this.options.gfm&&(n.block=An.gfm,this.options.breaks?n.inline=zt.breaks:n.inline=zt.gfm),this.tokenizer.rules=n}static get rules(){return{block:An,inline:zt}}static lex(t,n){return new hi(n).lex(t)}static lexInline(t,n){return new hi(n).inlineTokens(t)}lex(t){t=t.replace(he.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(he.tabCharGlobal,"    ").replace(he.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let o=n.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let o=1/0,l=t.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let o=n.at(-1);s&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i),s=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let o=n.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(t){let o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,i=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=i[2]?i[2].length:0,s=s.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let o=!1,l="";for(;t;){o||(l=""),o=!1;let d;if(this.options.extensions?.inline?.some(f=>(d=f.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let f=n.at(-1);d.type==="text"&&f?.type==="text"?(f.raw+=d.raw,f.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,s,l)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let u=t;if(this.options.extensions?.startInline){let f=1/0,g=t.slice(1),h;this.options.extensions.startInline.forEach(c=>{h=c.call({lexer:this},g),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(u=t.substring(0,f+1))}if(d=this.tokenizer.inlineText(u)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),o=!0;let f=n.at(-1);f?.type==="text"?(f.raw+=d.raw,f.text+=d.text):n.push(d);continue}if(t){let f="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}},jn=class{options;parser;constructor(e){this.options=e||bt}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(he.notSpaceStart)?.[0],i=e.replace(he.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Ke(s)+'">'+(n?i:Ke(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:Ke(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let o=0;o<e.items.length;o++){let l=e.items[o];s+=this.listitem(l)}let i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+s+"</"+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let s="";for(let i=0;i<e.rows.length;i++){let a=e.rows[i];n="";for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ke(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),i=Co(e);if(i===null)return s;e=i;let a='<a href="'+e+'"';return t&&(a+=' title="'+Ke(t)+'"'),a+=">"+s+"</a>",a}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let i=Co(e);if(i===null)return Ke(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${Ke(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ke(e.text)}},na=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},_e=class vi{options;renderer;textRenderer;constructor(t){this.options=t||bt,this.options.renderer=this.options.renderer||new jn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new na}static parse(t,n){return new vi(n).parse(t)}static parseInline(t,n){return new vi(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let i=t[s];if(this.options.extensions?.renderers?.[i.type]){let o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){n+=l||"";continue}}let a=i;switch(a.type){case"space":{n+=this.renderer.space(a);break}case"hr":{n+=this.renderer.hr(a);break}case"heading":{n+=this.renderer.heading(a);break}case"code":{n+=this.renderer.code(a);break}case"table":{n+=this.renderer.table(a);break}case"blockquote":{n+=this.renderer.blockquote(a);break}case"list":{n+=this.renderer.list(a);break}case"checkbox":{n+=this.renderer.checkbox(a);break}case"html":{n+=this.renderer.html(a);break}case"def":{n+=this.renderer.def(a);break}case"paragraph":{n+=this.renderer.paragraph(a);break}case"text":{n+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(t,n=this.renderer){let s="";for(let i=0;i<t.length;i++){let a=t[i];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=l||"";continue}}let o=a;switch(o.type){case"escape":{s+=n.text(o);break}case"html":{s+=n.html(o);break}case"link":{s+=n.link(o);break}case"image":{s+=n.image(o);break}case"checkbox":{s+=n.checkbox(o);break}case"strong":{s+=n.strong(o);break}case"em":{s+=n.em(o);break}case"codespan":{s+=n.codespan(o);break}case"br":{s+=n.br(o);break}case"del":{s+=n.del(o);break}case"text":{s+=n.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},jt=class{options;block;constructor(e){this.options=e||bt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Te.lex:Te.lexInline}provideParser(){return this.block?_e.parse:_e.parseInline}},gh=class{defaults=Vi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=_e;Renderer=jn;TextRenderer=na;Lexer=Te;Tokenizer=Kn;Hooks=jt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let i=s;for(let a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(let a of i.rows)for(let o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{let i=s;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let o=i[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=t.renderers[i.name];a?t.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=t[i.level];a?a.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){let i=this.defaults.renderer||new jn(this.defaults);for(let a in n.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let o=a,l=n.renderer[o],d=i[o];i[o]=(...u)=>{let f=l.apply(i,u);return f===!1&&(f=d.apply(i,u)),f||""}}s.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new Kn(this.defaults);for(let a in n.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let o=a,l=n.tokenizer[o],d=i[o];i[o]=(...u)=>{let f=l.apply(i,u);return f===!1&&(f=d.apply(i,u)),f}}s.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new jt;for(let a in n.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let o=a,l=n.hooks[o],d=i[o];jt.passThroughHooks.has(a)?i[o]=u=>{if(this.defaults.async&&jt.passThroughHooksRespectAsync.has(a))return(async()=>{let g=await l.call(i,u);return d.call(i,g)})();let f=l.call(i,u);return d.call(i,f)}:i[o]=(...u)=>{if(this.defaults.async)return(async()=>{let g=await l.apply(i,u);return g===!1&&(g=await d.apply(i,u)),g})();let f=l.apply(i,u);return f===!1&&(f=d.apply(i,u)),f}}s.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,a=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(a.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Te.lex(e,t??this.defaults)}parser(e,t){return _e.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let o=i.hooks?await i.hooks.preprocess(t):t,l=await(i.hooks?await i.hooks.provideLexer():e?Te.lex:Te.lexInline)(o,i),d=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(d,i.walkTokens));let u=await(i.hooks?await i.hooks.provideParser():e?_e.parse:_e.parseInline)(d,i);return i.hooks?await i.hooks.postprocess(u):u})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let o=(i.hooks?i.hooks.provideLexer():e?Te.lex:Te.lexInline)(t,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():e?_e.parse:_e.parseInline)(o,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(o){return a(o)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Ke(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},mt=new gh;function G(e,t){return mt.parse(e,t)}G.options=G.setOptions=function(e){return mt.setOptions(e),G.defaults=mt.defaults,$l(G.defaults),G};G.getDefaults=Vi;G.defaults=bt;G.use=function(...e){return mt.use(...e),G.defaults=mt.defaults,$l(G.defaults),G};G.walkTokens=function(e,t){return mt.walkTokens(e,t)};G.parseInline=mt.parseInline;G.Parser=_e;G.parser=_e.parse;G.Renderer=jn;G.TextRenderer=na;G.Lexer=Te;G.lexer=Te.lex;G.Tokenizer=Kn;G.Hooks=jt;G.parse=G;G.options;G.setOptions;G.use;G.walkTokens;G.parseInline;_e.parse;Te.lex;G.setOptions({gfm:!0,breaks:!0});const Eo=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],Lo=["class","href","rel","target","title","start"];let Mo=!1;const ph=14e4,fh=4e4,hh=200,Us=5e4,ut=new Map;function vh(e){const t=ut.get(e);return t===void 0?null:(ut.delete(e),ut.set(e,t),t)}function Io(e,t){if(ut.set(e,t),ut.size<=hh)return;const n=ut.keys().next().value;n&&ut.delete(n)}function mh(){Mo||(Mo=!0,pi.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function mi(e){const t=e.trim();if(!t)return"";if(mh(),t.length<=Us){const o=vh(t);if(o!==null)return o}const n=mr(t,ph),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>fh){const l=`<pre class="code-block">${bh(`${n.text}${s}`)}</pre>`,d=pi.sanitize(l,{ALLOWED_TAGS:Eo,ALLOWED_ATTR:Lo});return t.length<=Us&&Io(t,d),d}const i=G.parse(`${n.text}${s}`),a=pi.sanitize(i,{ALLOWED_TAGS:Eo,ALLOWED_ATTR:Lo});return t.length<=Us&&Io(t,a),a}function bh(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const yh=1500,xh=2e3,Il="Copy as markdown",$h="Copied",wh="Copy failed";async function kh(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function Cn(e,t){e.title=t,e.setAttribute("aria-label",t)}function Sh(e){const t=e.label??Il;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const i=await kh(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!i){s.dataset.error="1",Cn(s,wh),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Cn(s,t))},xh);return}s.dataset.copied="1",Cn(s,$h),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Cn(s,t))},yh)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${le.copy}</span>
        <span class="chat-copy-btn__icon-check">${le.check}</span>
      </span>
    </button>
  `}function Ah(e){return Sh({text:()=>e,label:Il})}function Rl(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",i=t.content,a=Array.isArray(i)?i:null,o=Array.isArray(a)&&a.some(g=>{const h=g,c=(typeof h.type=="string"?h.type:"").toLowerCase();return c==="toolresult"||c==="tool_result"}),l=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||o||l)&&(n="toolResult");let d=[];typeof t.content=="string"?d=[{type:"text",text:t.content}]:Array.isArray(t.content)?d=t.content.map(g=>({type:g.type||"text",text:g.text,name:g.name,args:g.args||g.arguments})):typeof t.text=="string"&&(d=[{type:"text",text:t.text}]);const u=typeof t.timestamp=="number"?t.timestamp:Date.now(),f=typeof t.id=="string"?t.id:void 0;return{role:n,content:d,timestamp:u,id:f}}function sa(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function Dl(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const Ch={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},Th={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},_h={fallback:Ch,tools:Th},Pl=_h,Ro=Pl.fallback??{icon:"puzzle"},Eh=Pl.tools??{};function Lh(e){return(e??"tool").trim()}function Mh(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function Ih(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function Fl(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>Fl(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function Rh(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function Dh(e,t){for(const n of t){const s=Rh(e,n),i=Fl(s);if(i)return i}}function Ph(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,i=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&i!==void 0?`${n}:${s}-${s+i}`:n}function Fh(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function Nh(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function Oh(e){const t=Lh(e.name),n=t.toLowerCase(),s=Eh[n],i=s?.icon??Ro.icon??"puzzle",a=s?.title??Mh(t),o=s?.label??t,l=e.args&&typeof e.args=="object"?e.args.action:void 0,d=typeof l=="string"?l.trim():void 0,u=Nh(s,d),f=Ih(u?.label??d);let g;n==="read"&&(g=Ph(e.args)),!g&&(n==="write"||n==="edit"||n==="attach")&&(g=Fh(e.args));const h=u?.detailKeys??s?.detailKeys??Ro.detailKeys??[];return!g&&h.length>0&&(g=Dh(e.args,h)),!g&&e.meta&&(g=e.meta),g&&(g=Uh(g)),{name:t,icon:i,title:a,label:o,verb:f,detail:g}}function Bh(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function Uh(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const zh=80,Hh=2,Do=100;function Kh(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function jh(e){const t=e.split(`
`),n=t.slice(0,Hh),s=n.join(`
`);return s.length>Do?s.slice(0,Do)+"…":n.length<t.length?s+"…":s}function Wh(e){const t=e,n=qh(t.content),s=[];for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(a)||typeof i.name=="string"&&i.arguments!=null)&&s.push({kind:"call",name:i.name??"tool",args:Gh(i.arguments??i.args)})}for(const i of n){const a=(typeof i.type=="string"?i.type:"").toLowerCase();if(a!=="toolresult"&&a!=="tool_result")continue;const o=Vh(i),l=typeof i.name=="string"?i.name:"tool";s.push({kind:"result",name:l,text:o})}if(Dl(e)&&!s.some(i=>i.kind==="result")){const i=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",a=Wr(e)??void 0;s.push({kind:"result",name:i,text:a})}return s}function Po(e,t){const n=Oh({name:e.name,args:e.args}),s=Bh(n),i=!!e.text?.trim(),a=!!t,o=a?()=>{if(i){t(Kh(e.text));return}const g=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(g)}:void 0,l=i&&(e.text?.length??0)<=zh,d=i&&!l,u=i&&l,f=!i;return r`
    <div
      class="chat-tool-card ${a?"chat-tool-card--clickable":""}"
      @click=${o}
      role=${a?"button":v}
      tabindex=${a?"0":v}
      @keydown=${a?g=>{g.key!=="Enter"&&g.key!==" "||(g.preventDefault(),o?.())}:v}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${le[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${a?r`<span class="chat-tool-card__action">${i?"View":""} ${le.check}</span>`:v}
        ${f&&!a?r`<span class="chat-tool-card__status">${le.check}</span>`:v}
      </div>
      ${s?r`<div class="chat-tool-card__detail">${s}</div>`:v}
      ${f?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:v}
      ${d?r`<div class="chat-tool-card__preview mono">${jh(e.text)}</div>`:v}
      ${u?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:v}
    </div>
  `}function qh(e){return Array.isArray(e)?e.filter(Boolean):[]}function Gh(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function Vh(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function Qh(e){const n=e.content,s=[];if(Array.isArray(n))for(const i of n){if(typeof i!="object"||i===null)continue;const a=i;if(a.type==="image"){const o=a.source;if(o?.type==="base64"&&typeof o.data=="string"){const l=o.data,d=o.media_type||"image/png",u=l.startsWith("data:")?l:`data:${d};base64,${l}`;s.push({url:u})}else typeof a.url=="string"&&s.push({url:a.url})}else if(a.type==="image_url"){const o=a.image_url;typeof o?.url=="string"&&s.push({url:o.url})}}return s}function Yh(e){return r`
    <div class="chat-group assistant">
      ${ia("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Jh(e,t,n,s){const i=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),a=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${ia("assistant",s)}
      <div class="chat-group-messages">
        ${Nl({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${i}</span>
        </div>
      </div>
    </div>
  `}function Zh(e,t){const n=sa(e.role),s=t.assistantName??"Assistant",i=n==="user"?"You":n==="assistant"?s:n,a=n==="user"?"user":n==="assistant"?"assistant":"other",o=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return r`
    <div class="chat-group ${a}">
      ${ia(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((l,d)=>Nl(l.message,{isStreaming:e.isStreaming&&d===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${i}</span>
          <span class="chat-group-timestamp">${o}</span>
        </div>
      </div>
    </div>
  `}function ia(e,t){const n=sa(e),s=t?.name?.trim()||"Assistant",i=t?.avatar?.trim()||"",a=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",o=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return i&&n==="assistant"?Xh(i)?r`<img
        class="chat-avatar ${o}"
        src="${i}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${o}">${i}</div>`:r`<div class="chat-avatar ${o}">${a}</div>`}function Xh(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function ev(e){return e.length===0?v:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function Nl(e,t,n){const s=e,i=typeof s.role=="string"?s.role:"unknown",a=Dl(e)||i.toLowerCase()==="toolresult"||i.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",o=Wh(e),l=o.length>0,d=Qh(e),u=d.length>0,f=Wr(e),g=t.showReasoning&&i==="assistant"?Ru(e):null,h=f?.trim()?f:null,c=g?Pu(g):null,p=h,m=i==="assistant"&&!!p?.trim(),$=["chat-bubble",m?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!p&&l&&a?r`${o.map(S=>Po(S,n))}`:!p&&!l&&!u?v:r`
    <div class="${$}">
      ${m?Ah(p):v}
      ${ev(d)}
      ${c?r`<div class="chat-thinking">${ci(mi(c))}</div>`:v}
      ${p?r`<div class="chat-text">${ci(mi(p))}</div>`:v}
      ${o.map(S=>Po(S,n))}
    </div>
  `}function tv(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${le.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${ci(mi(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var nv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,cs=(e,t,n,s)=>{for(var i=s>1?void 0:s?sv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&nv(t,n,i),i};let Mt=class extends Tt{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,i=(e.clientX-this.startX)/n;let a=this.startRatio+i;a=Math.max(this.minRatio,Math.min(this.maxRatio,a)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:a},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return v}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};Mt.styles=Zl`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;cs([Yn({type:Number})],Mt.prototype,"splitRatio",2);cs([Yn({type:Number})],Mt.prototype,"minRatio",2);cs([Yn({type:Number})],Mt.prototype,"maxRatio",2);Mt=cs([or("resizable-divider")],Mt);const iv=5e3;function Fo(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function av(e){return e?e.active?r`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${le.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<iv?r`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${le.check} Context compacted
        </div>
      `:v:v}function ov(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function rv(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let i=0;i<n.length;i++){const a=n[i];a.type.startsWith("image/")&&s.push(a)}if(s.length!==0){e.preventDefault();for(const i of s){const a=i.getAsFile();if(!a)continue;const o=new FileReader;o.addEventListener("load",()=>{const l=o.result,d={id:ov(),dataUrl:l,mimeType:a.type},u=t.attachments??[];t.onAttachmentsChange?.([...u,d])}),o.readAsDataURL(a)}}}function lv(e){const t=e.attachments??[];return t.length===0?v:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            <img
              src=${n.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(i=>i.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${le.x}
            </button>
          </div>
        `)}
    </div>
  `}function cv(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),a=e.sessions?.sessions?.find(c=>c.key===e.sessionKey)?.reasoningLevel??"off",o=e.showThinking&&a!=="off",l={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},d=(e.attachments?.length??0)>0,u=e.connected?d?"Add a message or paste more images...":"Message (↩ to send, Shift+↩ for line breaks, paste images)":"Connect to the gateway to start chatting…",f=e.splitRatio??.6,g=!!(e.sidebarOpen&&e.onCloseSidebar),h=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:v}
      ${nl(uv(e),c=>c.key,c=>c.kind==="reading-indicator"?Yh(l):c.kind==="stream"?Jh(c.text,c.startedAt,e.onOpenSidebar,l):c.kind==="group"?Zh(c,{onOpenSidebar:e.onOpenSidebar,showReasoning:o,assistantName:e.assistantName,assistantAvatar:l.avatar}):v)}
    </div>
  `;return r`
    <section class="card chat">
      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:v}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:v}

      ${av(e.compactionStatus)}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${le.x}
            </button>
          `:v}

      <div
        class="chat-split-container ${g?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${g?`0 0 ${f*100}%`:"1 1 100%"}"
        >
          ${h}
        </div>

        ${g?r`
              <resizable-divider
                .splitRatio=${f}
                @resize=${c=>e.onSplitRatioChange?.(c.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${tv({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:v}
      </div>

      ${e.queue.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(c=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${c.text||(c.attachments?.length?`Image (${c.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(c.id)}
                      >
                        ${le.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:v}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${le.arrowDown}
            </button>
          `:v}

      <div class="chat-compose">
        ${lv(e)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${lf(c=>c&&Fo(c))}
              .value=${e.draft}
              ?disabled=${!e.connected}
              @keydown=${c=>{c.key==="Enter"&&(c.isComposing||c.keyCode===229||c.shiftKey||e.connected&&(c.preventDefault(),t&&e.onSend()))}}
              @input=${c=>{const p=c.target;Fo(p),e.onDraftChange(p.value)}}
              @paste=${c=>rv(c,e)}
              placeholder=${u}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"Stop":"New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?"Queue":"Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `}const No=200;function dv(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const i=Rl(s.message),a=sa(i.role),o=i.timestamp||Date.now();!n||n.role!==a?(n&&t.push(n),n={kind:"group",key:`group:${a}:${s.key}`,role:a,messages:[{message:s.message,key:s.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function uv(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-No);i>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${No} messages (${i} hidden).`,timestamp:Date.now()}});for(let a=i;a<n.length;a++){const o=n[a],l=Rl(o);!e.showThinking&&l.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:Oo(o,a),message:o})}if(e.showThinking)for(let a=0;a<s.length;a++)t.push({kind:"message",key:Oo(s[a],a+n.length),message:s[a]});if(e.stream!==null){const a=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:a,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:a})}return dv(t)}function Oo(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const i=typeof n.id=="string"?n.id:"";if(i)return`msg:${i}`;const a=typeof n.messageId=="string"?n.messageId:"";if(a)return`msg:${a}`;const o=typeof n.timestamp=="number"?n.timestamp:null,l=typeof n.role=="string"?n.role:"unknown";return o!=null?`msg:${l}:${o}:${t}`:`msg:${l}:${t}`}const bi={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Bo=[{key:"env",label:"Environment"},{key:"update",label:"Updates"},{key:"agents",label:"Agents"},{key:"auth",label:"Authentication"},{key:"channels",label:"Channels"},{key:"messages",label:"Messages"},{key:"commands",label:"Commands"},{key:"hooks",label:"Hooks"},{key:"skills",label:"Skills"},{key:"tools",label:"Tools"},{key:"gateway",label:"Gateway"},{key:"wizard",label:"Setup Wizard"}],Uo="__all__";function zo(e){return bi[e]??bi.default}function gv(e,t){const n=Gi[e];return n||{label:t?.title??We(e),description:t?.description??""}}function pv(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Pe(n)!=="object"||!n.properties)return[];const i=Object.entries(n.properties).map(([a,o])=>{const l=Se([t,a],s),d=l?.label??o.title??We(a),u=l?.help??o.description??"",f=l?.order??50;return{key:a,label:d,description:u,order:f}});return i.sort((a,o)=>a.order!==o.order?a.order-o.order:a.key.localeCompare(o.key)),i}function fv(e,t){if(!e||!t)return[];const n=[];function s(i,a,o){if(i===a)return;if(typeof i!=typeof a){n.push({path:o,from:i,to:a});return}if(typeof i!="object"||i===null||a===null){i!==a&&n.push({path:o,from:i,to:a});return}if(Array.isArray(i)&&Array.isArray(a)){JSON.stringify(i)!==JSON.stringify(a)&&n.push({path:o,from:i,to:a});return}const l=i,d=a,u=new Set([...Object.keys(l),...Object.keys(d)]);for(const f of u)s(l[f],d[f],o?`${o}.${f}`:f)}return s(e,t,""),n}function Ho(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function hv(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=pl(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,i=n.schema?.properties??{},a=Bo.filter(_=>_.key in i),o=new Set(Bo.map(_=>_.key)),l=Object.keys(i).filter(_=>!o.has(_)).map(_=>({key:_,label:_.charAt(0).toUpperCase()+_.slice(1)})),d=[...a,...l],u=e.activeSection&&n.schema&&Pe(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,f=e.activeSection?gv(e.activeSection,u):null,g=e.activeSection?pv({key:e.activeSection,schema:u,uiHints:e.uiHints}):[],h=e.formMode==="form"&&!!e.activeSection&&g.length>0,c=e.activeSubsection===Uo,p=e.searchQuery||c?null:e.activeSubsection??g[0]?.key??null,m=e.formMode==="form"?fv(e.originalValue,e.formValue):[],$=e.formMode==="raw"&&e.raw!==e.originalRaw,S=e.formMode==="form"?m.length>0:$,y=!!e.formValue&&!e.loading&&!!n.schema,C=e.connected&&!e.saving&&S&&(e.formMode==="raw"?!0:y),A=e.connected&&!e.applying&&!e.updating&&S&&(e.formMode==="raw"?!0:y),T=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">Settings</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${t}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder="Search settings..."
            .value=${e.searchQuery}
            @input=${_=>e.onSearchChange(_.target.value)}
          />
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:v}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${bi.all}</span>
            <span class="config-nav__label">All Settings</span>
          </button>
          ${d.map(_=>r`
              <button
                class="config-nav__item ${e.activeSection===_.key?"active":""}"
                @click=${()=>e.onSectionChange(_.key)}
              >
                <span class="config-nav__icon"
                  >${zo(_.key)}</span
                >
                <span class="config-nav__label">${_.label}</span>
              </button>
            `)}
        </nav>

        <!-- Mode toggle at bottom -->
        <div class="config-sidebar__footer">
          <div class="config-mode-toggle">
            <button
              class="config-mode-toggle__btn ${e.formMode==="form"?"active":""}"
              ?disabled=${e.schemaLoading||!e.schema}
              @click=${()=>e.onFormModeChange("form")}
            >
              Form
            </button>
            <button
              class="config-mode-toggle__btn ${e.formMode==="raw"?"active":""}"
              @click=${()=>e.onFormModeChange("raw")}
            >
              Raw
            </button>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${S?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?"Unsaved changes":`${m.length} unsaved change${m.length!==1?"s":""}`}</span
                  >
                `:r`
                    <span class="config-status muted">No changes</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?"Loading…":"Reload"}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!C}
              @click=${e.onSave}
            >
              ${e.saving?"Saving…":"Save"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!A}
              @click=${e.onApply}
            >
              ${e.applying?"Applying…":"Apply"}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!T}
              @click=${e.onUpdate}
            >
              ${e.updating?"Updating…":"Update"}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${S&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >View ${m.length} pending
                    change${m.length!==1?"s":""}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${m.map(_=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${_.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Ho(_.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Ho(_.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:v}
        ${f&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${zo(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${f.label}
                  </div>
                  ${f.description?r`<div class="config-section-hero__desc">
                        ${f.description}
                      </div>`:v}
                </div>
              </div>
            `:v}
        ${h?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${p===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(Uo)}
                >
                  All
                </button>
                ${g.map(_=>r`
                    <button
                      class="config-subnav__item ${p===_.key?"active":""}"
                      title=${_.description||_.label}
                      @click=${()=>e.onSubsectionChange(_.key)}
                    >
                      ${_.label}
                    </button>
                  `)}
              </div>
            `:v}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:Cp({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:p})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          Form view can't safely edit some fields. Use Raw to avoid losing config entries.
                        </div>
                      `:v}
              `:r`
                <label class="field config-raw-field">
                  <span>Raw JSON5</span>
                  <textarea
                    .value=${e.raw}
                    @input=${_=>e.onRawChange(_.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:v}
      </main>
    </div>
  `}function vv(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(i=>s.has(i)?!1:(s.add(i),!0))}function mv(e,t){if(t==="last")return"last";const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function bv(e){const t=vv(e);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">Scheduler</div>
        <div class="card-sub">Gateway-owned cron scheduler status.</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Enabled</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?"Yes":"No":"n/a"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Jobs</div>
            <div class="stat-value">${e.status?.jobs??"n/a"}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Next wake</div>
            <div class="stat-value">${qi(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
          ${e.error?r`<span class="muted">${e.error}</span>`:v}
        </div>
      </div>

      <div class="card">
        <div class="card-title">New Job</div>
        <div class="card-sub">Create a scheduled wakeup or agent run.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Name</span>
            <input
              .value=${e.form.name}
              @input=${n=>e.onFormChange({name:n.target.value})}
            />
          </label>
          <label class="field">
            <span>Description</span>
            <input
              .value=${e.form.description}
              @input=${n=>e.onFormChange({description:n.target.value})}
            />
          </label>
          <label class="field">
            <span>Agent ID</span>
            <input
              .value=${e.form.agentId}
              @input=${n=>e.onFormChange({agentId:n.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>Enabled</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${n=>e.onFormChange({enabled:n.target.checked})}
            />
          </label>
          <label class="field">
            <span>Schedule</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${n=>e.onFormChange({scheduleKind:n.target.value})}
            >
              <option value="every">Every</option>
              <option value="at">At</option>
              <option value="cron">Cron</option>
            </select>
          </label>
        </div>
        ${yv(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>Session</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${n=>e.onFormChange({sessionTarget:n.target.value})}
            >
              <option value="main">Main</option>
              <option value="isolated">Isolated</option>
            </select>
          </label>
          <label class="field">
            <span>Wake mode</span>
            <select
              .value=${e.form.wakeMode}
              @change=${n=>e.onFormChange({wakeMode:n.target.value})}
            >
              <option value="next-heartbeat">Next heartbeat</option>
              <option value="now">Now</option>
            </select>
          </label>
          <label class="field">
            <span>Payload</span>
            <select
              .value=${e.form.payloadKind}
              @change=${n=>e.onFormChange({payloadKind:n.target.value})}
            >
              <option value="systemEvent">System event</option>
              <option value="agentTurn">Agent turn</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?"System text":"Agent message"}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${n=>e.onFormChange({payloadText:n.target.value})}
            rows="4"
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?r`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>Delivery</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${n=>e.onFormChange({deliveryMode:n.target.value})}
                    >
                      <option value="announce">Announce summary (default)</option>
                      <option value="none">None (internal)</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>Timeout (seconds)</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${n=>e.onFormChange({timeoutSeconds:n.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?r`
                          <label class="field">
                            <span>Channel</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${n=>e.onFormChange({deliveryChannel:n.target.value})}
                            >
                              ${t.map(n=>r`<option value=${n}>
                                    ${mv(e,n)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>To</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${n=>e.onFormChange({deliveryTo:n.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:v}
                </div>
              `:v}
        <div class="row" style="margin-top: 14px;">
          <button class="btn primary" ?disabled=${e.busy} @click=${e.onAdd}>
            ${e.busy?"Saving…":"Add job"}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Jobs</div>
      <div class="card-sub">All scheduled jobs stored in the gateway.</div>
      ${e.jobs.length===0?r`
              <div class="muted" style="margin-top: 12px">No jobs yet.</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(n=>xv(n,e))}
            </div>
          `}
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Run history</div>
      <div class="card-sub">Latest runs for ${e.runsJobId??"(select a job)"}.</div>
      ${e.runsJobId==null?r`
              <div class="muted" style="margin-top: 12px">Select a job to inspect run history.</div>
            `:e.runs.length===0?r`
                <div class="muted" style="margin-top: 12px">No runs yet.</div>
              `:r`
              <div class="list" style="margin-top: 12px;">
                ${e.runs.map(n=>$v(n))}
              </div>
            `}
    </section>
  `}function yv(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>Run at</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>Every</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>Unit</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
          </select>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>Expression</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function xv(e,t){const s=`list-item list-item-clickable${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div class=${s} @click=${()=>t.onLoadRuns(e.id)}>
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${ol(e)}</div>
        <div class="muted">${rl(e)}</div>
        ${e.agentId?r`<div class="muted">Agent: ${e.agentId}</div>`:v}
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.enabled?"enabled":"disabled"}</span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
      </div>
      <div class="list-meta">
        <div>${al(e)}</div>
        <div class="row" style="justify-content: flex-end; margin-top: 8px;">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onLoadRuns(e.id)}}
          >
            Runs
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${i=>{i.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function $v(e){return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${Xt(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${e.error?r`<div class="muted">${e.error}</div>`:v}
      </div>
    </div>
  `}function wv(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,i=n?.warn??0,a=n?.info??0,o=s>0?"danger":i>0?"warn":"success",l=s>0?`${s} critical`:i>0?`${i} warnings`:"No critical issues";return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">Snapshots</div>
            <div class="card-sub">Status, health, and heartbeat data.</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Refreshing…":"Refresh"}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">Status</div>
            ${n?r`<div class="callout ${o}" style="margin-top: 8px;">
                  Security audit: ${l}${a>0?` · ${a} info`:""}. Run
                  <span class="mono">openclaw security audit --deep</span> for details.
                </div>`:v}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Health</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">Last heartbeat</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Manual RPC</div>
        <div class="card-sub">Send a raw gateway method with JSON params.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>Method</span>
            <input
              .value=${e.callMethod}
              @input=${d=>e.onCallMethodChange(d.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>Params (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${d=>e.onCallParamsChange(d.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>Call</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:v}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:v}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Models</div>
      <div class="card-sub">Catalog from models.list.</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Event Log</div>
      <div class="card-sub">Latest gateway events.</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">No events yet.</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(d=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${d.event}</div>
                      <div class="list-sub">${new Date(d.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${Kg(d.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function kv(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function it(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:v}function Sv(e){const t=e.execApprovalQueue[0];if(!t)return v;const n=t.request,s=t.expiresAtMs-Date.now(),i=s>0?`expires in ${kv(s)}`:"expired",a=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${i}</div>
          </div>
          ${a>1?r`<div class="exec-approval-queue">${a} pending</div>`:v}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${it("Host",n.host)}
          ${it("Agent",n.agentId)}
          ${it("Session",n.sessionKey)}
          ${it("CWD",n.cwd)}
          ${it("Resolved",n.resolvedPath)}
          ${it("Security",n.security)}
          ${it("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:v}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Av(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:v}function Cv(e){return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Connected Instances</div>
          <div class="card-sub">Presence beacons from the gateway and clients.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:v}
      ${e.statusMessage?r`<div class="callout" style="margin-top: 12px;">
            ${e.statusMessage}
          </div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${e.entries.length===0?r`
                <div class="muted">No instances reported yet.</div>
              `:e.entries.map(t=>Tv(t))}
      </div>
    </section>
  `}function Tv(e){const t=e.lastInputSeconds!=null?`${e.lastInputSeconds}s ago`:"n/a",n=e.mode??"unknown",s=Array.isArray(e.roles)?e.roles.filter(Boolean):[],i=Array.isArray(e.scopes)?e.scopes.filter(Boolean):[],a=i.length>0?i.length>3?`${i.length} scopes`:`scopes: ${i.join(", ")}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.host??"unknown host"}</div>
        <div class="list-sub">${Ug(e)}</div>
        <div class="chip-row">
          <span class="chip">${n}</span>
          ${s.map(o=>r`<span class="chip">${o}</span>`)}
          ${a?r`<span class="chip">${a}</span>`:v}
          ${e.platform?r`<span class="chip">${e.platform}</span>`:v}
          ${e.deviceFamily?r`<span class="chip">${e.deviceFamily}</span>`:v}
          ${e.modelIdentifier?r`<span class="chip">${e.modelIdentifier}</span>`:v}
          ${e.version?r`<span class="chip">${e.version}</span>`:v}
        </div>
      </div>
      <div class="list-meta">
        <div>${zg(e)}</div>
        <div class="muted">Last input ${t}</div>
        <div class="muted">Reason ${e.reason??""}</div>
      </div>
    </div>
  `}const Ko=["trace","debug","info","warn","error","fatal"];function _v(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Ev(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Lv(e){const t=e.filterText.trim().toLowerCase(),n=Ko.some(a=>!e.levelFilters[a]),s=e.entries.filter(a=>a.level&&!e.levelFilters[a.level]?!1:Ev(a,t)),i=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Logs</div>
          <div class="card-sub">Gateway file logs (JSONL).</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?"Loading…":"Refresh"}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(a=>a.raw),i)}
          >
            Export ${i}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${a=>e.onFilterTextChange(a.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${a=>e.onToggleAutoFollow(a.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${Ko.map(a=>r`
            <label class="chip log-chip ${a}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[a]}
                @change=${o=>e.onLevelToggle(a,o.target.checked)}
              />
              <span>${a}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:v}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:v}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:v}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(a=>r`
                <div class="log-row">
                  <div class="log-time mono">${_v(a.time)}</div>
                  <div class="log-level ${a.level??""}">${a.level??""}</div>
                  <div class="log-subsystem mono">${a.subsystem??""}</div>
                  <div class="log-message mono">${a.message??a.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Mv(e){const t=Nv(e),n=Kv(e);return r`
    ${Wv(n)}
    ${jv(t)}
    ${Iv(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Nodes</div>
          <div class="card-sub">Paired devices and live links.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">No nodes found.</div>
              `:e.nodes.map(s=>tm(s))}
      </div>
    </section>
  `}function Iv(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Devices</div>
          <div class="card-sub">Pairing requests + role tokens.</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?"Loading…":"Refresh"}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:v}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">Pending</div>
              ${n.map(i=>Rv(i,e))}
            `:v}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">Paired</div>
              ${s.map(i=>Dv(i,e))}
            `:v}
        ${n.length===0&&s.length===0?r`
                <div class="muted">No paired devices.</div>
              `:v}
      </div>
    </section>
  `}function Rv(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?V(e.ts):"n/a",i=e.role?.trim()?`role: ${e.role}`:"role: -",a=e.isRepair?" · repair":"",o=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${o}</div>
        <div class="muted" style="margin-top: 6px;">
          ${i} · requested ${s}${a}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            Approve
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  `}function Dv(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",i=`roles: ${Gs(e.roles)}`,a=`scopes: ${Gs(e.scopes)}`,o=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${i} · ${a}</div>
        ${o.length===0?r`
                <div class="muted" style="margin-top: 6px">Tokens: none</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">Tokens</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${o.map(l=>Pv(e.deviceId,l,t))}
              </div>
            `}
      </div>
    </div>
  `}function Pv(e,t,n){const s=t.revokedAtMs?"revoked":"active",i=`scopes: ${Gs(t.scopes)}`,a=V(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${i} · ${a}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          Rotate
        </button>
        ${t.revokedAtMs?v:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                Revoke
              </button>
            `}
      </div>
    </div>
  `}const Ve="__defaults__",jo=[{value:"deny",label:"Deny"},{value:"allowlist",label:"Allowlist"},{value:"full",label:"Full"}],Fv=[{value:"off",label:"Off"},{value:"on-miss",label:"On miss"},{value:"always",label:"Always"}];function Nv(e){const t=e.configForm,n=Zv(e.nodes),{defaultBinding:s,agents:i}=em(t),a=!!t,o=e.configSaving||e.configFormMode==="raw";return{ready:a,disabled:o,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:i,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function Wo(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function Ov(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function Bv(e){const t=e?.defaults??{};return{security:Wo(t.security),ask:Ov(t.ask),askFallback:Wo(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function Uv(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(i=>{if(!i||typeof i!="object")return;const a=i,o=typeof a.id=="string"?a.id.trim():"";if(!o)return;const l=typeof a.name=="string"?a.name.trim():void 0,d=a.default===!0;s.push({id:o,name:l||void 0,isDefault:d})}),s}function zv(e,t){const n=Uv(e),s=Object.keys(t?.agents??{}),i=new Map;n.forEach(o=>i.set(o.id,o)),s.forEach(o=>{i.has(o)||i.set(o,{id:o})});const a=Array.from(i.values());return a.length===0&&a.push({id:"main",isDefault:!0}),a.sort((o,l)=>{if(o.isDefault&&!l.isDefault)return-1;if(!o.isDefault&&l.isDefault)return 1;const d=o.name?.trim()?o.name:o.id,u=l.name?.trim()?l.name:l.id;return d.localeCompare(u)}),a}function Hv(e,t){return e===Ve?Ve:e&&t.some(n=>n.id===e)?e:Ve}function Kv(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=Bv(t),i=zv(e.configForm,t),a=Xv(e.nodes),o=e.execApprovalsTarget;let l=o==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;o==="node"&&l&&!a.some(g=>g.id===l)&&(l=null);const d=Hv(e.execApprovalsSelectedAgent,i),u=d!==Ve?(t?.agents??{})[d]??null:null,f=Array.isArray(u?.allowlist)?u.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:d,selectedAgent:u,agents:i,allowlist:f,target:o,targetNodeId:l,targetNodes:a,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function jv(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec node binding</div>
          <div class="card-sub">
            Pin agents to a specific node when using <span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?"Saving…":"Save"}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                Switch the Config tab to <strong>Form</strong> mode to edit bindings here.
              </div>
            `:v}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">Default binding</div>
                  <div class="list-sub">Used when agents do not override a node binding.</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>Node</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const a=s.target.value.trim();e.onBindDefault(a||null)}}
                    >
                      <option value="" ?selected=${n===""}>Any node</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?v:r`
                          <div class="muted">No nodes with system.run available.</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">No agents found.</div>
                    `:e.agents.map(s=>Jv(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load config to edit bindings.</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?"Loading…":"Load config"}
            </button>
          </div>`}
    </section>
  `}function Wv(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Exec approvals</div>
          <div class="card-sub">
            Allowlist and approval policy for <span class="mono">exec host=gateway/node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?"Saving…":"Save"}
        </button>
      </div>

      ${qv(e)}

      ${t?r`
            ${Gv(e)}
            ${Vv(e)}
            ${e.selectedScope===Ve?v:Qv(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">Load exec approvals to edit allowlists.</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?"Loading…":"Load approvals"}
            </button>
          </div>`}
    </section>
  `}function qv(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Target</div>
          <div class="list-sub">
            Gateway edits local approvals; node edits the selected node.
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Host</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const o=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||o)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>Gateway</option>
              <option value="node" ?selected=${e.target==="node"}>Node</option>
            </select>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>Node</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const a=s.target.value.trim();e.onSelectTarget("node",a||null)}}
                  >
                    <option value="" ?selected=${n===""}>Select node</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:v}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">No nodes advertise exec approvals yet.</div>
            `:v}
    </div>
  `}function Gv(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">Scope</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===Ve?"active":""}"
          @click=${()=>e.onSelectScope(Ve)}
        >
          Defaults
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function Vv(e){const t=e.selectedScope===Ve,n=e.defaults,s=e.selectedAgent??{},i=t?["defaults"]:["agents",e.selectedScope],a=typeof s.security=="string"?s.security:void 0,o=typeof s.ask=="string"?s.ask:void 0,l=typeof s.askFallback=="string"?s.askFallback:void 0,d=t?n.security:a??"__default__",u=t?n.ask:o??"__default__",f=t?n.askFallback:l??"__default__",g=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,h=g??n.autoAllowSkills,c=g==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Security</div>
          <div class="list-sub">
            ${t?"Default security mode.":`Default: ${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${p=>{const $=p.target.value;!t&&$==="__default__"?e.onRemove([...i,"security"]):e.onPatch([...i,"security"],$)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${d==="__default__"}>
                    Use default (${n.security})
                  </option>`}
              ${jo.map(p=>r`<option
                    value=${p.value}
                    ?selected=${d===p.value}
                  >
                    ${p.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask</div>
          <div class="list-sub">
            ${t?"Default prompt policy.":`Default: ${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Mode</span>
            <select
              ?disabled=${e.disabled}
              @change=${p=>{const $=p.target.value;!t&&$==="__default__"?e.onRemove([...i,"ask"]):e.onPatch([...i,"ask"],$)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${u==="__default__"}>
                    Use default (${n.ask})
                  </option>`}
              ${Fv.map(p=>r`<option
                    value=${p.value}
                    ?selected=${u===p.value}
                  >
                    ${p.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Ask fallback</div>
          <div class="list-sub">
            ${t?"Applied when the UI prompt is unavailable.":`Default: ${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Fallback</span>
            <select
              ?disabled=${e.disabled}
              @change=${p=>{const $=p.target.value;!t&&$==="__default__"?e.onRemove([...i,"askFallback"]):e.onPatch([...i,"askFallback"],$)}}
            >
              ${t?v:r`<option value="__default__" ?selected=${f==="__default__"}>
                    Use default (${n.askFallback})
                  </option>`}
              ${jo.map(p=>r`<option
                    value=${p.value}
                    ?selected=${f===p.value}
                  >
                    ${p.label}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">Auto-allow skill CLIs</div>
          <div class="list-sub">
            ${t?"Allow skill executables listed by the Gateway.":c?`Using default (${n.autoAllowSkills?"on":"off"}).`:`Override (${h?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>Enabled</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${h}
              @change=${p=>{const m=p.target;e.onPatch([...i,"autoAllowSkills"],m.checked)}}
            />
          </label>
          ${!t&&!c?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...i,"autoAllowSkills"])}
              >
                Use default
              </button>`:v}
        </div>
      </div>
    </div>
  `}function Qv(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">Allowlist</div>
        <div class="card-sub">Case-insensitive glob patterns.</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        Add pattern
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">No allowlist entries yet.</div>
            `:n.map((s,i)=>Yv(e,s,i))}
    </div>
  `}function Yv(e,t,n){const s=t.lastUsedAt?V(t.lastUsedAt):"never",i=t.lastUsedCommand?Vs(t.lastUsedCommand,120):null,a=t.lastResolvedPath?Vs(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:"New pattern"}</div>
        <div class="list-sub">Last used: ${s}</div>
        ${i?r`<div class="list-sub mono">${i}</div>`:v}
        ${a?r`<div class="list-sub mono">${a}</div>`:v}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Pattern</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${o=>{const l=o.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],l.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          Remove
        </button>
      </div>
    </div>
  `}function Jv(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,i=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?"default agent":"agent"} ·
          ${n==="__default__"?`uses default (${t.defaultBinding??"any"})`:`override: ${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>Binding</span>
          <select
            ?disabled=${t.disabled||!i}
            @change=${a=>{const l=a.target.value.trim();t.onBindAgent(e.index,l==="__default__"?null:l)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              Use default
            </option>
            ${t.nodes.map(a=>r`<option
                  value=${a.id}
                  ?selected=${n===a.id}
                >
                  ${a.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function Zv(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.run"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function Xv(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(l=>String(l)==="system.execApprovals.get"||String(l)==="system.execApprovals.set"))continue;const a=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!a)continue;const o=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():a;t.push({id:a,label:o===a?a:`${o} · ${a}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function em(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},i=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,a=e.agents??{},o=Array.isArray(a.list)?a.list:[];if(o.length===0)return{defaultBinding:i,agents:[t]};const l=[];return o.forEach((d,u)=>{if(!d||typeof d!="object")return;const f=d,g=typeof f.id=="string"?f.id.trim():"";if(!g)return;const h=typeof f.name=="string"?f.name.trim():void 0,c=f.default===!0,m=(f.tools??{}).exec??{},$=typeof m.node=="string"&&m.node.trim()?m.node.trim():null;l.push({id:g,name:h||void 0,index:u,isDefault:c,binding:$})}),l.length===0&&l.push(t),{defaultBinding:i,agents:l}}function tm(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),i=Array.isArray(e.caps)?e.caps:[],a=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${n?"paired":"unpaired"}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${t?"connected":"offline"}
          </span>
          ${i.slice(0,12).map(o=>r`<span class="chip">${String(o)}</span>`)}
          ${a.slice(0,8).map(o=>r`<span class="chip">${String(o)}</span>`)}
        </div>
      </div>
    </div>
  `}function nm(e){const t=e.hello?.snapshot,n=t?.uptimeMs?vr(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",i=(()=>{if(e.connected||!e.lastError)return null;const o=e.lastError.toLowerCase();if(!(o.includes("unauthorized")||o.includes("connect failed")))return null;const d=!!e.settings.token.trim(),u=!!e.password.trim();return!d&&!u?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),a=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const l=e.lastError.toLowerCase();return!l.includes("secure context")&&!l.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18789</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">Gateway Access</div>
        <div class="card-sub">Where the dashboard connects and how it authenticates.</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>WebSocket URL</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${o=>{const l=o.target.value;e.onSettingsChange({...e.settings,gatewayUrl:l})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          <label class="field">
            <span>Gateway Token</span>
            <input
              .value=${e.settings.token}
              @input=${o=>{const l=o.target.value;e.onSettingsChange({...e.settings,token:l})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>Password (not stored)</span>
            <input
              type="password"
              .value=${e.password}
              @input=${o=>{const l=o.target.value;e.onPasswordChange(l)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>Default Session Key</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${o=>{const l=o.target.value;e.onSessionKeyChange(l)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>Connect</button>
          <button class="btn" @click=${()=>e.onRefresh()}>Refresh</button>
          <span class="muted">Click Connect to apply connection changes.</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Snapshot</div>
        <div class="card-sub">Latest gateway handshake information.</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">Status</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?"Connected":"Disconnected"}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">Uptime</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Tick Interval</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Last Channels Refresh</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?V(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${i??""}
              ${a??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">Instances</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">Presence beacons in the last 5 minutes.</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">Sessions</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">Recent session keys tracked by the gateway.</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">Cron</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?"Enabled":"Disabled"}
        </div>
        <div class="muted">Next wake ${qi(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">Notes</div>
      <div class="card-sub">Quick reminders for remote control setups.</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">Tailscale serve</div>
          <div class="muted">
            Prefer serve mode to keep the gateway on loopback with tailnet auth.
          </div>
        </div>
        <div>
          <div class="note-title">Session hygiene</div>
          <div class="muted">Use /new or sessions.patch to reset context.</div>
        </div>
        <div>
          <div class="note-title">Cron reminders</div>
          <div class="muted">Use isolated sessions for recurring runs.</div>
        </div>
      </div>
    </section>
  `}const sm=["","off","minimal","low","medium","high"],im=["","off","on"],am=[{value:"",label:"inherit"},{value:"off",label:"off (explicit)"},{value:"on",label:"on"}],om=["","off","on","stream"];function rm(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Ol(e){return rm(e)==="zai"}function lm(e){return Ol(e)?im:sm}function cm(e,t){return!t||!e||e==="off"?e:"on"}function dm(e,t){return e?t&&e==="on"?"low":e:null}function um(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Sessions</div>
          <div class="card-sub">Active session keys and per-session overrides.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>Active within (minutes)</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>Limit</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include global</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>Include unknown</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`Store: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>Key</div>
          <div>Label</div>
          <div>Kind</div>
          <div>Updated</div>
          <div>Tokens</div>
          <div>Thinking</div>
          <div>Verbose</div>
          <div>Reasoning</div>
          <div>Actions</div>
        </div>
        ${t.length===0?r`
                <div class="muted">No sessions found.</div>
              `:t.map(n=>gm(n,e.basePath,e.onPatch,e.onDelete,e.loading))}
      </div>
    </section>
  `}function gm(e,t,n,s,i){const a=e.updatedAt?V(e.updatedAt):"n/a",o=e.thinkingLevel??"",l=Ol(e.modelProvider),d=cm(o,l),u=lm(e.modelProvider),f=e.verboseLevel??"",g=e.reasoningLevel??"",h=e.displayName??e.key,c=e.kind!=="global",p=c?`${Bi("chat",t)}?session=${encodeURIComponent(e.key)}`:null;return r`
    <div class="table-row">
      <div class="mono">${c?r`<a href=${p} class="session-link">${h}</a>`:h}</div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${i}
          placeholder="(optional)"
          @change=${m=>{const $=m.target.value.trim();n(e.key,{label:$||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${a}</div>
      <div>${Hg(e)}</div>
      <div>
        <select
          .value=${d}
          ?disabled=${i}
          @change=${m=>{const $=m.target.value;n(e.key,{thinkingLevel:dm($,l)})}}
        >
          ${u.map(m=>r`<option value=${m}>${m||"inherit"}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${f}
          ?disabled=${i}
          @change=${m=>{const $=m.target.value;n(e.key,{verboseLevel:$||null})}}
        >
          ${am.map(m=>r`<option value=${m.value}>${m.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${g}
          ?disabled=${i}
          @change=${m=>{const $=m.target.value;n(e.key,{reasoningLevel:$||null})}}
        >
          ${om.map(m=>r`<option value=${m}>${m||"inherit"}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${i} @click=${()=>s(e.key)}>
          Delete
        </button>
      </div>
    </div>
  `}const Tn=[{id:"workspace",label:"Workspace Skills",sources:["openclaw-workspace"]},{id:"built-in",label:"Built-in Skills",sources:["openclaw-bundled"]},{id:"installed",label:"Installed Skills",sources:["openclaw-managed"]},{id:"extra",label:"Extra Skills",sources:["openclaw-extra"]}];function pm(e){const t=new Map;for(const a of Tn)t.set(a.id,{id:a.id,label:a.label,skills:[]});const n=Tn.find(a=>a.id==="built-in"),s={id:"other",label:"Other Skills",skills:[]};for(const a of e){const o=a.bundled?n:Tn.find(l=>l.sources.includes(a.source));o?t.get(o.id)?.skills.push(a):s.skills.push(a)}const i=Tn.map(a=>t.get(a.id)).filter(a=>!!(a&&a.skills.length>0));return s.skills.length>0&&i.push(s),i}function fm(e){const t=e.report?.skills??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(a=>[a.name,a.description,a.source].join(" ").toLowerCase().includes(n)):t,i=pm(s);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">Skills</div>
          <div class="card-sub">Bundled, managed, and workspace skills.</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?"Loading…":"Refresh"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>Filter</span>
          <input
            .value=${e.filter}
            @input=${a=>e.onFilterChange(a.target.value)}
            placeholder="Search skills"
          />
        </label>
        <div class="muted">${s.length} shown</div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${s.length===0?r`
              <div class="muted" style="margin-top: 16px">No skills found.</div>
            `:r`
            <div class="agent-skills-groups" style="margin-top: 16px;">
              ${i.map(a=>{const o=a.id==="workspace"||a.id==="built-in";return r`
                  <details class="agent-skills-group" ?open=${!o}>
                    <summary class="agent-skills-header">
                      <span>${a.label}</span>
                      <span class="muted">${a.skills.length}</span>
                    </summary>
                    <div class="list skills-grid">
                      ${a.skills.map(l=>hm(l,e))}
                    </div>
                  </details>
                `})}
            </div>
          `}
    </section>
  `}function hm(e,t){const n=t.busyKey===e.skillKey,s=t.edits[e.skillKey]??"",i=t.messages[e.skillKey]??null,a=e.install.length>0&&e.missing.bins.length>0,o=!!(e.bundled&&e.source!=="openclaw-bundled"),l=[...e.missing.bins.map(u=>`bin:${u}`),...e.missing.env.map(u=>`env:${u}`),...e.missing.config.map(u=>`config:${u}`),...e.missing.os.map(u=>`os:${u}`)],d=[];return e.disabled&&d.push("disabled"),e.blockedByAllowlist&&d.push("blocked by allowlist"),r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${e.emoji?`${e.emoji} `:""}${e.name}
        </div>
        <div class="list-sub">${Vs(e.description,140)}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${e.source}</span>
          ${o?r`
                  <span class="chip">bundled</span>
                `:v}
          <span class="chip ${e.eligible?"chip-ok":"chip-warn"}">
            ${e.eligible?"eligible":"blocked"}
          </span>
          ${e.disabled?r`
                  <span class="chip chip-warn">disabled</span>
                `:v}
        </div>
        ${l.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Missing: ${l.join(", ")}
              </div>
            `:v}
        ${d.length>0?r`
              <div class="muted" style="margin-top: 6px;">
                Reason: ${d.join(", ")}
              </div>
            `:v}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${n}
            @click=${()=>t.onToggle(e.skillKey,e.disabled)}
          >
            ${e.disabled?"Enable":"Disable"}
          </button>
          ${a?r`<button
                class="btn"
                ?disabled=${n}
                @click=${()=>t.onInstall(e.skillKey,e.name,e.install[0].id)}
              >
                ${n?"Installing…":e.install[0].label}
              </button>`:v}
        </div>
        ${i?r`<div
              class="muted"
              style="margin-top: 8px; color: ${i.kind==="error"?"var(--danger-color, #d14343)":"var(--success-color, #0a7f5a)"};"
            >
              ${i.message}
            </div>`:v}
        ${e.primaryEnv?r`
              <div class="field" style="margin-top: 10px;">
                <span>API key</span>
                <input
                  type="password"
                  .value=${s}
                  @input=${u=>t.onEdit(e.skillKey,u.target.value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${n}
                @click=${()=>t.onSaveKey(e.skillKey)}
              >
                Save key
              </button>
            `:v}
      </div>
    </div>
  `}const vm=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),Wn=e=>e.trim().toLowerCase(),mm=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},rt=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},aa=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),i=s.indexOf(":");if(i>0){const a=s.slice(0,i),o=s.slice(i+1);return{key:a,value:o,raw:s}}return{value:s,raw:s}}),bm=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),qo=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},Go=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},ym=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),xm=(e,t)=>{const n=Wn(t.value??"");if(!n)return!0;if(!t.key)return bm(e).some(i=>i.includes(n));switch(Wn(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return qo(e).some(i=>i.includes(n));case"model":return Go(e).some(i=>i.includes(n));case"tool":return ym(e).some(i=>i.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const i=mm(n);return i.test(e.key)||(e.sessionId?i.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return Go(e).length>0;case"provider":return qo(e).length>0;default:return!0}case"mintokens":{const i=rt(n);return i===null?!0:(e.usage?.totalTokens??0)>=i}case"maxtokens":{const i=rt(n);return i===null?!0:(e.usage?.totalTokens??0)<=i}case"mincost":{const i=rt(n);return i===null?!0:(e.usage?.totalCost??0)>=i}case"maxcost":{const i=rt(n);return i===null?!0:(e.usage?.totalCost??0)<=i}case"minmessages":{const i=rt(n);return i===null?!0:(e.usage?.messageCounts?.total??0)>=i}case"maxmessages":{const i=rt(n);return i===null?!0:(e.usage?.messageCounts?.total??0)<=i}default:return!0}},$m=(e,t)=>{const n=aa(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const a of n){if(!a.key)continue;const o=Wn(a.key);if(!vm.has(o)){s.push(`Unknown filter: ${a.key}`);continue}if(a.value===""&&s.push(`Missing value for ${a.key}`),o==="has"){const l=new Set(["tools","errors","context","usage","model","provider"]);a.value&&!l.has(Wn(a.value))&&s.push(`Unknown has:${a.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(o)&&a.value&&rt(a.value)===null&&s.push(`Invalid number for ${a.key}`)}return{sessions:e.filter(a=>n.every(o=>xm(a,o))),warnings:s}};function wm(e){const t=e.split(`
`),n=new Map,s=[];for(const l of t){const d=/^\[Tool:\s*([^\]]+)\]/.exec(l.trim());if(d){const u=d[1];n.set(u,(n.get(u)??0)+1);continue}l.trim().startsWith("[Tool Result]")||s.push(l)}const i=Array.from(n.entries()).toSorted((l,d)=>d[1]-l[1]),a=i.reduce((l,[,d])=>l+d,0),o=i.length>0?`Tools: ${i.map(([l,d])=>`${l}×${d}`).join(", ")} (${a} calls)`:"";return{tools:i,summary:o,cleanContent:s.join(`
`).trim()}}const km=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,Sm=4;function at(e){return Math.round(e/Sm)}function O(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function Am(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function Cm(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const i of e){const a=i.usage;if(!a?.messageCounts||a.messageCounts.total===0)continue;const o=a.firstActivity??i.updatedAt,l=a.lastActivity??i.updatedAt;if(!o||!l)continue;const d=Math.min(o,l),u=Math.max(o,l),g=Math.max(u-d,1)/6e4;let h=d;for(;h<u;){const c=new Date(h),p=oa(c,t),m=ra(c,t),$=Math.min(m.getTime(),u),y=Math.max(($-h)/6e4,0)/g;n[p]+=a.messageCounts.errors*y,s[p]+=a.messageCounts.total*y,h=$+1}}return s.map((i,a)=>{const o=n[a],l=i>0?o/i:0;return{hour:a,rate:l,errors:o,msgs:i}}).filter(i=>i.msgs>0&&i.errors>0).toSorted((i,a)=>a.rate-i.rate).slice(0,5).map(i=>({label:Am(i.hour),value:`${(i.rate*100).toFixed(2)}%`,sub:`${Math.round(i.errors)} errors · ${Math.round(i.msgs)} msgs`}))}const Tm=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function oa(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function _m(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function ra(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Em(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let i=0,a=!1;for(const l of e){const d=l.usage;if(!d||!d.totalTokens||d.totalTokens<=0)continue;i+=d.totalTokens;const u=d.firstActivity??l.updatedAt,f=d.lastActivity??l.updatedAt;if(!u||!f)continue;a=!0;const g=Math.min(u,f),h=Math.max(u,f),p=Math.max(h-g,1)/6e4;let m=g;for(;m<h;){const $=new Date(m),S=oa($,t),y=_m($,t),C=ra($,t),A=Math.min(C.getTime(),h),_=Math.max((A-m)/6e4,0)/p;n[S]+=d.totalTokens*_,s[y]+=d.totalTokens*_,m=A+1}}const o=Tm.map((l,d)=>({label:l,tokens:s[d]}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function Lm(e,t,n,s){const i=Em(e,t);if(!i.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">Activity by Time</div>
            <div class="usage-mosaic-sub">Estimates require session timestamps.</div>
          </div>
          <div class="usage-mosaic-total">${O(0)} tokens</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">No timeline data yet.</div>
      </div>
    `;const a=Math.max(...i.hourTotals,1),o=Math.max(...i.weekdayTotals.map(l=>l.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">Activity by Time</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${t==="utc"?"UTC":"Local"}.
          </div>
        </div>
        <div class="usage-mosaic-total">${O(i.totalTokens)} tokens</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">Day of Week</div>
          <div class="usage-daypart-grid">
            ${i.weekdayTotals.map(l=>{const d=Math.min(l.tokens/o,1),u=l.tokens>0?`rgba(255, 77, 77, ${.12+d*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${u};">
                  <div class="usage-daypart-label">${l.label}</div>
                  <div class="usage-daypart-value">${O(l.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>Hours</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${i.hourTotals.map((l,d)=>{const u=Math.min(l/a,1),f=l>0?`rgba(255, 77, 77, ${.08+u*.7})`:"transparent",g=`${d}:00 · ${O(l)} tokens`,h=u>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",c=n.includes(d);return r`
                <div
                  class="usage-hour-cell ${c?"selected":""}"
                  style="background: ${f}; border-color: ${h};"
                  title="${g}"
                  @click=${p=>s(d,p.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>Midnight</span>
            <span>4am</span>
            <span>8am</span>
            <span>Noon</span>
            <span>4pm</span>
            <span>8pm</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function q(e,t=2){return`$${e.toFixed(t)}`}function zs(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Mm(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function Bl(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,i]=t,a=new Date(Date.UTC(Number(n),Number(s)-1,Number(i)));return Number.isNaN(a.valueOf())?null:a}function Ul(e){const t=Bl(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function Im(e){const t=Bl(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function zl(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,i=Math.floor(t/3600);return i>0?`${i}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function Hs(e,t,n="text/plain"){const s=new Blob([t],{type:n}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function Rm(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function qn(e){return e.map(t=>t==null?"":Rm(String(t))).join(",")}const _n=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),En=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},Dm=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,i=new Map,a=new Map,o=new Map,l=new Map,d=new Map,u=new Map,f=new Map,g={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const h of e){const c=h.usage;if(c){if(c.messageCounts&&(n.total+=c.messageCounts.total,n.user+=c.messageCounts.user,n.assistant+=c.messageCounts.assistant,n.toolCalls+=c.messageCounts.toolCalls,n.toolResults+=c.messageCounts.toolResults,n.errors+=c.messageCounts.errors),c.toolUsage)for(const p of c.toolUsage.tools)s.set(p.name,(s.get(p.name)??0)+p.count);if(c.modelUsage)for(const p of c.modelUsage){const m=`${p.provider??"unknown"}::${p.model??"unknown"}`,$=i.get(m)??{provider:p.provider,model:p.model,count:0,totals:_n()};$.count+=p.count,En($.totals,p.totals),i.set(m,$);const S=p.provider??"unknown",y=a.get(S)??{provider:p.provider,model:void 0,count:0,totals:_n()};y.count+=p.count,En(y.totals,p.totals),a.set(S,y)}if(c.latency){const{count:p,avgMs:m,minMs:$,maxMs:S,p95Ms:y}=c.latency;p>0&&(g.count+=p,g.sum+=m*p,g.min=Math.min(g.min,$),g.max=Math.max(g.max,S),g.p95Max=Math.max(g.p95Max,y))}if(h.agentId){const p=o.get(h.agentId)??_n();En(p,c),o.set(h.agentId,p)}if(h.channel){const p=l.get(h.channel)??_n();En(p,c),l.set(h.channel,p)}for(const p of c.dailyBreakdown??[]){const m=d.get(p.date)??{date:p.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};m.tokens+=p.tokens,m.cost+=p.cost,d.set(p.date,m)}for(const p of c.dailyMessageCounts??[]){const m=d.get(p.date)??{date:p.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};m.messages+=p.total,m.toolCalls+=p.toolCalls,m.errors+=p.errors,d.set(p.date,m)}for(const p of c.dailyLatency??[]){const m=u.get(p.date)??{date:p.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};m.count+=p.count,m.sum+=p.avgMs*p.count,m.min=Math.min(m.min,p.minMs),m.max=Math.max(m.max,p.maxMs),m.p95Max=Math.max(m.p95Max,p.p95Ms),u.set(p.date,m)}for(const p of c.dailyModelUsage??[]){const m=`${p.date}::${p.provider??"unknown"}::${p.model??"unknown"}`,$=f.get(m)??{date:p.date,provider:p.provider,model:p.model,tokens:0,cost:0,count:0};$.tokens+=p.tokens,$.cost+=p.cost,$.count+=p.count,f.set(m,$)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce((h,c)=>h+c,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([h,c])=>({name:h,count:c})).toSorted((h,c)=>c.count-h.count)},byModel:Array.from(i.values()).toSorted((h,c)=>c.totals.totalCost-h.totals.totalCost),byProvider:Array.from(a.values()).toSorted((h,c)=>c.totals.totalCost-h.totals.totalCost),byAgent:Array.from(o.entries()).map(([h,c])=>({agentId:h,totals:c})).toSorted((h,c)=>c.totals.totalCost-h.totals.totalCost),byChannel:Array.from(l.entries()).map(([h,c])=>({channel:h,totals:c})).toSorted((h,c)=>c.totals.totalCost-h.totals.totalCost),latency:g.count>0?{count:g.count,avgMs:g.sum/g.count,minMs:g.min===Number.POSITIVE_INFINITY?0:g.min,maxMs:g.max,p95Ms:g.p95Max}:void 0,dailyLatency:Array.from(u.values()).map(h=>({date:h.date,count:h.count,avgMs:h.count?h.sum/h.count:0,minMs:h.min===Number.POSITIVE_INFINITY?0:h.min,maxMs:h.max,p95Ms:h.p95Max})).toSorted((h,c)=>h.date.localeCompare(c.date)),modelDaily:Array.from(f.values()).toSorted((h,c)=>h.date.localeCompare(c.date)||c.cost-h.cost),daily:Array.from(d.values()).toSorted((h,c)=>h.date.localeCompare(c.date))}},Pm=(e,t,n)=>{let s=0,i=0;for(const f of e){const g=f.usage?.durationMs??0;g>0&&(s+=g,i+=1)}const a=i?s/i:0,o=t&&s>0?t.totalTokens/(s/6e4):void 0,l=t&&s>0?t.totalCost/(s/6e4):void 0,d=n.messages.total?n.messages.errors/n.messages.total:0,u=n.daily.filter(f=>f.messages>0&&f.errors>0).map(f=>({date:f.date,errors:f.errors,messages:f.messages,rate:f.errors/f.messages})).toSorted((f,g)=>g.rate-f.rate||g.errors-f.errors)[0];return{durationSumMs:s,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:l,errorRate:d,peakErrorDay:u}},Fm=e=>{const t=[qn(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(qn([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},Nm=e=>{const t=[qn(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(qn([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},Om=(e,t,n)=>{const s=e.trim();if(!s)return[];const i=s.length?s.split(/\s+/):[],a=i.length?i[i.length-1]:"",[o,l]=a.includes(":")?[a.slice(0,a.indexOf(":")),a.slice(a.indexOf(":")+1)]:["",""],d=o.toLowerCase(),u=l.toLowerCase(),f=y=>{const C=new Set;for(const A of y)A&&C.add(A);return Array.from(C)},g=f(t.map(y=>y.agentId)).slice(0,6),h=f(t.map(y=>y.channel)).slice(0,6),c=f([...t.map(y=>y.modelProvider),...t.map(y=>y.providerOverride),...n?.byProvider.map(y=>y.provider)??[]]).slice(0,6),p=f([...t.map(y=>y.model),...n?.byModel.map(y=>y.model)??[]]).slice(0,6),m=f(n?.tools.tools.map(y=>y.name)??[]).slice(0,6);if(!d)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const $=[],S=(y,C)=>{for(const A of C)(!u||A.toLowerCase().includes(u))&&$.push({label:`${y}:${A}`,value:`${y}:${A}`})};switch(d){case"agent":S("agent",g);break;case"channel":S("channel",h);break;case"provider":S("provider",c);break;case"model":S("model",p);break;case"tool":S("tool",m);break;case"has":["errors","tools","context","usage","model","provider"].forEach(y=>{(!u||y.includes(u))&&$.push({label:`has:${y}`,value:`has:${y}`})});break}return $},Bm=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},lt=e=>e.trim().toLowerCase(),Um=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),i=s[s.length-1]??"",a=t.includes(":")?t.split(":")[0]:null,o=i.includes(":")?i.split(":")[0]:null;return i.endsWith(":")&&a&&o===a?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},Vo=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(i=>i!==t);return s.length?`${s.join(" ")} `:""},Qo=(e,t,n)=>{const s=lt(t),a=[...aa(e).filter(o=>lt(o.key??"")!==s).map(o=>o.raw),...n.map(o=>`${t}:${o}`)];return a.length?`${a.join(" ")} `:""};function ge(e,t){return t===0?0:e/t*100}function zm(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:ge(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:ge(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:ge(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:ge(e.cacheWriteCost||0,t)},totalCost:t}}function Hm(e,t,n,s,i,a,o,l){if(!(e.length>0||t.length>0||n.length>0))return v;const u=n.length===1?s.find(p=>p.key===n[0]):null,f=u?(u.label||u.key).slice(0,20)+((u.label||u.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} sessions`,g=u?u.label||u.key:n.length===1?n[0]:n.join(", "),h=e.length===1?e[0]:`${e.length} days`,c=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">Days: ${h}</span>
              <button class="filter-chip-remove" @click=${i} title="Remove filter">×</button>
            </div>
          `:v}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">Hours: ${c}</span>
              <button class="filter-chip-remove" @click=${a} title="Remove filter">×</button>
            </div>
          `:v}
      ${n.length>0?r`
            <div class="filter-chip" title="${g}">
              <span class="filter-chip-label">Session: ${f}</span>
              <button class="filter-chip-remove" @click=${o} title="Remove filter">×</button>
            </div>
          `:v}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn btn-sm filter-clear-btn" @click=${l}>
              Clear All
            </button>
          `:v}
    </div>
  `}function Km(e,t,n,s,i,a){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">Daily Usage</div>
        <div class="muted" style="padding: 20px; text-align: center">No data</div>
      </div>
    `;const o=n==="tokens",l=e.map(g=>o?g.totalTokens:g.totalCost),d=Math.max(...l,o?1:1e-4),u=e.length>30?12:e.length>20?18:e.length>14?24:32,f=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>i("total")}
          >
            Total
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>i("by-type")}
          >
            By Type
          </button>
        </div>
        <div class="card-title">Daily ${o?"Token":"Cost"} Usage</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${u}px">
          ${e.map((g,h)=>{const p=l[h]/d*100,m=t.includes(g.date),$=Ul(g.date),S=e.length>20?String(parseInt(g.date.slice(8),10)):$,y=e.length>20?"font-size: 8px":"",C=s==="by-type"?o?[{value:g.output,class:"output"},{value:g.input,class:"input"},{value:g.cacheWrite,class:"cache-write"},{value:g.cacheRead,class:"cache-read"}]:[{value:g.outputCost??0,class:"output"},{value:g.inputCost??0,class:"input"},{value:g.cacheWriteCost??0,class:"cache-write"},{value:g.cacheReadCost??0,class:"cache-read"}]:[],A=s==="by-type"?o?[`Output ${O(g.output)}`,`Input ${O(g.input)}`,`Cache write ${O(g.cacheWrite)}`,`Cache read ${O(g.cacheRead)}`]:[`Output ${q(g.outputCost??0)}`,`Input ${q(g.inputCost??0)}`,`Cache write ${q(g.cacheWriteCost??0)}`,`Cache read ${q(g.cacheReadCost??0)}`]:[],T=o?O(g.totalTokens):q(g.totalCost);return r`
              <div
                class="daily-bar-wrapper ${m?"selected":""}"
                @click=${_=>a(g.date,_.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${p.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const _=C.reduce((I,z)=>I+z.value,0)||1;return C.map(I=>r`
                                <div
                                  class="cost-segment ${I.class}"
                                  style="height: ${I.value/_*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${p.toFixed(1)}%"></div>
                      `}
                ${f?r`<div class="daily-bar-total">${T}</div>`:v}
                <div class="daily-bar-label" style="${y}">${S}</div>
                <div class="daily-bar-tooltip">
                  <strong>${Im(g.date)}</strong><br />
                  ${O(g.totalTokens)} tokens<br />
                  ${q(g.totalCost)}
                  ${A.length?r`${A.map(_=>r`<div>${_}</div>`)}`:v}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function jm(e,t){const n=zm(e),s=t==="tokens",i=e.totalTokens||1,a={output:ge(e.output,i),input:ge(e.input,i),cacheWrite:ge(e.cacheWrite,i),cacheRead:ge(e.cacheRead,i)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${s?"Tokens":"Cost"} by Type</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?a.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?O(e.output):q(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?a.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?O(e.input):q(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?a.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?O(e.cacheWrite):q(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?a.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?O(e.cacheRead):q(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>Output ${s?O(e.output):q(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>Input ${s?O(e.input):q(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>Cache Write ${s?O(e.cacheWrite):q(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>Cache Read ${s?O(e.cacheRead):q(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        Total: ${s?O(e.totalTokens):q(e.totalCost)}
      </div>
    </div>
  `}function ct(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:v}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Yo(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:v}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Wm(e,t,n,s,i,a,o){if(!e)return v;const l=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,d=t.messages.total?e.totalCost/t.messages.total:0,u=e.input+e.cacheRead,f=u>0?e.cacheRead/u:0,g=u>0?`${(f*100).toFixed(1)}%`:"—",h=n.errorRate*100,c=n.throughputTokensPerMin!==void 0?`${O(Math.round(n.throughputTokensPerMin))} tok/min`:"—",p=n.throughputCostPerMin!==void 0?`${q(n.throughputCostPerMin,4)} / min`:"—",m=n.durationCount>0?Mm(n.avgDurationMs):"—",$="Cache hit rate = cache read / (input + cache read). Higher is better.",S="Error rate = errors / total messages. Lower is better.",y="Throughput shows tokens per minute over active time. Higher is better.",C="Average tokens per message in this range.",A=s?"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.":"Average cost per message when providers report costs.",T=t.daily.filter(F=>F.messages>0&&F.errors>0).map(F=>{const H=F.errors/F.messages;return{label:Ul(F.date),value:`${(H*100).toFixed(2)}%`,sub:`${F.errors} errors · ${F.messages} msgs · ${O(F.tokens)}`,rate:H}}).toSorted((F,H)=>H.rate-F.rate).slice(0,5).map(({rate:F,...H})=>H),_=t.byModel.slice(0,5).map(F=>({label:F.model??"unknown",value:q(F.totals.totalCost),sub:`${O(F.totals.totalTokens)} · ${F.count} msgs`})),I=t.byProvider.slice(0,5).map(F=>({label:F.provider??"unknown",value:q(F.totals.totalCost),sub:`${O(F.totals.totalTokens)} · ${F.count} msgs`})),z=t.tools.tools.slice(0,6).map(F=>({label:F.name,value:`${F.count}`,sub:"calls"})),Y=t.byAgent.slice(0,5).map(F=>({label:F.agentId,value:q(F.totals.totalCost),sub:O(F.totals.totalTokens)})),se=t.byChannel.slice(0,5).map(F=>({label:F.channel,value:q(F.totals.totalCost),sub:O(F.totals.totalTokens)}));return r`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">Usage Overview</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Messages
            <span class="usage-summary-hint" title="Total user + assistant messages in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} user · ${t.messages.assistant} assistant
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Tool Calls
            <span class="usage-summary-hint" title="Total tool call count across sessions.">?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} tools used</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Errors
            <span class="usage-summary-hint" title="Total message/tool errors in range.">?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} tool results</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Tokens / Msg
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${O(l)}</div>
          <div class="usage-summary-sub">Across ${t.messages.total||0} messages</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Avg Cost / Msg
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${q(d,4)}</div>
          <div class="usage-summary-sub">${q(e.totalCost)} total</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Sessions
            <span class="usage-summary-hint" title="Distinct sessions in the range.">?</span>
          </div>
          <div class="usage-summary-value">${a}</div>
          <div class="usage-summary-sub">of ${o} in range</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Throughput
            <span class="usage-summary-hint" title=${y}>?</span>
          </div>
          <div class="usage-summary-value">${c}</div>
          <div class="usage-summary-sub">${p}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Error Rate
            <span class="usage-summary-hint" title=${S}>?</span>
          </div>
          <div class="usage-summary-value ${h>5?"bad":h>1?"warn":"good"}">${h.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} errors · ${m} avg session
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            Cache Hit Rate
            <span class="usage-summary-hint" title=${$}>?</span>
          </div>
          <div class="usage-summary-value ${f>.6?"good":f>.3?"warn":"bad"}">${g}</div>
          <div class="usage-summary-sub">
            ${O(e.cacheRead)} cached · ${O(u)} prompt
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${ct("Top Models",_,"No model data")}
        ${ct("Top Providers",I,"No provider data")}
        ${ct("Top Tools",z,"No tool calls")}
        ${ct("Top Agents",Y,"No agent data")}
        ${ct("Top Channels",se,"No channel data")}
        ${Yo("Peak Error Days",T,"No error data")}
        ${Yo("Peak Error Hours",i,"No error data")}
      </div>
    </section>
  `}function qm(e,t,n,s,i,a,o,l,d,u,f,g,h,c,p){const m=E=>h.includes(E),$=E=>{const B=E.label||E.key;return B.startsWith("agent:")&&B.includes("?token=")?B.slice(0,B.indexOf("?token=")):B},S=async E=>{const B=$(E);try{await navigator.clipboard.writeText(B)}catch{}},y=E=>{const B=[];return m("channel")&&E.channel&&B.push(`channel:${E.channel}`),m("agent")&&E.agentId&&B.push(`agent:${E.agentId}`),m("provider")&&(E.modelProvider||E.providerOverride)&&B.push(`provider:${E.modelProvider??E.providerOverride}`),m("model")&&E.model&&B.push(`model:${E.model}`),m("messages")&&E.usage?.messageCounts&&B.push(`msgs:${E.usage.messageCounts.total}`),m("tools")&&E.usage?.toolUsage&&B.push(`tools:${E.usage.toolUsage.totalCalls}`),m("errors")&&E.usage?.messageCounts&&B.push(`errors:${E.usage.messageCounts.errors}`),m("duration")&&E.usage?.durationMs&&B.push(`dur:${zl(E.usage.durationMs)}`),B},C=E=>{const B=E.usage;if(!B)return 0;if(n.length>0&&B.dailyBreakdown&&B.dailyBreakdown.length>0){const ie=B.dailyBreakdown.filter(ae=>n.includes(ae.date));return s?ie.reduce((ae,Z)=>ae+Z.tokens,0):ie.reduce((ae,Z)=>ae+Z.cost,0)}return s?B.totalTokens??0:B.totalCost??0},A=[...e].toSorted((E,B)=>{switch(i){case"recent":return(B.updatedAt??0)-(E.updatedAt??0);case"messages":return(B.usage?.messageCounts?.total??0)-(E.usage?.messageCounts?.total??0);case"errors":return(B.usage?.messageCounts?.errors??0)-(E.usage?.messageCounts?.errors??0);case"cost":return C(B)-C(E);default:return C(B)-C(E)}}),T=a==="asc"?A.toReversed():A,_=T.reduce((E,B)=>E+C(B),0),I=T.length?_/T.length:0,z=T.reduce((E,B)=>E+(B.usage?.messageCounts?.errors??0),0),Y=new Set(t),se=T.filter(E=>Y.has(E.key)),F=se.length,H=new Map(T.map(E=>[E.key,E])),ce=o.map(E=>H.get(E)).filter(E=>!!E);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">Sessions</div>
        <div class="sessions-card-count">
          ${e.length} shown${c!==e.length?` · ${c} total`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?O(I):q(I)} avg</span>
          <span>${z} errors</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${l==="all"?"active":""}"
            @click=${()=>g("all")}
          >
            All
          </button>
          <button
            class="toggle-btn ${l==="recent"?"active":""}"
            @click=${()=>g("recent")}
          >
            Recently viewed
          </button>
        </div>
        <label class="sessions-sort">
          <span>Sort</span>
          <select
            @change=${E=>u(E.target.value)}
          >
            <option value="cost" ?selected=${i==="cost"}>Cost</option>
            <option value="errors" ?selected=${i==="errors"}>Errors</option>
            <option value="messages" ?selected=${i==="messages"}>Messages</option>
            <option value="recent" ?selected=${i==="recent"}>Recent</option>
            <option value="tokens" ?selected=${i==="tokens"}>Tokens</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>f(a==="desc"?"asc":"desc")}
          title=${a==="desc"?"Descending":"Ascending"}
        >
          ${a==="desc"?"↓":"↑"}
        </button>
        ${F>0?r`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${p}>
                  Clear Selection
                </button>
              `:v}
      </div>
      ${l==="recent"?ce.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">No recent sessions</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${ce.map(E=>{const B=C(E),ie=Y.has(E.key),ae=$(E),Z=y(E);return r`
                      <div
                        class="session-bar-row ${ie?"selected":""}"
                        @click=${te=>d(E.key,te.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ae}</div>
                          ${Z.length>0?r`<div class="session-bar-meta">${Z.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${te=>{te.stopPropagation(),S(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?O(B):q(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">No sessions in range</div>
              `:r`
                <div class="session-bars">
                  ${T.slice(0,50).map(E=>{const B=C(E),ie=t.includes(E.key),ae=$(E),Z=y(E);return r`
                      <div
                        class="session-bar-row ${ie?"selected":""}"
                        @click=${te=>d(E.key,te.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ae}</div>
                          ${Z.length>0?r`<div class="session-bar-meta">${Z.join(" · ")}</div>`:v}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${te=>{te.stopPropagation(),S(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?O(B):q(B)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} more</div>`:v}
                </div>
              `}
      ${F>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">Selected (${F})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${se.map(E=>{const B=C(E),ie=$(E),ae=y(E);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${Z=>d(E.key,Z.shiftKey)}
                        title="${E.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ie}</div>
                          ${ae.length>0?r`<div class="session-bar-meta">${ae.join(" · ")}</div>`:v}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title="Copy session name"
                            @click=${Z=>{Z.stopPropagation(),S(E)}}
                          >
                            Copy
                          </button>
                          <div class="session-bar-value">${s?O(B):q(B)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:v}
    </div>
  `}function Gm(){return v}function Vm(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=o=>o?new Date(o).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const i=t.toolUsage?.tools.slice(0,6).map(o=>({label:o.name,value:`${o.count}`,sub:"calls"}))??[],a=t.modelUsage?.slice(0,6).map(o=>({label:o.model??"unknown",value:q(o.totals.totalCost),sub:O(o.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(o=>r`<span class="usage-badge">${o}</span>`)}</div>`:v}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">Messages</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} user · ${t.messageCounts?.assistant??0} assistant</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Tool Calls</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} tools</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Errors</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} tool results</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">Duration</div>
        <div class="session-summary-value">${zl(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${ct("Top Tools",i,"No tool calls")}
      ${ct("Model Mix",a,"No model data")}
    </div>
  `}function Qm(e,t,n,s,i,a,o,l,d,u,f,g,h,c,p,m,$,S,y,C,A,T,_){const I=e.label||e.key,z=I.length>50?I.slice(0,50)+"…":I,Y=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${z}</div>
        </div>
        <div class="session-detail-stats">
          ${Y?r`
            <span><strong>${O(Y.totalTokens)}</strong> tokens</span>
            <span><strong>${q(Y.totalCost)}</strong></span>
          `:v}
        </div>
        <button class="session-close-btn" @click=${_} title="Close session details">×</button>
      </div>
      <div class="session-detail-content">
        ${Vm(e)}
        <div class="session-detail-row">
          ${Ym(t,n,s,i,a,o,l,d,u)}
        </div>
        <div class="session-detail-bottom">
          ${Zm(f,g,h,c,p,m,$,S,y,C)}
          ${Jm(e.contextWeight,Y,A,T)}
        </div>
      </div>
    </div>
  `}function Ym(e,t,n,s,i,a,o,l,d){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No timeline data</div>
      </div>
    `;let u=e.points;if(o||l||d&&d.length>0){const H=o?new Date(o+"T00:00:00").getTime():0,ce=l?new Date(l+"T23:59:59").getTime():1/0;u=e.points.filter(E=>{if(E.timestamp<H||E.timestamp>ce)return!1;if(d&&d.length>0){const B=new Date(E.timestamp),ie=`${B.getFullYear()}-${String(B.getMonth()+1).padStart(2,"0")}-${String(B.getDate()).padStart(2,"0")}`;return d.includes(ie)}return!0})}if(u.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">No data in range</div>
      </div>
    `;let f=0,g=0,h=0,c=0,p=0,m=0;u=u.map(H=>(f+=H.totalTokens,g+=H.cost,h+=H.output,c+=H.input,p+=H.cacheRead,m+=H.cacheWrite,{...H,cumulativeTokens:f,cumulativeCost:g}));const $=400,S=80,y={top:16,right:10,bottom:20,left:40},C=$-y.left-y.right,A=S-y.top-y.bottom,T=n==="cumulative",_=n==="per-turn"&&i==="by-type",I=h+c+p+m,z=u.map(H=>T?H.cumulativeTokens:_?H.input+H.output+H.cacheRead+H.cacheWrite:H.totalTokens),Y=Math.max(...z,1),se=Math.max(2,Math.min(8,C/u.length*.7)),F=Math.max(1,(C-se*u.length)/(u.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">Usage Over Time</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${T?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              Per Turn
            </button>
            <button
              class="toggle-btn ${T?"active":""}"
              @click=${()=>s("cumulative")}
            >
              Cumulative
            </button>
          </div>
          ${T?v:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${i==="total"?"active":""}"
                      @click=${()=>a("total")}
                    >
                      Total
                    </button>
                    <button
                      class="toggle-btn ${i==="by-type"?"active":""}"
                      @click=${()=>a("by-type")}
                    >
                      By Type
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${$} ${S+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${y.left}" y1="${y.top}" x2="${y.left}" y2="${y.top+A}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${y.left}" y1="${y.top+A}" x2="${$-y.right}" y2="${y.top+A}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${y.left-4}" y="${y.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${O(Y)}</text>
        <text x="${y.left-4}" y="${y.top+A}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${u.length>0?mn`
          <text x="${y.left}" y="${y.top+A+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(u[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${$-y.right}" y="${y.top+A+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(u[u.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:v}
        <!-- Bars -->
        ${u.map((H,ce)=>{const E=z[ce],B=y.left+ce*(se+F),ie=E/Y*A,ae=y.top+A-ie,te=[new Date(H.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${O(E)} tokens`];_&&(te.push(`Output ${O(H.output)}`),te.push(`Input ${O(H.input)}`),te.push(`Cache write ${O(H.cacheWrite)}`),te.push(`Cache read ${O(H.cacheRead)}`));const M=te.join(" · ");if(!_)return mn`<rect x="${B}" y="${ae}" width="${se}" height="${ie}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${M}</title></rect>`;const R=[{value:H.output,class:"output"},{value:H.input,class:"input"},{value:H.cacheWrite,class:"cache-write"},{value:H.cacheRead,class:"cache-read"}];let D=y.top+A;return mn`
            ${R.map(K=>{if(K.value<=0||E<=0)return v;const xe=ie*(K.value/E);return D-=xe,mn`<rect x="${B}" y="${D}" width="${se}" height="${xe}" class="ts-bar ${K.class}" rx="1"><title>${M}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${u.length} msgs · ${O(f)} · ${q(g)}</div>
      ${_?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">Tokens by Type</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${ge(h,I).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${ge(c,I).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${ge(m,I).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${ge(p,I).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${O(h)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${O(c)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${O(m)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${O(p)}
                  </div>
                </div>
                <div class="cost-breakdown-total">Total: ${O(I)}</div>
              </div>
            `:v}
    </div>
  `}function Jm(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">No context data</div>
      </div>
    `;const i=at(e.systemPrompt.chars),a=at(e.skills.promptChars),o=at(e.tools.listChars+e.tools.schemaChars),l=at(e.injectedWorkspaceFiles.reduce((C,A)=>C+A.injectedChars,0)),d=i+a+o+l;let u="";if(t&&t.totalTokens>0){const C=t.input+t.cacheRead;C>0&&(u=`~${Math.min(d/C*100,100).toFixed(0)}% of input`)}const f=e.skills.entries.toSorted((C,A)=>A.blockChars-C.blockChars),g=e.tools.entries.toSorted((C,A)=>A.summaryChars+A.schemaChars-(C.summaryChars+C.schemaChars)),h=e.injectedWorkspaceFiles.toSorted((C,A)=>A.injectedChars-C.injectedChars),c=4,p=n,m=p?f:f.slice(0,c),$=p?g:g.slice(0,c),S=p?h:h.slice(0,c),y=f.length>c||g.length>c||h.length>c;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">System Prompt Breakdown</div>
        ${y?r`<button class="context-expand-btn" @click=${s}>
                ${p?"Collapse":"Expand all"}
              </button>`:v}
      </div>
      <p class="context-weight-desc">${u||"Base context per message"}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${ge(i,d).toFixed(1)}%" title="System: ~${O(i)}"></div>
        <div class="context-segment skills" style="width: ${ge(a,d).toFixed(1)}%" title="Skills: ~${O(a)}"></div>
        <div class="context-segment tools" style="width: ${ge(o,d).toFixed(1)}%" title="Tools: ~${O(o)}"></div>
        <div class="context-segment files" style="width: ${ge(l,d).toFixed(1)}%" title="Files: ~${O(l)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${O(i)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${O(a)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${O(o)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${O(l)}</span>
      </div>
      <div class="context-total">Total: ~${O(d)}</div>
      <div class="context-breakdown-grid">
        ${f.length>0?(()=>{const C=f.length-m.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Skills (${f.length})</div>
                    <div class="context-breakdown-list">
                      ${m.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${O(at(A.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} more</div>`:v}
                  </div>
                `})():v}
        ${g.length>0?(()=>{const C=g.length-$.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Tools (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${$.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${O(at(A.summaryChars+A.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} more</div>`:v}
                  </div>
                `})():v}
        ${h.length>0?(()=>{const C=h.length-S.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">Files (${h.length})</div>
                    <div class="context-breakdown-list">
                      ${S.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${O(at(A.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} more</div>`:v}
                  </div>
                `})():v}
      </div>
    </div>
  `}function Zm(e,t,n,s,i,a,o,l,d,u){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">Loading...</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">Conversation</div>
        <div class="muted" style="padding: 20px; text-align: center">No messages</div>
      </div>
    `;const f=i.query.trim().toLowerCase(),g=e.map(S=>{const y=wm(S.content),C=y.cleanContent||S.content;return{log:S,toolInfo:y,cleanContent:C}}),h=Array.from(new Set(g.flatMap(S=>S.toolInfo.tools.map(([y])=>y)))).toSorted((S,y)=>S.localeCompare(y)),c=g.filter(S=>!(i.roles.length>0&&!i.roles.includes(S.log.role)||i.hasTools&&S.toolInfo.tools.length===0||i.tools.length>0&&!S.toolInfo.tools.some(([C])=>i.tools.includes(C))||f&&!S.cleanContent.toLowerCase().includes(f))),p=i.roles.length>0||i.tools.length>0||i.hasTools||f?`${c.length} of ${e.length}`:`${e.length}`,m=new Set(i.roles),$=new Set(i.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>Conversation <span style="font-weight: normal; color: var(--text-muted);">(${p} messages)</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${n?"Collapse All":"Expand All"}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${S=>a(Array.from(S.target.selectedOptions).map(y=>y.value))}
        >
          <option value="user" ?selected=${m.has("user")}>User</option>
          <option value="assistant" ?selected=${m.has("assistant")}>Assistant</option>
          <option value="tool" ?selected=${m.has("tool")}>Tool</option>
          <option value="toolResult" ?selected=${m.has("toolResult")}>Tool result</option>
        </select>
        <select
          multiple
          size="4"
          @change=${S=>o(Array.from(S.target.selectedOptions).map(y=>y.value))}
        >
          ${h.map(S=>r`<option value=${S} ?selected=${$.has(S)}>${S}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${i.hasTools}
            @change=${S=>l(S.target.checked)}
          />
          Has tools
        </label>
        <input
          type="text"
          placeholder="Search conversation"
          .value=${i.query}
          @input=${S=>d(S.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${u}>
          Clear
        </button>
      </div>
      <div class="session-logs-list">
        ${c.map(S=>{const{log:y,toolInfo:C,cleanContent:A}=S,T=y.role==="user"?"user":"assistant",_=y.role==="user"?"You":y.role==="assistant"?"Assistant":"Tool";return r`
          <div class="session-log-entry ${T}">
            <div class="session-log-meta">
              <span class="session-log-role">${_}</span>
              <span>${new Date(y.timestamp).toLocaleString()}</span>
              ${y.tokens?r`<span>${O(y.tokens)}</span>`:v}
            </div>
            <div class="session-log-content">${A}</div>
            ${C.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${C.summary}</summary>
                      <div class="session-log-tools-list">
                        ${C.tools.map(([I,z])=>r`
                            <span class="session-log-tools-pill">${I} × ${z}</span>
                          `)}
                      </div>
                    </details>
                  `:v}
          </div>
        `})}
        ${c.length===0?r`
                <div class="muted" style="padding: 12px">No messages match the filters.</div>
              `:v}
      </div>
    </div>
  `}function Xm(e){if(e.loading&&!e.totals)return r`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">Token Usage</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                Loading
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,i=[...e.sessions].toSorted((M,R)=>{const D=t?M.usage?.totalTokens??0:M.usage?.totalCost??0;return(t?R.usage?.totalTokens??0:R.usage?.totalCost??0)-D}),a=e.selectedDays.length>0?i.filter(M=>{if(M.usage?.activityDates?.length)return M.usage.activityDates.some(K=>e.selectedDays.includes(K));if(!M.updatedAt)return!1;const R=new Date(M.updatedAt),D=`${R.getFullYear()}-${String(R.getMonth()+1).padStart(2,"0")}-${String(R.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(D)}):i,o=(M,R)=>{if(R.length===0)return!0;const D=M.usage,K=D?.firstActivity??M.updatedAt,xe=D?.lastActivity??M.updatedAt;if(!K||!xe)return!1;const Q=Math.min(K,xe),we=Math.max(K,xe);let X=Q;for(;X<=we;){const pe=new Date(X),Fe=oa(pe,e.timeZone);if(R.includes(Fe))return!0;const Ne=ra(pe,e.timeZone);X=Math.min(Ne.getTime(),we)+1}return!1},l=e.selectedHours.length>0?a.filter(M=>o(M,e.selectedHours)):a,d=$m(l,e.query),u=d.sessions,f=d.warnings,g=Om(e.queryDraft,i,e.aggregates),h=aa(e.query),c=M=>{const R=lt(M);return h.filter(D=>lt(D.key??"")===R).map(D=>D.value).filter(Boolean)},p=M=>{const R=new Set;for(const D of M)D&&R.add(D);return Array.from(R)},m=p(i.map(M=>M.agentId)).slice(0,12),$=p(i.map(M=>M.channel)).slice(0,12),S=p([...i.map(M=>M.modelProvider),...i.map(M=>M.providerOverride),...e.aggregates?.byProvider.map(M=>M.provider)??[]]).slice(0,12),y=p([...i.map(M=>M.model),...e.aggregates?.byModel.map(M=>M.model)??[]]).slice(0,12),C=p(e.aggregates?.tools.tools.map(M=>M.name)??[]).slice(0,12),A=e.selectedSessions.length===1?e.sessions.find(M=>M.key===e.selectedSessions[0])??u.find(M=>M.key===e.selectedSessions[0]):null,T=M=>M.reduce((R,D)=>(D.usage&&(R.input+=D.usage.input,R.output+=D.usage.output,R.cacheRead+=D.usage.cacheRead,R.cacheWrite+=D.usage.cacheWrite,R.totalTokens+=D.usage.totalTokens,R.totalCost+=D.usage.totalCost,R.inputCost+=D.usage.inputCost??0,R.outputCost+=D.usage.outputCost??0,R.cacheReadCost+=D.usage.cacheReadCost??0,R.cacheWriteCost+=D.usage.cacheWriteCost??0,R.missingCostEntries+=D.usage.missingCostEntries??0),R),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),_=M=>e.costDaily.filter(D=>M.includes(D.date)).reduce((D,K)=>(D.input+=K.input,D.output+=K.output,D.cacheRead+=K.cacheRead,D.cacheWrite+=K.cacheWrite,D.totalTokens+=K.totalTokens,D.totalCost+=K.totalCost,D.inputCost+=K.inputCost??0,D.outputCost+=K.outputCost??0,D.cacheReadCost+=K.cacheReadCost??0,D.cacheWriteCost+=K.cacheWriteCost??0,D),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let I,z;const Y=i.length;if(e.selectedSessions.length>0){const M=u.filter(R=>e.selectedSessions.includes(R.key));I=T(M),z=M.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(I=_(e.selectedDays),z=u.length):e.selectedHours.length>0||n?(I=T(u),z=u.length):(I=e.totals,z=Y);const se=e.selectedSessions.length>0?u.filter(M=>e.selectedSessions.includes(M.key)):n||e.selectedHours.length>0?u:e.selectedDays.length>0?a:i,F=Dm(se,e.aggregates),H=e.selectedSessions.length>0?(()=>{const M=u.filter(D=>e.selectedSessions.includes(D.key)),R=new Set;for(const D of M)for(const K of D.usage?.activityDates??[])R.add(K);return R.size>0?e.costDaily.filter(D=>R.has(D.date)):e.costDaily})():e.costDaily,ce=Pm(se,I,F),E=!e.loading&&!e.totals&&e.sessions.length===0,B=(I?.missingCostEntries??0)>0||(I?I.totalTokens>0&&I.totalCost===0&&I.input+I.output+I.cacheRead+I.cacheWrite>0:!1),ie=[{label:"Today",days:1},{label:"7d",days:7},{label:"30d",days:30}],ae=M=>{const R=new Date,D=new Date;D.setDate(D.getDate()-(M-1)),e.onStartDateChange(zs(D)),e.onEndDateChange(zs(R))},Z=(M,R,D)=>{if(D.length===0)return v;const K=c(M),xe=new Set(K.map(X=>lt(X))),Q=D.length>0&&D.every(X=>xe.has(lt(X))),we=K.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${X=>{const pe=X.currentTarget;if(!pe.open)return;const Fe=Ne=>{Ne.composedPath().includes(pe)||(pe.open=!1,window.removeEventListener("click",Fe,!0))};window.addEventListener("click",Fe,!0)}}
      >
        <summary>
          <span>${R}</span>
          ${we>0?r`<span class="usage-filter-badge">${we}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${X=>{X.preventDefault(),X.stopPropagation(),e.onQueryDraftChange(Qo(e.queryDraft,M,D))}}
              ?disabled=${Q}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${X=>{X.preventDefault(),X.stopPropagation(),e.onQueryDraftChange(Qo(e.queryDraft,M,[]))}}
              ?disabled=${we===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${D.map(X=>{const pe=xe.has(lt(X));return r`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${pe}
                    @change=${Fe=>{const Ne=Fe.target,Xe=`${M}:${X}`;e.onQueryDraftChange(Ne.checked?Um(e.queryDraft,Xe):Vo(e.queryDraft,Xe))}}
                  />
                  <span>${X}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},te=zs(new Date);return r`
    <style>${km}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">See where tokens go, when sessions spike, and what drives cost.</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:v}
          ${E?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:v}
        </div>
        <div class="usage-header-metrics">
          ${I?r`
                <span class="usage-metric-badge">
                  <strong>${O(I.totalTokens)}</strong> tokens
                </span>
                <span class="usage-metric-badge">
                  <strong>${q(I.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${z}</strong>
                  session${z!==1?"s":""}
                </span>
              `:v}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${M=>{const R=M.currentTarget;if(!R.open)return;const D=K=>{K.composedPath().includes(R)||(R.open=!1,window.removeEventListener("click",D,!0))};window.addEventListener("click",D,!0)}}
          >
            <summary class="usage-export-button">Export ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>Hs(`openclaw-usage-sessions-${te}.csv`,Fm(u),"text/csv")}
                  ?disabled=${u.length===0}
                >
                  Sessions CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>Hs(`openclaw-usage-daily-${te}.csv`,Nm(H),"text/csv")}
                  ?disabled=${H.length===0}
                >
                  Daily CSV
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>Hs(`openclaw-usage-${te}.json`,JSON.stringify({totals:I,sessions:u,daily:H,aggregates:F},null,2),"application/json")}
                  ?disabled=${u.length===0&&H.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${Hm(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${ie.map(M=>r`
                <button class="btn btn-sm" @click=${()=>ae(M.days)}>
                  ${M.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${M=>e.onStartDateChange(M.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${M=>e.onEndDateChange(M.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${M=>e.onTimeZoneChange(M.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${M=>e.onQueryDraftChange(M.target.value)}
            @keydown=${M=>{M.key==="Enter"&&(M.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>Clear</button>`:v}
            <span class="usage-query-hint">
              ${n?`${u.length} of ${Y} sessions match`:`${Y} sessions in range`}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${Z("agent","Agent",m)}
          ${Z("channel","Channel",$)}
          ${Z("provider","Provider",S)}
          ${Z("model","Model",y)}
          ${Z("tool","Tool",C)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${h.length>0?r`
                <div class="usage-query-chips">
                  ${h.map(M=>{const R=M.raw;return r`
                      <span class="usage-query-chip">
                        ${R}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(Vo(e.queryDraft,R))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:v}
        ${g.length>0?r`
                <div class="usage-query-suggestions">
                  ${g.map(M=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(Bm(e.queryDraft,M.value))}
                      >
                        ${M.label}
                      </button>
                    `)}
                </div>
              `:v}
        ${f.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${f.join(" · ")}
                </div>
              `:v}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:v}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:v}
    </section>

    ${Wm(I,F,ce,B,Cm(se,e.timeZone),z,Y)}

    ${Lm(se,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${Km(H,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${I?jm(I,e.chartMode):v}
        </div>
      </div>
      <div class="usage-grid-right">
        ${qm(u,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,Y,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${A?Qm(A,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):Gm()}
  `}const Hl={pm:{name:"Avery",role:"Project Manager",team:"coordinator"},"dev-lead":{name:"Sage",role:"Dev Team Lead",team:"coordinator"},seo:{name:"Skyler",role:"SEO Specialist",team:"tlp"},websites:{name:"Jordan",role:"Website Specialist",team:"tlp"},"google-ads":{name:"Riley",role:"Google Ads",team:"tlp"},"meta-ads":{name:"Morgan",role:"FB/IG Ads",team:"tlp"},ghl:{name:"Parker",role:"Patient Copilot/GHL",team:"tlp"},"account-mgr":{name:"Taylor",role:"Account Manager",team:"tlp"},sales:{name:"Cameron",role:"Sales",team:"tlp"},leads:{name:"Dakota",role:"Lead Scraper",team:"tlp"},support:{name:"Sydney",role:"Support",team:"tlp"},qc:{name:"Quinn",role:"Quality Control",team:"tlp"},"data-coord":{name:"Harper",role:"Data Coordinator",team:"tlp"},"dev-phantom":{name:"Phantom",role:"Developer",team:"dev"},"dev-pixel":{name:"Pixel",role:"Developer",team:"dev"},"dev-daemon":{name:"Daemon",role:"Developer",team:"dev"},"dev-schema":{name:"Schema",role:"Developer",team:"dev"},"dev-neural":{name:"Neural",role:"Developer",team:"dev"},"dev-forge":{name:"Forge",role:"Developer",team:"dev"},"dev-highlevel":{name:"Highlevel",role:"GHL Developer",team:"dev"},"dev-cipher":{name:"Cipher",role:"Developer",team:"dev"},"dev-scribe":{name:"Scribe",role:"Documentation",team:"dev"},"dev-omni":{name:"Omni",role:"Developer",team:"dev"}};function eb(e){const t=e.agentId||e.key.split(":")[1],n=Hl[t];if(!n)return null;let s="offline";return e.state==="running"||e.state==="active"?s="active":e.state==="idle"||e.state==="waiting"?s="idle":e.state==="error"&&(s="error"),{id:t,...n,status:s,sessionKey:e.key,lastActivity:e.lastActivity?new Date(e.lastActivity):void 0}}function tb(e){const t=[],n=new Set;for(const s of e){const i=eb(s);i&&!n.has(i.id)&&(n.add(i.id),t.push(i))}for(const[s,i]of Object.entries(Hl))n.has(s)||t.push({id:s,...i,status:"offline"});return t}function nb(e){return{active:e.filter(t=>t.status==="active").length,idle:e.filter(t=>t.status==="idle").length,error:e.filter(t=>t.status==="error").length}}function sb(e){return r`<span class="dashboard-status-dot dashboard-status-dot--${e}"></span>`}function ib(e){return e?new Date(e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):""}function ab(e){const t=ib(e.timestamp);return e.role==="system"?r`
      <div class="terminal-line terminal-line--system">
        <span class="terminal-time">${t}</span>
        <span class="terminal-prefix">SYS</span>
        <span class="terminal-content">${e.content}</span>
      </div>
    `:e.role==="tool"?r`
      <div class="terminal-line terminal-line--tool">
        <span class="terminal-time">${t}</span>
        <span class="terminal-prefix">TOOL</span>
        <span class="terminal-tool-name">${e.toolName||"exec"}</span>
        <pre class="terminal-output">${e.content}</pre>
      </div>
    `:e.role==="user"?r`
      <div class="terminal-line terminal-line--user">
        <span class="terminal-time">${t}</span>
        <span class="terminal-prefix">YOU</span>
        <span class="terminal-content">${e.content}</span>
      </div>
    `:r`
    <div class="terminal-line terminal-line--assistant">
      <span class="terminal-time">${t}</span>
      <span class="terminal-prefix">AI</span>
      <span class="terminal-content">${e.content}</span>
    </div>
  `}function ob(e,t,n,s,i){const a=e.name.slice(0,2).toUpperCase();return r`
    <article class="dashboard-card dashboard-card--${e.status}">
      <div class="dashboard-card__header">
        <div class="dashboard-card__identity">
          <div class="dashboard-card__avatar">${a}</div>
          <div class="dashboard-card__info">
            <h3 class="dashboard-card__name">${e.name}</h3>
            <p class="dashboard-card__role">${e.role}</p>
          </div>
        </div>
        ${sb(e.status)}
      </div>
      <div class="dashboard-card__chat">
        <div class="dashboard-card__toolbar">
          <span class="dashboard-card__session-key">${e.sessionKey||e.id}</span>
          <button class="btn btn-sm" @click=${()=>i(e.id)}>↻</button>
        </div>
        <div class="dashboard-card__terminal">
          ${t.length===0?r`
            <div class="terminal-empty">
              <span class="terminal-empty-icon">📟</span>
              <span>Waiting for activity...</span>
            </div>
          `:t.map(o=>ab(o))}
        </div>
        <div class="dashboard-card__input">
          <input 
            type="text" 
            class="input"
            placeholder="Message ${e.name}..."
            ?disabled=${n}
            @keydown=${o=>{if(o.key==="Enter"&&!o.shiftKey){o.preventDefault();const l=o.target;l.value.trim()&&!n&&(s(e.id,l.value),l.value="")}}}
          />
          <button 
            class="btn btn-primary btn-sm" 
            ?disabled=${n}
            @click=${o=>{const l=o.target.parentElement?.querySelector("input");l?.value.trim()&&!n&&(s(e.id,l.value),l.value="")}}
          >${n?"...":"Send"}</button>
        </div>
      </div>
    </article>
  `}function rb(e){const t=e.agents.length>0?e.agents:tb(e.sessions),n=nb(t),s=t.filter(l=>l.team==="coordinator"),i=t.filter(l=>l.team==="tlp"),a=t.filter(l=>l.team==="dev"),o=l=>ob(l,e.messagesByAgent[l.id]??[],e.sendingByAgent[l.id]??!1,e.onSendMessage,e.onRefreshAgent);return r`
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
          <strong>${n.active}</strong> Active
        </span>
        <span class="dashboard-header__stat dashboard-header__stat--idle">
          <span class="statusDot warning"></span>
          <strong>${n.idle}</strong> Idle
        </span>
        <span class="dashboard-header__stat dashboard-header__stat--error">
          <span class="statusDot"></span>
          <strong>${n.error}</strong> Error
        </span>
      </div>
      <div class="dashboard-controls">
        <input type="text" class="input" placeholder="Search agents..." style="width: 200px" />
        <button class="btn" @click=${e.onRefresh}>🔄 Refresh</button>
      </div>
    </div>
    
    ${s.length>0?r`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          👑 Coordinators
          <span class="dashboard-section__count">(${s.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${s.map(o)}
        </div>
      </section>
    `:v}
    
    ${i.length>0?r`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          🏢 TLP Specialists
          <span class="dashboard-section__count">(${i.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${i.map(o)}
        </div>
      </section>
    `:v}
    
    ${a.length>0?r`
      <section class="dashboard-section">
        <h2 class="dashboard-section__title">
          💻 Dev Team
          <span class="dashboard-section__count">(${a.length})</span>
        </h2>
        <div class="dashboard-grid">
          ${a.map(o)}
        </div>
      </section>
    `:v}
  `}let Ks=null;const Jo=e=>{Ks&&clearTimeout(Ks),Ks=window.setTimeout(()=>{il(e)},400)},lb=/^data:/i,cb=/^https?:\/\//i;function db(e){const t=e.agentsList?.agents??[],s=gr(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",a=t.find(l=>l.id===s)?.identity,o=a?.avatarUrl??a?.avatar;if(o)return lb.test(o)||cb.test(o)?o:a?.avatarUrl}function ub(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,i=e.connected?null:"Disconnected from gateway.",a=e.tab==="chat",o=a&&(e.settings.chatFocusMode||e.onboarding),l=e.onboarding?!1:e.settings.chatShowThinking,d=db(e),u=e.chatAvatarUrl??d??null,f=e.configForm??e.configSnapshot?.config,g=ln(e.basePath??""),h=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;return r`
    <div class="shell ${a?"shell--chat":""} ${o?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="nav-collapse-toggle"
            @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
            title="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
            aria-label="${e.settings.navCollapsed?"Expand sidebar":"Collapse sidebar"}"
          >
            <span class="nav-collapse-toggle__icon">${le.menu}</span>
          </button>
          <div class="brand">
            <div class="brand-logo">
              <img src=${g?`${g}/favicon.svg`:"/favicon.svg"} alt="OpenClaw" />
            </div>
            <div class="brand-text">
              <div class="brand-title">OPENCLAW</div>
              <div class="brand-sub">Gateway Dashboard</div>
            </div>
          </div>
        </div>
        <div class="topbar-status">
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
          ${Cg(e)}
        </div>
      </header>
      <aside class="nav ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${eu.map(c=>{const p=e.settings.navGroupsCollapsed[c.label]??!1,m=c.tabs.some($=>$===e.tab);return r`
            <div class="nav-group ${p&&!m?"nav-group--collapsed":""}">
              <button
                class="nav-label"
                @click=${()=>{const $={...e.settings.navGroupsCollapsed};$[c.label]=!p,e.applySettings({...e.settings,navGroupsCollapsed:$})}}
                aria-expanded=${!p}
              >
                <span class="nav-label__text">${c.label}</span>
                <span class="nav-label__chevron">${p?"+":"−"}</span>
              </button>
              <div class="nav-group__items">
                ${c.tabs.map($=>$g(e,$))}
              </div>
            </div>
          `})}
        <div class="nav-group nav-group--links">
          <div class="nav-label nav-label--static">
            <span class="nav-label__text">Resources</span>
          </div>
          <div class="nav-group__items">
            <a
              class="nav-item nav-item--external"
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noreferrer"
              title="Docs (opens in new tab)"
            >
              <span class="nav-item__icon" aria-hidden="true">${le.book}</span>
              <span class="nav-item__text">Docs</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="content ${a?"content--chat":""}">
        <section class="content-header">
          <div>
            ${e.tab==="usage"?v:r`<div class="page-title">${Xs(e.tab)}</div>`}
            ${e.tab==="usage"?v:r`<div class="page-sub">${su(e.tab)}</div>`}
          </div>
          <div class="page-meta">
            ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:v}
            ${a?wg(e):v}
          </div>
        </section>

        ${e.tab==="overview"?nm({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:c=>e.applySettings(c),onPasswordChange:c=>e.password=c,onSessionKeyChange:c=>{e.sessionKey=c,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:c,lastActiveSessionKey:c}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):v}

        ${e.tab==="channels"?Gp({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:c=>ye(e,c),onWhatsAppStart:c=>e.handleWhatsAppStart(c),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(c,p)=>$e(e,c,p),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(c,p)=>e.handleNostrProfileEdit(c,p),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(c,p)=>e.handleNostrProfileFieldChange(c,p),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):v}

        ${e.tab==="instances"?Cv({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>Oi(e)}):v}

        ${e.tab==="sessions"?um({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,onFiltersChange:c=>{e.sessionsFilterActive=c.activeMinutes,e.sessionsFilterLimit=c.limit,e.sessionsIncludeGlobal=c.includeGlobal,e.sessionsIncludeUnknown=c.includeUnknown},onRefresh:()=>Ye(e),onPatch:(c,p)=>Vd(e,c,p),onDelete:c=>Qd(e,c)}):v}

        ${e.tab==="usage"?Xm({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:c=>{e.usageStartDate=c,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Jo(e)},onEndDateChange:c=>{e.usageEndDate=c,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Jo(e)},onRefresh:()=>il(e),onTimeZoneChange:c=>{e.usageTimeZone=c},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:c=>{e.usageLogFilterRoles=c},onLogFilterToolsChange:c=>{e.usageLogFilterTools=c},onLogFilterHasToolsChange:c=>{e.usageLogFilterHasTools=c},onLogFilterQueryChange:c=>{e.usageLogFilterQuery=c},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(c,p)=>{if(p&&e.usageSelectedHours.length>0){const m=Array.from({length:24},(C,A)=>A),$=e.usageSelectedHours[e.usageSelectedHours.length-1],S=m.indexOf($),y=m.indexOf(c);if(S!==-1&&y!==-1){const[C,A]=S<y?[S,y]:[y,S],T=m.slice(C,A+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...T])]}}else e.usageSelectedHours.includes(c)?e.usageSelectedHours=e.usageSelectedHours.filter(m=>m!==c):e.usageSelectedHours=[...e.usageSelectedHours,c]},onQueryDraftChange:c=>{e.usageQueryDraft=c,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:c=>{e.usageSessionSort=c},onSessionSortDirChange:c=>{e.usageSessionSortDir=c},onSessionsTabChange:c=>{e.usageSessionsTab=c},onToggleColumn:c=>{e.usageVisibleColumns.includes(c)?e.usageVisibleColumns=e.usageVisibleColumns.filter(p=>p!==c):e.usageVisibleColumns=[...e.usageVisibleColumns,c]},onSelectSession:(c,p)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[c,...e.usageRecentSessions.filter(m=>m!==c)].slice(0,8),p&&e.usageSelectedSessions.length>0){const m=e.usageChartMode==="tokens",S=[...e.usageResult?.sessions??[]].toSorted((T,_)=>{const I=m?T.usage?.totalTokens??0:T.usage?.totalCost??0;return(m?_.usage?.totalTokens??0:_.usage?.totalCost??0)-I}).map(T=>T.key),y=e.usageSelectedSessions[e.usageSelectedSessions.length-1],C=S.indexOf(y),A=S.indexOf(c);if(C!==-1&&A!==-1){const[T,_]=C<A?[C,A]:[A,C],I=S.slice(T,_+1),z=[...new Set([...e.usageSelectedSessions,...I])];e.usageSelectedSessions=z}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===c?e.usageSelectedSessions=[]:e.usageSelectedSessions=[c];e.usageSelectedSessions.length===1&&(Ig(e,e.usageSelectedSessions[0]),Rg(e,e.usageSelectedSessions[0]))},onSelectDay:(c,p)=>{if(p&&e.usageSelectedDays.length>0){const m=(e.usageCostSummary?.daily??[]).map(C=>C.date),$=e.usageSelectedDays[e.usageSelectedDays.length-1],S=m.indexOf($),y=m.indexOf(c);if(S!==-1&&y!==-1){const[C,A]=S<y?[S,y]:[y,S],T=m.slice(C,A+1),_=[...new Set([...e.usageSelectedDays,...T])];e.usageSelectedDays=_}}else e.usageSelectedDays.includes(c)?e.usageSelectedDays=e.usageSelectedDays.filter(m=>m!==c):e.usageSelectedDays=[c]},onChartModeChange:c=>{e.usageChartMode=c},onDailyChartModeChange:c=>{e.usageDailyChartMode=c},onTimeSeriesModeChange:c=>{e.usageTimeSeriesMode=c},onTimeSeriesBreakdownChange:c=>{e.usageTimeSeriesBreakdownMode=c},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):v}

        ${e.tab==="cron"?bv({loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(c=>c.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:c=>e.cronForm={...e.cronForm,...c},onRefresh:()=>e.loadCron(),onAdd:()=>rd(e),onToggle:(c,p)=>ld(e,c,p),onRun:c=>cd(e,c),onRemove:c=>dd(e,c),onLoadRuns:c=>br(e,c)}):v}

        ${e.tab==="agents"?Zg({loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:h,activePanel:e.agentsPanel,configForm:f,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,channelsLoading:e.channelsLoading,channelsError:e.channelsError,channelsSnapshot:e.channelsSnapshot,channelsLastSuccess:e.channelsLastSuccess,cronLoading:e.cronLoading,cronStatus:e.cronStatus,cronJobs:e.cronJobs,cronError:e.cronError,agentFilesLoading:e.agentFilesLoading,agentFilesError:e.agentFilesError,agentFilesList:e.agentFilesList,agentFileActive:e.agentFileActive,agentFileContents:e.agentFileContents,agentFileDrafts:e.agentFileDrafts,agentFileSaving:e.agentFileSaving,agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkillsLoading:e.agentSkillsLoading,agentSkillsReport:e.agentSkillsReport,agentSkillsError:e.agentSkillsError,agentSkillsAgentId:e.agentSkillsAgentId,skillsFilter:e.skillsFilter,onRefresh:async()=>{await Li(e);const c=e.agentsList?.agents?.map(p=>p.id)??[];c.length>0&&hr(e,c)},onSelectAgent:c=>{e.agentsSelectedId!==c&&(e.agentsSelectedId=c,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,fr(e,c),e.agentsPanel==="files"&&Is(e,c),e.agentsPanel==="skills"&&In(e,c))},onSelectPanel:c=>{e.agentsPanel=c,c==="files"&&h&&e.agentFilesList?.agentId!==h&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},Is(e,h)),c==="skills"&&h&&In(e,h),c==="channels"&&ye(e,!1),c==="cron"&&e.loadCron()},onLoadFiles:c=>Is(e,c),onSelectFile:c=>{e.agentFileActive=c,h&&Lg(e,h,c)},onFileDraftChange:(c,p)=>{e.agentFileDrafts={...e.agentFileDrafts,[c]:p}},onFileReset:c=>{const p=e.agentFileContents[c]??"";e.agentFileDrafts={...e.agentFileDrafts,[c]:p}},onFileSave:c=>{if(!h)return;const p=e.agentFileDrafts[c]??e.agentFileContents[c]??"";Mg(e,h,c,p)},onToolsProfileChange:(c,p,m)=>{if(!f)return;const $=f.agents?.list;if(!Array.isArray($))return;const S=$.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===c);if(S<0)return;const y=["agents","list",S,"tools"];p?$e(e,[...y,"profile"],p):ze(e,[...y,"profile"]),m&&ze(e,[...y,"allow"])},onToolsOverridesChange:(c,p,m)=>{if(!f)return;const $=f.agents?.list;if(!Array.isArray($))return;const S=$.findIndex(C=>C&&typeof C=="object"&&"id"in C&&C.id===c);if(S<0)return;const y=["agents","list",S,"tools"];p.length>0?$e(e,[...y,"alsoAllow"],p):ze(e,[...y,"alsoAllow"]),m.length>0?$e(e,[...y,"deny"],m):ze(e,[...y,"deny"])},onConfigReload:()=>Ee(e),onConfigSave:()=>Mn(e),onChannelsRefresh:()=>ye(e,!1),onCronRefresh:()=>e.loadCron(),onSkillsFilterChange:c=>e.skillsFilter=c,onSkillsRefresh:()=>{h&&In(e,h)},onAgentSkillToggle:(c,p,m)=>{if(!f)return;const $=f.agents?.list;if(!Array.isArray($))return;const S=$.findIndex(z=>z&&typeof z=="object"&&"id"in z&&z.id===c);if(S<0)return;const y=$[S],C=p.trim();if(!C)return;const A=e.agentSkillsReport?.skills?.map(z=>z.name).filter(Boolean)??[],_=(Array.isArray(y.skills)?y.skills.map(z=>String(z).trim()).filter(Boolean):void 0)??A,I=new Set(_);m?I.add(C):I.delete(C),$e(e,["agents","list",S,"skills"],[...I])},onAgentSkillsClear:c=>{if(!f)return;const p=f.agents?.list;if(!Array.isArray(p))return;const m=p.findIndex($=>$&&typeof $=="object"&&"id"in $&&$.id===c);m<0||ze(e,["agents","list",m,"skills"])},onAgentSkillsDisableAll:c=>{if(!f)return;const p=f.agents?.list;if(!Array.isArray(p))return;const m=p.findIndex($=>$&&typeof $=="object"&&"id"in $&&$.id===c);m<0||$e(e,["agents","list",m,"skills"],[])},onModelChange:(c,p)=>{if(!f)return;const m=f.agents?.list;if(!Array.isArray(m))return;const $=m.findIndex(A=>A&&typeof A=="object"&&"id"in A&&A.id===c);if($<0)return;const S=["agents","list",$,"model"];if(!p){ze(e,S);return}const C=m[$]?.model;if(C&&typeof C=="object"&&!Array.isArray(C)){const A=C.fallbacks,T={primary:p,...Array.isArray(A)?{fallbacks:A}:{}};$e(e,S,T)}else $e(e,S,p)},onModelFallbacksChange:(c,p)=>{if(!f)return;const m=f.agents?.list;if(!Array.isArray(m))return;const $=m.findIndex(z=>z&&typeof z=="object"&&"id"in z&&z.id===c);if($<0)return;const S=["agents","list",$,"model"],y=m[$],C=p.map(z=>z.trim()).filter(Boolean),A=y.model,_=(()=>{if(typeof A=="string")return A.trim()||null;if(A&&typeof A=="object"&&!Array.isArray(A)){const z=A.primary;if(typeof z=="string")return z.trim()||null}return null})();if(C.length===0){_?$e(e,S,_):ze(e,S);return}$e(e,S,_?{primary:_,fallbacks:C}:{fallbacks:C})}}):v}

        ${e.tab==="skills"?fm({loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,onFilterChange:c=>e.skillsFilter=c,onRefresh:()=>rn(e,{clearMessages:!0}),onToggle:(c,p)=>Jd(e,c,p),onEdit:(c,p)=>Yd(e,c,p),onSaveKey:c=>Zd(e,c),onInstall:(c,p,m)=>Xd(e,c,p,m)}):v}

        ${e.tab==="nodes"?Mv({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>Zn(e),onDevicesRefresh:()=>Ze(e),onDeviceApprove:c=>Od(e,c),onDeviceReject:c=>Bd(e,c),onDeviceRotate:(c,p,m)=>Ud(e,{deviceId:c,role:p,scopes:m}),onDeviceRevoke:(c,p)=>zd(e,{deviceId:c,role:p}),onLoadConfig:()=>Ee(e),onLoadExecApprovals:()=>{const c=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Ni(e,c)},onBindDefault:c=>{c?$e(e,["tools","exec","node"],c):ze(e,["tools","exec","node"])},onBindAgent:(c,p)=>{const m=["agents","list",c,"tools","exec","node"];p?$e(e,m,p):ze(e,m)},onSaveBindings:()=>Mn(e),onExecApprovalsTargetChange:(c,p)=>{e.execApprovalsTarget=c,e.execApprovalsTargetNodeId=p,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:c=>{e.execApprovalsSelectedAgent=c},onExecApprovalsPatch:(c,p)=>qd(e,c,p),onExecApprovalsRemove:c=>Gd(e,c),onSaveExecApprovals:()=>{const c=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return Wd(e,c)}}):v}

        ${e.tab==="dashboard"?rb({connected:e.connected,sessions:(e.sessionsResult?.sessions??[]).map(c=>({key:c.key,agentId:c.agentId,kind:c.kind,channel:c.channel,state:c.state,lastActivity:c.lastMessageAt})),agents:[],messagesByAgent:e.dashboardMessagesByAgent??{},sendingByAgent:e.dashboardSendingByAgent??{},onSendMessage:(c,p)=>{const $=(e.sessionsResult?.sessions??[]).find(y=>(y.agentId||y.key.split(":")[1])===c);if(!$||!e.client)return;e.dashboardSendingByAgent={...e.dashboardSendingByAgent,[c]:!0};const S=e.dashboardMessagesByAgent[c]??[];e.dashboardMessagesByAgent={...e.dashboardMessagesByAgent,[c]:[...S,{id:`user-${Date.now()}`,role:"user",content:p,timestamp:Date.now()}]},e.client.request("sessions.send",{sessionKey:$.key,message:p}).then(()=>{e.dashboardSendingByAgent={...e.dashboardSendingByAgent,[c]:!1},setTimeout(()=>{e.client&&e.client.request("sessions.history",{sessionKey:$.key,limit:50,includeTools:!0}).then(y=>{const A=(y.messages??[]).map((T,_)=>({id:`msg-${_}`,role:T.role,content:typeof T.content=="string"?T.content:JSON.stringify(T.content),timestamp:T.timestamp,toolName:T.toolName}));e.dashboardMessagesByAgent={...e.dashboardMessagesByAgent,[c]:A}})},2e3)}).catch(()=>{e.dashboardSendingByAgent={...e.dashboardSendingByAgent,[c]:!1}})},onRefreshAgent:c=>{const m=(e.sessionsResult?.sessions??[]).find($=>($.agentId||$.key.split(":")[1])===c);!m||!e.client||e.client.request("sessions.history",{sessionKey:m.key,limit:50,includeTools:!0}).then($=>{const y=($.messages??[]).map((C,A)=>({id:`msg-${A}`,role:C.role,content:typeof C.content=="string"?C.content:JSON.stringify(C.content),timestamp:C.timestamp,toolName:C.toolName}));e.dashboardMessagesByAgent={...e.dashboardMessagesByAgent,[c]:y}})},onRefresh:()=>{Ye(e);const c=e.sessionsResult?.sessions??[];for(const p of c){const m=p.agentId||p.key.split(":")[1];m&&e.client&&e.client.request("sessions.history",{sessionKey:p.key,limit:50,includeTools:!0}).then($=>{const y=($.messages??[]).map((C,A)=>({id:`msg-${A}`,role:C.role,content:typeof C.content=="string"?C.content:JSON.stringify(C.content),timestamp:C.timestamp,toolName:C.toolName}));e.dashboardMessagesByAgent={...e.dashboardMessagesByAgent,[m]:y}}).catch(()=>{})}}}):v}

        ${e.tab==="chat"?cv({sessionKey:e.sessionKey,onSessionKeyChange:c=>{e.sessionKey=c,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:c,lastActiveSessionKey:c}),e.loadAssistantIdentity(),nn(e),ni(e)},thinkingLevel:e.chatThinkingLevel,showThinking:l,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:u,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:i,error:e.lastError,sessions:e.sessionsResult,focusMode:o,onRefresh:()=>(e.resetToolStream(),Promise.all([nn(e),ni(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:c=>e.handleChatScroll(c),onDraftChange:c=>e.chatMessage=c,attachments:e.chatAttachments,onAttachmentsChange:c=>e.chatAttachments=c,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:c=>e.removeQueuedMessage(c),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:c=>e.handleOpenSidebar(c),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:c=>e.handleSplitRatioChange(c),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):v}

        ${e.tab==="config"?hv({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:c=>{e.configRaw=c},onFormModeChange:c=>e.configFormMode=c,onFormPatch:(c,p)=>$e(e,c,p),onSearchChange:c=>e.configSearchQuery=c,onSectionChange:c=>{e.configActiveSection=c,e.configActiveSubsection=null},onSubsectionChange:c=>e.configActiveSubsection=c,onReload:()=>Ee(e),onSave:()=>Mn(e),onApply:()=>Tc(e),onUpdate:()=>_c(e)}):v}

        ${e.tab==="debug"?wv({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:c=>e.debugCallMethod=c,onCallParamsChange:c=>e.debugCallParams=c,onRefresh:()=>Jn(e),onCall:()=>Vc(e)}):v}

        ${e.tab==="logs"?Lv({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:c=>e.logsFilterText=c,onLevelToggle:(c,p)=>{e.logsLevelFilters={...e.logsLevelFilters,[c]:p}},onToggleAutoFollow:c=>e.logsAutoFollow=c,onRefresh:()=>Ai(e,{reset:!0}),onExport:(c,p)=>e.exportLogs(c,p),onScroll:c=>e.handleLogsScroll(c)}):v}
      </main>
      ${Sv(e)}
      ${Av(e)}
    </div>
  `}var gb=Object.defineProperty,pb=Object.getOwnPropertyDescriptor,w=(e,t,n,s)=>{for(var i=s>1?void 0:s?pb(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&gb(t,n,i),i};const js=tg();function fb(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let x=class extends Tt{constructor(){super(...arguments),this.settings=iu(),this.password="",this.tab="chat",this.onboarding=fb(),this.connected=!1,this.theme=this.settings.theme??"system",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=js.name,this.assistantAvatar=js.avatar,this.assistantAgentId=js.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.dashboardMessagesByAgent={},this.dashboardSendingByAgent={},this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="form",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...Ju},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...Yu},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>mu(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),gg(this)}firstUpdated(){pg(this)}disconnectedCallback(){fg(this),super.disconnectedCallback()}updated(e){hg(this,e)}connect(){tl(this)}handleChatScroll(e){jc(this,e)}handleLogsScroll(e){Wc(this,e)}exportLogs(e,t){qc(e,t)}resetToolStream(){ss(this)}resetChatScroll(){Na(this)}scrollToBottom(){Na(this),an(this,!0)}async loadAssistantIdentity(){await Zr(this)}applySettings(e){vt(this,e)}setTab(e){du(this,e)}setTheme(e,t){uu(this,e,t)}async loadOverview(){await jr(this)}async loadCron(){await Un(this)}async handleAbortChat(){await Vr(this)}removeQueuedMessage(e){Wu(this,e)}async handleSendChat(e,t){await qu(this,e,t)}async handleWhatsAppStart(e){await Ic(this,e)}async handleWhatsAppWait(){await Rc(this)}async handleWhatsAppLogout(){await Dc(this)}async handleChannelConfigSave(){await Pc(this)}async handleChannelConfigReload(){await Fc(this)}handleNostrProfileEdit(e,t){Oc(this,e,t)}handleNostrProfileCancel(){Bc(this)}handleNostrProfileFieldChange(e,t){Uc(this,e,t)}async handleNostrProfileSave(){await Hc(this)}async handleNostrProfileImport(){await Kc(this)}handleNostrProfileToggleAdvanced(){zc(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,vt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return ub(this)}};w([k()],x.prototype,"settings",2);w([k()],x.prototype,"password",2);w([k()],x.prototype,"tab",2);w([k()],x.prototype,"onboarding",2);w([k()],x.prototype,"connected",2);w([k()],x.prototype,"theme",2);w([k()],x.prototype,"themeResolved",2);w([k()],x.prototype,"hello",2);w([k()],x.prototype,"lastError",2);w([k()],x.prototype,"eventLog",2);w([k()],x.prototype,"assistantName",2);w([k()],x.prototype,"assistantAvatar",2);w([k()],x.prototype,"assistantAgentId",2);w([k()],x.prototype,"sessionKey",2);w([k()],x.prototype,"chatLoading",2);w([k()],x.prototype,"chatSending",2);w([k()],x.prototype,"chatMessage",2);w([k()],x.prototype,"chatMessages",2);w([k()],x.prototype,"chatToolMessages",2);w([k()],x.prototype,"chatStream",2);w([k()],x.prototype,"chatStreamStartedAt",2);w([k()],x.prototype,"chatRunId",2);w([k()],x.prototype,"compactionStatus",2);w([k()],x.prototype,"chatAvatarUrl",2);w([k()],x.prototype,"chatThinkingLevel",2);w([k()],x.prototype,"chatQueue",2);w([k()],x.prototype,"chatAttachments",2);w([k()],x.prototype,"sidebarOpen",2);w([k()],x.prototype,"sidebarContent",2);w([k()],x.prototype,"sidebarError",2);w([k()],x.prototype,"splitRatio",2);w([k()],x.prototype,"nodesLoading",2);w([k()],x.prototype,"nodes",2);w([k()],x.prototype,"dashboardMessagesByAgent",2);w([k()],x.prototype,"dashboardSendingByAgent",2);w([k()],x.prototype,"devicesLoading",2);w([k()],x.prototype,"devicesError",2);w([k()],x.prototype,"devicesList",2);w([k()],x.prototype,"execApprovalsLoading",2);w([k()],x.prototype,"execApprovalsSaving",2);w([k()],x.prototype,"execApprovalsDirty",2);w([k()],x.prototype,"execApprovalsSnapshot",2);w([k()],x.prototype,"execApprovalsForm",2);w([k()],x.prototype,"execApprovalsSelectedAgent",2);w([k()],x.prototype,"execApprovalsTarget",2);w([k()],x.prototype,"execApprovalsTargetNodeId",2);w([k()],x.prototype,"execApprovalQueue",2);w([k()],x.prototype,"execApprovalBusy",2);w([k()],x.prototype,"execApprovalError",2);w([k()],x.prototype,"pendingGatewayUrl",2);w([k()],x.prototype,"configLoading",2);w([k()],x.prototype,"configRaw",2);w([k()],x.prototype,"configRawOriginal",2);w([k()],x.prototype,"configValid",2);w([k()],x.prototype,"configIssues",2);w([k()],x.prototype,"configSaving",2);w([k()],x.prototype,"configApplying",2);w([k()],x.prototype,"updateRunning",2);w([k()],x.prototype,"applySessionKey",2);w([k()],x.prototype,"configSnapshot",2);w([k()],x.prototype,"configSchema",2);w([k()],x.prototype,"configSchemaVersion",2);w([k()],x.prototype,"configSchemaLoading",2);w([k()],x.prototype,"configUiHints",2);w([k()],x.prototype,"configForm",2);w([k()],x.prototype,"configFormOriginal",2);w([k()],x.prototype,"configFormDirty",2);w([k()],x.prototype,"configFormMode",2);w([k()],x.prototype,"configSearchQuery",2);w([k()],x.prototype,"configActiveSection",2);w([k()],x.prototype,"configActiveSubsection",2);w([k()],x.prototype,"channelsLoading",2);w([k()],x.prototype,"channelsSnapshot",2);w([k()],x.prototype,"channelsError",2);w([k()],x.prototype,"channelsLastSuccess",2);w([k()],x.prototype,"whatsappLoginMessage",2);w([k()],x.prototype,"whatsappLoginQrDataUrl",2);w([k()],x.prototype,"whatsappLoginConnected",2);w([k()],x.prototype,"whatsappBusy",2);w([k()],x.prototype,"nostrProfileFormState",2);w([k()],x.prototype,"nostrProfileAccountId",2);w([k()],x.prototype,"presenceLoading",2);w([k()],x.prototype,"presenceEntries",2);w([k()],x.prototype,"presenceError",2);w([k()],x.prototype,"presenceStatus",2);w([k()],x.prototype,"agentsLoading",2);w([k()],x.prototype,"agentsList",2);w([k()],x.prototype,"agentsError",2);w([k()],x.prototype,"agentsSelectedId",2);w([k()],x.prototype,"agentsPanel",2);w([k()],x.prototype,"agentFilesLoading",2);w([k()],x.prototype,"agentFilesError",2);w([k()],x.prototype,"agentFilesList",2);w([k()],x.prototype,"agentFileContents",2);w([k()],x.prototype,"agentFileDrafts",2);w([k()],x.prototype,"agentFileActive",2);w([k()],x.prototype,"agentFileSaving",2);w([k()],x.prototype,"agentIdentityLoading",2);w([k()],x.prototype,"agentIdentityError",2);w([k()],x.prototype,"agentIdentityById",2);w([k()],x.prototype,"agentSkillsLoading",2);w([k()],x.prototype,"agentSkillsError",2);w([k()],x.prototype,"agentSkillsReport",2);w([k()],x.prototype,"agentSkillsAgentId",2);w([k()],x.prototype,"sessionsLoading",2);w([k()],x.prototype,"sessionsResult",2);w([k()],x.prototype,"sessionsError",2);w([k()],x.prototype,"sessionsFilterActive",2);w([k()],x.prototype,"sessionsFilterLimit",2);w([k()],x.prototype,"sessionsIncludeGlobal",2);w([k()],x.prototype,"sessionsIncludeUnknown",2);w([k()],x.prototype,"usageLoading",2);w([k()],x.prototype,"usageResult",2);w([k()],x.prototype,"usageCostSummary",2);w([k()],x.prototype,"usageError",2);w([k()],x.prototype,"usageStartDate",2);w([k()],x.prototype,"usageEndDate",2);w([k()],x.prototype,"usageSelectedSessions",2);w([k()],x.prototype,"usageSelectedDays",2);w([k()],x.prototype,"usageSelectedHours",2);w([k()],x.prototype,"usageChartMode",2);w([k()],x.prototype,"usageDailyChartMode",2);w([k()],x.prototype,"usageTimeSeriesMode",2);w([k()],x.prototype,"usageTimeSeriesBreakdownMode",2);w([k()],x.prototype,"usageTimeSeries",2);w([k()],x.prototype,"usageTimeSeriesLoading",2);w([k()],x.prototype,"usageSessionLogs",2);w([k()],x.prototype,"usageSessionLogsLoading",2);w([k()],x.prototype,"usageSessionLogsExpanded",2);w([k()],x.prototype,"usageQuery",2);w([k()],x.prototype,"usageQueryDraft",2);w([k()],x.prototype,"usageSessionSort",2);w([k()],x.prototype,"usageSessionSortDir",2);w([k()],x.prototype,"usageRecentSessions",2);w([k()],x.prototype,"usageTimeZone",2);w([k()],x.prototype,"usageContextExpanded",2);w([k()],x.prototype,"usageHeaderPinned",2);w([k()],x.prototype,"usageSessionsTab",2);w([k()],x.prototype,"usageVisibleColumns",2);w([k()],x.prototype,"usageLogFilterRoles",2);w([k()],x.prototype,"usageLogFilterTools",2);w([k()],x.prototype,"usageLogFilterHasTools",2);w([k()],x.prototype,"usageLogFilterQuery",2);w([k()],x.prototype,"cronLoading",2);w([k()],x.prototype,"cronJobs",2);w([k()],x.prototype,"cronStatus",2);w([k()],x.prototype,"cronError",2);w([k()],x.prototype,"cronForm",2);w([k()],x.prototype,"cronRunsJobId",2);w([k()],x.prototype,"cronRuns",2);w([k()],x.prototype,"cronBusy",2);w([k()],x.prototype,"skillsLoading",2);w([k()],x.prototype,"skillsReport",2);w([k()],x.prototype,"skillsError",2);w([k()],x.prototype,"skillsFilter",2);w([k()],x.prototype,"skillEdits",2);w([k()],x.prototype,"skillsBusyKey",2);w([k()],x.prototype,"skillMessages",2);w([k()],x.prototype,"debugLoading",2);w([k()],x.prototype,"debugStatus",2);w([k()],x.prototype,"debugHealth",2);w([k()],x.prototype,"debugModels",2);w([k()],x.prototype,"debugHeartbeat",2);w([k()],x.prototype,"debugCallMethod",2);w([k()],x.prototype,"debugCallParams",2);w([k()],x.prototype,"debugCallResult",2);w([k()],x.prototype,"debugCallError",2);w([k()],x.prototype,"logsLoading",2);w([k()],x.prototype,"logsError",2);w([k()],x.prototype,"logsFile",2);w([k()],x.prototype,"logsEntries",2);w([k()],x.prototype,"logsFilterText",2);w([k()],x.prototype,"logsLevelFilters",2);w([k()],x.prototype,"logsAutoFollow",2);w([k()],x.prototype,"logsTruncated",2);w([k()],x.prototype,"logsCursor",2);w([k()],x.prototype,"logsLastFetchAt",2);w([k()],x.prototype,"logsLimit",2);w([k()],x.prototype,"logsMaxBytes",2);w([k()],x.prototype,"logsAtBottom",2);w([k()],x.prototype,"chatNewMessagesBelow",2);x=w([or("openclaw-app")],x);
//# sourceMappingURL=index-D9veG7BO.js.map
