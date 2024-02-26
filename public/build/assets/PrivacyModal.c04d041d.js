import{d as g,i as A,o as y,f as x,w as e,a as p,b as a,q as m,t as d,h as $,r as n}from"./app.d57d51e9.js";import k from"./PsModal.15d0cd4c.js";import P from"./PsLabelTitle.6c83e503.js";import S from"./PsLabel.b794d5bb.js";import M from"./PsButton.38caef2b.js";import{u as w}from"./AboutUsStore.94eb9030.js";import{P as C}from"./PsValueStore.97ab20f6.js";import U from"./PsIcon.9f1bf232.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";const L=g({name:"PrivacyModel",components:{PsModal:k,PsLabel:S,PsLabelTitle:P,PsButton:M,PsIcon:U},setup(){const o=A(),t=w(),f=C().getLoginUserId();t.loadAboutUs(f);let l;function u(s){o.value.toggle(!0),l=s}function c(s){l(s),i()}function i(){o.value.toggle(!1)}return{psmodal:o,openModal:u,closeModal:i,aboutUsStore:t,userAction:c}}}),B={class:"flex justify-between"},T={class:"h-52 overflow-y-auto"},j={class:"flex justify-end"};function I(o,t,v,f,l,u){const c=n("ps-label-title"),i=n("ps-icon"),s=n("ps-label"),_=n("ps-button"),h=n("ps-modal");return y(),x(h,{ref:"psmodal",maxWidth:"650px",isClickOut:!1,class:"z-50",theme:"p-6 rounded-md w-auto overflow-hidden"},{title:e(()=>[p("div",B,[a(c,null,{default:e(()=>[m(d(o.$t("privact_modal__privacy_policy")),1)]),_:1}),a(i,{name:"close",class:"text-feAchromatic-400 hover:cursor-pointer",onClick:t[0]||(t[0]=$(r=>o.psmodal.toggle(!1),["prevent"]))})])]),body:e(()=>{var r,b;return[p("div",T,[a(s,{innerHTML:(b=(r=o.aboutUsStore.aboutus)==null?void 0:r.data)==null?void 0:b.privacypolicy},null,8,["innerHTML"])])]}),footer:e(()=>[p("div",j,[a(_,{onClick:t[1]||(t[1]=r=>o.userAction(!0))},{default:e(()=>[m(d(o.$t("privact_modal__accept")),1)]),_:1}),a(_,{onClick:t[2]||(t[2]=r=>o.userAction(!1)),class:"ms-4",textSize:"text-xxs lg:text-sm",colors:"bg-feAchromatic-50 dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",border:"border border-feAchromatic-300 dark:border-feAchromatic-500"},{default:e(()=>[m(d(o.$t("privact_modal__reject")),1)]),_:1})])]),_:1},512)}var Y=V(L,[["render",I]]);export{Y as default};
