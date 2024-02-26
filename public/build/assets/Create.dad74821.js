import{d as D,Z as T,i as v,H as z,B as k,o,c as l,b as r,w as u,a as i,q as _,t as n,h as U,F as C,s as I,g as m,f as h,r as s}from"./app.d57d51e9.js";import{P as j}from"./PsLayout.bc5965d6.js";import{P as q}from"./PsBreadcrumb2.761286c6.js";import{u as M}from"./Validators.cb85894a.js";import{P as N}from"./PsInput.b3485f1e.js";import{P as Z}from"./PsLabel.06b4363b.js";import{P as x}from"./PsButton.c9fc3d7e.js";import{P as A}from"./PsDangerDialog.1643aeb7.js";import{P as G}from"./PsCard.e47b5f14.js";import{P as J}from"./PsLoading.1f212adc.js";import{P as O}from"./PsIcon.1e42bf4c.js";import{P as Q}from"./PsLabelCaption.b0af0e56.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";const W=D({name:"Create",components:{Head:T,PsInput:N,PsLabel:Z,PsButton:x,PsLabelHeader6:A,PsCard:G,PsLoading:J,PsIcon:O,PsBreadcrumb2:q,PsLabelCaption:Q},layout:j,props:["errors","language","coreFieldFilterSettings"],setup(e){const a=v(!1),f=v(!1),g=v(),b=v(),{isEmpty:E}=M(),$=(d,c)=>{e.errors[d]=c?"":E(d,c),d=="key"&&(g.value.isError=!!Boolean(e.errors.key)),d=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let y=z({symbol:"",name:"",language_id:e.language.id});function P(){this.$inertia.post(route("language_string.store",e.language),y,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,f.value=!0,setTimeout(()=>{f.value=!1,window.location.reload()},2e3)},onError:()=>{a.value=!1,g.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:$,handleSubmit:P,loading:a,success:f,value:b,key:g,form:y}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("language_module"),url:route("language.index")},{label:k("language_string_module"),url:route("language_string.index",this.language.id)},{label:k("create_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("language_string.index",this.language.id))}}}),X={class:"rounded-xl"},Y={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},F={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"grid w-1/2 gap-6"},te={class:"text-primary-500"},ae={key:0,class:"text-red-800 font-medium ms-1"},oe={key:0,class:"text-red-800 font-medium ms-1"},re={class:"flex flex-row justify-end mb-2.5"},se={key:2,class:"transition-all duration-300"},ne={key:3,class:""};function le(e,a,f,g,b,E){const $=s("Head"),y=s("ps-breadcrumb-2"),P=s("ps-label-header-6"),d=s("ps-label"),c=s("ps-input"),w=s("ps-label-caption"),S=s("ps-button"),L=s("ps-loading"),H=s("ps-icon"),K=s("ps-card"),V=s("ps-layout");return o(),l(C,null,[r($,{title:e.$t("create_language_string")},null,8,["title"]),r(V,null,{default:u(()=>[r(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(K,{class:"w-full h-auto"},{default:u(()=>[i("div",X,[i("div",Y,[r(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[_(n(e.$t("create_language_string")),1)]),_:1})]),i("div",F,[i("form",{onSubmit:a[3]||(a[3]=U(t=>e.handleSubmit(),["prevent"]))},[i("div",ee,[i("div",null,[_(n(e.$t("core__be_selected_language"))+" : ",1),i("span",te,n(e.language.name),1)]),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="key"&&t.enable===1&&t.is_delete===0),(t,B)=>(o(),l("div",{key:B},[r(d,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),l("span",ae,"*")):m("",!0)]),_:2},1024),r(c,{ref_for:!0,ref:"key",type:"text",value:e.form.key,"onUpdate:value":a[0]||(a[0]=p=>e.form.key=p),placeholder:e.$t(t.placeholder),onKeyup:p=>t.mandatory==1?e.validateEmptyInput("key",e.form.key):"",onBlur:p=>t.mandatory==1?e.validateEmptyInput("key",e.form.key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.key),1)]),_:1})):m("",!0)]))),128)),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="value"&&t.enable===1&&t.is_delete===0),(t,B)=>(o(),l("div",{key:B},[r(d,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),l("span",oe,"*")):m("",!0)]),_:2},1024),r(c,{ref_for:!0,ref:"value",type:"text",value:e.form.value,"onUpdate:value":a[1]||(a[1]=p=>e.form.value=p),placeholder:e.$t(t.placeholder),onKeyup:p=>t.mandatory==1?e.validateEmptyInput("value",e.form.value):"",onBlur:p=>t.mandatory==1?e.validateEmptyInput("value",e.form.value):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.value),1)]),_:1})):m("",!0)]))),128)),i("div",re,[r(S,{onClick:a[2]||(a[2]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[_(n(e.$t("core__be_btn_cancel")),1)]),_:1}),r(S,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(o(),h(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):m("",!0),e.success?(o(),h(H,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):m("",!0),e.success?(o(),l("span",se,n(e.$t("core__be_btn_saved")),1)):m("",!0),!e.loading&&!e.success?(o(),l("span",ne,n(e.$t("core__be_btn_save")),1)):m("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var qe=R(W,[["render",le]]);export{qe as default};
