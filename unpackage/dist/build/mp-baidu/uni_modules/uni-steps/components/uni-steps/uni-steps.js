"use strict";var e=require("../../../../common/vendor.js");const n={name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:()=>[]}},data:()=>({})};if(!Array){e.resolveComponent("uni-icons")()}Math;var t=e._export_sfc(n,[["render",function(n,t,i,o,c,r){return{a:e.f(i.options,((n,t,o)=>({a:t,b:e.t(n.title),c:t===i.active?i.activeColor:i.deactiveColor,d:e.t(n.desc)}))),b:e.n("column"===i.direction?"uni-steps__column-title":"uni-steps__row-title"),c:i.deactiveColor,d:e.n("column"===i.direction?"uni-steps__column-desc":"uni-steps__row-desc"),e:e.n("column"===i.direction?"uni-steps__column-text":"uni-steps__row-text"),f:e.n("column"===i.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"),g:e.f(i.options,((n,t,o)=>e.e({a:t,b:t<=i.active&&0!==t?i.activeColor:0===t?"transparent":i.deactiveColor,c:t===i.active},t===i.active?{d:"50c4e207-0-"+o,e:e.p({color:i.activeColor,type:i.activeIcon,size:"14"}),f:e.n("column"===i.direction?"uni-steps__column-check":"uni-steps__row-check")}:{g:e.n("column"===i.direction?"uni-steps__column-circle":"uni-steps__row-circle"),h:t<i.active?i.activeColor:i.deactiveColor},{i:t<i.active&&t!==i.options.length-1?i.activeColor:t===i.options.length-1?"transparent":i.deactiveColor}))),h:e.n("column"===i.direction?"uni-steps__column-line":"uni-steps__row-line"),i:e.n("column"===i.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"),j:e.n("column"===i.direction?"uni-steps__column-line":"uni-steps__row-line"),k:e.n("column"===i.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"),l:e.n("column"===i.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"),m:e.n("column"===i.direction?"uni-steps__column-container":"uni-steps__row-container"),n:e.n("column"===i.direction?"uni-steps__column":"uni-steps__row")}}]]);swan.createComponent(t);
