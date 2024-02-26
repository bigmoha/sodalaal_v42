import{d as O,Z as j,i as r,B as l,C as A,O as b,o as s,c as P,b as n,w as o,f as m,q as p,t as _,g as f,F as H,r as d}from"./app.d57d51e9.js";import{P as L}from"./PsLayout.bc5965d6.js";import{P as B}from"./PsLabel.06b4363b.js";import{P as D}from"./PsButton.c9fc3d7e.js";import{P as R}from"./PsTable2.1a00358d.js";import{P as T}from"./PsAlert.0ab579ab.js";import{P as I}from"./PsBreadcrumb2.761286c6.js";import{d as N}from"./PsDangerDialog.1643aeb7.js";import{P as z}from"./PsToggle.fddd5498.js";import{P as E}from"./PsIcon.1e42bf4c.js";import{P as V}from"./PsBannerIcon.0cb3925c.js";import{P as q}from"./PsIconButton.4f6354e0.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsInput.b3485f1e.js";import"./PsLabelCaption.b0af0e56.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./toggle.6b621a64.js";const M=O({name:"Index",components:{Head:j,PsLabel:B,PsButton:D,PsTable2:R,PsAlert:T,PsBreadcrumb2:I,PsDangerDialog:N,PsToggle:z,PsIcon:E,PsBannerIcon:V,PsIconButton:q},layout:L,props:{status:Object,frontend_languages:Object,checkPermission:Object,showLanguageCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const u=r();let c=r(!1),v=e.search?r(e.search):r(""),w=e.sort_field?r(e.sort_field):r(""),y=e.sort_order?r(e.sort_order):r("desc");const k=r(),C=r();function S(t){u.value.openModal(l("core__be_delete_felanguage"),l("core__be_delete_felanguage_info"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{b.delete(route("fe_language.destroy",t),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}function g(t){w.value=t.field,y.value=t.sort_order,h()}function a(t){v.value=t,h(1)}function $(t){h(1,t)}function h(t=null,i=null){b.get(route("fe_language.index"),{sort_field:w.value,sort_order:y.value,page:t!=null?t:e.frontend_languages.meta.current_page,row:i!=null?i:e.frontend_languages.meta.per_page,search:v.value},{preserveScroll:!0,preserveState:!0})}function F(){b.post(route("fe_language.generateall"),{onSuccess:()=>{window.location.reload()}})}return{handleGenetate:F,columns:C,ps_danger_dialog:u,confirmDeleteClicked:S,colFilterOptions:k,handleSorting:g,handleSearching:a,handleRow:$,visible:c}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("fe_language_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("fe_language.create"))},handleEdit(e){this.$inertia.get(route("fe_language.edit",e))},handlePublish(e){this.$inertia.put(route("fe_language.statusChange",e.id),"",{onSuccess:()=>{A(e.symbol),setTimeout(()=>{window.location.reload()},1e3)}})},handleLanguageString(e){this.$inertia.get(route("fe_language_string.index",e))},FilterOptionshandle(e){b.post(route("fe_language.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.frontend_languages.per_page,search:this.search.value,current_page:this.frontend_languages.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key).toLowerCase(),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),U={key:0,class:"flex flex-row"},Z={key:0,class:""};function J(e,u,c,v,w,y){const k=d("Head"),C=d("ps-breadcrumb-2"),S=d("ps-banner-icon"),g=d("ps-icon"),a=d("ps-button"),$=d("ps-danger-dialog"),h=d("ps-table2"),F=d("ps-layout");return s(),P(H,null,[n(k,{title:e.$t("language_module")},null,8,["title"]),n(F,null,{default:o(()=>[n(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(s(),m(S,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[p(_(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):f("",!0),n(h,{row:e.row,search:e.search,object:e.frontend_languages,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:o(()=>[e.can.createLanguage?(s(),m(a,{key:0,onClick:u[0]||(u[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[n(g,{name:"plus",class:"me-1 font-semibold"}),p(" "+_(e.$t("core__be_add_frontend_language")),1)]),_:1})):f("",!0)]),responsive_button:o(()=>[e.can.createLanguage?(s(),m(a,{key:0,onClick:u[1]||(u[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[n(g,{name:"plus",class:"me-1 font-semibold"}),p(" "+_(e.$t("core__be_add_frontend_language")),1)]),_:1})):f("",!0)]),tableActionRow:o(t=>[t.field=="action"?(s(),P("div",U,[n(a,{disabled:!t.row.authorizations.update,onClick:i=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[n(g,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(a,{disabled:!t.row.authorizations.delete,onClick:i=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[n(g,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n($,{ref:"ps_danger_dialog"},null,512)])):f("",!0)]),tableRow:o(t=>[t.field=="status"?(s(),P("div",Z,[t.row.status==1?(s(),m(a,{key:0,disabled:!t.row.authorizations.update,onClick:i=>e.handlePublish(t.row),class:"me-4",colors:"bg-green-500 text-white",rounded:"rounded-md",padding:"px-3 py-2",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[p(_(e.$t("btn_active")),1)]),_:2},1032,["disabled","onClick"])):(s(),m(a,{key:1,disabled:!t.row.authorizations.update,onClick:i=>e.handlePublish(t.row),colors:"bg-red-500 text-white",padding:"px-3 py-2",rounded:"rounded-md",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[p(_(e.$t("btn_inactive")),1)]),_:2},1032,["disabled","onClick"]))])):f("",!0),t.field=="lang_string"?(s(),m(a,{key:1,onClick:i=>e.handleLanguageString(t.row.id),class:"text-white bg-primary-700 text-lg",padding:"p-1",rounded:"rounded"},{default:o(()=>[n(g,{name:"language",w:"16",h:"16"})]),_:2},1032,["onClick"])):f("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Oe=G(M,[["render",J]]);export{Oe as default};
