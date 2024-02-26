import{d as H,p as j,Z as B,i as l,y as I,B as n,O as k,o as f,c as A,b as r,w as a,f as b,q as C,t as F,g as p,F as D,r as s}from"./app.d57d51e9.js";import{P as R}from"./PsLayout.bc5965d6.js";import{P as N}from"./PsLabel.06b4363b.js";import{P as T}from"./PsButton.c9fc3d7e.js";import{P as V}from"./PsTable2.1a00358d.js";import{P as z}from"./PsAlert.0ab579ab.js";import{P as E}from"./PsBreadcrumb2.761286c6.js";import{d as L}from"./PsDangerDialog.1643aeb7.js";import{P as M}from"./PsToggle.fddd5498.js";import{P as U}from"./PsIcon.1e42bf4c.js";import{P as q}from"./PsCsvModal.f178126e.js";import{P as Z}from"./PsBannerIcon.0cb3925c.js";import{P as G}from"./PsIconButton.4f6354e0.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsInput.b3485f1e.js";import"./PsLabelCaption.b0af0e56.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./toggle.6b621a64.js";import"./PsLabelHeader4.ad69cbcb.js";import"./PsLink1.496ff966.js";import"./PsDraggable.aca5d6c1.js";const K=H({name:"Index",components:{Link:j,Head:B,PsLabel:N,PsButton:T,PsTable2:V,PsAlert:z,PsBreadcrumb2:E,PsDangerDialog:L,PsToggle:M,PsIcon:U,PsCsvModal:q,PsBannerIcon:Z,PsIconButton:G},layout:R,props:{can:Object,status:Object,offlinePayments:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const i=l();let c=l(!1);const O=l(!1),$=l(!1);let y=e.search?l(e.search):l(""),_=e.sort_field?l(e.sort_field):l(""),h=e.sort_order?l(e.sort_order):l("desc");function v(o){_.value=o.field,h.value=o.sort_order,d()}function m(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",d()}function u(o){y.value=o,d(1)}function w(o){d(1,o)}function d(o=null,g=null){k.get(route("offline_payment_setting.index"),{sort_field:_.value,sort_order:h.value,page:o!=null?o:e.offlinePayments.meta.current_page,row:g!=null?g:e.offlinePayments.meta.per_page,search:y.value},{preserveScroll:!0,preserveState:!0})}const P=I([{label:n("payment__offline_pmt_title"),key:"title",hidden:!1},{label:n("payment__offline_pmt_desc"),key:"description",hidden:!1},{label:n("payment__offline_pmt_status"),key:"status",hidden:!1}]),S=[{label:n("action_label"),field:"action",type:"Action"},{label:n("payment__offline_pmt_title"),field:"title",type:"String",action:"Action"},{label:n("payment__offline_pmt_desc"),field:"description",type:"String",action:"Action",sort:!1},{label:n("core__publish_label"),field:"status",type:"String",action:"Action"}];function t(o){i.value.openModal(n("core__be_delete_offline_pmt"),n("core__be_delete_offline_payment_info"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{k.delete(route("offline_payment_setting.destroy",o),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}return{columns:S,ps_danger_dialog:i,confirmDeleteClicked:t,colFilterOptions:P,showFilter:O,clearFilter:$,visible:c,handleSorting:v,handleSearchingSorting:d,handleClearFilter:m,handleRow:w,handleSearching:u}},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("offline_payment_setting_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("offline_payment_setting.create"))},handleEdit(e){this.$inertia.get(route("offline_payment_setting.edit",e))},handlePublish(e,i){i&&this.$inertia.put(route("offline_payment_setting.statusChange",e))},FilterOptionshandle(e){k.put(route("offline_payment_setting.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.offlinePayments.per_page,search:this.search.value,current_page:this.offlinePayments.current_page},{preserveScroll:!0,preserveState:!0})}}}),Q={key:0,class:"flex flex-row"};function W(e,i,c,O,$,y){const _=s("Head"),h=s("ps-breadcrumb-2"),v=s("ps-banner-icon"),m=s("ps-icon"),u=s("ps-button"),w=s("ps-toggle"),d=s("ps-danger-dialog"),P=s("ps-table2"),S=s("ps-layout");return f(),A(D,null,[r(_,{title:e.$t("offline_payment_setting_module")},null,8,["title"]),r(S,null,{default:a(()=>[r(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(f(),b(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:a(()=>[C(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),r(P,{row:e.row,search:e.search,object:this.offlinePayments,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_searches"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{button:a(()=>[e.can.createItem?(f(),b(u,{key:0,onClick:i[0]||(i[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(m,{name:"plus",class:"me-1 font-semibold"}),C(" "+F(e.$t("payment__add_offline_payment")),1)]),_:1})):p("",!0)]),responsive_button:a(()=>[e.can.createItem?(f(),b(u,{key:0,onClick:i[1]||(i[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(m,{name:"plus",class:"me-1 font-semibold"}),C(" "+F(e.$t("payment__add_offline_payment")),1)]),_:1})):p("",!0)]),tableRow:a(t=>[t.field=="status"?(f(),b(w,{key:0,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1,onClick:o=>e.handlePublish(t.row.core_keys_id,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])):p("",!0)]),tableActionRow:a(t=>[t.field=="action"?(f(),A("div",Q,[r(u,{disabled:!t.row.authorizations.update,onClick:o=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[r(m,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(u,{disabled:!t.row.authorizations.delete,onClick:o=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[r(m,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(d,{ref:"ps_danger_dialog"},null,512)])):p("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Re=J(K,[["render",W]]);export{Re as default};
