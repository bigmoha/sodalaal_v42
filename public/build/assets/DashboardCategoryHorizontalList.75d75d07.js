import I from"./PsLabel.b794d5bb.js";import H from"./PsLabelHeader5.36b62597.js";import L from"./PsButton.38caef2b.js";import P from"./PsRouteLink.0b0ba539.js";import T from"./PsIcon.9f1bf232.js";import z from"./CategoryHorizontalItem.857edf73.js";import N from"./CategoryHorizontalSkeletorItem.c3b4b6b8.js";import B from"./PsContentContainer.07e1a234.js";import{P as V}from"./PsValueStore.97ab20f6.js";import{u as D}from"./CategoryStore.47c20fdf.js";import{u as q}from"./TouchCountStore.3fd83f28.js";import{T as j}from"./TouchCountParameterHolder.9ce47d98.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import{j as U,o as r,f as A,w as n,a as h,b as e,q as b,t as C,c as l,F as _,s as f,g as E,r as s}from"./app.d57d51e9.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./vue-skeletor.esm.fceae8e3.js";/* empty css                     */import"./PsApiService.1464e9d5.js";import"./PsStore.6e6808bc.js";import"./PsSepetetedStore.9a31ac47.js";import"./ApiStatus.5720ba0b.js";const M={name:"DashboardCategoryHorizontalList",components:{PsContentContainer:B,PsLabel:I,PsLabelHeader5:H,PsButton:L,PsRouteLink:P,PsIcon:T,CategoryHorizontalItem:z,CategoryHorizontalSkeletorItem:N},props:{limit:{type:Number,default:12},showSubCat:{type:Boolean,default:!0}},setup(d){const c=V().getLoginUserId(),t=q(),i=new j;i.typeName="category",i.userId=c;const a=D("dashboard");a.limit=d.limit,a.paramHolder.keyword="",a.paramHolder.orderType="desc",a.paramHolder.orderBy="name";function m(p){i.typeId=p,t.postTouchCount(c,i)}return U(()=>{a.resetCategoryList(c,a.paramHolder)}),{categoryStore:a,updateCategoryTouchCount:m}}},R={class:"flex justify-between items-center mb-6"},G={key:0,class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 xl:gap-6 gap-4 sm:gap-6"},J={key:1,class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 xl:gap-6 gap-4 sm:gap-6"};function K(d,k,c,t,i,a){const m=s("ps-label-header-5"),p=s("ps-label"),g=s("ps-icon"),S=s("ps-button"),u=s("ps-route-link"),y=s("category-horizontal-item"),x=s("category-horizontal-skeletor-item"),w=s("ps-content-container");return t.categoryStore.hasData()||t.categoryStore.loading.value?(r(),A(w,{key:0,class:"mt-10"},{content:n(()=>[h("div",R,[e(m,{class:"font-semibold"},{default:n(()=>[b(C(d.$t("home__categories_label")),1)]),_:1}),e(u,{to:{name:"fe_category.index"}},{default:n(()=>[e(S,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-feSecondary-800",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200"},{default:n(()=>[e(p,{class:"hidden sm:inline"},{default:n(()=>[b(C(d.$t("list_fe__view_all_label")),1)]),_:1}),e(g,{class:"sm:ms-2 block rtl:hidden",textColor:"dark:text-feSecondary-200",name:"rightChervon",h:"24",w:"24"}),e(g,{class:"sm:ms-2 hidden rtl:block",textColor:"dark:text-feSecondary-200",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1},8,["to"])]),t.categoryStore.hasData()?(r(),l("div",G,[(r(!0),l(_,null,f(t.categoryStore.itemList.data.slice(0,8),o=>(r(),l("div",{key:o.catId,class:"w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 sm:block hidden"},[e(u,{to:{name:c.showSubCat?"fe_sub_category":"fe_item_list",query:{cat_id:o.catId,cat_name:o.catName,status:1}},onClick:v=>t.updateCategoryTouchCount(o.catId)},{default:n(()=>[e(y,{category:o},null,8,["category"])]),_:2},1032,["to","onClick"])]))),128)),(r(!0),l(_,null,f(t.categoryStore.itemList.data.slice(0,4),o=>(r(),l("div",{key:o.catId,class:"w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 block sm:hidden"},[e(u,{to:{name:c.showSubCat?"fe_sub_category":"fe_item_list",query:{cat_id:o.catId,cat_name:o.catName,status:1}},onClick:v=>t.updateCategoryTouchCount(o.catId)},{default:n(()=>[e(y,{category:o},null,8,["category"])]),_:2},1032,["to","onClick"])]))),128))])):(r(),l("div",J,[(r(),l(_,null,f(10,o=>h("div",{key:o,class:"w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 sm:block hidden"},[e(x)])),64))]))]),_:1})):E("",!0)}var ho=F(M,[["render",K]]);export{ho as default};