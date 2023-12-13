import{i as ue,p as de,e as q,C as te,G as j,a as Z,w as se,W as ne,o as ce,l as o,f as l,j as h,s as U,k as $,B as N,F as D,m as K,aL as ve,u as T,L as me,aC as fe,aF as pe,_ as H,A as _e,q as oe,I as Q,aE as ge,aH as he,au as be}from"./seventv.index.3.0.9.js";import{a as Ee,h as ye,d as Ce,o as ke,f as Ie}from"./seventv.index.3.0.93.js";import{u as ie}from"./seventv.main.3.0.9.js";import{u as re}from"./seventv.useChannelContext.3.0.9.js";import{a as we}from"./seventv.useModule.3.0.9.js";import{D as Oe,u as Se,S as Te}from"./seventv.Settings.3.0.9.js";import{_ as J,U as Me,G as Ae,a as $e}from"./seventv.StarIcon.3.0.9.js";import{a as B,r as O,t as ae,u as k}from"./seventv.useUserAgent.3.0.9.js";import{d as le}from"./seventv.ReactHooks.3.0.9.js";import{u as Fe}from"./seventv.useChatEmotes.3.0.9.js";import{u as Ve}from"./seventv.useCosmetics.3.0.9.js";import{u as xe}from"./seventv.useUpdater.3.0.9.js";import{E as Re,_ as De}from"./seventv.Emote.3.0.9.js";import{d as Y}from"./seventv.Transform.3.0.9.js";import{U as Le}from"./seventv.UiFloating.3.0.9.js";const ee=Symbol("seventv-emote-menu-context");function W(){let f=ue(ee,null);return f||(f=B({open:!1,filter:"",channelID:""}),de(ee,f)),f}const Pe={mounted(f,p){const{value:_}=p;_("mounted",f)},updated(f,p){const{value:_}=p;_("updated",f)},beforeUnmount(f,p){const{value:_}=p;_("unmounted",f)}},Ue=["collapsed"],Be={class:"seventv-set-header"},je={class:"seventv-set-header-icon"},Ne=["src"],Ke={class:"seventv-set-name"},Ge={key:0,class:"seventv-emote-set"},Je=["disabled","ratio","load-state","set-id","emote-id","zero-width","favorite","onClick","onKeydown"],ze=q({__name:"EmoteMenuSet",props:{es:{}},emits:["emote-clicked","emotes-updated"],setup(f,{expose:p,emit:_}){const c=f,{t:L,te:E}=te(),M=W(),S=O([]),F=O(),A=O(!1),v=j("ui.emote_menu.collapsed_sets"),g=j("ui.emote_menu.favorites"),V=j("ui.emote_menu.usage"),{alt:x}=Ee(),I=O(b());function P(e){if(c.es.id==="USAGE"){const t=V.value.get(e.id)??0;return t-t*2||0}let r=Y(e);return(e.flags||0)!==0&&(r-=.5),r}const u=le((e="")=>{const r=[];if(!(c.es.provider&&!c.es.emotes.length)){for(const t of c.es.emotes)e&&!t.name.toLowerCase().includes(e.toLowerCase())||r.push(t);r.sort((t,C)=>{const R=P(t),X=P(C);return R==X?t.name.localeCompare(C.name):R>X?1:-1}),S.value=r,_("emotes-updated",r)}},25);function m(e,r){return e.scope==="PERSONAL"&&r.data&&r.data.state&&!r.data.state.includes("PERSONAL")}function y(e){if(!m(c.es,e)){if(x.value){g.value.has(e.id)?g.value.delete(e.id):g.value.add(e.id),g.value=new Set(g.value);return}_("emote-clicked",e)}}function d(){const e=`emote_menu.sets.${c.es.name}`;return E(e)?L(e):c.es.name}ye("Escape",()=>{M.open=!1}),Z(()=>c.es.emotes,()=>{u(M.filter)}),se(()=>{u(M.filter)});const a=B({}),G=O(!1),z=c.es.provider!=="EMOJI";let w;function s(){w||(w=new IntersectionObserver(e=>{e.forEach(async r=>{const t=r.target.getAttribute("emote-id");if(r.isIntersecting&&!a[t]){const C=a[t]===-1;a[t]=0,z&&!C&&G.value&&await me(fe(100)).toBeTruthy()}if(a[t]===0&&!r.isIntersecting){delete a[t];return}if(r.isIntersecting&&a[t]===0){a[t]=1;return}!r.isIntersecting&&a[t]>=0&&(a[t]=a[t]===1?-1:0)}),G.value=!0}),A.value=!0)}function i(e,r){if(w)for(let t=0;t<r.children.length;t++){const C=r.children.item(t);if(!C)continue;const R=C.getAttribute("emote-id");!R||a[R]||(e==="mounted"||e==="updated"?w.observe(C):w.unobserve(C))}}function b(){return v.value?v.value.has(c.es.id):!1}function n(){v.value&&(b()?(v.value.delete(c.es.id),I.value=!1):(v.value.add(c.es.id),I.value=!0),v.value=new Set(v.value))}return ne(()=>{s()}),ce(()=>{w&&w.disconnect()}),p({containerEl:F}),(e,r)=>S.value.length?(o(),l("div",{key:0,ref_key:"containerEl",ref:F,class:"seventv-emote-set-container",collapsed:I.value},[h("div",Be,[h("div",je,[e.es.owner&&e.es.owner.avatar_url?(o(),l("img",{key:0,src:e.es.owner.avatar_url},null,8,Ne)):(o(),U(J,{key:1,class:"logo",provider:e.es.provider},null,8,["provider"]))]),h("span",Ke,ae(d()),1),h("div",{class:"seventv-set-chevron",onClick:n},[$(Oe)])]),A.value?N((o(),l("div",Ge,[(o(!0),l(D,null,K(S.value,t=>{var C;return o(),l("div",{key:t.id,class:"seventv-emote-container",disabled:m(e.es,t),ratio:k(Y)(t),"load-state":a[t.id],"set-id":e.es.id,"emote-id":t.id,"zero-width":(t.flags||0)!==0,favorite:((C=k(g))==null?void 0:C.has(t.id))&&e.es.id!=="FAVORITE",tabindex:"0",onClick:R=>y(t),onKeydown:ve(pe(R=>y(t),["prevent"]),["enter"])},[a[t.id]?(o(),U(Re,{key:0,emote:t,unload:!a[t.id]},null,8,["emote","unload"])):T("",!0)],40,Je)}),128))])),[[k(Pe),i]]):T("",!0)],8,Ue)):T("",!0)}});const Ze=H(ze,[["__scopeId","data-v-be90977d"]]),qe={class:"seventv-emote-menu-tab-container"},He={class:"seventv-emote-menu-tab-sidebar"},We={class:"seventv-emote-menu-sidebar-icons"},Xe=["selected","onClick"],Qe={class:"seventv-emote-menu-set-sidebar-icon"},Ye={key:0,class:"seventv-emote-menu-emoji-group"},et=["src"],tt={class:"seventv-emote-menu-settings-button-container"},st={key:0,class:"seventv-emote-menu-settings-button-update-flair"},nt=q({__name:"EmoteMenuTab",props:{provider:{},selected:{type:Boolean}},emits:["emote-clicked","provider-visible","toggle-settings","toggle-native-menu"],setup(f,{emit:p}){var w;const _=f,{t:c}=te(),L=W(),E=re(L.channelID),M=Fe(E),S=xe(),F=O(""),A=M.byProvider(_.provider)??B({}),v=ie(),g=Ve(((w=v.identity)==null?void 0:w.id)??""),V=B(new Set),x=O([]),I=j("ui.emote_menu.favorites"),P=["1f603","1f44b","1f343","1f354","26bd","1f698","1f4a1","1f523","1f6a9"],u=["Smileys & Emotion","People & Body","Animals & Nature","Food & Drink","Activities","Travel & Places","Objects","Symbols","Flags"];function m(){return I.value?Array.from(I.value.values()).map(s=>M.find(i=>i.id===s)).filter(s=>!!s):[]}if(_.provider==="FAVORITE"){const s=A.FAVORITE=B({id:"FAVORITE",name:c("emote_menu.favorite_set"),emotes:m()});Z(I,()=>{s.emotes=m()})}function y(s,i){if(!i||!i.length)return;const b=i[0];b.containerEl&&(F.value=s,b.containerEl.scrollIntoView({behavior:"auto"}))}function d(s){return s.scope==="GLOBAL"?1:E.id&&s.owner&&s.owner.id===E.id?-1:(s.flags??0)&4?-2:0}function a(s,i){const b=d(s),n=d(i);return s.provider==="EMOJI"&&i.provider==="EMOJI"&&u.indexOf(s.name)>-1&&u.indexOf(i.name)>-1?u.indexOf(s.name)-u.indexOf(i.name):b==n?s.name.localeCompare(i.name):b>n?1:-1}function G(s,i){i?V.add(s):V.delete(s),p("provider-visible",!!V.size)}const z=le(()=>{var i;const s=Object.values(A);if((i=g.emoteSets)!=null&&i.size&&s.push(...Array.from(g.emoteSets.values()).filter(b=>b.provider===_.provider)),_.provider==="PLATFORM"){const b=s.reduce((n,e)=>{const r=n[e.name];return r?r.emotes.push(...e.emotes):n[e.name]={set:e,emotes:[...e.emotes]},n},{});s.splice(0,s.length,...Object.values(b).map(n=>({...n.set,emotes:n.emotes})))}s.sort(a),x.value=s},50);return Z(()=>[L.filter,A,g.emoteSets],z,{immediate:!0}),(s,i)=>{const b=_e("t");return o(),l("div",qe,[$(Me,null,{default:oe(()=>[s.provider==="PLATFORM"?(o(),l("div",{key:0,class:"seventv-native-menu-toggle",onClick:i[0]||(i[0]=n=>p("toggle-native-menu"))},[$(J,{provider:"PLATFORM"}),N(h("span",null,null,512),[[b,"emote_menu.native"]])])):T("",!0),(o(!0),l(D,null,K(x.value,n=>(o(),l("div",{key:n.id},[$(Ze,{ref_for:!0,ref:"es-"+n.id,es:n,onEmoteClicked:i[1]||(i[1]=e=>p("emote-clicked",e)),onEmotesUpdated:e=>G(n,!!e.length)},null,8,["es","onEmotesUpdated"])]))),128))]),_:1}),h("div",He,[h("div",We,[(o(!0),l(D,null,K(x.value,n=>(o(),l(D,{key:n.id},[n.emotes.length?(o(),l("div",{key:0,class:"seventv-emote-menu-set-sidebar-icon-container",selected:F.value==n.id,onClick:e=>y(n.id,s.$refs["es-"+n.id])},[h("div",Qe,[n.provider==="EMOJI"&&u.indexOf(n.name)>-1?(o(),l("div",Ye,[$(De,{id:P[u.indexOf(n.name)],alt:n.name},null,8,["id","alt"])])):n.owner&&n.owner.avatar_url?(o(),l("img",{key:1,src:n.owner.avatar_url},null,8,et)):(o(),U(J,{key:2,class:"logo",provider:n.provider},null,8,["provider"]))])],8,Xe)):T("",!0)],64))),128))]),h("div",tt,[h("div",{class:"seventv-emote-menu-settings-button",onClick:i[2]||(i[2]=n=>p("toggle-settings"))},[$(Ae,{provider:"7TV"}),k(S).isUpToDate?T("",!0):(o(),l("div",st))])])])])}}});const ot=H(nt,[["__scopeId","data-v-e0276aa9"]]),it={class:"seventv-emote-menu-header"},rt={class:"seventv-emote-menu-providers"},at=["selected","onClick"],lt={key:0,class:"seventv-emote-menu-search"},ut={class:"search-icon"},dt=q({__name:"EmoteMenu",props:{anchorEl:{},width:{},scale:{}},emits:["emote-click","toggle-native-menu","close"],setup(f,{emit:p}){const _=f,c=O(),L=re(),E=W();E.channelID=L.id;const M=Se(),{providers:S}=ie(),F=O(),A=j("ui.emote_menu_search"),v=O("7TV"),g=B({FAVORITE:!0,"7TV":S.has("7TV"),FFZ:S.has("FFZ"),BTTV:S.has("BTTV"),PLATFORM:!0,EMOJI:!0}),V=we("chat-input-controller");ne(()=>{var u;(u=V.value)!=null&&u.instance}),se(()=>{c.value&&(c.value.style.setProperty("--width",_.width??"unset"),c.value.style.setProperty("--seventv-emote-menu-scale",_.scale??"3rem"))});const x=Ce("Control",{initial:!1});ke("e",u=>{x.value&&(I(),u.preventDefault())});function I(){E.open=!E.open}function P(u,m){var y;g[u]=m,!m&&u===v.value&&(v.value=((y=Object.entries(g).find(([,d])=>d))==null?void 0:y[0])??"7TV")}return Ie(c,u=>{p("close",u)}),(u,m)=>(o(),U(Le,{anchor:u.anchorEl,placement:"top-end",middleware:[k(he)({padding:4,mainAxis:!0,crossAxis:!0}),k(be)({mainAxis:4,crossAxis:-4})]},{default:oe(()=>[k(E).open&&k(E).channelID?(o(),l("div",{key:0,ref_key:"containerRef",ref:c,class:"seventv-emote-menu"},[h("div",it,[h("div",rt,[(o(!0),l(D,null,K(g,(y,d)=>(o(),l(D,null,[y?(o(),l("div",{key:d,class:"seventv-emote-menu-provider-icon",selected:d===v.value,onClick:a=>v.value=d},[d!=="FAVORITE"?(o(),U(J,{key:0,provider:d},null,8,["provider"])):(o(),U($e,{key:1})),N(h("span",null,ae(d),513),[[Q,d===v.value&&d!=="FAVORITE"]])],8,at)):T("",!0)],64))),256))]),k(A)?T("",!0):(o(),l("div",lt,[N(h("input",{ref_key:"searchInputRef",ref:F,"onUpdate:modelValue":m[0]||(m[0]=y=>k(E).filter=y),class:"seventv-emote-menu-search-input"},null,512),[[ge,k(E).filter]]),h("div",ut,[$(Te)])]))]),(o(!0),l(D,null,K(g,(y,d)=>N((o(),l("div",{key:d,class:"seventv-emote-menu-body"},[$(ot,{provider:d,selected:d===v.value,onEmoteClicked:m[1]||(m[1]=a=>p("emote-click",a)),onProviderVisible:a=>P(d,a),onToggleSettings:m[2]||(m[2]=a=>k(M).toggle()),onToggleNativeMenu:m[3]||(m[3]=a=>[I(),p("toggle-native-menu")])},null,8,["provider","selected","onProviderVisible"])])),[[Q,d===v.value]])),128))],512)):T("",!0)]),_:1},8,["anchor","middleware"]))}});const Ot=H(dt,[["__scopeId","data-v-7feb330b"]]);export{Ot as E,W as u};