import{d as N,Z as q,i as L,H as O,B as I,o as l,c as u,b as t,w as r,a as m,q as d,t as a,h as j,F as y,s as g,g as b,f as k,n as V,r as i}from"./app.d57d51e9.js";import{P as A}from"./PsLayout.bc5965d6.js";import{u as G}from"./Validators.cb85894a.js";import{P as Z}from"./PsInput.b3485f1e.js";import{P as J}from"./PsLabel.06b4363b.js";import{P as Q}from"./PsButton.c9fc3d7e.js";import{P as R}from"./PsTextarea.2d2fbd18.js";import{P as W}from"./PsLabelHeader4.ad69cbcb.js";import{P as X}from"./PsLabelCaption.b0af0e56.js";import{P as Y}from"./PsIcon.1e42bf4c.js";import{P as F}from"./PsLoading.1f212adc.js";import{P as x}from"./PsBreadcrumb2.761286c6.js";import{P as ee}from"./PsDropdown.0c78da9b.js";import{P as oe}from"./PsDropdownSelect.13d0e05f.js";import{P as te}from"./PsCheckboxValue.373287f4.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.1643aeb7.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";const re=N({name:"Create",components:{Head:q,PsInput:Z,PsLabel:J,PsButton:Q,PsTextarea:R,PsLabelHeader4:W,PsLabelCaption:X,PsIcon:Y,PsLoading:F,PsBreadcrumb2:x,PsDropdown:ee,PsDropdownSelect:oe,PsCheckboxValue:te},layout:A,props:["errors","sub_menu_groups","coreFieldFilterSettings","modules","icons"],setup(e){const s=L(!1),h=L(!1);let w=O({module_name:"",module_desc:"",module_lang_key:"",ordering:"",core_sub_menu_group_id:"",is_show_on_menu:!0,module_id:""});const{isEmpty:E,minLength:S}=G(),C=(n,_)=>{e.errors[n]=_?S(n,_,3):E(n,_)},P={module_name:"Menu Name",core_sub_menu_group_id:"Sub Menu Group Id",module_desc:"Menu Description",module_lang_key:"Menu Language Key",module_id:"Module"},B=(n,_)=>{const $=P[n];_?e.errors[n]="":e.errors[n]=`The ${$} field is required`},p=n=>{let _=n.keyCode?n.keyCode:n.which;(_<48||_>57)&&n.preventDefault()};function v(){this.$inertia.post(route("menu.store"),w,{forceFormData:!0,onBefore:()=>{s.value=!0},onSuccess:()=>{s.value=!1,h.value=!0,setTimeout(()=>{h.value=!1},2e3)},onError:()=>{s.value=!1}})}return{validateModuleNameInput:C,validateEmptyInput:B,onlyNumber:p,form:w,handleSubmit:v,loading:s,success:h}},computed:{breadcrumb(){return[{label:I("core__be_dashboard_label"),url:route("admin.index")},{label:I("menu_module"),url:route("menu.index")},{label:I("core_add_menu"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu.index"))}}}),le={class:"rounded-lg"},ne={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},de={class:"grid w-1/2 gap-6"},ue={key:0,class:"text-red-800 font-medium ms-1"},me=m("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ie={class:"rounded-md shadow-xs w-56"},pe={class:"pt-2 z-30"},_e=["onClick"],fe=m("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be={class:"rounded-md shadow-xs w-56"},ce={class:"pt-2 z-30"},ye=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ke=d("Ordering"),he=d("Status"),$e={class:"mb-2.5 flex flex-row justify-end"},we={key:2,class:"transition-all duration-300"},Ce={key:3,class:""};function Pe(e,s,h,w,E,S){const C=i("Head"),P=i("ps-breadcrumb-2"),B=i("ps-label-header-6"),p=i("ps-label"),v=i("ps-input"),n=i("ps-label-caption"),_=i("ps-dropdown-select"),$=i("ps-dropdown"),D=i("ps-textarea"),M=i("ps-checkbox-value"),K=i("ps-button"),z=i("ps-loading"),H=i("ps-icon"),T=i("ps-card"),U=i("ps-layout");return l(),u(y,null,[t(C,{title:e.$t("core_add_menu")},null,8,["title"]),t(U,null,{default:r(()=>[t(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(T,{class:"w-full h-auto"},{default:r(()=>[m("div",le,[m("div",ne,[t(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[d(a(e.$t("core_menu_onfo")),1)]),_:1})]),m("div",ae,[m("form",{onSubmit:s[10]||(s[10]=j(o=>e.handleSubmit(),["prevent"]))},[m("div",de,[(l(!0),u(y,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_name"&&o.enable===1&&o.is_delete===0),(o,c)=>(l(),u("div",{key:c},[t(p,{class:"text-base"},{default:r(()=>[d(a(e.$t(o.label_name))+" ",1),o.mandatory==1?(l(),u("span",ue,"*")):b("",!0)]),_:2},1024),t(v,{ref_for:!0,ref:"module_name",type:"text",value:e.form.module_name,"onUpdate:value":s[0]||(s[0]=f=>e.form.module_name=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(l(),k(n,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.module_name),1)]),_:1})):b("",!0)]))),128)),m("div",null,[t(p,{class:"text-base"},{default:r(()=>[d(a(e.$t("core__be_select_module")),1),me]),_:1}),t($,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[t(_,{placeholder:e.$t("core__be_select_module"),selectedValue:e.form.module_id==""?"":e.modules.filter(o=>o.id==e.form.module_id)[0].title,onChange:s[1]||(s[1]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:s[2]||(s[2]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[m("div",ie,[m("div",pe,[(l(!0),u(y,null,g(e.modules,o=>(l(),u("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[t(p,{class:V(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:r(()=>[d(a(o.title),1)]),_:2},1032,["class"])],8,_e))),128))])])]),_:1}),t(n,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.module_id),1)]),_:1})]),m("div",null,[t(p,{class:"text-base"},{default:r(()=>[d(a(e.$t("core__be_select_sub_menu")),1),fe]),_:1}),t($,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[t(_,{placeholder:e.$t("core__be_select_sub_menu"),selectedValue:e.form.core_sub_menu_group_id==""?"":e.sub_menu_groups.filter(o=>o.id==e.form.core_sub_menu_group_id)[0].sub_menu_desc,onChange:s[3]||(s[3]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)),onBlur:s[4]||(s[4]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[m("div",be,[m("div",ce,[(l(!0),u(y,null,g(e.sub_menu_groups,o=>(l(),u("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.core_sub_menu_group_id=o.id,e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)]},[t(p,{class:V(["ms-2",o.id==e.form.core_sub_menu_group_id?" font-bold":""])},{default:r(()=>[d(a(o.sub_menu_desc),1)]),_:2},1032,["class"])],8,ye))),128))])])]),_:1}),t(n,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.core_sub_menu_group_id),1)]),_:1})]),(l(!0),u(y,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_desc"&&o.enable===1&&o.is_delete===0),(o,c)=>(l(),u("div",{key:c},[t(p,{class:"text-base"},{default:r(()=>[d(a(e.$t(o.label_name))+" ",1),o.mandatory==1?(l(),u("span",ve,"*")):b("",!0)]),_:2},1024),t(D,{rows:"4",value:e.form.module_desc,"onUpdate:value":s[5]||(s[5]=f=>e.form.module_desc=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(l(),k(n,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.module_desc),1)]),_:1})):b("",!0)]))),128)),(l(!0),u(y,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_lang_key"&&o.enable===1&&o.is_delete===0),(o,c)=>(l(),u("div",{key:c},[t(p,{class:"text-base"},{default:r(()=>[d(a(e.$t(o.label_name))+" ",1),o.mandatory==1?(l(),u("span",ge,"*")):b("",!0)]),_:2},1024),t(v,{ref_for:!0,ref:"module_lang_key",type:"text",value:e.form.module_lang_key,"onUpdate:value":s[6]||(s[6]=f=>e.form.module_lang_key=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(l(),k(n,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.module_lang_key),1)]),_:1})):b("",!0)]))),128)),m("div",null,[t(p,{class:"text-base mb-1"},{default:r(()=>[ke]),_:1}),t(v,{type:"text",value:e.form.ordering,"onUpdate:value":s[7]||(s[7]=o=>e.form.ordering=o),placeholder:"Ordering",onKeypress:e.onlyNumber},null,8,["value","onKeypress"]),t(n,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[d(a(e.errors.ordering),1)]),_:1})]),m("div",null,[t(p,{class:"text-base"},{default:r(()=>[he]),_:1}),t(M,{value:e.form.is_show_on_menu,"onUpdate:value":s[8]||(s[8]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:"Publish"},null,8,["value"])]),m("div",$e,[t(K,{onClick:s[9]||(s[9]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[d(a(e.$t("core__be_btn_cancel")),1)]),_:1}),t(K,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(l(),k(z,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(l(),k(H,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(l(),u("span",we,a(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(l(),u("span",Ce,a(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var lo=se(re,[["render",Pe]]);export{lo as default};