import{d as s,Z as n,B as e,o as l,c as u,b as o,w as c,F as d,r}from"./app.d57d51e9.js";import{P as _}from"./PsLayout.bc5965d6.js";import{P as b}from"./PsBreadcrumb2.761286c6.js";import{P as f}from"./PsDataTable.af01e774.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.1e42bf4c.js";import"./Icons.ebbb778b.js";import"./PsDropdown.0c78da9b.js";import"./PsDropdownSelect.13d0e05f.js";import"./PsLabel.06b4363b.js";import"./PsDangerDialog.1643aeb7.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./PsButton.c9fc3d7e.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsLoading.1f212adc.js";import"./PsInput.b3485f1e.js";import"./PsLabelCaption.b0af0e56.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsTableSearch.3fb07b86.js";import"./moment.9709ab41.js";import"./ps_constants.115f3686.js";const P=s({name:"Index",components:{Head:n,PsBreadcrumb2:b,PsDataTable:f},layout:_,props:["favourites"],setup(){return{columns:[{label:"Product Name",field:"item_id",relation:"item",type:"String",relationField:"title"},{label:e("user_name_label"),field:"user_id",relation:"user",type:"String",relationField:"name"}]}},computed:{breadcrumb(){return[{label:e("core__be_dashboard_label"),url:route("admin.index")},{label:e("favourite_module"),color:"text-primary-500"}]}}});function h(t,v,g,x,$,w){const m=r("Head"),a=r("ps-breadcrumb-2"),i=r("ps-data-table"),p=r("ps-layout");return l(),u(d,null,[o(m,{title:t.$t("fvourite_module")},null,8,["title"]),o(p,null,{default:c(()=>[o(a,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(i,{rows:this.favourites,columns:t.columns,searchRightHide:!0},null,8,["rows","columns"])]),_:1})],64)}var mt=y(P,[["render",h]]);export{mt as default};
