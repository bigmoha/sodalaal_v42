import{P as M}from"./PsLayout.bc5965d6.js";import{d as V,Z as j,p as q,i as h,H as A,B as H,o as a,c as o,b as n,w as r,a as $,f as b,q as i,t as m,g as p,F as g,s as v,r as d}from"./app.d57d51e9.js";import Z from"./FlashMessage.d92f0edc.js";import{u as G}from"./Validators.cb85894a.js";import{P as J}from"./PsInput.b3485f1e.js";import{P as O}from"./PsLabel.06b4363b.js";import{P as Q}from"./PsButton.c9fc3d7e.js";import{P as R}from"./PsTextarea.2d2fbd18.js";import{P as W}from"./PsCheckboxValue.373287f4.js";import{P as X}from"./PsLabelHeader4.ad69cbcb.js";import{P as Y}from"./PsLabelCaption.b0af0e56.js";import{P as x}from"./PsIcon.1e42bf4c.js";import{P as F}from"./PsLoading.1f212adc.js";import{P as ee}from"./PsBreadcrumb2.761286c6.js";import{a as te,P as ae}from"./PsActionModal.7978c60e.js";import{d as le}from"./PsDangerDialog.1643aeb7.js";import{P as oe}from"./PsImageUpload.e74e4503.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsDraggable.aca5d6c1.js";import"./PsLabelTitle3.78de00b9.js";const re=V({name:"Edit",components:{FlashMessage:Z,Head:j,PsInput:J,PsLabel:O,PsButton:Q,PsTextarea:R,PsCheckboxValue:W,PsLabelHeader4:X,PsLabelCaption:Y,PsIcon:x,PsLoading:F,PsBreadcrumb2:ee,Link:q,PsActionModal:te,PsImageIconModal:ae,PsDangerDialog:le,PsImageUpload:oe},layout:M,props:["errors","status","coreFieldFilterSettings"],setup(e){const s=h(!1),P=h(!1),D=h(),L=h(),T=h();h();let I=h(!1),C=A({title:"",gps_link:"",ios_link:"",description:"",yt_link:"",fb_link:"",tw_link:"",logo:"",cover:""});const{isEmail:S,isEmpty:B}=G(),y=(f,_,w="")=>{e.errors[f]=_?"":B(f,_,w)},c=(f,_,w="",U="")=>{e.errors[f]=_?S(f,_,U):B(f,_,w)},k=f=>{let _=f.keyCode?f.keyCode:f.which;(_<48||_>57)&&f.preventDefault()};function K(){this.$inertia.get(route("admin.index"))}function E(){this.$inertia.post(route("landing_page.store"),C,{forceFormData:!0,onBefore:()=>{s.value=!0},onSuccess:()=>{s.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{s.value=!1}})}return{validateEmailInput:c,handleCancel:K,onlyNumber:k,form:C,handleSubmit:E,loading:s,success:P,ps_image_icon_modal:T,ps_action_modal:L,visible:I,validateEmptyInput:y,email:D}},computed:{breadcrumb(){return[{label:H("core__be_dashboard_label"),url:route("admin.index")},{label:H("landing_page_module_entry"),color:"text-primary-500"}]}}}),se={class:""},ie={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},me={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},pe={class:"w-full sm:w-1/2"},ue={key:0},de={key:0,class:"text-red-800 font-medium ms-1"},fe={key:0,class:"text-red-800 font-medium ms-1"},ye={key:0,class:"text-red-800 font-medium ms-1"},_e={key:0,class:"text-red-800 font-medium ms-1"},be={key:0,class:"text-red-800 font-medium ms-1"},ke={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ce={key:0,class:"text-red-800 font-medium ms-1"},he={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function $e(e,s,P,D,L,T){const I=d("Head"),C=d("ps-breadcrumb-2"),S=d("ps-banner-icon"),B=d("ps-label-header-6"),y=d("ps-label"),c=d("ps-input"),k=d("ps-label-caption"),K=d("ps-textarea"),E=d("ps-label-title-3"),f=d("ps-image-upload"),_=d("ps-button"),w=d("ps-loading"),U=d("ps-icon"),z=d("ps-card"),N=d("ps-layout");return a(),o(g,null,[n(I,{title:e.$t("landing_page_module_entry")},null,8,["title"]),n(N,null,{default:r(()=>[$("div",se,[n(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(a(),b(S,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[i(m(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),n(z,{class:"w-full h-auto"},{default:r(()=>[$("div",ie,[$("div",me,[n(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[i(m(e.$t("core__be_landing_page_info")),1)]),_:1})]),$("div",null,[$("div",pe,[e.coreFieldFilterSettings?(a(),o("div",ue,[(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="title"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",de,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":s[0]||(s[0]=l=>e.form.title=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.title),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",fe,"*")):p("",!0)]),_:2},1024),n(K,{rows:"4",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":s[1]||(s[1]=l=>e.form.description=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.description),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="gps_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",ye,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"gps_link",type:"text",value:e.form.gps_link,"onUpdate:value":s[2]||(s[2]=l=>e.form.gps_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.gps_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="ios_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",_e,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"ios_link",type:"text",value:e.form.ios_link,"onUpdate:value":s[3]||(s[3]=l=>e.form.ios_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.ios_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="yt_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",be,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"yt_link",type:"text",value:e.form.yt_link,"onUpdate:value":s[4]||(s[4]=l=>e.form.yt_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.yt_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="fb_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),o("span",ke,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"fb_link",type:"text",value:e.form.fb_link,"onUpdate:value":s[5]||(s[5]=l=>e.form.fb_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.fb_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="tw_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),o("span",ge,"*")):p("",!0)]),_:2},1024),n(c,{ref_for:!0,ref:"tw_link",type:"text",value:e.form.tw_link,"onUpdate:value":s[6]||(s[6]=l=>e.form.tw_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.tw_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="landing-icon"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),o("span",ve,"*")):p("",!0)]),_:2},1024),n(E,null,{default:r(()=>[i(m(e.$t("core__be_recommended_size_200_200")),1)]),_:1}),n(f,{class:"w-72",uploadType:"icon",imageFile:e.form.logo,"onUpdate:imageFile":s[7]||(s[7]=l=>e.form.logo=l)},null,8,["imageFile"]),n(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.logo),1)]),_:1})]))),128)),(a(!0),o(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="landing-cover"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),o("div",{class:"px-4 py-3",key:u},[n(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),o("span",ce,"*")):p("",!0)]),_:2},1024),n(E,null,{default:r(()=>[i(m(e.$t("core__be_recommended_size_400_200")),1)]),_:1}),n(f,{uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":s[8]||(s[8]=l=>e.form.cover=l)},null,8,["imageFile"]),n(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.cover),1)]),_:1})]))),128)),$("div",he,[n(_,{onClick:s[9]||(s[9]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[i(m(e.$t("core__be_btn_cancel")),1)]),_:1}),n(_,{onClick:s[10]||(s[10]=t=>e.handleSubmit()),class:"transition-all duration-300 min-w-3xs me-4",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(a(),b(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):p("",!0),e.success?(a(),b(U,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):p("",!0),e.success?(a(),b(y,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(m(e.$t("core__be_btn_saved")),1)]),_:1})):p("",!0),!e.loading&&!e.success?(a(),b(y,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(m(e.$t("core__be_btn_save")),1)]),_:1})):p("",!0)]),_:1})])])):p("",!0)])])])]),_:1})])]),_:1})],64)}var st=ne(re,[["render",$e]]);export{st as default};
