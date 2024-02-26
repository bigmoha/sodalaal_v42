import{a as p,P as i,b as C}from"./PsApiService.1464e9d5.js";import{U as u}from"./User.0c3ba1a8.js";import{bD as E,y as d,i as A}from"./app.d57d51e9.js";import{D as G}from"./DefaultPhoto.cc755f93.js";import{P as U}from"./ps_constants.115f3686.js";import{m as W}from"./PsSepetetedStore.9a31ac47.js";import{U as x}from"./UserListParameterHolder.d110b747.js";import{A as f}from"./ApiStatus.5720ba0b.js";class V{constructor(){this.id="",this.overallRating="",this.returnTypes="",this.loginUserId="",this.userName=""}UserParameterHolder(){this.id="",this.overallRating="",this.returnTypes="",this.loginUserId="",this.userName=""}getFollowingUsers(){return this.id="",this.overallRating="",this.returnTypes=U.FILTERING__FOLLOWING,this.loginUserId="",this.userName="",this}getFollowerUsers(){return this.id="",this.overallRating="",this.returnTypes=U.FILTERING__FOLLOWER,this.loginUserId="",this.userName="",this}getOtherUserData(){return this.id="",this.overallRating="",this.returnTypes="",this.loginUserId="",this.userName="",this}resetParameterHolder(){return this.id="",this.overallRating="",this.returnTypes="",this.loginUserId="",this.userName="",this}toMap(){const a={};return a.id=this.id,a.overall_rating=this.overallRating,a.return_types=this.returnTypes,a.login_user_id=this.loginUserId,a.user_name=this.userName,a}}const X=W(m=>E(`userStore/${m}`,()=>{const a=d(new p),o=d({value:!1}),r=d(new p),l=d({value:!1});let c=A(10),n=0,w="",y=d(new V),S=d(new x);function v(e){var t,s;r!=null&&r.data!=null&&r.data.length>0&&n!=0?(e.data!=null&&e.data.length>0?(((t=e.data)==null?void 0:t.length)<c.value?o.value=!0:o.value=!1,r.data.push(...e.data)):o.value=!0,r.code=e.code,r.status=e.status,r.message=e.message):(((s=e.data)==null?void 0:s.length)<c.value||e.data==null?o.value=!0:o.value=!1,r.data=e.data,r.code=e.code,r.status=e.status,r.message=e.message),r!=null&&r.data!=null&&(n=r.data.length)}async function I(e){l.value=!0;const t=await i.getUser(new u,e);return a.data=t.data,a.code=t.code,a.message=t.message,a.status=t.status,l.value=!1,t}async function L(e,t){l.value=!0;const s=await i.getOtherUser(new u,e,t.toMap());return a.data=s.data,a.code=s.code,a.message=s.message,a.status=s.status,l.value=!1,s}async function P(e,t){l.value=!0;const s=await i.postProfileUpdate(new u,e.toMap(),t);return s.status==C.SUCCESS&&(a.data=s.data,a.code=s.code,a.message=s.message,a.status=s.status),l.value=!1,s}async function M(e,t,s,g){l.value=!0,await i.postUserImageUpload(new G,e,t,s,g),l.value=!1}async function R(e,t){n=0,l.value=!0;const s=await i.getUserSearchList(new u,c.value,n,e,t.toMap());v(s),l.value=!1}async function N(e,t){l.value=!0;const s=await i.getUserSearchList(new u,c.value,n,e,t.toMap());v(s),l.value=!1}async function T(e,t){l.value=!0;const s=0,g=r.data.length,h=await i.getUserSearchList(new u,g,s,e,t.toMap());r.data=h.data,r.code=h.code,r.status=h.status,r.message=h.message,l.value=!1}async function _(e){this.loading.value=!0;const t=await i.postUserFollow(new u,e.toMap(),e.userId);return this.loading.value=!1,t}async function b(e,t){this.loading.value=!0;const s=await i.blockUser(new f,t,e.toMap());return this.loading.value=!1,s}async function F(e,t){this.loading.value=!0;const s=await i.blueMarkUser(new f,e,t.toMap());return this.loading.value=!1,s}async function O(e,t){l.value=!0;const s=await i.postChangePassword(new f,e.toMap(),t);return l.value=!1,s}async function k(e){l.value=!0;const t=await i.postDeleteUser(new f,e.toMap());return l.value=!1,t}function H(e){var t;return((t=a.data)==null?void 0:t.isVerifybluemark)==e}return{blockUser:b,postUserFollow:_,loadUserSearchList:N,resetUserSearchList:R,userList:r,limit:c,isNoMoreRecord:o,offset:n,id:w,user:a,loading:l,loadUser:I,postProfileUpdate:P,postImageUpload:M,loadOtherUser:L,paramHolder:y,userparamHolder:S,refleshUserSearchList:T,blueMarkUser:F,postChangePassword:O,postDeleteUser:k,verifybluemark:H}}));export{V as U,X as u};
