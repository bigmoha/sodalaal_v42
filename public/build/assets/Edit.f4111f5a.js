import{d as F,Z as j,p as q,i as _,H as A,j as R,B as m,o as g,c as $,b as r,w as l,a as p,q as d,t as n,h as Z,m as G,f as K,g as E,F as J,r as i,E as O}from"./app.d57d51e9.js";import{P as Q}from"./PsLayout.bc5965d6.js";import{u as V}from"./Validators.cb85894a.js";import W from"./CheckBox.2843d0e8.js";import X from"./RoleCheckbox.1613a5e8.js";import{P as Y}from"./PsInput.b3485f1e.js";import{P as N}from"./PsLabel.06b4363b.js";import{P as x}from"./PsButton.c9fc3d7e.js";import{P as ee}from"./PsTextarea.2d2fbd18.js";import{P as oe}from"./PsLabelHeader4.ad69cbcb.js";import{P as se}from"./PsIcon.1e42bf4c.js";import{P as re}from"./PsLoading.1f212adc.js";import{P as te}from"./PsLabelCaption.b0af0e56.js";import{P as ae}from"./PsBreadcrumb2.761286c6.js";import{a as le,P as ne}from"./PsActionModal.7978c60e.js";import{d as ie}from"./PsDangerDialog.1643aeb7.js";import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsDraggable.aca5d6c1.js";const de=F({name:"Edit",components:{Head:j,Link:q,CheckBox:W,RoleCheckbox:X,PsInput:Y,PsLabel:N,PsButton:x,PsTextarea:ee,PsLabelHeader4:oe,PsIcon:se,PsLabelCaption:te,PsLoading:re,PsBreadcrumb2:ae,PsActionModal:le,PsImageIconModal:ne,PsDangerDialog:ie},layout:Q,props:["errors","user","custom_field_headers"],setup(e){const o=_(!1),y=_(!1),C=_(!1),I=_(!1),B=_(!1),k=_(!1);let c=A({name:e.user.name,email:e.user.email,user_address:e.user.user_address,user_about_me:e.user.user_about_me,user_cover_photo:"",is_show_email:e.user.is_show_email==1,is_show_phone:e.user.is_show_phone==1,custom_fields:[],permissions:"",_method:"put"});const P=_(),f=_(),h=_(),{isEmpty:b,isNum:S,isEmail:M}=V(),D=(s,a,u="")=>{e.errors[s]=a?"":b(s,a,u),s=="name"&&(C.value.isError=!0),s=="password"&&(B.value.isError=!0),s=="conf_password"&&(k.value.isError=!0)},w=(s,a,u="",z="")=>{e.errors[s]=a?M(s,a,z):b(s,a,u),s=="email"&&(I.value.isError=!0)},v=(s,a,u="",z="")=>{e.errors[s]=a?S(s,a,z):b(s,a,u)},U=s=>{let a=s.keyCode?s.keyCode:s.which;(a<48||a>57)&&s.preventDefault()};function L(s){this.$inertia.post(route("registered_user.update",s),c,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,y.value=!0,setTimeout(()=>{y.value=!1},2e3)},onError:()=>{o.value=!1}})}function H({data:s,id:a}){c.custom_fields[a]=s.toString()}function T({data:s}){c.permissions=s.toString()}R(()=>{e.user_custom_fields.map((s,a)=>{let u=s.data;c.custom_fields[s.custom_field_header_id]=u==="1"?!0:u==="0"?!1:u})});function t(s){P.value.openModal(m("conf_modal_label"),m("core__be_replace_img_label"),m("core__be_remove_img_label"),"image","trash","24","24",()=>{f.value.openModal()},()=>{h.value.openModal(m("core__be_remove_label"),m("core__be_are_u_sure_remove_photo"),m("core__be_btn_confirm"),m("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",s),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,y.value=!0,setTimeout(()=>{y.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateEmptyInput:D,validateEmailInput:w,validateNumberInput:v,onlyNumber:U,form:c,handleSubmit:L,handleMultiSelect:H,handleUserMultiSelect:T,loading:o,success:y,replaceImageClicked:t,ps_danger_dialog:h,ps_image_icon_modal:f,ps_action_modal:P,input_name:C,input_email:I,input_password:B,input_confirm_password:k}},computed:{breadcrumb(){return[{label:m("core__be_dashboard_label"),url:route("admin.index")},{label:m("profile_label"),url:route("registered_user.index")},{label:m("edit_profile"),color:"text-primary-500"}]}}}),me={class:"rounded-xl"},ue={class:"bg-primary-50 text-secondary-800 py-2.5 ps-4"},_e={class:"px-4 pt-6 dark:bg-backgroundDark"},fe={class:"grid w-full sm:w-1/2 gap-6"},ce={key:0,class:"flex items-end pt-4"},be={class:"flex flex-row justify-end mb-2.5"},ve={key:2,class:"transition-all duration-300"},ge={key:3,class:""};function ye(e,o,y,C,I,B){const k=i("Head"),c=i("ps-breadcrumb-2"),P=i("ps-label-header-6"),f=i("ps-label"),h=i("ps-icon"),b=i("ps-button"),S=i("ps-image-icon-modal"),M=i("ps-action-modal"),D=i("ps-danger-dialog"),w=i("ps-input"),v=i("ps-label-caption"),U=i("ps-loading"),L=i("ps-card"),H=i("ps-layout"),T=O("lazy");return g(),$(J,null,[r(k,{title:e.$t("user_profile")},null,8,["title"]),r(H,null,{default:l(()=>[r(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(L,{class:"w-full h-auto"},{default:l(()=>[p("div",me,[p("div",ue,[r(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[d(n(e.$t("core__be_user_info")),1)]),_:1})]),p("div",_e,[p("form",{onSubmit:o[16]||(o[16]=Z(t=>e.handleSubmit(e.user.id),["prevent"]))},[p("div",fe,[p("div",null,[r(f,{class:"text-base"},{default:l(()=>[d(n(e.$t("profile_photo")),1)]),_:1}),e.user.user_cover_photo?(g(),$("div",ce,[G(p("img",{width:"200",height:"200",class:"",alt:"Profile photo",onError:o[0]||(o[0]=t=>"/images/assets/default_profile.png")},null,544),[[T,{src:e.$page.props.uploadUrl+"/"+e.user.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),r(b,{type:"button",onClick:o[1]||(o[1]=t=>e.replaceImageClicked(e.user.user_cover_photo)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500",padding:"p-1.5",hover:"",focus:""},{default:l(()=>[r(h,{name:"editPencil",w:"19",h:"19"})]),_:1}),r(S,{ref:"ps_image_icon_modal"},null,512),r(M,{ref:"ps_action_modal"},null,512),r(D,{ref:"ps_danger_dialog"},null,512)])):(g(),$("input",{key:1,type:"file",accept:"image/*",onInput:o[2]||(o[2]=t=>e.form.user_cover_photo=t.target.files[0])},null,32))]),p("div",null,[r(f,{class:"text-base"},{default:l(()=>[d(n(e.$t("user_name_label")),1)]),_:1}),r(w,{type:"text",value:e.form.name,"onUpdate:value":o[3]||(o[3]=t=>e.form.name=t),placeholder:e.$t("user_name_label"),onKeyup:o[4]||(o[4]=t=>e.validateEmptyInput("name",e.form.name)),onBlur:o[5]||(o[5]=t=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[d(n(e.errors.name),1)]),_:1})]),p("div",null,[r(f,{class:"text-base"},{default:l(()=>[d(n(e.$t("email_label")),1)]),_:1}),r(w,{type:"text",value:e.form.email,"onUpdate:value":o[6]||(o[6]=t=>e.form.email=t),placeholder:e.$t("email_label"),onKeyup:o[7]||(o[7]=t=>e.validateEmailInput("email",e.form.email)),onBlur:o[8]||(o[8]=t=>e.validateEmailInput("email",e.form.email))},null,8,["value","placeholder"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[d(n(e.errors.email),1)]),_:1})]),p("div",null,[r(f,{class:"text-base"},{default:l(()=>[d(n(e.$t("password_label")),1)]),_:1}),r(w,{ref:"input_password",type:"password",value:e.form.password,"onUpdate:value":o[9]||(o[9]=t=>e.form.password=t),placeholder:e.$t("password_label"),onKeyup:o[10]||(o[10]=t=>e.validateEmptyInput("password",e.form.password)),onBlur:o[11]||(o[11]=t=>e.validateEmptyInput("password",e.form.password))},null,8,["value","placeholder"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[d(n(e.errors.password),1)]),_:1})]),p("div",null,[r(f,{class:"text-base"},{default:l(()=>[d(n(e.$t("conf_password_label")),1)]),_:1}),r(w,{ref:"input_confirm_password",type:"password",value:e.form.conf_password,"onUpdate:value":o[12]||(o[12]=t=>e.form.conf_password=t),placeholder:e.$t("conf_password_label"),onKeyup:o[13]||(o[13]=t=>e.validateEmptyInput("conf_password",e.form.conf_password)),onBlur:o[14]||(o[14]=t=>e.validateEmptyInput("conf_password",e.form.conf_password))},null,8,["value","placeholder"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[d(n(e.errors.conf_password),1)]),_:1}),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[d(n(e.errors.conf_password),1)]),_:1})]),p("div",be,[r(b,{onClick:o[15]||(o[15]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[d(n(e.$t("core__be_btn_cancel")),1)]),_:1}),r(b,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(g(),K(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):E("",!0),e.success?(g(),K(h,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):E("",!0),e.success?(g(),$("span",ve,n(e.$t("core__be_btn_saved")),1)):E("",!0),!e.loading&&!e.success?(g(),$("span",ge,n(e.$t("core__be_btn_save")),1)):E("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var so=pe(de,[["render",ye]]);export{so as default};