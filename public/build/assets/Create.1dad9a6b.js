import{aJ as ae,bC as ne,d as le,Z as ue,i as k,H as ee,I as ie,B as P,o as s,c as n,b as r,w as a,a as p,q as u,t as l,h as de,F as g,s as h,g as m,f as E,n as Q,m as C,v as B,u as pe,ad as me,r as c}from"./app.d57d51e9.js";import{P as ye}from"./PsLayout.bc5965d6.js";import{P as _e}from"./PsInputWithRightIcon.8c9e6c80.js";import ve from"./CheckBox.2843d0e8.js";import{P as be}from"./PsRadioValue.d4f130b1.js";import{D as fe}from"./DatePicker.2eba1133.js";import{u as ke}from"./Validators.cb85894a.js";import{P as ce}from"./PsInput.b3485f1e.js";import{P as ge}from"./PsLabel.06b4363b.js";import{P as he}from"./PsButton.c9fc3d7e.js";import{P as $e}from"./PsTextarea.2d2fbd18.js";import{P as Ce,d as we}from"./PsDangerDialog.1643aeb7.js";import{P as Pe}from"./PsBreadcrumb2.761286c6.js";import{P as Ee}from"./PsDropdown.0c78da9b.js";import{P as Be}from"./PsDropdownSelect.13d0e05f.js";import{P as Ue}from"./PsCard.e47b5f14.js";import{P as Ie}from"./PsLabelCaption.b0af0e56.js";import{P as Se}from"./PsVideoUpload.6a0c2bf0.js";import{P as De}from"./PsLabelTitle3.78de00b9.js";import{P as Ke}from"./PsIcon.1e42bf4c.js";import{P as ze}from"./PsLoading.1f212adc.js";import{P as Ve}from"./PsCheckboxValue.373287f4.js";import{a as Me,P as Te}from"./PsActionModal.7978c60e.js";import{P as Le}from"./PsImageUpload.e74e4503.js";import{k as He}from"./psApiService.cef39261.js";import{_ as Ae}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";import"./PsDraggable.aca5d6c1.js";import"./PsLabelHeader4.ad69cbcb.js";const Oe=ae(()=>ne(()=>import("./GoogleMapPinPicker.32913044.js"),["assets/GoogleMapPinPicker.32913044.js","assets/index.0d7f04f4.js","assets/app.d57d51e9.js","assets/app.9e35e0da.css","assets/plugin-vue_export-helper.21dcd24c.js"])),Re=le({name:"Create",components:{Head:ue,CheckBox:ve,DatePicker:fe,PsInput:ce,PsRadioValue:be,PsLabel:ge,PsButton:he,PsTextarea:$e,PsLabelHeader6:Ce,PsDropdown:Ee,PsDropdownSelect:Be,PsCard:Ue,PsBreadcrumb2:Pe,PsLabelCaption:Ie,PsImageUpload:Le,GoogleMapPinPicker:Oe,PsIcon:Ke,PsLoading:ze,PsCheckboxValue:Ve,PsActionModal:Me,PsImageIconModal:Te,PsDangerDialog:we,PsVideoUpload:Se,PsLabelTitle3:De,PsInputWithRightIcon:_e},layout:ye,props:["errors","coreFieldFilterSettings","roles","user","customizeHeaders","customizeDetails","authUser"],setup(e){const d=k(),X=k(),Y=k(),F=k(),x=k(),N=k(),j=k(),q=k(),y=k(),$=k(""),b=k(""),D=k(""),I=k("+1"),z=k(!1),T=k(!1);let S=k([]);b.value=I.value+"-"+$.value;let V=ee({name:"",email:"",user_phone:b.value,password:"",role_id:"",conf_password:"",user_address:"",user_about_me:"",user_cover_photo:"",is_show_email:!1,is_show_phone:!1,user_relation:{},username:""});const L=k(),H=k(),A=k(),{isEmpty:M,isNum:G,isEmail:O}=ke(),U=k(!1),K=k(!1),R=(v,f,w="")=>{e.errors[v]=f?"":M(v,f,w)},o=(v,f,w="",Z="")=>{e.errors[v]=f?O(v,f,Z):M(v,f,w)},t=(v,f,w="",Z="")=>{e.errors[v]=f?G(v,f,Z):M(v,f,w)},i=v=>{let f=v.keyCode?v.keyCode:v.which;(f<48||f>57)&&v.preventDefault()};function J(){$.value==""?b.value="":b.value=I.value+"-"+$.value,V.user_phone=b.value,this.$inertia.post(route("user.store"),V,{forceFormData:!0,onBefore:()=>{U.value=!0},onSuccess:()=>{U.value=!1,K.value=!0,setTimeout(()=>{K.value=!1},2e3)},onError:()=>{U.value=!1}})}function oe(v){L.value.openModal(P("conf_modal_label"),P("core__be_replace_img_label"),P("core__be_remove_img_label"),"image","trash","24","24",()=>{H.value.openModal(P("core__be_upload_photo"),"cloudUpload",f=>{let w=ee({image:f,_method:"post"});this.$inertia.post(route("user.image.replace",v),w)})},()=>{A.value.openModal(P("core__be_remove_label"),P("core__be_are_u_sure_remove_photo"),P("core__be_btn_confirm"),P("core__be_btn_cancel"),()=>{this.$inertia.delete(route("user.image.delete",v),{onBefore:()=>{U.value=!0},onSuccess:()=>{U.value=!1,K.value=!0,setTimeout(()=>{K.value=!1},2e3)},onError:()=>{U.value=!1}})},()=>{})})}function re(v){v.mandatory===1&&R(v.name,V.user_relation[v.core_keys_id])}ie(D,_.debounce((v,f)=>{let w=0;S.value=[],W(w)},500));function te(v=null){let f=S.value?S.value.length:0;(f==0||v==!0)&&W(f)}function W(v){T.value=!0,He(v,D.value,e.authUser.id).then(f=>{f.data.length>0?(f.data.forEach(w=>{S.value.push(w)}),z.value=!0):z.value=!1,T.value=!1})}function se(v){I.value=v.country_code}return{validateEmptyInput:R,validateEmailInput:o,validateNumberInput:t,handleCustomFieldError:re,onlyNumber:i,form:V,handleSubmit:J,loading:U,success:K,replaceImageClicked:oe,ps_danger_dialog:A,ps_image_icon_modal:H,ps_action_modal:L,name:d,email:X,role_id:x,user_address:Y,user_about_me:F,password:q,conf_password:y,is_show_phone:N,is_show_email:j,phoneSearch:D,countryCode:I,phone_loadmore_visible:z,is_loading:T,phoneList:S,tempPhone:$,phoneFilterClicked:se,loadPhone:W,loadMore:te}},computed:{breadcrumb(){return[{label:P("core__be_dashboard_label"),url:route("admin.index")},{label:P("user_module"),url:route("user.index")},{label:P("core__be_create_user"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("user.index"))}}}),Ne={class:"rounded-xl"},je={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},qe={class:"px-4 pt-6 dark:bg-backgroundDark"},Ge={class:"grid w-full sm:w-1/2 gap-6"},Je={key:0,class:"text-red-800 font-medium ms-1"},We={key:0,class:"text-red-800 font-medium ms-1"},Ze={key:0,class:"text-red-800 font-medium ms-1"},Qe={key:0,class:"text-red-800 font-medium ms-1"},Xe={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},Ye={class:"pt-2 z-30"},Fe={key:0},xe={key:1},eo=["onClick"],oo={key:0,class:"text-red-800 font-medium ms-1"},ro=p("span",{class:"text-red-800 font-medium ms-1"},"*",-1),to={key:0,class:"text-red-800 font-medium ms-1"},so={class:"flex flex-row"},ao={class:"rounded-md shadow-xs w-56"},no={class:"pt-2 z-30"},lo={key:0},uo={key:1},io=["onClick"],po={class:"w-56"},mo={key:0,class:"text-red-800 font-medium ms-1"},yo={key:0,class:"text-red-800 font-medium ms-1"},_o=p("span",{class:"text-red-800 font-medium ms-1"},"*",-1),vo={key:0,class:"mb-4"},bo={class:"text-red-800 font-medium ms-1"},fo={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},ko={class:"pt-2 z-30"},co={key:0},go={key:1},ho=["onClick"],$o={key:1,class:"mb-4"},Co={class:"text-red-800 font-medium ms-1"},wo={key:2,class:"mb-4"},Po={class:"text-red-800 font-medium ms-1"},Eo={class:"flex flex-row"},Bo={key:3,class:"mb-4"},Uo={class:"flex flex-row"},Io={class:"me-2 flex"},So=["onUpdate:modelValue","onChange"],Do={key:4,class:"mb-4"},Ko={class:"text-red-800 font-medium ms-1"},zo={key:5,class:"mb-4"},Vo={class:"text-red-800 font-medium ms-1"},Mo={key:6,class:"mb-4"},To={class:"text-red-800 font-medium ms-1"},Lo={key:7,class:"mb-4"},Ho={class:"text-red-800 font-medium ms-1"},Ao={class:"flex flex-row"},Oo={key:8,class:"mb-4"},Ro={class:"text-red-800 font-medium ms-1"},No={key:9,class:"mb-4"},jo={class:"text-red-800 font-medium ms-1"},qo=["onUpdate:modelValue"],Go={key:10,class:"mb-4"},Jo={class:"text-red-800 font-medium ms-1"},Wo={class:"flex flex-row justify-end mb-2.5"},Zo={key:2,class:"transition-all duration-300"},Qo={key:3,class:""};function Xo(e,d,X,Y,F,x){const N=c("Head"),j=c("ps-breadcrumb-2"),q=c("ps-label-header-6"),y=c("ps-label"),$=c("ps-input"),b=c("ps-label-caption"),D=c("ps-dropdown-select"),I=c("ps-dropdown"),z=c("ps-icon"),T=c("ps-input-with-right-icon"),S=c("ps-textarea"),V=c("ps-label-title-3"),L=c("ps-image-upload"),H=c("ps-checkbox-value"),A=c("ps-radio-value"),M=c("date-picker"),G=c("CheckBox"),O=c("ps-button"),U=c("ps-loading"),K=c("ps-card"),R=c("ps-layout");return s(),n(g,null,[r(N,{user_about_me:e.$t("core__be_create_user")},null,8,["user_about_me"]),r(R,null,{default:a(()=>[r(j,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(K,{class:"w-full h-auto"},{default:a(()=>[p("div",Ne,[p("div",je,[r(q,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[u(l(e.$t("core__be_user_info")),1)]),_:1})]),p("div",qe,[p("form",{onSubmit:d[18]||(d[18]=de(o=>e.handleSubmit(),["prevent"]))},[p("div",Ge,[(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",Je,"*")):m("",!0)]),_:2},1024),r($,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":d[0]||(d[0]=i=>e.form.name=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.name),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="email"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",We,"*")):m("",!0)]),_:2},1024),r($,{ref_for:!0,ref:"email",type:"text",value:e.form.email,"onUpdate:value":d[1]||(d[1]=i=>e.form.email=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.email),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="username"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",Ze,"*")):m("",!0)]),_:2},1024),r($,{ref_for:!0,ref:"username",type:"text",value:e.form.username,"onUpdate:value":d[2]||(d[2]=i=>e.form.username=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("username",e.form.username):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("username",e.form.username):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.username),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="role_id"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name)),1),(o.mandatory=1)?(s(),n("span",Qe,"*")):m("",!0)]),_:2},1024),r(I,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[r(D,{ref_for:!0,ref:"role",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:e.form.role_id==""?"":e.roles.filter(i=>i.id==e.form.role_id)[0].name,onChange:i=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id),onBlur:i=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:a(()=>[p("div",Xe,[p("div",Ye,[e.roles.length==null?(s(),n("div",Fe,[r(y,{class:"p-2 flex",onClick:d[3]||(d[3]=i=>e.route("role.index"))},{default:a(()=>[u(l(e.$t("core__be_add_new_role")),1)]),_:1})])):(s(),n("div",xe,[(s(!0),n(g,null,h(e.roles,i=>(s(),n("div",{key:i.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:J=>[e.form.role_id=i.id,o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)]},[r(y,{class:Q(["ms-2",i.id==e.form.role_id?" font-bold":""])},{default:a(()=>[u(l(i.name),1)]),_:2},1032,["class"])],8,eo))),128))]))])])]),_:2},1024),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.role_id),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="password"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",oo,"*")):m("",!0)]),_:2},1024),r($,{ref_for:!0,ref:"password",type:"password",value:e.form.password,"onUpdate:value":d[4]||(d[4]=i=>e.form.password=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("password",e.form.password):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("password",e.form.password):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.password),1)]),_:1})):m("",!0)]))),128)),p("div",null,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t("core__be_user_conf_password"))+" ",1),ro]),_:1}),r($,{ref:"conf_password",type:"password",value:e.form.conf_password,"onUpdate:value":d[5]||(d[5]=o=>e.form.conf_password=o),placeholder:e.$t("core__be_user_conf_password"),onClick:d[6]||(d[6]=o=>e.validateEmptyInput("conf_password",e.form.conf_password)),onBlur:d[7]||(d[7]=o=>e.validateEmptyInput("conf_password",e.form.conf_password))},null,8,["value","placeholder"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.conf_password),1)]),_:1})]),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_phone"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",to,"*")):m("",!0)]),_:2},1024),p("div",so,[r(I,{onOnClick:e.loadMore,horizontalAlign:"left",class:"me-2 h-10"},{select:a(()=>[r(D,{showCenter:!0,selectedValue:e.countryCode},null,8,["selectedValue"])]),list:a(()=>[p("div",ao,[p("div",no,[e.is_loading?(s(),n("div",lo,[r(y,{class:"p-2 flex"},{default:a(()=>[u(l(e.$t("item_entry__loading")),1)]),_:1})])):(s(),n("div",uo,[(s(!0),n(g,null,h(e.phoneList,i=>(s(),n("div",{key:i.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:J=>e.phoneFilterClicked(i)},[r(y,{class:Q(["ms-2",i.country_code==e.countryCode?" font-bold":""])},{default:a(()=>[u(l(i.country_code),1)]),_:2},1032,["class"])],8,io))),128))]))])])]),loadmore:a(()=>[e.phone_loadmore_visible?(s(),n("div",{key:0,class:"mb-2 w-56",onClick:d[8]||(d[8]=i=>e.loadMore(!0))},[r(y,{class:"flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer"},{default:a(()=>[u(l(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1})])):m("",!0)]),filter:a(()=>[p("div",po,[r(T,{class:"rounded-xl flex-1",value:e.phoneSearch,"onUpdate:value":d[9]||(d[9]=i=>e.phoneSearch=i),placeholder:e.$t("phone_code_by_country")},{icon:a(()=>[r(z,{textColor:"text-secondary-400 dark:text-secondaryDark-grey",name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),r($,{ref_for:!0,ref:"user_phone",type:"text",value:e.tempPhone,"onUpdate:value":d[10]||(d[10]=i=>e.tempPhone=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("user_phone",e.tempPhone):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("user_phone",e.tempPhone):""},null,8,["value","placeholder","onKeyup","onBlur"])]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.user_phone),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_about_me"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),n("span",mo,"*")):m("",!0)]),_:2},1024),r($,{ref_for:!0,ref:"user_about_me",type:"text",value:e.form.user_about_me,"onUpdate:value":d[11]||(d[11]=i=>e.form.user_about_me=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.user_about_me),1)]),_:1})):m("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_address"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.label_name))+" ",1),o.mandatory==1?(s(),n("span",yo,"*")):m("",!0)]),_:2},1024),r(S,{rows:"4",value:e.form.user_address,"onUpdate:value":d[12]||(d[12]=i=>e.form.user_address=i),placeholder:e.$t(o.user_address)},null,8,["value","placeholder"]),o.mandatory==1?(s(),E(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.user_address),1)]),_:1})):m("",!0)]))),128)),p("div",null,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t("core__be_user_cover_photo")),1),_o]),_:1}),e.user.user_cover_photo?m("",!0):(s(),E(V,{key:0},{default:a(()=>[u(l(e.$t("core__be_recommended_size_200_200")),1)]),_:1})),r(L,{uploadType:"image",class:"w-48",imageFile:e.form.user_cover_photo,"onUpdate:imageFile":d[13]||(d[13]=o=>e.form.user_cover_photo=o)},null,8,["imageFile"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.errors.user_cover_photo),1)]),_:1})]),r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t("core__be_show_phone_email")),1)]),_:1}),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_phone"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(H,{value:e.form.is_show_phone,"onUpdate:value":d[14]||(d[14]=i=>e.form.is_show_phone=i),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_email"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),n("div",{key:t},[r(H,{value:e.form.is_show_email,"onUpdate:value":d[15]||(d[15]=i=>e.form.is_show_email=i),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(s(!0),n(g,null,h(e.customizeHeaders,o=>(s(),n("div",{key:o.id},[o.ui_type_id==="uit00001"&&o.enable===1&&o.is_delete===0?(s(),n("div",vo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",bo,"*",512),[[B,o.mandatory==1]])]),_:2},1024),r(I,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[r(D,{ref_for:!0,ref:"detail",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:this.customizeDetails.filter(t=>t.id===this.form.user_relation[o.core_keys_id]).length>0?this.customizeDetails.filter(t=>t.id===this.form.user_relation[o.core_keys_id])[0].name:"",onChange:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:a(()=>[p("div",fo,[p("div",ko,[e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id).length===0?(s(),n("div",co,[r(y,{class:"p-2 flex",onClick:d[16]||(d[16]=t=>e.route("currency.index"))},{default:a(()=>[u(l(e.$t("core__be_create_new"))+" "+l(e.$t(o.name)),1)]),_:2},1024)])):(s(),n("div",go,[(s(!0),n(g,null,h(e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id),t=>(s(),n("div",{key:t.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:i=>[e.form.user_relation[o.core_keys_id]=t.id,e.validateEmptyInput("currency_id",e.form.user_relation[o.core_keys_id])]},[r(y,{class:Q(["ms-2",t.id==e.form.user_relation[o.core_keys_id]?" font-bold":""])},{default:a(()=>[u(l(t.name),1)]),_:2},1032,["class"])],8,ho))),128))]))])])]),_:2},1024),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00002"&&o.enable===1&&o.is_delete===0?(s(),n("div",$o,[r(y,null,{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Co,"*",512),[[B,o.mandatory===1]])]),_:2},1024),r($,{type:"text",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00003"&&o.enable===1&&o.is_delete===0?(s(),n("div",wo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Po,"*",512),[[B,o.mandatory===1]])]),_:2},1024),p("div",Eo,[(s(!0),n(g,null,h(e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id),t=>(s(),n("div",{class:"me-2",key:t.id},[r(A,{color:"text-purple-600 border-purple-300",value:e.form.user_relation[o.core_keys_id],"onUpdate:value":i=>e.form.user_relation[o.core_keys_id]=i,title:t.name},null,8,["value","onUpdate:value","title"]),r(y,{for:t.id},{default:a(()=>[u(l(t.attribute),1)]),_:2},1032,["for"])]))),128))]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00004"&&o.enable===1&&o.is_delete===0?(s(),n("div",Bo,[p("div",Uo,[p("div",Io,[C(p("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":t=>e.form.user_relation[o.core_keys_id]=t,onChange:t=>e.handleCustomFieldError(o)},null,40,So),[[pe,e.form.user_relation[o.core_keys_id]]]),r(y,{class:"ms-2"},{default:a(()=>[u(l(e.$t(o.name)),1)]),_:2},1024)])]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00005"&&o.enable===1&&o.is_delete===0?(s(),n("div",Do,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Ko,"*",512),[[B,o.mandatory===1]])]),_:2},1024),p("div",null,[r(M,{value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00006"&&o.enable===1&&o.is_delete===0?(s(),n("div",zo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Vo,"*",512),[[B,o.mandatory===1]])]),_:2},1024),r(S,{rows:"4",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00007"&&o.enable===1&&o.is_delete===0?(s(),n("div",Mo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",To,"*",512),[[B,o.mandatory===1]])]),_:2},1024),r($,{type:"number",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00008"&&o.enable===1&&o.is_delete===0?(s(),n("div",Lo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Ho,"*",512),[[B,o.mandatory===1]])]),_:2},1024),p("div",Ao,[r(G,{oldData:e.form.user_relation[o.core_keys_id],onToParent:e.handleMultiSelect,customizeDetails:e.customizeDetails,customizeHeader:o},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00009"&&o.enable===1&&o.is_delete===0?(s(),n("div",Oo,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Ro,"*",512),[[B,o.mandatory===1]])]),_:2},1024),r(L,{uploadType:"image",imageFile:e.form.user_relation[o.core_keys_id],"onUpdate:imageFile":t=>e.form.user_relation[o.core_keys_id]=t},null,8,["imageFile","onUpdate:imageFile"]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00010"&&o.enable===1&&o.is_delete===0?(s(),n("div",No,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",jo,"*",512),[[B,o.mandatory===1]])]),_:2},1024),C(p("input",{type:"time",class:"w-full rounded","onUpdate:modelValue":t=>e.form.user_relation[o.core_keys_id]=t},null,8,qo),[[me,e.form.user_relation[o.core_keys_id]]]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0),o.ui_type_id==="uit00011"&&o.enable===1&&o.is_delete===0?(s(),n("div",Go,[r(y,{class:"text-base"},{default:a(()=>[u(l(e.$t(o.name)),1),C(p("span",Jo,"*",512),[[B,o.mandatory===1]])]),_:2},1024),p("div",null,[r(M,{value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(l(e.product_relation_errors&&e.product_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):m("",!0)]))),128)),p("div",Wo,[r(O,{onClick:d[17]||(d[17]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[u(l(e.$t("core__be_btn_cancel")),1)]),_:1}),r(O,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(s(),E(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):m("",!0),e.success?(s(),E(z,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):m("",!0),e.success?(s(),n("span",Zo,l(e.$t("core__be_btn_saved")),1)):m("",!0),!e.loading&&!e.success?(s(),n("span",Qo,l(e.$t("core__be_btn_save")),1)):m("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Nr=Ae(Re,[["render",Xo]]);export{Nr as default};