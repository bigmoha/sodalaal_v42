import{P as d}from"./PsObject.a17ef38f.js";class m extends d{constructor(){super(...arguments),this.imgId="",this.imgParentId="",this.imgType="",this.imgPath="",this.imgWidth="",this.imgHeight="",this.imgDesc="",this.ordering=""}init(i,t,g,r,s,h,e,n){return this.imgId=i,this.imgParentId=t,this.imgType=g,this.imgPath=r,this.imgWidth=s,this.imgHeight=h,this.imgDesc=e,this.ordering=n,this}getPrimaryKey(){return this.imgId}fromMap(i){return i==null||i==""?new m:new m().init(i.img_id,i.img_parent_id,i.img_type,i.img_path,i.img_width,i.img_height,i.img_desc,i.ordering)}fromMapList(i){const t=[];for(const g in i)g!=null&&t.push(this.fromMap(g));return t}toMap(i){const t={};return t.img_id=i.imgId,t.img_parent_id=i.imgParentId,t.img_type=i.imgType,t.img_path=i.imgPath,t.img_width=i.imgWidth,t.img_height=i.imgHeight,t.img_desc=i.imgDesc,t.ordering=i.ordering,t}toMapList(i){const t=[];for(let g=0;g<i.length;g++)i[g]!=null&&t.push(this.toMap(i[g]));return t}}export{m as D};