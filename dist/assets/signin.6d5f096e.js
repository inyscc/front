import{A as a,i as e}from"./index.b3c56bcd.js";import{A as s}from"./index.0ff268b1.js";/* empty css              */import{d as o,m as l,u as n,a9 as t,o as r,b as i,e as d,g as u,x as p,R as c,p as v,j as m,a as f,l as g}from"./vendor.0c0b59c3.js";import{r as j}from"./index.c044230c.js";const x=c();v("data-v-656f4435");const b={id:"signin",class:"mainpage"},h=m("登录...");f();var k=o({setup(o){let c=l(""),v=l("");const m=n(),f=t(),k=()=>{""!==c.value&&""!==v.value?((a,e)=>j.post("/api/signin",{username:a,password:e}))(c.value,v.value).then((a=>{if(console.log(a),2e3===a.code){g.success("成功登录，跳转去管理员界面!!!"),m.push("/admin");let e={uname:a.data.username,avatar:a.data.avatar,token:a.data.token};console.log(e),f.commit("signin",e)}})):g.error("请输入用户名或密码")};return(o,l)=>(r(),i("div",b,[d(u(a),{value:u(c),"onUpdate:value":l[1]||(l[1]=a=>p(c)?c.value=a:c=a),placeholder:"用户名..."},null,8,["value"]),d(u(e.InputPassword),{value:u(v),"onUpdate:value":l[2]||(l[2]=a=>p(v)?v.value=a:v=a),placeholder:"密码..."},null,8,["value"]),d(u(s),{type:"primary",size:"large",onClick:k},{default:x((()=>[h])),_:1})]))}});k.__scopeId="data-v-656f4435";export default k;
