import{P as H}from"./PsLayout.bc5965d6.js";import{d as R,Z as V,i as o,B as s,O as B,o as n,c as m,b as i,w as _,a as z,f as k,q as F,t as P,g as d,F as I,r as l}from"./app.d57d51e9.js";import{P as N}from"./PsButton.c9fc3d7e.js";import{c as T,d as A}from"./PsDangerDialog.1643aeb7.js";import{P as U}from"./PsBannerIcon.0cb3925c.js";import{P as L}from"./PsBreadcrumb2.761286c6.js";import{P as E}from"./PsIcon.1e42bf4c.js";import{P as q}from"./PsDropdown.0c78da9b.js";import{P as Z}from"./PsDropdownSelect.13d0e05f.js";import{D as G}from"./PsTableSearch.3fb07b86.js";import{P as J}from"./PsIconButton.4f6354e0.js";import{P as K}from"./PsLabel.06b4363b.js";import{P as M}from"./PsLink1.496ff966.js";import{P as Q}from"./PsToggle.fddd5498.js";import{P as W}from"./PsTable2.1a00358d.js";import{P as X}from"./PsRating.47d364e7.js";import{D as Y}from"./DatePicker.2eba1133.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsInput.b3485f1e.js";import"./PsLabelCaption.b0af0e56.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./toggle.6b621a64.js";import"./moment.9709ab41.js";import"./main.f21f1fe5.js";import"./index.edd1d404.js";const ee=R({name:"Index",components:{Head:V,PsButton:N,PsTextButton:T,PsBannerIcon:U,PsBreadcrumb2:L,PsDangerDialog:A,PsIcon:E,PsDropdown:q,PsDropdownSelect:Z,Dropdown:G,PsIconButton:J,PsLabel:K,PsLink1:M,PsToggle:Q,PsTable2:W,PsRating:X,DatePicker:Y},layout:H,props:{status:Object,users:Object,roles:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedRole:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const C=o(!1),$=o(!1);let D=o(!1),f=e.search?o(e.search):o(""),g=e.sort_field?o(e.sort_field):o(""),b=e.sort_order?o(e.sort_order):o("desc"),u=e.selectedRole?o(e.selectedRole):o("");const v=o(),y=[{label:s("core__be_user_name"),field:"name",type:"String"},{label:s("core__be_user_email"),field:"email",type:"String",sort:!1},{label:s("core__be_user_phone"),field:"user_phone",type:"String",sort:!1},{label:s("core__be_role"),field:"role_id@@name",type:"String",sort:!1},{label:s("core__be_view_label"),field:"detail",type:"Action",sort:!1},{label:s("core__be_user_ban_lbl"),field:"is_banned",type:"Integer",sort:!1}];function p(r){this.$inertia.put(route("user.ban",r))}function h(r){g.value=r.field,b.value=r.sort_order,a()}function S(){u.value="all",a()}function w(r){u.value=r;let c=e.users.meta.current_page;a(c)}function O(r){f.value=r,a(1)}function t(r){a(1,r)}function a(r=null,c=null){B.get(route("banned_user.index"),{sort_field:g.value,sort_order:b.value,page:r!=null?r:e.users.meta.current_page,row:c!=null?c:e.users.meta.per_page,search:f.value,role_filter:u.value},{preserveScroll:!0,preserveState:!0})}function j(r){this.$inertia.get(route("banned_user.edit",r))}return{handleDetail:j,handleBanUser:p,showFilter:C,clearFilter:$,columns:y,colFilterOptions:v,visible:D,handleSorting:h,handleSearchingSorting:a,handleRolefilter:w,handleClearFilter:S,handleRow:t,handleSearching:O,selected_role:u}},methods:{handleEdit(e){this.$inertia.get(route("banned_user.edit",e))},handlePublish(e){this.$inertia.put(route("banned_user.statusChange",e))},FilterOptionshandle(e){B.post(route("banned_user.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.users.per_page,search:this.search.value,current_page:this.users.current_page},{preserveScroll:!0,preserveState:!0})}},created(){},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("banned_user_module"),color:"text-primary-500"}]}}}),te={class:""},re={key:0,class:"flex flex-row mb-2"},oe={key:1},ae={key:2,class:"mb-2"},le={key:3};function se(e,C,$,D,f,g){const b=l("Head"),u=l("ps-breadcrumb-2"),v=l("ps-banner-icon"),y=l("ps-rating"),p=l("ps-toggle"),h=l("ps-button"),S=l("ps-icon"),w=l("ps-table2"),O=l("ps-layout");return n(),m(I,null,[i(b,{title:e.$t("banned_user_module")},null,8,["title"]),i(O,null,{default:_(()=>[z("div",te,[i(u,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(n(),k(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",globalSearchPlaceholder:e.$t("core__be_search_user"),class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:_(()=>[F(P(e.status.msg),1)]),_:1},8,["visible","theme","iconName","globalSearchPlaceholder"])):d("",!0),i(w,{row:e.row,search:e.search,object:this.users,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{tableRow:_(t=>[t.field=="overall_rating"?(n(),m("div",re,[i(y,{grade:t.row.overall_rating,hasCounter:!0},null,8,["grade"]),F(" "+P(t.row.overall_rating),1)])):d("",!0),t.field=="status"?(n(),m("div",oe,[t.row.role_id!=1?(n(),k(p,{key:0,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1,onClick:a=>e.handlePublish(t.row.id),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):d("",!0),t.row.role_id==1?(n(),k(p,{key:1,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1},null,8,["disabled","selectedValue"])):d("",!0)])):d("",!0),t.field=="is_banned"?(n(),m("span",ae,[i(h,{disabled:!t.row.authorizations.update,onClick:a=>e.handleBanUser(t.row.id),border:"border border-green-500",rounded:"rounded",colors:"bg-white text-green-500",padding:"px-12 py-1",hover:"hover:bg-green-500 hover:text-white",focus:""},{default:_(()=>[F(P(e.$t("core__be_unban_lbl")),1)]),_:2},1032,["disabled","onClick"])])):d("",!0),t.field=="detail"?(n(),m("div",le,[i(h,{disabled:!t.row.authorizations.update,onClick:a=>e.handleDetail(t.row.id),rounded:"rounded-lg",class:"me-4",padding:"p-1.5"},{default:_(()=>[i(S,{name:"eye-on",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])):d("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])])]),_:1})],64)}var Ge=x(ee,[["render",se]]);export{Ge as default};
