var pe=Object.defineProperty;var I=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var H=(l,u,i)=>u in l?pe(l,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[u]=i,B=(l,u)=>{for(var i in u||(u={}))ge.call(u,i)&&H(l,i,u[i]);if(I)for(var i of I(u))be.call(u,i)&&H(l,i,u[i]);return l};import{y as Y,A as ve,o,c as f,B as J,u as d,w as b,C as K,i as V,g as m,h as A,F as C,D as v,s as Q,t as $,a as P,G as T,H as me,I as ke,q as we,J as xe,K as Se,L as Be,k as F,m as X,M as Ce,l as j,N as Ne,O as Ke,P as Ve,Q as $e,R as Ee,S as Ae,T as We,U as Re,V as Ue,W as Me,X as Z,j as U,v as _,Y as Oe,n as ze,p as Pe,Z as Te,_ as Fe,$ as je,a0 as qe,x as Le}from"./vendor.a2c2920f.js";import{_ as ee}from"./plugin-vue_export-helper.21dcd24c.js";const W={stripe:!0,border:!1,size:"default",headerCellStyle:{backgroundColor:"#f5f7fa",color:"#909399",borderBottom:0,height:"50px"},cellStyle:{borderBottom:0},className:"",align:"center"},w={size:"default",className:"",showSubmitButton:!0,showResetButton:!0,submitButtonName:"\u63D0\u4EA4",resetButtonName:"\u91CD\u7F6E",openEnterSubmit:!1,optionAllName:"\u5168\u90E8",labelWidth:"120px",clearable:!0,hideOptionAll:!1},le={defaultColor:["#409EFF","#C0CCDA"],className:""},De={style:{"margin-right":"5px"}},ll={props:{data:{type:Array,required:!0},column:Array,type:String,size:{type:String,default:()=>W.size},headerCellStyle:{type:[Object,Function],default:()=>({row:l,column:u,rowIndex:i,columnIndex:h})=>i==0?W.headerCellStyle:""},cellStyle:{type:[Object,Function],default:()=>W.cellStyle},sortable:{type:[String,Boolean],default:!1},stripe:{type:Boolean,default:()=>W.stripe},border:{type:Boolean,default:()=>W.border},className:{type:String,default:()=>W.className},maxHeight:{type:[String,Number],default:null},align:{type:String,default:()=>W.align}},setup(l,{emit:u}){const i=l,h=Y(),S=ve(),a=["select","select-all","selection-change","cell-mouse-enter","cell-mouse-leave","cell-click","cell-dblclick","cell-contextmenu","row-click","row-contextmenu","row-dblclick","header-click","header-contextmenu","sort-change","filter-change","current-change","header-dragend","expand-change"].reduce((g,x)=>(g[x]=(...E)=>{u(x,...E)},g),{});return(g,x)=>{const E=we,N=xe,O=Se;return o(),f(O,v({data:l.data,style:{width:"100%"}},B(B({},d(h)),i),ke(d(a)),{ref:"tableRef",class:l.className}),J({default:b(()=>[K(g.$slots,"before"),l.type==="index"?(o(),f(E,{key:0,type:"index",label:"\u5E8F\u53F7",width:"80",align:l.align},null,8,["align"])):V("",!0),(o(!0),m(C,null,A(l.column,(y,R)=>(o(),m(C,null,[y.type==="index"?(o(),f(E,{key:0,type:"index",index:y.index||null,label:y.label||"\u5E8F\u53F7",width:y.width||"80",align:y.align||l.align},null,8,["index","label","width","align"])):y.slot?K(g.$slots,y.slot,{key:1}):(o(),f(E,v({key:2,key:y.prop+R,align:l.align},y),J({_:2},[y.header?{name:"header",fn:b(()=>[Q("span",De,$(y.label),1),P(N,v(y.header.tooltip,{content:y.header.content}),{default:b(()=>[Q("i",{class:T(y.header.icon||"el-icon-info"),style:me(B({fontSize:"16px",verticalAlign:"middle",cursor:"pointer"},y.header.iconStyle))},null,6)]),_:2},1040,["content"])])}:void 0]),1040,["align"]))],64))),256)),K(g.$slots,"after")]),_:2},[d(S).empty?{name:"empty",fn:b(()=>[K(g.$slots,"empty")])}:void 0]),1040,["data","class"])}}};const q=l=>l==null?!0:l instanceof Array?l.length===0:l.constructor===Object?Object.getOwnPropertyNames(l).length===0:!l&&l!=="0"&&l!==0;const Ge={props:{value:{type:[Number,String,Boolean],required:!0},disabled:{type:Boolean,default:!1},width:{type:Number,default:40},text:{type:Array,default:()=>[]},icon:{type:Array,default:()=>[]},values:{type:Array,default:()=>[]},color:{type:Array,default:()=>le.defaultColor},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},className:{type:String,default:()=>le.className},activeTextColor:String,type:{type:String,default:""},mode:{type:String,default:""},size:String},emits:["update:value","change"],setup(l,{emit:u}){const i=l,h=Be(i,"value"),S=a=>{u("update:value",a),u("change",a)},p=F();return X(()=>{try{Array.from(p.value.$el.querySelectorAll(".el-switch__label")).map(a=>{a.style.color=i.activeTextColor})}catch(a){console.log(a)}}),(a,g)=>{const x=Ce;return o(),f(x,{ref_key:"switchRef",ref:p,value:d(h),disabled:l.disabled,width:l.width,"active-text":l.text[0]||null,"inactive-text":l.text[1]||null,"active-icon-class":l.icon[0]||null,"inactive-icon-class":l.icon[0]||null,"active-value":d(q)(l.values[0])?!0:l.values[0],"inactive-value":d(q)(l.values[1])?!1:l.values[1],"active-color":l.color[0],"inactive-color":l.color[1],name:l.name,"validate-event":l.validateEvent||!0,onChange:S,class:T({[l.className]:!!l.className,"is-inside-type":l.type==="inside"||l.mode==="inside","is-small-size":l.size==="small","is-mini-size":l.size==="mini","is-right-type":l.type==="inside"||l.mode==="right"})},null,8,["value","disabled","width","active-text","inactive-text","active-icon-class","inactive-icon-class","active-value","inactive-value","active-color","inactive-color","name","validate-event","class"])}}};var Ie=ee(Ge,[["__scopeId","data-v-66e5992e"]]);const He={key:1,class:"form-item-text"},Ye={props:{setting:{type:Array,required:!0},form:{default:{}},loading:Boolean,Enum:{},validate:Boolean,size:{type:String,default:()=>w.size},className:{type:String,default:()=>w.className},showSubmitButton:{type:Boolean,default:()=>w.showSubmitButton},showResetButton:{type:Boolean,default:()=>w.showResetButton},submitButtonName:{type:String,default:()=>w.submitButtonName},resetButtonName:{type:String,default:()=>w.resetButtonName},openEnter:{type:Boolean,default:()=>w.openEnterSubmit},margin:String,optionAllName:{type:String,default:()=>w.optionAllName},labelWidth:{type:String,default:()=>w.labelWidth},itemWidth:String,clearable:{type:Boolean,default:()=>w.clearable},hideOptionAll:{type:Boolean,default:()=>w.hideOptionAll},enumKey:{type:Array,default:()=>["label","value"]},hideOperate:Boolean,cleanProps:Boolean,disabled:Boolean,operate:Array,cleanEmpty:Boolean,inline:Boolean,immediate:{type:Boolean,default:!1},fullWidth:Boolean},emits:["update:loading","submit"],setup(l,{expose:u,emit:i}){const h=l,S=Y(),p=F(h.setting.map(t=>{if(h.validate)return t;{let r=B({},t);return delete r.required,delete r.rules,r}}));let a=j(B(B({},p.value.reduce((t,r)=>{var c;let s=null;return r.type==="checkbox"&&(s=[]),t[r.prop]=(c=r.default)!=null?c:s,t},{})),h.form));Ne(()=>{for(let t in h.form)a[t]=h.form[t]});const g=(t,r,s=!1)=>{let c=[];switch(r){case"form":case"item":c=["className"];break;case"datepicker":c=["prop","label","default","width","rules","required","msg","validType","prefixIcon","className","labelWidth","slot","slotInside","slotIn","dataType"];break;case"color":c=["disabled","size","color-format","popper-class","predefine"];break}let k={};for(let M in t)c.includes(M)===s&&(k[M]=t[M]);return k},x=t=>t.visible?t.visible instanceof Array?a[t.visible[0]]===t.visible[1]:typeof t.visible=="function"?t.visible(a):(console.log("visible\u5C5E\u6027\u4E3Aarray\u6216function"),!0):!0,E=t=>{if(!h.validate)return null;let r=[];if(t.required){const s=t.msg||(["select","radio","checkbox","date","image","datepicker","timepicker"].includes(t.type)?"\u8BF7\u9009\u62E9":"\u8BF7\u8F93\u5165")+t.label;r.push({required:!0,message:s})}if(t.validType){const s={url:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u94FE\u63A5",email:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684email",date:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u65E5\u671F"};r.push({type:t.validType,message:s[t.validType]})}if(t.validMax)if(t.validMin){const s=`\u957F\u5EA6\u4E3A${t.validMin}~${t.validMax}\u4E2A\u5B57\u7B26`;r.push({min:t.validMin,max:t.validMax,message:t.validLenMsg||s})}else{const s=`\u6700\u591A\u8F93\u5165${t.validMax}\u4E2A\u5B57\u7B26`;r.push({max:t.validMax,message:t.validLenMsg||s})}return t.rules&&typeof t.rules=="object"&&(t.rules instanceof Array?r.push(...t.rules):r.push(t.rules)),r.length>0?r:null},N=({enum:t,prop:r})=>t?t instanceof Array&&t.length>0?typeof t[0]=="object"?t:t.map(s=>({[h.enumKey[0]]:s,[h.enumKey[1]]:s})):Object.entries(t).map(s=>({[h.enumKey[0]]:s[1],[h.enumKey[1]]:s[0]})):!!h.Enum&&!!r?N({enum:h.Enum[r]}):[],O=()=>{h.openEnter&&z()},y=()=>{h.immediate&&z()},R=F(),L=()=>{var t,r,s;try{R.value.resetFields()}catch(c){console.log("resetFields--error",c)}for(let c in a)((t=p.value.find(k=>k.prop===c))==null?void 0:t.type)==="checkbox"?a[c]=[]:((r=p.value.find(k=>k.prop===c))==null?void 0:r.type)==="switch"?a[c]=(s=p.value.find(k=>k.prop===c))==null?void 0:s.default:a[c]="";try{R.value.clearValidate()}catch(c){console.log(c)}};u({reset:()=>{L()}});const z=async t=>{try{await R.value.validate()}catch(s){console.log("\u9A8C\u8BC1\u672A\u901A\u8FC7",s,a);return}let r=_(a);for(let s in r)r[s]==="__ALL__"&&(r[s]=null);if(h.cleanProps){const s=p.value.filter(c=>x(c)).map(c=>c.prop).join(",").split(",");for(let c in r)s.includes(c)||delete r[c]}if(h.cleanEmpty)for(let s in a)q(a[s])&&delete a[s];return delete r[void 0],i("update:loading",!0),i("submit",r),Promise.resolve(a)};return(t,r)=>{const s=Oe,c=Ke,k=ze,M=Pe,ae=Ve,ne=$e,oe=Ee,re=Ae,se=We,de=Te,ue=Fe,ce=je,ie=Ie,ye=Re,D=Ue,G=qe,he=Me;return o(),m("div",{class:T({[l.className]:!!l.className})},[P(he,v({model:d(a),ref_key:"formRef",ref:R},g(B(B({},h),d(S)),"form"),{"label-width":l.inline?"none":l.labelWidth}),{default:b(()=>[(o(!0),m(C,null,A(p.value,(e,fe)=>(o(),m(C,null,[!!e.slot&&e.type!=="slotInside"&&e.type!=="slotIn"?K(t.$slots,e.slot,{key:0,form:d(a)}):V("",!0),x(e)?(o(),f(D,v({key:1,key:fe},g(e,"item"),{rules:E(e),class:{[e.className]:!!e.className,"is-disabled":l.disabled},style:{"margin-bottom":l.margin||null,"margin-left":l.inline&&l.margin?l.margin:"auto"}}),{default:b(()=>[e.type==="slotInside"||e.type==="slotIn"?K(t.$slots,e.slot,{key:0,form:d(a)}):e.type==="text"?(o(),m("div",He,$(d(a)[e.prop]||e.default),1)):e.type==="input"||e.type==="textarea"?(o(),f(s,v({key:2,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},e,{type:e.type==="textarea"?"textarea":"",placeholder:e.placeholder||`\u8BF7\u8F93\u5165${e.label}`,style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onKeyup:Z(O,["native","enter"]),onChange:y}),null,16,["modelValue","onUpdate:modelValue","type","placeholder","style","onKeyup"])):e.type==="inputNumber"?(o(),f(c,v({key:3,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},e,{placeholder:e.placeholder||`\u8BF7\u8F93\u5165${e.label}`,style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onKeyup:Z(O,["native","enter"]),onChange:y}),null,16,["modelValue","onUpdate:modelValue","placeholder","style","onKeyup"])):e.type==="select"?(o(),f(M,v({key:4,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},e,{placeholder:e.placeholder||`\u8BF7\u9009\u62E9${e.label}`,style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onChange:n=>y()}),{default:b(()=>[e.hideOptionAll||l.hideOptionAll?V("",!0):(o(),f(k,{key:0,label:e.optionAllName||l.optionAllName,value:"__ALL__"},null,8,["label"])),(o(!0),m(C,null,A(N(e),n=>(o(),f(k,{label:n[(e.enumKey||l.enumKey)[0]],value:n[(e.enumKey||l.enumKey)[1]],key:n[(e.enumKey||l.enumKey)[1]],disabled:n.disabled},null,8,["label","value","disabled"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue","placeholder","style","onChange"])):e.type==="datepicker"||e.type==="date"||e.type==="datetimerange"?(o(),f(ae,v({key:5,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},g(e,"datepicker"),{type:e.type==="datetimerange"?"datetimerange":"date",placeholder:e.placeholder||`\u8BF7\u9009\u62E9${e.label}`,"value-format":e.valueFormat||"YYYY-MM-DD",style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onChange:n=>y(),clearable:e.clearable||l.clearable}),null,16,["modelValue","onUpdate:modelValue","type","placeholder","value-format","style","onChange","clearable"])):e.type==="timepicker"||e.type==="time"?(o(),f(ne,v({key:6,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},g(e,"datepicker"),{placeholder:e.placeholder||`\u8BF7\u9009\u62E9${e.label}`,"value-format":e.valueFormat||"HH:mm:ss",style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onChange:n=>y(),clearable:e.clearable||l.clearable}),null,16,["modelValue","onUpdate:modelValue","placeholder","value-format","style","onChange","clearable"])):e.type==="radio"?(o(),f(se,v({key:7,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},e,{placeholder:e.placeholder||`\u8BF7\u9009\u62E9${e.label}`,style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onChange:y}),{default:b(()=>[e.childButton?(o(!0),m(C,{key:0},A(N(e),n=>(o(),f(oe,{key:n[(e.enumKey||l.enumKey)[1]],label:n[(e.enumKey||l.enumKey)[1]],disabled:n.disabled},{default:b(()=>[U($(n[(e.enumKey||l.enumKey)[0]]),1)]),_:2},1032,["label","disabled"]))),128)):(o(!0),m(C,{key:1},A(N(e),n=>(o(),f(re,{key:n[(e.enumKey||l.enumKey)[1]],label:n[(e.enumKey||l.enumKey)[1]],disabled:n.disabled},{default:b(()=>[U($(n[(e.enumKey||l.enumKey)[0]]),1)]),_:2},1032,["label","disabled"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue","placeholder","style"])):e.type==="checkbox"?(o(),f(ce,v({key:8,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},e,{placeholder:e.placeholder||`\u8BF7\u9009\u62E9${e.label}`,style:e.width||l.itemWidth?`width: ${e.width||l.itemWidth};`:"auto",onChange:y}),{default:b(()=>[e.childButton?(o(!0),m(C,{key:0},A(N(e),n=>(o(),f(de,{key:n[(e.enumKey||l.enumKey)[1]],label:n[(e.enumKey||l.enumKey)[1]],disabled:n.disabled},{default:b(()=>[U($(n[(e.enumKey||l.enumKey)[0]]),1)]),_:2},1032,["label","disabled"]))),128)):(o(!0),m(C,{key:1},A(N(e),n=>(o(),f(ue,{key:n[(e.enumKey||l.enumKey)[1]],label:n[(e.enumKey||l.enumKey)[1]],disabled:n.disabled},{default:b(()=>[U($(n[(e.enumKey||l.enumKey)[0]]),1)]),_:2},1032,["label","disabled"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue","placeholder","style"])):e.type==="switch"?(o(),f(ie,v({key:9,value:d(a)[e.prop],"onUpdate:value":n=>d(a)[e.prop]=n},e,{onChange:y}),null,16,["value","onUpdate:value"])):e.type==="color"?(o(),f(ye,v({key:10,modelValue:d(a)[e.prop],"onUpdate:modelValue":n=>d(a)[e.prop]=n},g(e,"color",!0),{onChange:y}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1040,["rules","class","style"])):V("",!0)],64))),256)),l.hideOperate?V("",!0):(o(),f(D,{key:0,class:"operate"},{default:b(()=>[K(t.$slots,"button-before"),l.showSubmitButton?(o(),f(G,{key:0,type:"primary",onClick:r[0]||(r[0]=e=>z()),loading:l.loading},{default:b(()=>[U($(l.submitButtonName),1)]),_:1},8,["loading"])):V("",!0),l.showResetButton?(o(),f(G,{key:1,type:"danger",onClick:L},{default:b(()=>[U($(l.resetButtonName),1)]),_:1})):V("",!0),K(t.$slots,"button")]),_:3}))]),_:3},16,["model","label-width"])],2)}}},te={get:(l=null)=>new Promise(u=>{chrome.storage.local.get(l,i=>{u(i!=null?i:{})})}),set:(l={})=>new Promise(u=>{chrome.storage.local.set(l,()=>{u()})}),remove:l=>new Promise(u=>{chrome.storage.local.remove(l,()=>{u()})}),clear:()=>new Promise(l=>{chrome.storage.local.clear(()=>{l()})}),onchange:l=>{chrome.storage.local.onChanged.addListener(()=>{l()})}};const Je={style:{"padding-top":"14px"}},Qe={setup(l){const u=j({openMock:!1,openSave:!1,filter:""});X(async()=>{try{const p=await te.get();for(let a in p.setting)u[a]=p.setting[a]}catch(p){console.log(p)}});const i=async()=>{console.log("change",u);try{await te.set({setting:_(u)}),Le.success("\u8BBE\u7F6E\u6210\u529F")}catch(p){console.log(p)}finally{S.setting=!1}},h=[{type:"switch",prop:"openMock",label:"MOCK",values:[!0,!1],text:["\u5F00\u542F",""]},{type:"switch",prop:"openSave",label:"\u4FDD\u5B58\u8BF7\u6C42",values:[!0,!1],text:["\u5F00\u542F",""]},{type:"input",prop:"filter",label:"\u751F\u6548\u57DF\u540D"}],S=j({setting:!1});return(p,a)=>{const g=Ye;return o(),m("div",Je,[P(g,{model:d(u),loading:d(S).setting,"onUpdate:loading":a[0]||(a[0]=x=>d(S).setting=x),onSubmit:i,setting:h,inline:"",showResetButton:!1,fullWidth:""},null,8,["model","loading"])])}}};var tl=ee(Qe,[["__scopeId","data-v-75523926"]]);export{tl as _,ll as a,te as s};
