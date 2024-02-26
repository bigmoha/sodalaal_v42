import{b as d}from"./toggle.6b621a64.js";import{i as s,I as f,O as i,o as g,c as u,b,r as c}from"./app.d57d51e9.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const h={props:{toggleOnTheme:{type:String,default:"bg-primary-500 border border-primary-500 justify-start text-white"},toggleOffTheme:{type:String,default:"bg-gray-200 border-gray-200 justify-end text-gray-700"},selectedValue:{type:Boolean},disabled:{type:Boolean,default:!1},onLabel:{type:String,default:""},offLabel:{type:String,default:""}},components:{Toggle:d},setup(l,{emit:a}){let e=s(!1);e.value=l.selectedValue;function t(){l.disabled||a("update:selectedValue",e.value)}return f(()=>l.selectedValue,()=>{e.value=l.selectedValue}),i.on("finish",n=>{e.value=l.selectedValue}),{toggleValue:e,changeFunction:t}}};function x(l,a,e,t,n,y){const o=c("Toggle");return g(),u("div",null,[b(o,{modelValue:t.toggleValue,"onUpdate:modelValue":a[0]||(a[0]=r=>t.toggleValue=r),onChange:t.changeFunction,"on-label":e.onLabel,"off-label":e.offLabel,disabled:e.disabled,classes:{container:"inline-block rounded-full outline-none ",toggle:e.disabled?"flex w-12 h-5 rounded-full relative cursor-not-allowed transition items-center box-content border-2 text-xs leading-none ":"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none ",toggleOn:[e.toggleOnTheme],toggleOff:[e.toggleOffTheme],toggleOnDisabled:"bg-secondary-300 border border-secondary-300 justify-start text-white",toggleOffDisabled:"bg-secondary-300 border border-secondary-300 justify-end text-white",handle:"inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all",handleOn:"left-full transform -translate-x-full",handleOff:"left-0",handleOnDisabled:"bg-text-7 left-full transform -translate-x-full",handleOffDisabled:"bg-text-7 left-0",label:"text-center w-8 border-box whitespace-nowrap select-none"},labelledby:"toggle-label"},null,8,["modelValue","onChange","on-label","off-label","disabled","classes"])])}var v=m(h,[["render",x]]);export{v as P};
