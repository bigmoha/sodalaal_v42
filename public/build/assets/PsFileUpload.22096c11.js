import p from"./PsIcon.9f1bf232.js";import c from"./PsLabel.b794d5bb.js";import i from"./PsButton.38caef2b.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{d as m,o as _,c as b,b as o,w as r,q as t,t as s,r as d}from"./app.d57d51e9.js";const u=m({name:"PsFileUpload",components:{PsButton:i,PsIcon:p,PsLabel:c},props:{title:{type:String,default:""},placeholder:{type:String,default:"core_fe__or_drop_files"},disabled:{type:Boolean,default:!1},disabledTheme:{type:String,default:"text-secondary-300 dark:text-secondary-700 placeholder-secondary-300 dark:placeholder-secondary-700"},defaultTheme:{type:String,default:"text-secondary-800 dark:text-secondary-100 placeholder-secondary-800 dark:placeholder-secondary-100"}}}),y={class:"border-dashed border-2 border-secondary-200 dark:border-secondary-800 rounded p-2 flex gap-2 items-center"};function h(e,k,g,$,w,C){const l=d("ps-icon"),a=d("ps-label"),n=d("ps-button");return _(),b("div",y,[o(n,{disabled:e.disabled,colors:"bg-transparent",border:"border border-secondary-300 dark:border-secondary-800",shadow:"shadow",rounded:"rounded"},{default:r(()=>[o(l,{name:"fileUpload2",w:"24",h:"24"}),o(a,{class:"ms-2"},{default:r(()=>[t(s(e.$t("core_fe__upload_file")),1)]),_:1})]),_:1},8,["disabled"]),o(a,{textColor:e.disabled?e.disabledTheme:e.defaultTheme},{default:r(()=>[t(s(e.title==""?e.$t(e.placeholder):e.title),1)]),_:1},8,["textColor"])])}var x=f(u,[["render",h]]);export{x as default};
