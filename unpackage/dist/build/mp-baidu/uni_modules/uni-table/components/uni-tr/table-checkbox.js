"use strict";var e=require("../../../../common/vendor.js");const t={name:"TableCheckbox",emits:["checkboxSelected"],props:{indeterminate:{type:Boolean,default:!1},checked:{type:[Boolean,String],default:!1},disabled:{type:Boolean,default:!1},index:{type:Number,default:-1},cellData:{type:Object,default:()=>({})}},watch:{checked(e){"boolean"==typeof this.checked?this.isChecked=e:this.isChecked=!0},indeterminate(e){this.isIndeterminate=e}},data:()=>({isChecked:!1,isDisabled:!1,isIndeterminate:!1}),created(){"boolean"==typeof this.checked&&(this.isChecked=this.checked),this.isDisabled=this.disabled},methods:{selected(){this.isDisabled||(this.isIndeterminate=!1,this.isChecked=!this.isChecked,this.$emit("checkboxSelected",{checked:this.isChecked,data:this.cellData}))}}};var i=e._export_sfc(t,[["render",function(t,i,s,d,c,a){return e.e({a:!s.indeterminate},s.indeterminate?{}:{b:c.isChecked?1:"",c:c.isDisabled?1:""},{d:e.o(((...e)=>a.selected&&a.selected(...e)))})}]]);swan.createComponent(i);
