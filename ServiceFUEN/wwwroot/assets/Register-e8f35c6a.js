import{_ as c,u as d,o as p,c as _,b as s,w as l,v as n,p as u,f as m}from"./index-c008cf96.js";import{a as h}from"./axios-aba6f0e0.js";const f={data(){return{account:"",password:"",confirmPassword:"",nickname:""}},mixins:[d],methods:{register(){var r=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;r.test(this.account)||this.showAlert("E-mail格式不正確"),this.password!==this.confirmPassword?this.showAlert("密碼不相符"):h.post("https://localhost:7259/api/Members/SignUp",{EmailAccount:this.account,EncryptedPassword:this.password,ConfirmEncryptedPassword:this.confirmPassword,NickName:this.nickname}).then(e=>{e.data==="無法註冊這個帳號"?this.showAlert("無法註冊這個帳號"):(this.showAlert("註冊成功，請至信箱啟用帳戶"),this.$router.push("/"))}).catch(e=>{console.log(e)})}}},i=r=>(u("data-v-97eb5b02"),r=r(),m(),r),w={class:"container"},v={class:"content"},x={class:"insert_register"},g=i(()=>s("div",{class:"register_user"},"註冊會員",-1)),b={class:"flex_middle"},y=i(()=>s("label",{for:"",class:"register_text"},"暱稱 :　",-1)),k={class:"flex_middle"},A=i(()=>s("label",{for:"",class:"register_text"},"帳號 :　",-1)),E={class:"flex_middle"},P=i(()=>s("label",{for:"",class:"register_text"},"密碼 :　",-1)),U={class:"flex_middle"},V=i(()=>s("label",{for:"",class:"register_text"},"確認密碼 :　",-1)),q={class:"register_btn"};function I(r,e,S,z,o,a){return p(),_("section",null,[s("div",w,[s("div",v,[s("div",x,[g,s("div",b,[y,l(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.nickname=t),placeholder:"請輸入暱稱",class:"form-control",required:""},null,512),[[n,o.nickname]])]),s("div",k,[A,l(s("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=t=>o.account=t),placeholder:"請輸入Email",class:"form-control",required:""},null,512),[[n,o.account]])]),s("div",E,[P,l(s("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>o.password=t),placeholder:"請輸入密碼",class:"form-control",required:""},null,512),[[n,o.password]])]),s("div",U,[V,l(s("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=t=>o.confirmPassword=t),placeholder:"請確認密碼",class:"form-control",required:""},null,512),[[n,o.confirmPassword]])]),s("div",q,[s("button",{onClick:e[4]||(e[4]=(...t)=>a.register&&a.register(...t))},"註冊")])])])])])}const Z=c(f,[["render",I],["__scopeId","data-v-97eb5b02"]]);export{Z as default};