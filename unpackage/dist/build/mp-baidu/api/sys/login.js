"use strict";var e=require("../../common/request.js");var t={loginWechat:t=>e.request({url:"/auth/loginWechat",method:"GET",data:t}),getOpenUserlist:t=>e.request({url:"/auth/getOpenUserlist",method:"GET",data:t}),unbindWechat:t=>e.request({url:"/admin/api/v1/users/unbindWechat",method:"GET",data:t}),verifyWechatApp:t=>e.request({url:"/auth/verifyWechatApp",method:"GET",data:t}),changeLoginWechatApp:t=>e.request({url:"/auth/changeLoginWechatApp",method:"GET",data:t})};exports.loginApi=t;
