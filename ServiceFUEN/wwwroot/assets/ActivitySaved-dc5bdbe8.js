import{_ as S,u as I,r as b,o as a,c as n,e as l,g as r,b as s,F as u,a as m,t as _,d as k,w,h as g,p as x,j as A}from"./index-ea43893c.js";import{_ as N}from"./Spinner-1s-200px-2-0335de7c.js";const T={mixins:[I],data(){return{savedData:[],isempty:!1,isloading:!0}},computed:{groupedSave(){const e={};return this.savedData.forEach(o=>{const t=o.dateOfSave.substring(0,7);e[t]||(e[t]=[]),e[t].push(o)}),e}},mounted(){this.scrollToTop(),this.getActivitySaved()},methods:{async getActivitySaved(){this.isempty=!1,this.isloading=!0;const o={memberId:await this.fetchMemberId()};fetch("https://localhost:7259/api/ActivityRecord/Saved",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(t=>t.json()).then(t=>{this.isloading=!1,console.log("Success:",t),t.length==0&&(this.isempty=!0),this.savedData=t}).catch(t=>{console.error("Error:",t)})}}},d=e=>(x("data-v-434d046f"),e=e(),A(),e),D={class:"relative"},C={class:"content"},j=d(()=>s("h4",null,"我的收藏活動",-1)),B=d(()=>s("div",{class:"line mb-4"},null,-1)),E={class:"month"},O={class:"list"},V={class:"listContent"},F={class:"coverImg"},J=["src"],L={class:"info"},M={class:"activityName"},P={class:"description"},R={class:"date"},q=d(()=>s("i",{class:"fa-solid fa-calendar-days"},null,-1)),z={class:"line"},G=d(()=>s("div",{class:"content"},[s("h4",null,"我的收藏活動"),s("div",{class:"line mb-4"}),g(" 沒有收藏的活動 ")],-1)),H=[G],K={class:"image-container"},Q=d(()=>s("img",{src:N,alt:""},null,-1)),U=[Q];function W(e,o,t,X,i,y){const f=b("router-link");return a(),n("div",D,[l(s("div",null,[s("div",C,[j,B,(a(!0),n(u,null,m(y.groupedSave,(h,v)=>(a(),n("div",{key:v},[s("p",E,_(v),1),s("div",O,[(a(!0),n(u,null,m(h,(c,p)=>(a(),n("div",{key:p},[k(f,{to:"/Activity/"+c.activityId},{default:w(()=>[s("div",V,[s("div",F,[s("img",{src:c.coverImage,alt:"活動圖"},null,8,J)]),s("div",L,[s("p",M,_(c.activityName),1),s("p",P,_(c.description.slice(0,20))+"... ",1),s("p",R,[q,g(_(c.gatheringTime),1)])])]),l(s("div",z,null,512),[[r,p+1<h.length]])]),_:2},1032,["to"])]))),128))])]))),128))])],512),[[r,!i.isempty&&!i.isloading]]),l(s("div",null,H,512),[[r,i.isempty&&!i.isloading]]),l(s("div",K,U,512),[[r,i.isloading]])])}const $=S(T,[["render",W],["__scopeId","data-v-434d046f"]]);export{$ as default};