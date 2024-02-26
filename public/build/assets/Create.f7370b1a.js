import{d as Z,Z as G,i as k,y as O,H as A,B as f,o as a,c as s,b as o,w as r,a as p,q as n,t as i,h as Q,F as y,s as h,g as u,f as v,m as W,n as X,r as c,E as Y}from"./app.d57d51e9.js";import{P as F}from"./PsLayout.bc5965d6.js";import{u as ee}from"./Validators.cb85894a.js";import{P as te}from"./PsInput.b3485f1e.js";import{P as oe}from"./PsLabel.06b4363b.js";import{P as ae}from"./PsButton.c9fc3d7e.js";import{P as re}from"./PsTextarea.2d2fbd18.js";import{P as le}from"./PsLabelHeader4.ad69cbcb.js";import{P as se}from"./PsLabelCaption.b0af0e56.js";import{P as ne}from"./PsCheckbox.f0ec21c6.js";import{P as ie}from"./PsCheckboxValue.373287f4.js";import{P as de}from"./PsBreadcrumb2.761286c6.js";import{P as _e}from"./PsDropdown.0c78da9b.js";import{P as pe}from"./PsDropdownSelect.13d0e05f.js";import{P as me}from"./PsIcon.1e42bf4c.js";import{P as ue}from"./PsLoading.1f212adc.js";import{a as fe,P as ce}from"./PsActionModal.7978c60e.js";import{P as be}from"./PsImageUpload.e74e4503.js";import{d as ge}from"./PsDangerDialog.1643aeb7.js";import{P as ye}from"./PsTooltip.2ee6eee2.js";import{P as he}from"./PsTooltips.1a2d8bd5.js";import{P as ve}from"./PsLoadingCircleDialog.c95deca1.js";import{P as ke}from"./PsSuccessDialog.a19b3bb4.js";import{_ as we}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsDraggable.aca5d6c1.js";import"./PsLabelTitle3.78de00b9.js";const $e=Z({name:"Edit",components:{PsIcon:me,PsLoading:ue,PsActionModal:fe,PsImageIconModal:ce,PsImageUpload:be,PsDangerDialog:ge,Head:G,PsInput:te,PsLabel:oe,PsButton:ae,PsTextarea:re,PsLabelHeader4:le,PsLabelCaption:se,PsCheckbox:ne,PsCheckboxValue:ie,PsBreadcrumb2:de,PsDropdown:_e,PsDropdownSelect:pe,PsTooltips:he,PsTooltip:ye,PsLoadingCircleDialog:ve,PsSuccessDialog:ke},layout:F,props:["errors","status","coreFieldFilterSettings","can","validation","available_languages"],setup(e){const l=k(!1),P=k(!1),z=k(),T=k(),M=k();k(!1);const U=k(),{isEmpty:R}=ee(),H=k([]),m=k(),S=(g,$)=>{e.errors[g]=$?"":R(g,$)},b=[{label:"core__play_store_and_app_store_confirmation",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-103385/acf8f8bf8d16041"},{label:"core__fe_image_configuration",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-104164/5004d88c52cdd68"},{label:"core__fe_firebase_configuration",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-104205/c36a4f43476753e"},{label:"core__lang_refresh_setting",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-105624/6b43f6796ba146b"},{label:"core__fe_meta_configuration",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-159065/f9af8c08a4bee9d"},{label:"core__fe_other_information",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-104225/ff73ab8afbc24dd"}],B=k(b[0].label),C=k(b[0].docu);function w(g){B.value=g.label,C.value=g.docu}const I=g=>{let $=g.keyCode?g.keyCode:g.which;($<48||$>57)&&g.preventDefault()},E=O(A({map_key:"",is_enable_video_setting:!1,show_user_profile:!1,no_filter_with_location_on_map:!1,price_format:"",enable_notification:!1,fcm_server_key:"",firebase_web_push_key_pair:"",firebase_config:"",ad_client:"",ad_slot:"",is_ads_on:!1,copyright:"",google_playstore_url:"",google_setting:!1,app_store_url:"",app_store_setting:!1,banner_src:"",google_map:!1,open_street_map:!1,mile:"",default_language:"",promote_first_choice_day:"",selected_language:[],promote_second_choice_day:"",promote_third_choice_day:"",promote_fourth_choice_day:"",gps_enable:!1,show_main_menu:!1,show_special_collections:!1,show_featured_items:!1,show_best_choice_slider:!1,frontend_version_no:"",frontend_logo:"",frontend_icon:"",frontend_banner:"",frontend_meta_img:""}));function q(g){this.$inertia.post(route("frontend_setting.store"),E,{forceFormData:!0,onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},1e3)},onError:()=>{l.value=!1}})}function K(g,$,D,N=null){let x=f("core__be_remove_icon_label"),L=f("core__be_replace_icon_label"),t=f("core__be_are_u_sure_remove_icon"),_=f("core__be_upload_icon");D=="frontend_logo"&&(x=f("core__be_remove_logo_label"),L=f("core__be_replace_logo_label"),t=f("core__be_are_u_sure_remove_logo"),_=f("core__be_upload_logo")),D=="frontend_banner"&&(x=f("core__be_remove_banner_label"),L=f("core__be_replace_banner_label"),t=f("core__be_are_u_sure_remove_banner"),_=f("core__be_upload_banner")),z.value.openModal(f("conf_modal_label"),L,x,"image","trash","24","24",()=>{T.value.openModal(_,"cloudUpload",d=>{let J=A({image:d,uploadType:N,_method:"put"});this.$inertia.post(route("image.replace",g),J)})},()=>{M.value.openModal(f("core__be_remove_label"),t,f("core__be_btn_confirm"),f("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",g),{onBefore:()=>{l.value=!0},onSuccess:()=>{l.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{l.value=!1}})},()=>{})},!e.validation.includes(D))}function V(){this.$inertia.get(route("frontend_setting.languageRefresh"),{key:"refresh"},{onBefore:()=>{U.value.openModal(f("core__be_updating_title"),f("core__be_lang_refreshing_desc"))},onSuccess:()=>{},onError:()=>{U.value.closeModal()}})}function j(){m.value.openModal(f("core__be_awesome_title"),f("core__be_lang_refresh_success_desc"),f("core__be_btn_back"),()=>{},!0)}return{handleSubmit:q,validateEmptyInput:S,onlyNumber:I,form:E,checkedSelectedList:H,title:B,docu:C,settingColumn:b,changeSection:w,loading:l,success:P,replaceImageClicked:K,ps_danger_dialog:M,ps_image_icon_modal:T,ps_action_modal:z,handleFeLangRefresh:V,ps_loading_circle_dialog:U,langRefreshSuccessDialog:j,ps_success_dialog:m}},computed:{breadcrumb(){return[{label:f("core__be_dashboard_label"),url:route("admin.index")},{label:f("frontend_setting_module"),color:"text-primary-500"}]}},created(){},mounted(){this.status.flag=="langSuccess"&&this.langRefreshSuccessDialog()}}),Ce={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},Pe={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},Se={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},Be={key:0,class:""},Ie={key:0,class:"text-red-800 font-medium ms-1"},Ee={key:0,class:"text-red-800 font-medium ms-1"},qe={key:1,class:""},Ue={class:"px-4 py-3"},De={class:"px-4 py-3"},xe={class:"px-4 py-3"},Le={key:2,class:"grid grid-rows gap-6 ms-4 me-18"},Ke={class:"flex items-center"},ze={key:0,class:"text-red-800 font-medium ms-1"},Te=n(" For more details: "),Me=p("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-104264/bbfc1813c4065fb",class:"underline"},"Refer to this doc",-1),Re={class:"flex items-center"},He={key:0,class:"text-red-800 font-medium ms-1"},Ve=n(" For more details: "),je=p("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-104284/357a0267a31ba26",class:"underline"},"Refer to this doc",-1),Ne={key:3,class:"grid grid-rows gap-6 ms-4"},Ae={class:"rounded-xl"},Je={class:"mt-6"},Ze={class:""},Ge={class:"border border-1 rounded p-4"},Oe={class:"h-auto"},Qe={class:"flex flex-row justify-start mt-6"},We={key:4,class:"grid grid-rows gap-6 ms-4 me-18"},Xe={class:"flex items-center"},Ye={key:0,class:"text-red-800 font-medium ms-1"},Fe={class:"flex items-center"},et={key:0,class:"text-red-800 font-medium ms-1"},tt={class:"px-4 py-3"},ot={key:1,class:"flex items-end pt-4"},at={width:"200",height:"200",class:"w-48 h-48",alt:"frontend_setting"},rt={key:5,class:"grid grid-rows gap-6 ms-4 me-18"},lt={class:"flex items-center"},st={key:0,class:"text-red-800 font-medium ms-1"},nt=n(" For more details: "),it=p("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-104304/017317d54feeea7",class:"underline"},"Refer to this doc",-1),dt={class:"flex items-center"},_t=n(" For more details: "),pt=p("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-80685/6220fdbb827d06a",class:"underline"},"Refer to this doc",-1),mt={class:"flex flex-row justify-end mt-6 mb-2.5"},ut={class:"px-4"},ft=["onClick"];function ct(e,l,P,z,T,M){const U=c("Head"),R=c("ps-breadcrumb-2"),H=c("ps-label-header-6"),m=c("ps-label"),S=c("ps-input"),b=c("ps-label-caption"),B=c("ps-checkbox-value"),C=c("ps-image-upload"),w=c("ps-icon"),I=c("ps-tooltip"),E=c("ps-textarea"),q=c("ps-button"),K=c("ps-card"),V=c("ps-image-icon-modal"),j=c("ps-action-modal"),g=c("ps-danger-dialog"),$=c("ps-loading"),D=c("ps-loading-circle-dialog"),N=c("ps-success-dialog"),x=c("ps-layout"),L=Y("lazy");return a(),s(y,null,[o(U,{title:e.$t("frontend_setting_module")},null,8,["title"]),o(x,null,{default:r(()=>[o(R,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(K,{class:"w-full h-auto"},{default:r(()=>[p("div",Ce,[p("div",Pe,[o(H,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[n(i(e.$t(e.title)),1)]),_:1})]),p("form",{onSubmit:l[17]||(l[17]=Q(t=>e.handleSubmit(),["prevent"]))},[p("div",Se,[p("div",null,[e.title==e.settingColumn[0].label?(a(),s("div",Be,[(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="google_playstore_url"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",Ie,"*")):u("",!0)]),_:2},1024),o(S,{ref_for:!0,ref:"google_playstore_url",value:e.form.google_playstore_url,"onUpdate:value":l[0]||(l[0]=d=>e.form.google_playstore_url=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("google_playstore_url",e.form.google_playstore_url):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("google_playstore_url",e.form.google_playstore_url):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.google_playstore_url),1)]),_:1})):u("",!0)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="app_store_url"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",Ee,"*")):u("",!0)]),_:2},1024),o(S,{ref_for:!0,ref:"app_store_url",value:e.form.app_store_url,"onUpdate:value":l[1]||(l[1]=d=>e.form.app_store_url=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("app_store_url",e.form.app_store_url):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("app_store_url",e.form.app_store_url):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.app_store_url),1)]),_:1})):u("",!0)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="google_setting"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pt-3",key:_},[o(B,{value:e.form.google_setting,"onUpdate:value":l[2]||(l[2]=d=>e.form.google_setting=d),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="google_setting"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pb-3",key:_},[o(m,{class:"ms-2 text-xs",textColor:"text-secondary-400"},{default:r(()=>[n(i(e.$t(t.label_name)),1)]),_:2},1024)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="app_store_setting"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pt-3",key:_},[o(B,{value:e.form.app_store_setting,"onUpdate:value":l[3]||(l[3]=d=>e.form.app_store_setting=d),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="app_store_setting"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pb-3",key:_},[o(m,{class:"ms-2 text-xs",textColor:"text-secondary-400"},{default:r(()=>[n(i(e.$t(t.label_name)),1)]),_:2},1024)]))),128))])):u("",!0),e.title==e.settingColumn[1].label?(a(),s("div",qe,[p("div",Ue,[o(m,{class:"text-base mb-1"},{default:r(()=>[n(i(e.$t("core__frontend_logo")),1)]),_:1}),o(m,{textColor:"text-secondary-400 text-xs"},{default:r(()=>[n(i(e.$t("core__be_recommended_size_256_256")),1)]),_:1}),o(C,{class:"w-72",uploadType:"icon",imageFile:e.form.frontend_logo,"onUpdate:imageFile":l[4]||(l[4]=t=>e.form.frontend_logo=t)},null,8,["imageFile"]),o(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_logo),1)]),_:1})]),p("div",De,[o(m,{class:"text-base mb-1"},{default:r(()=>[n(i(e.$t("core__frontend_icon")),1)]),_:1}),o(m,{textColor:"text-secondary-400 text-xs"},{default:r(()=>[n(i(e.$t("core__be_recommended_size_256_256")),1)]),_:1}),o(C,{class:"w-72",uploadType:"icon",imageFile:e.form.frontend_icon,"onUpdate:imageFile":l[5]||(l[5]=t=>e.form.frontend_icon=t)},null,8,["imageFile"]),o(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_icon),1)]),_:1})]),p("div",xe,[o(m,{class:"text-base mb-1"},{default:r(()=>[n(i(e.$t("core__frontend_banner")),1)]),_:1}),o(m,{textColor:"text-secondary-400 text-xs"},{default:r(()=>[n(i(e.$t("core__be_recommended_size_2048_1000")),1)]),_:1}),o(C,{class:"w-72",uploadType:"icon",imageFile:e.form.frontend_banner,"onUpdate:imageFile":l[6]||(l[6]=t=>e.form.frontend_banner=t)},null,8,["imageFile"]),o(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_banner),1)]),_:1})])])):u("",!0),e.title==e.settingColumn[2].label?(a(),s("div",Le,[(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="firebase_web_push_key_pair"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[p("div",Ke,[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",ze,"*")):u("",!0)]),_:2},1024),o(I,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:r(()=>[o(w,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:r(()=>[Te,Me]),_:1})]),o(E,{rows:"4",ref_for:!0,ref:"firebase_web_push_key_pair",value:e.form.firebase_web_push_key_pair,"onUpdate:value":l[7]||(l[7]=d=>e.form.firebase_web_push_key_pair=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("firebase_web_push_key_pair",e.form.firebase_web_push_key_pair):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("firebase_web_push_key_pair",e.form.firebase_web_push_key_pair):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.firebase_web_push_key_pair),1)]),_:1})):u("",!0)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="firebase_config"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[p("div",Re,[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",He,"*")):u("",!0)]),_:2},1024),o(I,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:r(()=>[o(w,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:r(()=>[Ve,je]),_:1})]),o(E,{rows:"4",ref_for:!0,ref:"firebase_config",value:e.form.firebase_config,"onUpdate:value":l[8]||(l[8]=d=>e.form.firebase_config=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("firebase_config",e.form.firebase_config):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("firebase_config",e.form.firebase_config):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.firebase_config),1)]),_:1})):u("",!0),e.isJson?u("",!0):(a(),v(b,{key:1,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.$t("core_be__need_json_string")),1)]),_:1}))]))),128))])):u("",!0),e.title==e.settingColumn[3].label?(a(),s("div",Ne,[o(K,{class:"w-full h-auto"},{default:r(()=>[p("div",Ae,[p("div",Je,[p("div",Ze,[p("div",Ge,[p("div",Oe,[p("div",null,[o(m,{class:"dark:text-white text-secondary-800 font-normal"},{default:r(()=>[n(i(e.$t("fe_lang_refresh_desc")),1)]),_:1})]),p("div",Qe,[o(q,{type:"button",onClick:l[9]||(l[9]=t=>e.handleFeLangRefresh()),rounded:"rounded",class:"flex flex-wrap items-center"},{default:r(()=>[o(w,{name:"refresh",class:"me-2 font-semibold"}),o(m,{textColor:"text-white dark:text-secondary-800"},{default:r(()=>[n(i(e.$t("core__be_lang_refresh")),1)]),_:1})]),_:1})])])])])])])]),_:1})])):u("",!0),e.title==e.settingColumn[4].label?(a(),s("div",We,[(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="frontend_meta_title"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[p("div",Xe,[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",Ye,"*")):u("",!0)]),_:2},1024)]),o(S,{ref_for:!0,ref:"frontend_meta_title",value:e.form.frontend_meta_title,"onUpdate:value":l[10]||(l[10]=d=>e.form.frontend_meta_title=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("frontend_meta_title",e.form.frontend_meta_title):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("frontend_meta_title",e.form.frontend_meta_title):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_meta_title),1)]),_:1})):u("",!0)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="frontend_meta_description"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[p("div",Fe,[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",et,"*")):u("",!0)]),_:2},1024)]),o(E,{rows:"4",ref_for:!0,ref:"frontend_meta_description",value:e.form.frontend_meta_description,"onUpdate:value":l[11]||(l[11]=d=>e.form.frontend_meta_description=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("frontend_meta_description",e.form.frontend_meta_description):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("frontend_meta_description",e.form.frontend_meta_description):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_meta_description),1)]),_:1})):u("",!0)]))),128)),p("div",tt,[o(m,{class:"text-base mb-1"},{default:r(()=>[n(i(e.$t("core__backend_meta_image")),1)]),_:1}),e.frontend_setting.frontend_meta_image[0]?u("",!0):(a(),v(m,{key:0,textColor:"text-secondary-400 text-xs"},{default:r(()=>[n(i(e.$t("core__be_recommended_size_256_256")),1)]),_:1})),e.frontend_setting.frontend_meta_image[0]?(a(),s("div",ot,[W(p("img",at,null,512),[[L,{src:e.$page.props.uploadUrl+"/"+e.frontend_setting.frontend_meta_img[0].img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),o(q,{type:"button",onClick:l[12]||(l[12]=t=>e.replaceImageClicked(e.frontend_setting.frontend_meta_image[0].id,!0,"frontend_logo")),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[o(w,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),o(V,{ref:"ps_image_icon_modal"},null,512),o(j,{ref:"ps_action_modal"},null,512),o(g,{ref:"ps_danger_dialog"},null,512)])):(a(),v(C,{key:2,class:"w-72",uploadType:"icon",imageFile:e.form.frontend_meta_image,"onUpdate:imageFile":l[13]||(l[13]=t=>e.form.frontend_meta_image=t)},null,8,["imageFile"])),o(b,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.frontend_meta_image),1)]),_:1})])])):u("",!0),e.title==e.settingColumn[4].label?(a(),s("div",rt,[(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="copyright"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 py-3",key:_},[p("div",lt,[o(m,{class:"text-base flex flex-row"},{default:r(()=>[n(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),s("span",st,"*")):u("",!0)]),_:2},1024),o(I,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:r(()=>[o(w,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:r(()=>[nt,it]),_:1})]),o(S,{ref_for:!0,ref:"copyright",value:e.form.copyright,"onUpdate:value":l[14]||(l[14]=d=>e.form.copyright=d),placeholder:e.$t(t.placeholder),onKeyup:d=>t.mandatory==1?e.validateEmptyInput("copyright",e.form.copyright):"",onBlur:d=>t.mandatory==1?e.validateEmptyInput("copyright",e.form.copyright):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),v(b,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[n(i(e.errors.copyright),1)]),_:1})):u("",!0)]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="enable_notification"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pt-3",key:_},[p("div",dt,[o(B,{value:e.form.enable_notification,"onUpdate:value":l[15]||(l[15]=d=>e.form.enable_notification=d),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"]),o(I,{tooltiptext:"absolute z-50 bottom-full mb-2 -ms-2.5"},{content:r(()=>[o(w,{name:"info",w:"20",h:"20",class:"-ms-1 transition-all duration-300 text-primary-500"})]),tooltips:r(()=>[_t,pt]),_:1})])]))),128)),(a(!0),s(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="enable_notification"&&t.enable===1&&t.is_delete===0),(t,_)=>(a(),s("div",{class:"px-4 pb-3",key:_},[o(m,{class:"ms-2 text-xs",textColor:"text-secondary-400"},{default:r(()=>[n(i(e.$t(t.label_name)),1)]),_:2},1024)]))),128))])):u("",!0),p("div",mt,[o(q,{onClick:l[16]||(l[16]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[n(i(e.$t("core__be_btn_cancel")),1)]),_:1}),o(q,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(a(),v($,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):u("",!0),e.success?(a(),v(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):u("",!0),e.success?(a(),v(m,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[n(i(e.$t("core__be_btn_saved")),1)]),_:1})):u("",!0),!e.loading&&!e.success?(a(),v(m,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[n(i(e.$t("core__be_btn_save")),1)]),_:1})):u("",!0)]),_:1})])]),p("div",ut,[(a(!0),s(y,null,h(e.settingColumn,t=>(a(),s("div",{key:t.id},[p("div",{onClick:_=>e.changeSection(t),class:X([e.title==t.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[o(m,{textColor:e.title==t.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:r(()=>[n(i(e.$t(t.label)),1)]),_:2},1032,["textColor"])],10,ft)]))),128))])])],32)])]),_:1}),o(D,{ref:"ps_loading_circle_dialog"},null,512),o(N,{ref:"ps_success_dialog"},null,512)]),_:1})],64)}var oo=we($e,[["render",ct]]);export{oo as default};
