import{_ as f,u as I,r as J,o as c,c as a,e as d,g as r,b as t,F as u,a as m,t as l,d as S,w as b,h as j,p as k,j as w}from"./index-ea43893c.js";import{_ as x}from"./Spinner-1s-200px-2-0335de7c.js";const A={mixins:[I],computed:{groupedJoined(){const e={};return this.joinedData.forEach(o=>{const s=o.dateJoined.substring(0,7);e[s]||(e[s]=[]),e[s].push(o)}),e}},data(){return{joinedData:[],isempty:!1,isloading:!0}},mounted(){this.scrollToTop(),this.getActivityJoined()},methods:{async getActivityJoined(){this.isempty=!1,this.isloading=!0;const o={memberId:await this.fetchMemberId()};fetch("https://localhost:7259/api/ActivityRecord/Joined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(s=>s.json()).then(s=>{this.isloading=!1,console.log("Success:",s),s.length==0&&(this.isempty=!0),this.joinedData=s}).catch(s=>{console.error("Error:",s)})}}},v=e=>(k("data-v-364edd41"),e=e(),w(),e),N={class:"relative"},T={class:"month"},D={class:"list"},C={class:"listContent"},B={class:"coverImg"},E=["src"],V={class:"info"},F={class:"activityName"},O={class:"description"},L={class:"date"},M=v(()=>t("i",{class:"fa-solid fa-calendar-days"},null,-1)),P={class:"line"},R={class:"image-container"},q=v(()=>t("img",{src:x,alt:""},null,-1)),z=[q];function G(e,o,s,H,i,g){const y=J("router-link");return c(),a("div",N,[d(t("div",null,[(c(!0),a(u,null,m(g.groupedJoined,(_,h)=>(c(),a("div",{key:h},[t("p",T,l(h),1),t("div",D,[(c(!0),a(u,null,m(_,(n,p)=>(c(),a("div",{key:p},[S(y,{to:"/Activity/"+n.activityId},{default:b(()=>[t("div",C,[t("div",B,[t("img",{src:n.coverImage,alt:"活動圖"},null,8,E)]),t("div",V,[t("p",F,l(n.activityName),1),t("p",O,l(n.description.slice(0,20))+"... ",1),t("p",L,[M,j(l(n.gatheringTime),1)])])]),d(t("div",P,null,512),[[r,p+1<_.length]])]),_:2},1032,["to"])]))),128))])]))),128))],512),[[r,!i.isempty&&!i.isloading]]),d(t("div",null,"沒有參加過的的活動",512),[[r,i.isempty&&!i.isloading]]),d(t("div",R,z,512),[[r,i.isloading]])])}const U=f(A,[["render",G],["__scopeId","data-v-364edd41"]]);export{U as default};