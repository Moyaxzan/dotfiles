import{e as m,ai as p,G as d,aj as _,L as f,H as h}from"./seventv.index.3.0.9.js";import{u as C,d as b}from"./seventv.ReactHooks.3.0.9.js";import{r as y,l as g}from"./seventv.useUserAgent.3.0.9.js";import{d as k}from"./seventv.useModule.3.0.9.js";const v=[_("general.autoclaim.channel_points","TOGGLE",{label:"Autoclaim Channel Points",hint:"Automatically claim your channel point bonus when it becomes available.",path:["Channel","Autoclaim"],defaultValue:!1})],A=m({__name:"AutoclaimModule",async setup(w){let t,a;const{dependenciesMet:s,markAsReady:r}=k("autoclaim",{name:"Autoclaim",depends_on:["chat"]});[t,a]=p(()=>f(s).toBe(!0)),await t,a();const c=d("general.autoclaim.channel_points");C({parentSelector:".community-points-summary",predicate:e=>e.props&&e.props.claimCommunityPoints},{hooks:{render(e,o){var i;if(!c.value||!e.component.onClick||!o)return o;const l=o.props??{};return l.children&&((i=l.children.props)!=null&&i.show)&&u(e),o}}});const n=y(!1),u=b(async e=>{n.value||typeof e.component.onClick!="function"||(e.component.onClick(),n.value=!0,h(()=>n.value=!1,1e4),g.debug("Claimed channel point bonus"))},1e3);return r(),(e,o)=>null}}),O=Object.freeze(Object.defineProperty({__proto__:null,config:v,default:A},Symbol.toStringTag,{value:"Module"}));export{O as _};
