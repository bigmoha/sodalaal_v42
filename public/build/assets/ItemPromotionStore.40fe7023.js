import{a as _,P as c}from"./PsApiService.1464e9d5.js";import{P as S}from"./PsObject.a17ef38f.js";import{P as n}from"./Product.8b62d5d3.js";import{bD as w,y as o,i as g}from"./app.d57d51e9.js";import{m as U}from"./PsSepetetedStore.9a31ac47.js";class F{constructor(){this.itemId="",this.amount="",this.startDate="",this.howManyDay="",this.paymentMethod="",this.paymentMethodNounce="",this.startTimeStamp="",this.razorId="",this.purchasedId="",this.isPaystack=""}ItemPaidHistoryParameterHolder(){this.itemId="",this.amount="",this.startDate="",this.howManyDay="",this.paymentMethod="",this.paymentMethodNounce="",this.startTimeStamp="",this.razorId="",this.purchasedId="",this.isPaystack=""}toMap(){const t={};return t.item_id=this.itemId,t.amount=this.amount,t.start_date=this.startDate,t.how_many_day=this.howManyDay,t.payment_method=this.paymentMethod,t.payment_method_nonce=this.paymentMethodNounce,t.start_timestamp=this.startTimeStamp,t.razor_id=this.razorId,t.purchased_id=this.purchasedId,t.is_paystack=this.isPaystack,t}}class p extends S{constructor(){super(...arguments),this.id="",this.itemId="",this.startDate="",this.endDate="",this.amount="",this.paymentMethod="",this.transCode="",this.status="",this.addedDate="",this.addedUserId="",this.updatedDate="",this.updatedUserId="",this.updatedFlag="",this.addedDateStreet="",this.paidStatus="",this.item=new n}init(t,a,e,s,d,i,r,h,m,y,l,I,f,D,M,P){return this.id=t,this.itemId=a,this.startDate=e,this.endDate=s,this.amount=d,this.paymentMethod=i,this.transCode=r,this.status=h,this.addedDate=m,this.addedUserId=y,this.updatedDate=l,this.updatedUserId=I,this.updatedFlag=f,this.addedDateStreet=D,this.paidStatus=M,this.item=P,this}getPrimaryKey(){return this.id}fromMap(t){return new p().init(t.id,t.item_id,t.start_date,t.end_date,t.amount,t.payment_method,t.trans_code,t.status,t.added_date,t.added_user_id,t.updated_date,t.updated_user_id,t.updated_flag,t.added_date_str,t.paid_status,new n().fromMap(t.item))}fromMapList(t){const a=[];for(const e in t)e!=null&&a.push(this.fromMap(e));return a}toMap(t){const a={};return a.id=t.id,a.item_id=t.itemId,a.start_date=t.startDate,a.end_date=t.endDate,a.amount=t.amount,a.payment_method=t.paymentMethod,a.trans_code=t.transCode,a.status=t.status,a.added_date=t.addedDate,a.added_user_id=t.addedUserId,a.updated_date=t.updatedDate,a.updated_user_id=t.updatedUserId,a.updated_flag=t.updatedFlag,a.added_date_str=t.addedDateStreet,a.paid_status=t.paidStatus,a.item=new n().toMap(t.item),a}toMapList(t){const a=[];for(let e=0;e<t.length;e++)t[e]!=null&&a.push(this.toMap(t[e]));return a}}const L=U(u=>w(`itemPromotionStore/${u}`,()=>{const t=o(new _),a=o(new _),e=o({value:!1});let s=g(10),d=0,i="";async function r(h,m){return e.value=!0,a.data=await c.postItemPromotion(new p,m,h.toMap()),e.value=!1,a}return{reportedReportedItemList:t,paiditem:a,loading:e,limit:s,offset:d,id:i,postItemPromotion:r}}));export{F as I,L as u};
