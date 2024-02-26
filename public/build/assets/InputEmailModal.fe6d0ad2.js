import{d as b,i as v,o as y,f as k,w as l,a as f,b as r,q as m,t as p,Y as g,g as C,r as d}from"./app.d57d51e9.js";import $ from"./PsModal.15d0cd4c.js";import w from"./PsLabel.b794d5bb.js";import E from"./PsButton.38caef2b.js";import z from"./PsInput.a60e3eb2.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";const B=b({name:"InputEmailModal",components:{PsModal:$,PsLabel:w,PsButton:E,PsInput:z},setup(){const e=v(),t=v(),a=v(!1);let u,c;function x(o){/^([a-zA-Z0-9.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(o.target.value)?a.value=!1:a.value=!0}function n(o){e.value.toggle(!1),o=="yes"?t.value==""?a.value=!1:u(t.value):c()}async function _(o,i){u=o,c=i,e.value.toggle(!0)}return{psmodal:e,openModal:_,userEmail:t,validateEmail:x,validationEmail:a,actionClicked:n}}}),P={class:"flex justify-between container w-full px-4"},A={class:"flex flex-col w-full"},M=f("span",{style:{"font-size":"17px",color:"red"}},"*",-1),N={class:"flex flex-row justify-between"};function S(e,t,a,u,c,x){const n=d("ps-label"),_=d("ps-input"),o=d("ps-button"),i=d("ps-modal");return y(),k(i,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50",line:"hidden"},{body:l(()=>[f("div",P,[f("div",A,[r(n,{class:"mt-4 mx-5"},{default:l(()=>[m(p(e.$t("register__email"))+" ",1),M]),_:1}),r(_,{class:"mt-2 mx-5 mb-4",type:"email","v-bindplaceholder":e.$t("password_update_modal__password"),value:e.userEmail,"onUpdate:value":t[0]||(t[0]=s=>e.userEmail=s),onKeyup:t[1]||(t[1]=g(s=>e.actionClicked("yes"),["enter"])),onBlur:e.validateEmail},null,8,["v-bindplaceholder","value","onBlur"]),e.validationEmail?(y(),k(n,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-fePrimary-500"},{default:l(()=>[m(p(e.$t("login__email_required_error")),1)]),_:1})):C("",!0)])])]),footer:l(()=>[f("div",N,[r(o,{onClick:t[2]||(t[2]=s=>e.actionClicked("no")),textSize:"text-xxs lg:text-sm",class:"py-3",theme:"bg-feSecondary-50 dark:bg-feAchromatic-500 text-fePrimary-500 dark:text-feAchromatic-50"},{default:l(()=>[m(p(e.$t("profile__cancel")),1)]),_:1}),r(o,{onClick:t[3]||(t[3]=s=>e.actionClicked("yes")),textSize:"text-xxs lg:text-sm",class:"py-3"},{default:l(()=>[m(p(e.$t("profile__confirm")),1)]),_:1})])]),_:1},512)}var O=h(B,[["render",S]]);export{O as default};
