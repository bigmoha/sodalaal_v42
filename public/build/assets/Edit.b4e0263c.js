import{d as Q,Z as R,i as g,H as V,B as c,o as r,c as p,b as t,w as n,a as b,q as d,t as m,h as W,m as X,f as y,F as P,s as I,g as f,n as Y,r as s,E as N}from"./app.d57d51e9.js";import{P as F}from"./PsLayout.bc5965d6.js";import{P as x}from"./PsBreadcrumb2.761286c6.js";import{u as ee}from"./Validators.cb85894a.js";import{P as oe}from"./PsInput.b3485f1e.js";import{P as te}from"./PsLabel.06b4363b.js";import{P as ae}from"./PsButton.c9fc3d7e.js";import{P as re,d as ne}from"./PsDangerDialog.1643aeb7.js";import{P as se}from"./PsCard.e47b5f14.js";import{P as le}from"./PsIcon.1e42bf4c.js";import{P as ie}from"./PsLoading.1f212adc.js";import{P as de}from"./PsCheckboxValue.373287f4.js";import{a as me,P as pe}from"./PsActionModal.7978c60e.js";import{P as ue}from"./PsImageUpload.e74e4503.js";import{P as _e}from"./PsLabelCaption.b0af0e56.js";import{P as ce}from"./PsLabelTitle3.78de00b9.js";import{P as be}from"./PsTextarea.2d2fbd18.js";import{P as fe}from"./PsDropdown.0c78da9b.js";import{P as ge}from"./PsDropdownSelect.13d0e05f.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.fddd5498.js";import"./toggle.6b621a64.js";import"./PsWarningDialog.67ba6cb5.js";import"./PsModal.f198af2b.js";import"./vue-neat-modal.d9ed1877.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.66190284.js";import"./SidebarSubTab.148b6988.js";import"./PsErrorDialog.a25aef9e.js";import"./PsInputWithRightIcon.8c9e6c80.js";import"./PsSuccessDialog.a19b3bb4.js";import"./PsBannerIcon.0cb3925c.js";import"./PsIcon1.c6e725b1.js";import"./Icons.ebbb778b.js";import"./PsLoadingCircleDialog.c95deca1.js";import"./PsLabelHeader4.ad69cbcb.js";import"./PsDraggable.aca5d6c1.js";const ve=Q({name:"Edit",components:{Head:R,PsBreadcrumb2:x,PsImageUpload:ue,PsInput:oe,PsLabel:te,PsButton:ae,PsLabelHeader6:re,PsCard:se,PsIcon:le,PsLoading:ie,PsCheckboxValue:de,PsActionModal:me,PsImageIconModal:pe,PsDangerDialog:ne,PsLabelCaption:_e,PsLabelTitle3:ce,PsTextarea:be,PsDropdown:fe,PsDropdownSelect:ge},layout:F,props:["errors","blog","cities","coreFieldFilterSettings","validation"],data(){return{location_city:""}},setup(e){const a=g(!1),v=g(!1),D=g(),S=g(),U=g(),$=g(),w=g(),C=g(),{isEmpty:_,minLength:L}=ee(),B=(l,u)=>{e.errors[l]=u?L(l,u,3):_(l,u),l=="name"&&($.value.isError=!!Boolean(e.errors.name))},h=(l,u)=>{e.errors[l]=u?"":_(l,u),l=="description"&&(C.value.isError=!!Boolean(e.errors.description)),l=="location_city_id"&&(w.value.isError=!!Boolean(e.errors.location_city_id))};let E=V({name:e.blog.name,description:e.blog.description,location_city_id:e.cities.find(l=>l.id==e.blog.location_city_id)?e.blog.location_city_id:"",status:e.blog.status==1,cover:"",_method:"put"});function z(l){this.$inertia.post(route("blog.update",l),E,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{a.value=!1,$.value.isError=!!Boolean(e.errors.name)}})}function T(l){D.value.openModal(c("conf_modal_label"),c("core__be_replace_img_label"),c("core__be_remove_img_label"),"image","trash","24","24",()=>{S.value.openModal(c("core__be_upload_photo"),"cloudUpload",u=>{let M=V({image:u,_method:"put"});this.$inertia.post(route("image.replace",l),M)})},()=>{U.value.openModal(c("core__be_remove_label"),c("core__be_are_u_sure_remove_photo"),c("core__be_btn_confirm"),c("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",l),{onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{a.value=!1}})},()=>{})},!e.validation.includes("cover"))}return{validateNameInput:B,validateEmptyInput:h,description:C,location_city_id:w,handleSubmit:z,ps_action_modal:D,form:E,loading:a,success:v,replaceImageClicked:T,ps_danger_dialog:U,ps_image_icon_modal:S}},computed:{breadcrumb(){return[{label:c("core__be_dashboard_label"),url:route("admin.index")},{label:c("blog_module"),url:route("blog.index")},{label:c("blog__edit_blog_module"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("blog.index"))}}}),he={class:"rounded-xl"},ke={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Pe={class:"px-4 pt-6 dark:bg-backgroundDark"},$e={class:"grid w-full sm:w-1/2 gap-6"},we={key:0,class:"flex items-end pt-4"},Ce={width:"400",height:"200",class:"w-96 h-48",alt:"blog cover"},Be={key:0,class:"text-red-800 font-medium ms-1"},Ee={key:0,class:"text-red-800 font-medium ms-1"},Ie={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},De={class:"pt-2 z-30"},Se={key:0},Ue={key:1},Le=["onClick"],ze={key:0,class:"text-red-800 font-medium ms-1"},Te={class:"flex flex-row justify-end mb-2.5"};function Me(e,a,v,D,S,U){const $=s("Head"),w=s("ps-breadcrumb-2"),C=s("ps-label-header-6"),_=s("ps-label"),L=s("ps-label-title-3"),B=s("ps-icon"),h=s("ps-button"),E=s("ps-image-icon-modal"),z=s("ps-action-modal"),T=s("ps-danger-dialog"),l=s("ps-image-upload"),u=s("ps-label-caption"),M=s("ps-input"),K=s("ps-dropdown-select"),j=s("ps-dropdown"),q=s("ps-textarea"),A=s("ps-checkbox-value"),Z=s("ps-loading"),G=s("ps-card"),J=s("ps-layout"),O=N("lazy");return r(),p(P,null,[t($,{title:e.$t("edit_blog")},null,8,["title"]),t(J,null,{default:n(()=>[t(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(G,{class:"w-full h-auto"},{default:n(()=>{var H;return[b("div",he,[b("div",ke,[t(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[d(m(e.$t("blog__be_blog_info")),1)]),_:1})]),b("div",Pe,[b("form",{onSubmit:a[7]||(a[7]=W(o=>e.handleSubmit(e.blog.id),["prevent"]))},[b("div",$e,[b("div",null,[t(_,{class:"text-base"},{default:n(()=>[d(m(e.$t("blog_photo_label")),1)]),_:1}),t(L,null,{default:n(()=>[d(m(e.$t("core__be_recommended_size_400_200")),1)]),_:1}),e.blog.cover[0]?(r(),p("div",we,[X(b("img",Ce,null,512),[[O,{src:e.$page.props.uploadUrl+"/"+((H=e.blog.cover[0])==null?void 0:H.img_path),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t(h,{type:"button",onClick:a[0]||(a[0]=o=>e.replaceImageClicked(e.blog.cover[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:n(()=>[t(B,{name:"pencil-btn"})]),_:1}),t(E,{ref:"ps_image_icon_modal"},null,512),t(z,{ref:"ps_action_modal"},null,512),t(T,{ref:"ps_danger_dialog"},null,512)])):(r(),y(l,{key:1,uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":a[1]||(a[1]=o=>e.form.cover=o)},null,8,["imageFile"])),t(u,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(m(e.errors.cover),1)]),_:1})]),(r(!0),p(P,null,I(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),p("div",{key:k},[t(_,{class:"text-base"},{default:n(()=>[d(m(e.$t(o.label_name))+" ",1),o.mandatory==1?(r(),p("span",Be,"*")):f("",!0)]),_:2},1024),t(M,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":a[2]||(a[2]=i=>e.form.name=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),y(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(m(e.errors.name),1)]),_:1})):f("",!0)]))),128)),(r(!0),p(P,null,I(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="location_city_id"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),p("div",{key:k},[t(_,{class:"text-base"},{default:n(()=>[d(m(e.$t(o.label_name)),1),o.mandatory==1?(r(),p("span",Ee,"*")):f("",!0)]),_:2},1024),t(j,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:n(()=>[t(K,{ref_for:!0,ref:"city",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:e.form.location_city_id==""?"":e.cities.filter(i=>i.id==e.form.location_city_id)[0].name,onChange:i=>o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id),onBlur:i=>o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:n(()=>[b("div",Ie,[b("div",De,[e.cities.length==null?(r(),p("div",Se,[t(_,{class:"p-2 flex",onClick:a[3]||(a[3]=i=>e.route("city.index"))},{default:n(()=>[d(m(e.$t("core__be_add_new_city")),1)]),_:1})])):(r(),p("div",Ue,[(r(!0),p(P,null,I(e.cities,i=>(r(),p("div",{key:i.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:He=>[e.form.location_city_id=i.id,o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id)]},[t(_,{class:Y(["ms-2",i.id==e.form.location_city_id?" font-bold":""])},{default:n(()=>[d(m(i.name),1)]),_:2},1032,["class"])],8,Le))),128))]))])])]),_:2},1024),o.mandatory==1?(r(),y(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(m(e.errors.location_city_id),1)]),_:1})):f("",!0)]))),128)),(r(!0),p(P,null,I(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="description"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),p("div",{class:"py-3",key:k},[t(_,{class:"text-base"},{default:n(()=>[d(m(e.$t(o.label_name))+" ",1),o.mandatory==1?(r(),p("span",ze,"*")):f("",!0)]),_:2},1024),t(q,{rows:"3",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":a[4]||(a[4]=i=>e.form.description=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),y(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(m(e.errors.description),1)]),_:1})):f("",!0)]))),128)),b("div",null,[t(_,{class:"text-base"},{default:n(()=>[d(m(e.$t("blog__blog_status")),1)]),_:1}),t(A,{value:e.form.status,"onUpdate:value":a[5]||(a[5]=o=>e.form.status=o),class:"font-normal",title:"Publish"},null,8,["value"])]),b("div",Te,[t(h,{onClick:a[6]||(a[6]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:n(()=>[d(m(e.$t("core__be_btn_cancel")),1)]),_:1}),t(h,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(r(),y(Z,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(r(),y(B,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(r(),y(_,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[d(m(e.$t("core__be_btn_saved")),1)]),_:1})):f("",!0),!e.loading&&!e.success?(r(),y(_,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[d(m(e.$t("core__be_btn_save")),1)]),_:1})):f("",!0)]),_:1})])])],32)])])]}),_:1})]),_:1})],64)}var Po=ye(ve,[["render",Me]]);export{Po as default};