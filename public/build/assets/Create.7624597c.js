import{d as H,Z as T,H as E,i as B,y as z,B as D,o as a,c as n,b as r,w as l,a as i,q as u,t as m,h as N,F as h,s as g,g as b,f as k,m as A,u as U,r as d}from"./app.d57d51e9.js";import{P as O}from"./PsLayout.bc5965d6.js";import K from"./CheckBox.2843d0e8.js";import{P as q}from"./PsRadioValue.d4f130b1.js";import{D as R}from"./DatePicker.2eba1133.js";import{P as Z}from"./PsInput.b3485f1e.js";import{P as G}from"./PsLabel.06b4363b.js";import{P as J}from"./PsButton.c9fc3d7e.js";import{P as Q}from"./PsTextarea.2d2fbd18.js";import{P as W,d as X}from"./PsDangerDialog.1643aeb7.js";import{P as Y}from"./PsBreadcrumb2.761286c6.js";import{P as F}from"./PsDropdown.0c78da9b.js";import{P as ee}from"./PsDropdownSelect.13d0e05f.js";import{P as oe}from"./PsCard.e47b5f14.js";import{P as te}from"./PsLabelCaption.b0af0e56.js";import{P as se}from"./PsVideoUpload.6a0c2bf0.js";import{P as ae}from"./PsLabelTitle3.78de00b9.js";import{P as re}from"./PsIcon.1e42bf4c.js";import{P as ne}from"./PsLoading.1f212adc.js";import{P as le}from"./PsCheckboxValue.373287f4.js";import{a as ie,P as de}from"./PsActionModal.7978c60e.js";import{P as me}from"./PsImageUpload.e74e4503.js";import{P as ue}from"./PsToggle.fddd5498.js";import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";import"./PsDraggable.aca5d6c1.js";import"./PsLabelHeader4.ad69cbcb.js";import"./toggle.6b621a64.js";const ce=H({name:"Edit",components:{Head:T,PsToggle:ue,CheckBox:K,DatePicker:R,PsInput:Z,PsRadioValue:q,PsLabel:G,PsButton:J,PsTextarea:Q,PsLabelHeader6:W,PsDropdown:F,PsDropdownSelect:ee,PsCard:oe,PsBreadcrumb2:Y,PsLabelCaption:te,PsImageUpload:me,PsIcon:re,PsLoading:ne,PsCheckboxValue:le,PsActionModal:ie,PsImageIconModal:de,PsDangerDialog:X,PsVideoUpload:se,PsLabelTitle3:ae},layout:O,props:["errors","coreFieldFilterSettings","modules","customizeHeaders","customizeDetails","permissions"],setup(e){let s=E({name:"",description:"",permissions:[],permissionObj:[]});const y=B(!1),P=B(!1);let c=z([]);for(let t=0;t<e.modules.length;t++)c[e.modules[t].id]=[];let w=B(!1);function $(t){s.permissions[t]=c[t].toString()}function S(){this.$inertia.get(route("vendor_role.index"))}function C(){for(let t=0;t<e.modules.length;t++)s.permissionObj[t]={key:e.modules[t].id,value:c[e.modules[t].id].toString()};console.log(s.permissionObj),this.$inertia.post(route("vendor_role.store"),s,{forceFormData:!0,onBefore:()=>{y.value=!0},onSuccess:()=>{y.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{y.value=!1}})}function f(){for(let t=0;t<e.modules.length;t++){for(let v=0;v<e.permissions.length;v++)w.value?c[e.modules[t].id][v]=e.permissions[v].id:c[e.modules[t].id]=[];s.permissions[e.modules[t].id]=c[e.modules[t].id].toString()}}function x(){s.can_access_admin_panel=!s.can_access_admin_panel}return{handleUserMultiSelect:$,handleAdminPanelAccess:x,handleSubmit:C,toogleSelectAll:f,form:s,booleanPermission:c,selectAll:w,handleCancel:S,loading:y,success:P}},computed:{breadcrumb(){return[{label:D("core__be_dashboard_label"),url:route("admin.index")},{label:D("vendor_role_module"),url:route("vendor_role.index")},{label:D("core__be_add_vendor_role"),color:"text-primary-500"}]}}}),fe={class:"rounded-xl"},_e={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},be={class:"px-4 pt-6 dark:bg-backgroundDark"},ve={class:"grid w-full sm:w-1/2 gap-6"},ye={key:0,class:"text-red-800 font-medium ms-1"},he={key:0,class:"text-red-800 font-medium ms-1"},Pe={class:"px-4 pb-6 flex flex-row justify-between items-center"},ge=u("Allow Modules"),ke={class:"flex flex-row items-center"},we=u("Select all "),$e={class:"flex flex-row items-center"},Se=["onUpdate:modelValue","onChange","id","value"],Ce={class:"flex flex-row justify-end mb-2.5"},xe={key:2,class:"transition-all duration-300"},Be={key:3,class:""};function De(e,s,y,P,c,w){const $=d("Head"),S=d("ps-breadcrumb-2"),C=d("ps-label-header-6"),f=d("ps-label"),x=d("ps-input"),t=d("ps-label-caption"),v=d("ps-textarea"),V=d("ps-button"),j=d("ps-loading"),I=d("ps-icon"),L=d("ps-card"),M=d("ps-layout");return a(),n(h,null,[r($,{title:e.$t("core__be_add_vendor_role")},null,8,["title"]),r(M,null,{default:l(()=>[r(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(L,{class:"w-full h-auto"},{default:l(()=>[i("div",fe,[i("div",_e,[r(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[u(m(e.$t("core__be_vendor_role_info")),1)]),_:1})]),i("div",be,[i("form",{onSubmit:s[5]||(s[5]=N((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[i("div",ve,[(a(!0),n(h,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,p)=>(a(),n("div",{key:p},[r(f,{class:"text-base"},{default:l(()=>[u(m(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(a(),n("span",ye,"*")):b("",!0)]),_:2},1024),r(x,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":s[0]||(s[0]=_=>e.form.name=_),placeholder:e.$t(o.placeholder),onKeyup:_=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:_=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(a(),k(t,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(m(e.errors.name),1)]),_:1})):b("",!0)]))),128)),(a(!0),n(h,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="description"&&o.enable===1&&o.is_delete===0),(o,p)=>(a(),n("div",{key:p},[r(f,{class:"text-base"},{default:l(()=>[u(m(e.$t(o.label_name))+" ",1),o.mandatory==1?(a(),n("span",he,"*")):b("",!0)]),_:2},1024),r(v,{rows:"4",value:e.form.description,"onUpdate:value":s[1]||(s[1]=_=>e.form.description=_),placeholder:e.$t(o.description)},null,8,["value","placeholder"]),o.mandatory==1?(a(),k(t,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(m(e.errors.description),1)]),_:1})):b("",!0)]))),128)),i("div",Pe,[r(f,{class:"text-base font-medium"},{default:l(()=>[ge]),_:1}),i("div",ke,[A(i("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.selectAll=o),onChange:s[3]||(s[3]=o=>e.toogleSelectAll()),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,544),[[U,e.selectAll]]),r(f,{class:"text-base font-light"},{default:l(()=>[we]),_:1})])]),i("div",null,[(a(!0),n(h,null,g(e.modules,o=>(a(),n("div",{class:"px-4 pb-5 flex flex-row justify-between items-center",key:o.id},[r(f,{class:"text-sm"},{default:l(()=>[u(m(e.$t(o.lang_key)),1)]),_:2},1024),i("div",$e,[(a(!0),n(h,null,g(e.permissions,p=>(a(),n("div",{class:"flex flex-row me-2 items-center",key:p.id},[A(i("input",{"onUpdate:modelValue":_=>e.booleanPermission[o.id]=_,onChange:_=>e.handleUserMultiSelect(o.id),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:p.id,value:p.id},null,40,Se),[[U,e.booleanPermission[o.id]]]),r(f,{class:"text-base font-light",for:p.id},{default:l(()=>[u(m(p.title),1)]),_:2},1032,["for"])]))),128))])]))),128))]),i("div",Ce,[r(V,{onClick:s[4]||(s[4]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[u(m(e.$t("core__be_btn_cancel")),1)]),_:1}),r(V,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(a(),k(j,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(a(),k(I,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(a(),n("span",xe,m(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(a(),n("span",Be,m(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Po=pe(ce,[["render",De]]);export{Po as default};
