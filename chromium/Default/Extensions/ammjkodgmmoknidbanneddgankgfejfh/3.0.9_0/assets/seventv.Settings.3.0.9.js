var N=Object.defineProperty;var L=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(L(s,typeof e!="symbol"?e+"":e,t),t);import{_ as d,l as c,f as a,j as i,e as w,i as R,a1 as O,u as C,y as P,z as B,x as M,F as b,m as $,s as H,a as q,k as g,q as A,aA as D,A as j,B as U,$ as z,aO as I}from"./seventv.index.3.0.9.js";import{u as r,c as F,r as S,t as f,a as x,L as G,_ as Z,m as Q}from"./seventv.useUserAgent.3.0.9.js";import{u as K}from"./seventv.main.3.0.9.js";import{S as W,U as E,C as X}from"./seventv.StarIcon.3.0.9.js";import{b as Y}from"./seventv.seventv.user.gql.3.0.9.js";import{o as J}from"./seventv.index.3.0.92.js";import{i as ee}from"./seventv.index.3.0.93.js";const te={},se={width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=i("path",{d:"M11.3733 5.68667C11.3733 6.94156 10.966 8.10077 10.2797 9.04125L13.741 12.5052C14.0827 12.8469 14.0827 13.4019 13.741 13.7437C13.3992 14.0854 12.8442 14.0854 12.5025 13.7437L9.04125 10.2797C8.10077 10.9687 6.94156 11.3733 5.68667 11.3733C2.54533 11.3733 0 8.828 0 5.68667C0 2.54533 2.54533 0 5.68667 0C8.828 0 11.3733 2.54533 11.3733 5.68667ZM5.68667 9.62359C7.86018 9.62359 9.62359 7.86018 9.62359 5.68667C9.62359 3.51316 7.86018 1.74974 5.68667 1.74974C3.51316 1.74974 1.74974 3.51316 1.74974 5.68667C1.74974 7.86018 3.51316 9.62359 5.68667 9.62359Z",fill:"currentColor"},null,-1),oe=[ne];function ie(s,e){return c(),a("svg",se,oe)}const ct=d(te,[["render",ie]]),ce={},ae={width:"9",height:"6",viewBox:"0 0 9 6",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},re=i("path",{d:"M0.221974 4.46565L3.93498 0.251908C4.0157 0.160305 4.10314 0.0955723 4.19731 0.0577097C4.29148 0.0192364 4.39238 5.49454e-08 4.5 5.3662e-08C4.60762 5.23786e-08 4.70852 0.0192364 4.80269 0.0577097C4.89686 0.0955723 4.9843 0.160305 5.06502 0.251908L8.77803 4.46565C8.92601 4.63359 9 4.84733 9 5.10687C9 5.36641 8.92601 5.58015 8.77803 5.74809C8.63005 5.91603 8.4417 6 8.213 6C7.98431 6 7.79596 5.91603 7.64798 5.74809L4.5 2.17557L1.35202 5.74809C1.20404 5.91603 1.0157 6 0.786996 6C0.558296 6 0.369956 5.91603 0.221974 5.74809C0.0739918 5.58015 6.39938e-08 5.36641 6.08988e-08 5.10687C5.78038e-08 4.84733 0.0739918 4.63359 0.221974 4.46565Z"},null,-1),_e=[re];function le(s,e){return c(),a("svg",ae,_e)}const at=d(ce,[["render",le]]),ue=s=>(P("data-v-a02322cc"),s=s(),B(),s),de={class:"seventv-settings-compat"},pe=ue(()=>i("h3",null,[M(" Compatibility "),i("p",null,"Scan your extensions for compatibility issues")],-1)),he=["src"],me=w({__name:"SettingsViewCompat",setup(s){const{browser:e}=F(),t=R(O,""),o=e.name!=="Firefox";return o||window.open(t+"#/compat","_blank"),(_,u)=>(c(),a("main",de,[pe,o?(c(),a("iframe",{key:0,src:r(t)+"#/compat?noheader=1"},null,8,he)):C("",!0)]))}});const ve=d(me,[["__scopeId","data-v-a02322cc"]]),fe=["sticky"],ge=["id"],we=w({__name:"SettingsViewConfigCat",props:{name:{},nodes:{}},setup(s,{expose:e}){const t=s,o=T(),_=S(new Set(t.nodes.map(n=>n.key).filter(n=>!o.seen.includes(n)))),u=S(!1),p=S();ee(p,([n])=>{if(u.value=n.isIntersecting,!u.value)return;o.intersectingSubcategory=t.name;const y=n.target.getElementsByClassName("seventv-settings-node");for(const v of Array.from(y)){const V=v.getAttribute("data-key");V&&o.markSettingAsSeen(V)}},{threshold:.75,rootMargin:"0px 0px -50% 0px"});function m(n){_.value.delete(n),o.markSettingAsSeen(n)}function k(){var n;(n=p.value)==null||n.scrollIntoView({block:"start"})}return e({name:t.name,scrollIntoView:k}),(n,y)=>(c(),a("div",{ref_key:"catRef",ref:p,sticky:u.value,class:"seventv-settings-view-subcategory"},[n.name?(c(),a("h3",{key:0,id:n.name,ref:"subcategoryRefs",class:"seventv-settings-subcategory-header"},f(n.name),9,ge)):C("",!0),(c(!0),a(b,null,$(n.nodes,v=>(c(),H(W,{key:v.key,node:v,unseen:_.value.has(v.key),onSeen:V=>m(v.key)},null,8,["node","unseen","onSeen"]))),128))],8,fe))}});const Ce=d(we,[["__scopeId","data-v-3393bf55"]]),ye={key:0,class:"seventv-settings-view-container"},Se=w({__name:"SettingsViewConfig",setup(s){const e=T(),t=S([]);return q(()=>e.scrollpoint,()=>{var o;(o=t.value.find(_=>_.name==e.scrollpoint))==null||o.scrollIntoView()}),(o,_)=>r(e).mappedNodes[r(e).category]?(c(),a("div",ye,[g(E,null,{default:A(()=>[(c(!0),a(b,null,$(Object.entries(r(e).mappedNodes[r(e).category]),([u,p])=>(c(),a("div",{key:u,class:"seventv-settings-subcategory"},[g(Ce,{ref_for:!0,ref_key:"subCats",ref:t,name:u,nodes:p},null,8,["name","nodes"])]))),128))]),_:1})])):C("",!0)}});const Ve=d(Se,[["__scopeId","data-v-c77af354"]]),xe={},ke={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ie=i("path",{d:"M0 480H144 512 640V352c0-59.6-40.8-109.8-96-124V192c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192v8.2C40.1 220 0 273.3 0 336V480z"},null,-1),be=[Ie];function $e(s,e){return c(),a("svg",ke,be)}const Ae=d(xe,[["render",$e]]),Ee={class:"seventv-settings-home"},Te={class:"seventv-settings-home-body"},Ne={class:"seventv-settings-home-changelog"},Le={class:"seventv-settings-home-footer"},Re={class:"seventv-settings-app-info"},Oe={class:"seventv-settings-compact"},Pe={class:"seventv-version"},Be={key:0,class:"seventv-version-remote"},Me={class:"seventv-settings-compact"},He={class:"seventv-settings-home-sidebar seventv-settings-compact"},qe=["data-theme"],De=w({__name:"SettingsViewHome",setup(s){const{theme:e}=D(K()),t="7TV",o={}.VITE_APP_CONTAINER??"Extension",_="https://7tv.io/v3",u="3.0.9",p=seventv.remote||!1,m=document.createElement("script");return m.async=!0,m.setAttribute("src","https://platform.twitter.com/widgets.js"),m.setAttribute("charset","utf-8"),document.head.appendChild(m),(k,n)=>{const y=j("tooltip");return c(),a("div",Ee,[i("div",Te,[g(E,null,{default:A(()=>[i("div",Ne,[g(X)])]),_:1}),i("div",Le,[i("div",Re,[i("span",Oe,f(r(t))+" ("+f(r(o))+")",1),i("span",Pe,[i("span",null,"v"+f(r(u)),1),r(p)?U((c(),a("span",Be,[g(Ae)])),[[y,"Running in Hosted Mode"]]):C("",!0)]),i("span",Me,"API: "+f(r(_)),1)])])]),i("div",He,[i("a",{class:"twitter-timeline","data-height":"660","data-theme":r(e).toLowerCase(),href:"https://twitter.com/Official_7TV?ref_src=twsrc%5Etfw"},null,8,qe)])])}}});const je=d(De,[["__scopeId","data-v-3b6c8301"]]);class Ue{constructor(){l(this,"user",null);l(this,"query",null)}openAuthorizeWindow(e){if(this.user)return;const t=window.open(`https://7tv.io/v3/auth?platform=${e}`,"7TV Auth","width=500,height=600");if(!t)return;const o=setInterval(()=>{var _;t.closed&&((_=this.query)==null||_.refetch(),clearInterval(o))},100)}logout(){fetch("https://7tv.io/v3/auth/logout",{method:"POST",credentials:"include"}).then(e=>{e.ok&&(this.user=null)})}}let h;function ze(){return h||(h=x(new Ue),h.query=J(Y,{},{}),h.query.onResult(s=>{var e;(e=s==null?void 0:s.data)!=null&&e.user&&(h.user=structuredClone(G(s.data.user)))}),h.query.load()),h}const Fe={key:0},Ge=w({__name:"SettingsViewProfile",setup(s){const e=ze();return(t,o)=>r(e).user?(c(),a("div",Fe,"Hello "+f(r(e).user.display_name),1)):C("",!0)}});const Ze=d(Ge,[["__scopeId","data-v-b8ec8afd"]]),Qe=z(()=>Z(()=>import("./seventv.PaintTool.3.0.9.js"),["./seventv.PaintTool.3.0.9.js","./seventv.index.3.0.9.js","./seventv.useUserAgent.3.0.9.js","./seventv.useCosmetics.3.0.9.js","./seventv.main.3.0.9.js","./seventv.CloseIcon.3.0.9.js","./seventv.ChevronIcon.3.0.9.js","./seventv.v4.3.0.9.js","./seventv.ChatMessage.3.0.9.js","./seventv.UiButton.3.0.9.js","./seventv.StarIcon.3.0.9.js","./seventv.UiFloating.3.0.9.js","./seventv.index.3.0.93.js"],import.meta.url));class Ke{constructor(){l(this,"open",!1);l(this,"view",null);l(this,"category","");l(this,"scrollpoint","");l(this,"intersectingSubcategory","");l(this,"seen",[]);l(this,"mappedNodes",x({Home:{}}));this.switchView("home");const e=localStorage.getItem(I.SEEN_SETTINGS);if(e)for(const t of e.split(","))this.seen.push(t)}toggle(){this.open=!this.open}switchView(e){this.view=Q(We[e])}markSettingAsSeen(...e){for(const t of e)this.seen.indexOf(t)===-1&&this.seen.push(t);localStorage.setItem(I.SEEN_SETTINGS,this.seen.join(","))}}const We={home:je,config:Ve,profile:Ze,compat:ve,paint:Qe},Xe=x(new Ke);function T(){return Xe}export{at as D,ct as S,ze as a,T as u};