import{a as o,a9 as u}from"./seventv.useUserAgent.3.0.9.js";import{a as c,a4 as l}from"./seventv.index.3.0.9.js";const m=o({screens:[],screenMap:{}});function d(){return m}function x(i,r){const n=d(),a=Symbol("seventv-float-screen"),t=o({sym:a,anchor:null,teleportContainer:null,placement:r.placement??"top",middleware:r.middleware});function s(){const e=n.screens.indexOf(t);e!==-1&&n.screens.splice(e,1),delete n.screenMap[a]}return c(r.enabled,e=>{if(!e){s();return}n.screens.push(t),n.screenMap[a]=t},{immediate:!0}),c(i,e=>{e&&(t.anchor=e)},{immediate:!0}),l(()=>{s()}),u(t,"teleportContainer")}export{x as a,d as u};
