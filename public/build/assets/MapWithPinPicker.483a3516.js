import{A as k,H as y}from"./index.0d7f04f4.js";import{u as _}from"./AppInfoStore.9a878473.js";import{A as h}from"./AppInfoParameterHolder.e24d894d.js";import{P as M}from"./PsValueStore.97ab20f6.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{d as I,i as a,j as N,o as b,c as C,b as u,w as S,g as w,r as c}from"./app.d57d51e9.js";import"./PsApiService.1464e9d5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";const V=I({name:"MapWithPinPicker",components:{GoogleMap:k,Marker:y},props:{lat:{type:Number,default:0},lng:{type:Number,default:0},onChange:Function,draggable:{type:Boolean,default:!0}},setup(e){const s=a(),i=a(),n=a(),r=a(),o=a({position:{lat:40.876945,lng:77.387978},draggable:e.draggable}),t=a({lat:40.876945,lng:77.387978}),d=M().getLoginUserId(),f=_(),g=new h;g.userId=d;const l=a({key:"000",center:t,zoom:15}),m=a(!1);async function v(){n.value!=null&&r.value!=null&&(o.value.position.lat=n.value,o.value.position.lng=r.value,l.value.center=o.value.position,t.value=o.value.position),l.value.key=f.appInfo.data.frontendConfigSetting.mapKey,m.value=!0}return N(async()=>{n.value=e.lat==null||isNaN(e.lat)?0:e.lat,r.value=e.lng==null||isNaN(e.lng)?0:e.lng,l.value.center=o.value.position,await v()}),{mcenter:o,dataReady:m,map:l,map_ref:s,coordinates:t,marker:i}}}),z={key:0};function A(e,s,i,n,r,o){const t=c("Marker"),p=c("GoogleMap");return e.dataReady==!0?(b(),C("div",z,[u(p,{id:"map",ref:"map_ref","api-key":e.map.key,center:e.map.center,zoom:e.map.zoom,style:{width:"100%",height:"280px"}},{default:S(()=>[u(t,{options:e.mcenter,draggable:"false",ref:"marker",onDrag:e.onChange},null,8,["options","onDrag"])]),_:1},8,["api-key","center","zoom"])])):w("",!0)}var F=P(V,[["render",A]]);export{F as default};
