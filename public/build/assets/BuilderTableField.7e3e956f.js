import{U as $}from"./UpdaterLayout.01ef0291.js";import{P as B}from"./PsButton.c9fc3d7e.js";import{P as L}from"./PsLoadingCircleDialog.c95deca1.js";import{P as S}from"./PsErrorDialog.a25aef9e.js";import{P as x}from"./PsSuccessDialog.a19b3bb4.js";import{P as C}from"./PsReloadDialog.79428d20.js";import{d as T,p as N,i as a,o as i,c as U,b as l,w as c,a as h,t as p,f as b,q as v,B as t,O as k,r as n}from"./app.d57d51e9.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.1e42bf4c.js";import"./Icons.ebbb778b.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLabel.06b4363b.js";import"./PsLoading.1f212adc.js";const F=T({components:{UpdaterLayout:$,Link:N,PsButton:B,PsLoadingCircleDialog:L,PsErrorDialog:S,PsSuccessDialog:x,PsReloadDialog:C},props:["status"],setup(e){const s=a(),_=a(),y=a(),u=a(),g=a(0),o=a(!1);console.log(e.status);function r(){u.value.openModal(t("ps_success_dialog__update_process_complete"),t(e.status.msg),"Done","admin.index",!1,"checkCircle")}function f(){k.post(route("NextLaravelUpdater::builderTableFieldSync"),{},{onBefore:()=>{s.value.openModal(t("core__be_sync_table_title"),t("core__be_table_field_syncing_note")),o.value=!0},onSuccess:d=>{console.log(e.status),o.value=!1,e.status.flag=="success"&&(g.value=1,s.value.closeModal(),o.value=!0,r())},onError:d=>{o.value=!1,s.value.closeModal(),_.value.openModal(t("ps_error_dialog__error"),t(d.message),"OK")}})}function m(){o.value=!0,k.get(route("admin.index"))}return{goToDashboard:m,handleFieldTableSync:f,ps_loading_circle_dialog:s,ps_error_dialog:_,isGoNext:g,ps_success_dialog:y,ps_reload_dialog:u,openSuccessDialog:r,isLoading:o}},mounted(){this.status.flag=="success"&&this.openSuccessDialog()},beforeUpdate(){}}),E={class:"paragraph text-center"},O={class:"buttons"};function V(e,s,_,y,u,g){const o=n("ps-button"),r=n("UpdaterLayout"),f=n("ps-loading-circle-dialog"),m=n("ps-error-dialog"),d=n("ps-success-dialog"),D=n("ps-reload-dialog");return i(),U("div",null,[l(r,{title:"sync_tables_and_fields"},{container:c(()=>[h("p",E,p(e.$t("sync_tables_and_fields_desc")),1),h("div",O,[e.isLoading?(i(),b(o,{key:0,disabled:!0,class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:c(()=>[v(p(e.$t("core__be_loading")),1)]),_:1})):e.isGoNext?(i(),b(o,{key:1,onClick:s[0]||(s[0]=P=>e.goToDashboard()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:c(()=>[v(p(e.$t("go_next")),1)]),_:1})):(i(),b(o,{key:2,onClick:s[1]||(s[1]=P=>e.handleFieldTableSync()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:c(()=>[v(p(e.$t("code_sync")),1)]),_:1}))])]),_:1}),l(f,{ref:"ps_loading_circle_dialog"},null,512),l(m,{ref:"ps_error_dialog"},null,512),l(d,{ref:"ps_success_dialog"},null,512),l(D,{ref:"ps_reload_dialog"},null,512)])}var Y=M(F,[["render",V]]);export{Y as default};