"use strict";var e=require("../../../common/request.js");var r={list:function(r){return e.request({url:"/erp/api/v1/purchase_form/list",method:"GET",data:r})},getRecdetail:function(r){return e.request({url:"/erp/api/v1/purchase_form/getRecdetail",method:"GET",data:r})},catchLogisticsInfo:function(r){return e.request({url:"/erp/api/v1/purchase_form/catchLogisticsInfo",method:"GET",data:r})},rec:function(r){return e.request({url:"/erp/api/v1/purchase_form/rec",method:"GET",data:r})}};exports.purchaseApi=r;