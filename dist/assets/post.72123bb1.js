import{d as e,z as t,r as a,m as s,n,u as o,o as i,b as c,e as r,t as d,g as l,F as m,f as p,A as u,j as g,B as v,p as f,a as h}from"./vendor.4fbc6252.js";import{g as T}from"./index.51c84f12.js";import{V as b}from"./index.min.c8f1f283.js";const k=v();f("data-v-1d4373aa");const j={id:"post"},w={class:"header"},C={class:"title"},x={class:"time"},y={class:"tag"},D=r("div",{class:"content"},null,-1);h();var _=e({setup(e){const v=t(),f=["pink","red","orange","green","cyan","blue","purple"];let h=a({id:"",top:0,tags:[],title:"",public:!0,content:"",createTime:new Date}),_=s(!1);n(_,((e,t)=>{console.log(e,t)})),T(v.params.pid).then((({data:e})=>{h.id=e.id,h.top=e.top,h.title=e.title,h.public=e.public,h.content=e.content,h.createTime=new Date(e.createTime);for(const a in e.tags)h.tags.push({id:e.tags[a].id,name:e.tags[a].name});_.value=!0;const t=document.createElement("div");b.preview(t,h.content,{mode:"light",anchor:1,markdown:{toc:!0}}),document.getElementsByClassName("content")[0].appendChild(t)}));const B=o();return(e,t)=>(i(),c("div",j,[r("div",w,[r("div",C,d(l(h).title),1),r("div",x,d(l(h).createTime.getFullYear())+"年 "+d(l(h).createTime.getMonth()+1)+"月 "+d(l(h).createTime.getDate())+"日 "+d(["上午","下午"][Math.round(l(h).createTime.getHours()/12)]),1),r("div",y,[(i(!0),c(m,null,p(l(h).tags,((e,t)=>(i(),c(l(u),{key:t,onClick:t=>{return a=e.id,void B.push({path:`/tag/${a}`});var a},color:f[t%f.length]},{default:k((()=>[g(d(e.name),1)])),_:2},1032,["onClick","color"])))),128))])]),D]))}});_.__scopeId="data-v-1d4373aa";export default _;
