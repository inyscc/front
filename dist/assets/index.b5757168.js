import{A as e}from"./index.90cf9121.js";/* empty css              */import{d as t,r as s,m as n,q as a,u as i,i as o,o as r,b as l,e as m,F as d,f as u,t as c,g as p,v as f,x as h,R as g,p as y,j as v,a as w}from"./vendor.5a145592.js";import{b as x,c as F,d as b}from"./index.944274c9.js";import{D as j}from"./index.7cb132f0.js";const $=g();y("data-v-f1d7dac2");const k={id:"admin",class:"mainpage"},S=m("div",{id:"sys-info"},null,-1),A={class:"posts"},C=m("tr",null,[m("th",null,"标题"),m("th",null,"发表时间")],-1),D={href:"/post/1"},P=m("span",null,[m("i",{class:"fa fa-pencil-square-o","aria-hidden":"true"}),m("i",{class:"fa fa-times","aria-hidden":"true"})],-1),U=v("新建博文");w();var G=t({setup(t){let g=s([]),y=n(1);const v=e=>{F(e).then((({data:e})=>{for(;g.length>0;)g.pop();e.forEach((e=>{g.push({key:e.id,id:e.id,title:e.title,createTime:e.createTime})}))}))};let w=n(0);b().then((({data:e})=>{w.value=e})),v(y.value),a((()=>y.value),((e,t)=>{v(e)}));const G=i(),M=()=>{G.push("/newPost")};let T,_=new Date,q=[{time:`${_.getMinutes()}:${_.getSeconds()}`,percent:0,name:"CPU使用率"},{time:`${_.getMinutes()}:${_.getSeconds()}`,percent:0,name:"内存使用率"}],z=[{time:`${_.getMinutes()}:${_.getSeconds()}`,num:0,type:"Goroutine数量"}];const E=new WebSocket("wss://blog.sunspotsinys.top/api/admin/sysinfo?token="+x());return E.onopen=e=>{E.send("1"),setInterval((()=>{E.send("2")}),6e3)},E.onclose=e=>{console.log("ws close...")},E.onmessage=e=>{z.length>=1440&&(q.shift(),q.shift(),z.shift()),_=new Date;const t=JSON.parse(e.data);t instanceof Array?(t.forEach((e=>{q.push({time:e.time,percent:e.cpu,name:"CPU使用率"}),q.push({time:e.time,percent:e.mem,name:"内存使用率"}),z.push({time:e.time,num:e.num,type:"Goroutine数量"})})),T.render()):z[z.length-1].time!==t.time&&(q.push({time:t.time,percent:t.cpu,name:"CPU使用率"}),q.push({time:t.time,percent:t.mem,name:"内存使用率"}),z.push({time:t.time,num:t.num,type:"Goroutine数量"}),console.log(q),T.render())},o((()=>{T=new j("sys-info",{data:[q,z],xField:"time",yField:["percent","num"],geometryOptions:[{geometry:"line",seriesField:"name",color:"#5B8FF9"},{geometry:"line",seriesField:"type",color:"#5AD8A6"}]}),T.render()})),(t,s)=>(r(),l("div",k,[S,m("div",A,[m("table",null,[C,(r(!0),l(d,null,u(p(g),((e,t)=>(r(),l("tr",{key:t},[m("td",null,[m("a",D,c(e.title),1),P]),m("td",null,c(e.createTime),1)])))),128))]),m(p(f),{size:"small",total:p(w),current:p(y),"onUpdate:current":s[1]||(s[1]=e=>h(y)?y.value=e:y=e)},null,8,["total","current"]),m(p(e),{type:"primary",size:"large",onClick:M},{default:$((()=>[U])),_:1})])]))}});G.__scopeId="data-v-f1d7dac2";export default G;
