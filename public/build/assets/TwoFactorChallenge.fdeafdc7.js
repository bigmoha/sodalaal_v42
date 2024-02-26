import{d as g,Z as b,c as n,b as o,w as l,F as c,r as s,o as a,a as d,h as f,n as j,q as i}from"./app.d57d51e9.js";import{J as k}from"./AuthenticationCard.f7855cde.js";import{J}from"./AuthenticationCardLogo.a2dd2d40.js";import{J as C}from"./Button.1d4b2ef4.js";import{J as V}from"./Input.1c4d716c.js";import{J as $}from"./Label.7fb3feb0.js";import{J as w}from"./ValidationErrors.1c753c5d.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const R=g({components:{Head:b,JetAuthenticationCard:k,JetAuthenticationCardLogo:J,JetButton:C,JetInput:V,JetLabel:$,JetValidationErrors:w},data(){return{recovery:!1,form:this.$inertia.form({code:"",recovery_code:""})}},methods:{toggleRecovery(){this.recovery^=!0,this.$nextTick(()=>{this.recovery?(this.$refs.recovery_code.focus(),this.form.code=""):(this.$refs.code.focus(),this.form.recovery_code="")})},submit(){this.form.post(this.route("two-factor.login"))}}}),U={class:"mb-4 text-sm text-gray-600"},F=i(" Please confirm access to your account by entering the authentication code provided by your authenticator application. "),H=i(" Please confirm access to your account by entering one of your emergency recovery codes. "),L={key:0},N={key:1},T={class:"flex items-center justify-end mt-4"},A=i(" Use a recovery code "),E=i(" Use an authentication code "),P=i(" Log in ");function q(e,t,z,I,M,S){const p=s("Head"),y=s("jet-authentication-card-logo"),_=s("jet-validation-errors"),m=s("jet-label"),u=s("jet-input"),v=s("jet-button"),h=s("jet-authentication-card");return a(),n(c,null,[o(p,{title:e.$t("two_factor_comfirmation")},null,8,["title"]),o(h,null,{logo:l(()=>[o(y)]),default:l(()=>[d("div",U,[e.recovery?(a(),n(c,{key:1},[H],64)):(a(),n(c,{key:0},[F],64))]),o(_,{class:"mb-4"}),d("form",{onSubmit:t[3]||(t[3]=f((...r)=>e.submit&&e.submit(...r),["prevent"]))},[e.recovery?(a(),n("div",N,[o(m,{for:"recovery_code",value:"Recovery Code"}),o(u,{ref:"recovery_code",id:"recovery_code",type:"text",class:"mt-1 block w-full",modelValue:e.form.recovery_code,"onUpdate:modelValue":t[1]||(t[1]=r=>e.form.recovery_code=r),autocomplete:"one-time-code"},null,8,["modelValue"])])):(a(),n("div",L,[o(m,{for:"code",value:"Code"}),o(u,{ref:"code",id:"code",type:"text",inputmode:"numeric",class:"mt-1 block w-full",modelValue:e.form.code,"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.code=r),autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),d("div",T,[d("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:t[2]||(t[2]=f((...r)=>e.toggleRecovery&&e.toggleRecovery(...r),["prevent"]))},[e.recovery?(a(),n(c,{key:1},[E],64)):(a(),n(c,{key:0},[A],64))]),o(v,{class:j(["ms-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:l(()=>[P]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}var X=B(R,[["render",q]]);export{X as default};
