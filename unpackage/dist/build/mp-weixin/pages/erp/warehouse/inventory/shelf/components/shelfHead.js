"use strict";var e=require("../../../../../../api/erp/warehouse/warehouseApi.js"),a=require("../../../../../../common/vendor.js");require("../../../../../../common/request.js");const t={props:["shelfid"],data:()=>({data:{startname:"",usesize:"",expnumber:"",length:"",width:"",height:"",numbername:"",summary:{warehousename:"",skunum:""}}}),onLoad(e){},methods:{getInfo(a){let t=this;e.warehouseApi.getShelfInfo({shelfid:a}).then((e=>{e?(t.data=e,e.summary&&e.summary.warehousename&&(t.data.startname=e.summary.warehousename.substr(0,1)),t.data.numbername=e.number+""+e.name,t.$emit("onload",e)):t.$emit("onload",{})}))}}};var r=a._export_sfc(t,[["render",function(e,t,r,m,n,s){return{a:a.t(n.data.startname),b:a.t(n.data.summary.warehousename),c:a.t(n.data.numbername),d:a.t(n.data.length),e:a.t(n.data.width),f:a.t(n.data.height),g:a.t(n.data.summary.skunum),h:a.t(n.data.usesize),i:a.t(n.data.expnumber)}}]]);wx.createComponent(r);
