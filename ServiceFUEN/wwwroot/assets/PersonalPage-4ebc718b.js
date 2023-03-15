import{_ as U,E as j,j as a,y as N,l as X,r as S,o as b,c as g,b as o,t as $,a as d,g as i,J as u,w as f,C as E,v as A,F as T,d as J,h as r,K,p as q,f as z}from"./index-c008cf96.js";import{_ as H}from"./userPic-2a6011f5.js";const m=P=>(q("data-v-5a087d25"),P=P(),z(),P),O={class:"bag"},Q={class:"about"},W=m(()=>o("h4",{class:"text-light"},"關於",-1)),Y={class:"text-light"},Z={class:"container-fluid"},oo={class:"d-flex justify-content-center"},to={class:"p-4 content"},eo={class:"col-xl-3 col-lg-12 user"},so={class:"userInfo"},lo={class:"userText"},ao={class:"userProfile"},no=["src","alt"],co={key:1,class:"imgPhoto mb-3 mb-sm-3 me-md-3 me-xl-0 mb-lg-2",src:H,alt:"1"},io={class:"fs-5 m-0"},uo=m(()=>o("button",{class:"uploadPhotoBtn","data-bs-toggle":"modal","data-bs-target":"#uploadPhotoModal"}," 新增相片 ",-1)),ro={class:"col-xl-9 gy-4 col-lg-12 photoGrid"},mo={class:"row gy-4"},_o={class:"col-12 userLinkGroup"},po={class:"dropdown"},ho={role:"button",class:"userLink dropdown-toggle toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},vo={class:"dropdown-menu staticBtnGroup"},bo={class:"modal fade",tabindex:"-1",id:"uploadPhotoModal"},go={class:"modal-dialog"},fo={class:"modal-content"},Po=m(()=>o("div",{class:"modal-header border-bottom-0"},[o("h5",{class:"modal-title"},"上傳相片"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),yo={class:"modal-body"},xo={class:"previewPhoto"},Co=["src"],wo={class:"form-floating mb-3"},ko=m(()=>o("label",{for:"floatingTitle"},"標題",-1)),Ao={class:"form-floating mb-3"},Io=m(()=>o("label",{for:"floatingCamera"},"相機",-1)),Vo={class:"modal fade",tabindex:"-1",id:"uploadAlbumModal"},So={class:"modal-dialog modal-lg"},$o={class:"modal-content"},To=m(()=>o("div",{class:"modal-header border-bottom-0"},[o("h5",{class:"modal-title"},"上傳相簿"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Fo={class:"modal-body"},Lo={class:"form-floating mb-3"},Ro=m(()=>o("label",{for:"floatingAlbumTitle"},"相簿標題",-1)),Bo={class:"row gy-3 gx-3"},Do={class:"card border-0"},Go=["src","alt"],Mo=["value"],Uo={__name:"PersonalPage",setup(P){const F=j(),I=a([]),c=a([]),y=a(!1),V=a("uploadFile"),C=a(!1),w=a(""),k=a(!1),x=a({}),_=a(""),p=a(""),s=N(()=>F.params.memberId),h=a([]),v=a(""),L=t=>{const e=t.target.files[0];x.value=e;const l=new FileReader;l.readAsDataURL(e),l.onload=()=>{k.value=!0,console.log(l.result),w.value=l.result}},R=async function(){console.log(x.value),console.log(_.value),console.log(p.value);const t=new FormData;t.append("Id",0),t.append("File",x.value),t.append("Author",1),t.append("Title",_.value),t.append("Camera",p.value),await axios.post("https://localhost:7259/api/Photo/Create",t).then(e=>{console.log("上傳照片成功"),y.value=!0,x.value=null,_.value="",p.value="",w.value="",k.value=!1,V.value.value=""}).catch(e=>{console.log(e)}),y.value=!1,console.log("上傳成功後value?"+y.value)},B=function(){console.log(h.value);const t=h.value.slice();console.log(t),console.log(v.value),axios.post("https://localhost:7259/api/Album/CreateAlbum",{albumName:v.value,memberId:s.value,photoId:t}).then(e=>{console.log("上傳相簿成功"),C.value=!0,v.value="",h.value=[]}).catch(e=>console.log(e)),C.value=!1};axios.get(`https://localhost:7259/api/Photo/GetProfile?memberId=${s.value}`).then(t=>{c.value=t.data}).catch(t=>console.log(t));const D=()=>{axios.get(`https://localhost:7259/api/Photo/AllPhotos?memberId=${s.value}`).then(t=>{I.value=t.data}).catch(t=>console.log(t))};return X(s,()=>{axios.get(`https://localhost:7259/api/Photo/GetProfile?memberId=${s.value}`).then(t=>{c.value=t.data}).catch(t=>console.log(t))}),(t,e)=>{const l=S("RouterLink"),G=S("RouterView");return b(),g(T,null,[o("div",O,[o("div",Q,[W,o("p",Y,$(c.value.about),1)])]),o("div",Z,[o("div",oo,[o("div",to,[o("div",eo,[o("div",so,[o("div",lo,[o("div",ao,[c.value.source!=null?(b(),g("img",{key:0,class:"imgPhoto mb-3 mb-sm-3 me-md-3 me-xl-0 mb-lg-2",src:c.value.source,alt:c.value.source},null,8,no)):(b(),g("img",co)),o("p",io,$(c.value.name),1)]),o("div",{class:"userBtn"},[uo,o("button",{class:"uploadAlbumBtn","data-bs-toggle":"modal","data-bs-target":"#uploadAlbumModal",onClick:D}," 新增相簿 ")])])])]),o("div",ro,[o("div",mo,[o("div",_o,[d(l,{to:`/Community/PersonalPage/${u(s)}/Photos`,class:"userLink"},{default:i(()=>[r("相片")]),_:1},8,["to"]),d(l,{to:`/Community/PersonalPage/${u(s)}/Albums`,class:"userLink"},{default:i(()=>[r("相簿")]),_:1},8,["to"]),d(l,{to:`/Community/PersonalPage/${u(s)}/Collections`,class:"userLink"},{default:i(()=>[r("收藏")]),_:1},8,["to"]),o("div",po,[o("button",ho,[d(l,{to:`/Community/PersonalPage/${u(s)}/Statics/DateViews`,class:"link"},{default:i(()=>[r("統計")]),_:1},8,["to"])]),o("ul",vo,[o("li",null,[d(l,{to:`/Community/PersonalPage/${u(s)}/Statics/DateViews`},{default:i(()=>[r("7天總瀏覽")]),_:1},8,["to"])]),o("li",null,[d(l,{to:`/Community/PersonalPage/${u(s)}/Statics/CameraUse`},{default:i(()=>[r("相機使用率")]),_:1},8,["to"])]),o("li",null,[d(l,{to:`/Community/PersonalPage/${u(s)}/Statics/TopPhotoViews`},{default:i(()=>[r("最高瀏覽照片")]),_:1},8,["to"])])])])]),d(G,{uploadProp:y.value,uploadAlbumProp:C.value},null,8,["uploadProp","uploadAlbumProp"])])])])])]),o("div",bo,[o("div",go,[o("div",fo,[Po,o("div",yo,[o("input",{class:"form-control fileContent",type:"file",onChange:L,id:"formFile",accept:"image/*",ref_key:"uploadFile",ref:V},null,544),o("div",xo,[f(o("img",{src:w.value,alt:"XXXX"},null,8,Co),[[E,k.value]])]),o("div",wo,[f(o("input",{type:"text",class:"form-control",id:"floatingTitle","onUpdate:modelValue":e[0]||(e[0]=n=>_.value=n),placeholder:"標題"},null,512),[[A,_.value]]),ko]),o("div",Ao,[f(o("input",{type:"text",class:"form-control",id:"floatingCamera","onUpdate:modelValue":e[1]||(e[1]=n=>p.value=n),placeholder:"相機"},null,512),[[A,p.value]]),Io]),o("div",{class:"d-flex justify-content-end"},[o("button",{onClick:R,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 送出 ")])])])])]),o("div",Vo,[o("div",So,[o("div",$o,[To,o("div",Fo,[o("div",Lo,[f(o("input",{type:"text",class:"form-control",id:"floatingAlbumTitle",placeholder:"標題","onUpdate:modelValue":e[2]||(e[2]=n=>v.value=n)},null,512),[[A,v.value]]),Ro]),o("div",Bo,[(b(!0),g(T,null,J(I.value,n=>(b(),g("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3",key:n.id},[o("div",Do,[o("img",{src:`https://localhost:7259/Images/${n.source}`,class:"card-img-top rounded-bottom",alt:n.source},null,8,Go),f(o("input",{type:"checkbox",class:"albumCheckbox","onUpdate:modelValue":e[3]||(e[3]=M=>h.value=M),value:n.id},null,8,Mo),[[K,h.value]])])]))),128))]),o("div",{class:"d-flex justify-content-end"},[o("button",{onClick:B,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 送出 ")])])])])])],64)}}},Xo=U(Uo,[["__scopeId","data-v-5a087d25"]]);export{Xo as default};
