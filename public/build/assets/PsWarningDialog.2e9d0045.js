import B from"./PsModal.15d0cd4c.js";import y from"./PsLabel.b794d5bb.js";import P from"./PsButton.38caef2b.js";import{d as $,i as s,B as c,o as W,f as z,w as n,a as k,b as l,q as d,t as m,r as f}from"./app.d57d51e9.js";import A from"./PsIcon.9f1bf232.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";const M=$({name:"PsWarningDialog",components:{PsModal:B,PsLabel:y,PsButton:P,PsIcon:A},setup(){const e=s(),o=s(c("ps_warning_dialog__warning")),p=s(c("ps_warning_dialog__warning_message")),u=s(c("ps_confirm_dialog__yes")),_=s(c("ps_confirm_dialog__no"));let g,a;function i(t){t=="yes"?g():a(),e.value.toggle(!1)}function r(t,v,b,h,C,w){t!=null&&t.trim()!=""&&(o.value=t),v!=null&&v.trim()!=""&&(p.value=v),h!=null&&h.trim()!=""&&(_.value=h),b!=null&&b.trim()!=""&&(u.value=b),e.value.toggle(!0),g=C,a=w}function x(){e.value.toggle(!1)}return{psmodal:e,openModal:r,closeModal:x,title:o,actionClicked:i,okButton:u,cancelButton:_,message:p}}}),N={class:"flex flex-auto items-center"},V={class:"w-full text-start mt-2"},I={class:"flex flex-row justify-end"};function j(e,o,p,u,_,g){const a=f("ps-icon"),i=f("ps-label"),r=f("ps-button"),x=f("ps-modal");return W(),z(x,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-20"},{title:n(()=>[k("div",N,[l(a,{name:"alert-triangle",class:"text-feWarning-500 me-2.5"}),l(i,{class:"text-lg font-semibold"},{default:n(()=>[d(m(e.title),1)]),_:1})])]),body:n(()=>[k("div",V,[l(i,{class:"font-light text-sm lg:text-base"},{default:n(()=>[d(m(e.message),1)]),_:1})])]),footer:n(()=>[k("div",I,[l(r,{rounded:"rounded",onClick:o[0]||(o[0]=t=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-2",border:"border border-feAchromatic-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-feAchromatic-100"},{default:n(()=>[d(m(e.cancelButton),1)]),_:1}),l(r,{rounded:"rounded",onClick:o[1]||(o[1]=t=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-feInfo-500 text-feAchromatic-50"},{default:n(()=>[d(m(e.okButton),1)]),_:1})])]),_:1},512)}var J=D(M,[["render",j]]);export{J as default};