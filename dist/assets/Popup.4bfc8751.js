import{s as d,_ as x,a as b}from"./Setting.cca2d8cf.js";import{k as C,l as S,m as j,n as E,p as w,q as B,r as O,o as m,g,a as c,w as p,s as f,F as V,h as N,c as D,u as F,j as M,v as T,x as q}from"./vendor.8352d539.js";import"./plugin-vue_export-helper.21dcd24c.js";const z={style:{width:"900px",padding:"0 20px 40px"}},A=f("div",{style:{"padding-top":"20px"}},"\u4EC5\u53EF\u9009\u62E9\u5DF2\u8BBE\u7F6E\u540D\u79F0\u7684\u6570\u636E",-1),G={style:{"margin-top":"20px"}},L=M("\u8DF3\u8F6C\u81F3\u9009\u9879\u9875"),J={setup(R){const r=C([]),h=[{label:"url",prop:"key"},{slot:"select"}],i=S({}),v=async()=>{var o,l,a;try{const e=await d.get();r.value=Object.entries(e).filter(t=>t[1]instanceof Array).map(t=>({key:t[0],value:t[1].filter(n=>!!n.name)})),console.log(r.value);for(let t of r.value){const n=(a=(l=(o=t.value)==null?void 0:o.find(_=>_.active))==null?void 0:l.timestamp)!=null?a:"";console.log(n),i[t.key]=n,console.log(i)}}catch(e){console.log(e)}};j(()=>{try{v(),d.onchange(v)}catch(o){console.log(o)}});const y=async(o,l)=>{let a=l.value;for(let e of a)e.active=!1;a.find(e=>e.timestamp===o).active=!0,await d.set({[l.key]:T(a)}),q.success("\u8BBE\u7F6E\u6210\u529F")};return(o,l)=>{const a=x,e=E,t=w,n=B,_=b,k=O("router-link");return m(),g("div",z,[c(a,{style:{"padding-top":"10px"}}),A,c(_,{data:r.value,column:h,style:{"margin-top":"10px"}},{select:p(()=>[c(n,null,{default:p(({row:u})=>[c(t,{"model-value":F(i)[u.key],filterable:"",placeholder:"Select",onChange:s=>y(s,u)},{default:p(()=>[(m(!0),g(V,null,N(u.value,s=>(m(),D(e,{key:s.timestamp,label:s.name,value:s.timestamp},null,8,["label","value"]))),128))]),_:2},1032,["model-value","onChange"])]),_:1})]),_:1},8,["data"]),f("div",G,[c(k,{to:{path:"/options"},target:"_blank"},{default:p(()=>[L]),_:1})])])}}};export{J as default};
