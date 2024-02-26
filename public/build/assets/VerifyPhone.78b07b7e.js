import{f as c}from"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import P from"./PsLabel.b794d5bb.js";import k from"./PsLabelTitle.6c83e503.js";import w from"./PsLabelCaption.1fabc18a.js";import x from"./PsButton.38caef2b.js";import V from"./PsInput.a60e3eb2.js";import C from"./PsErrorDialog.01320524.js";import{i as v,j as U,B as d,c as M,b as i,w as p,O as N,a as g,q as r,r as l,o as B,t as I}from"./app.d57d51e9.js";import{P as h}from"./PsUtils.eb7a8002.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.15d0cd4c.js";import"./vue-neat-modal.d9ed1877.js";import"./PsLine.257bf9fc.js";const O={name:"VerifyPhone",components:{PsLabel:P,PsLabelTitle:k,PsButton:x,PsInput:V,PsLabelCaption:w,PsErrorDialog:C},props:["authUser","firebaseConfig"],setup(a){let n,s;const t=v(),u=v(""),b=JSON.parse(a.firebaseConfig);c.apps.length<1&&c.initializeApp(b),U(async()=>{window.recaptchaVerifier=new c.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:o=>{h.log("Callback"),h.log(o)},"expired-callback":()=>{h.log("expiry callback")}}),n=window.recaptchaVerifier;const e=n;s=await c.auth().signInWithPhoneNumber(a.authUser.user_phone,e).catch(o=>{t.value.openModal(d("phone_login__error_in_sign_in"),o==null?void 0:o.message)})});async function f(){const e=n;s=await c.auth().signInWithPhoneNumber(a.authUser.user_phone,e).catch(o=>{t.value.openModal(d("phone_login__error_in_sign_in"),o==null?void 0:o.message)})}async function m(){s!=null&&s.confirm(u.value).then(async e=>{e!=null&&e.user!=null&&e.user.uid!=null&&e.user.uid!=""&&(e.user,N.post(route("updateVerify"),{verify_type:"4",user_id:a.authUser.id}))}).catch(e=>{t.value.openModal(d("phone_login__error_in_sign_in"),e==null?void 0:e.message)})}return{clicked:m,ps_error_dialog:t,code:u,resendMessage:f}}},W={class:"text-center items-center justify-center flex flex-col w-full h-screen"},j=r(" Please verify your phone "),z=r("We have sent verification code to this phone : "),D={class:"text-fePrimary-500"},E=r(" submit"),R=r(" resend"),S=g("div",{id:"recaptcha-container"},null,-1),T=r(),q=g("br",null,null,-1);function A(a,n,s,t,u,b){const f=l("ps-label-title"),m=l("ps-label"),e=l("ps-input"),o=l("ps-button"),y=l("ps-error-dialog");return B(),M("div",W,[i(f,{class:"mb-4"},{default:p(()=>[j]),_:1}),i(m,null,{default:p(()=>{var _;return[z,g("span",D,I((_=s.authUser)==null?void 0:_.user_phone),1)]}),_:1}),i(e,{class:"my-1 w-60",value:t.code,"onUpdate:value":n[0]||(n[0]=_=>t.code=_)},null,8,["value"]),i(o,{class:"my-1",onClick:t.clicked},{default:p(()=>[E]),_:1},8,["onClick"]),i(o,{class:"my-1",onClick:t.resendMessage},{default:p(()=>[R]),_:1},8,["onClick"]),i(y,{ref:"ps_error_dialog"},null,512),S,T,q])}var se=L(O,[["render",A]]);export{se as default};
