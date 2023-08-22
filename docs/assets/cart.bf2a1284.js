import{L as t,M as e,o as i,c as s,w as a,b as n,y as l,n as r,K as u,e as h,h as o,N as m}from"./index-ed9e365a.js";import{_ as p}from"./plugin-vueexport-helper.1b428a4d.js";import{h as d}from"./http.86124fb0.js";const c=p({name:"vk-data-input-number-box",emits:["update:modelValue","input","change","blur","plus","minus"],props:{value:{type:Number,default:1},modelValue:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},stepFirst:{type:Number,default:0},stepStrictly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{valueCom(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal(t,e){if(""==t)return;let i=0;i=this.isNumber(t)&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=e,this.$nextTick((()=>{this.inputVal=e}))),this.handleChange(i,"change")},min(t){void 0!==t&&""!=t&&this.valueCom<t&&(this.$emit("input",t),this.$emit("update:modelValue",t))},max(t){void 0!==t&&""!=t&&this.valueCom>t&&(this.$emit("input",t),this.$emit("update:modelValue",t))}},data:()=>({inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}),created(){this.inputVal=Number(this.valueCom)},computed:{valueCom(){return this.modelValue},getCursorSpacing(){return Number(t(this.cursorSpacing))}},methods:{btnTouchStart(t){this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((()=>{this[t]()}),this.pressTime))},clearTimer(){this.$nextTick((()=>{clearInterval(this.timer),this.timer=null}))},minus(){this.computeVal("minus")},plus(){this.computeVal("plus")},calcPlus(t,e){let i,s,a;try{s=t.toString().split(".")[1].length}catch(n){s=0}try{a=e.toString().split(".")[1].length}catch(n){a=0}return i=Math.pow(10,Math.max(s,a)),((t*i+e*i)/i).toFixed(s>=a?s:a)},calcMinus(t,e){let i,s,a;try{s=t.toString().split(".")[1].length}catch(n){s=0}try{a=e.toString().split(".")[1].length}catch(n){a=0}return i=Math.pow(10,Math.max(s,a)),((t*i-e*i)/i).toFixed(s>=a?s:a)},computeVal(t){if(e(),this.disabled)return;let i=0;if("minus"===t?i=this.stepFirst>0&&this.inputVal==this.stepFirst?this.min:this.calcMinus(this.inputVal,this.step):"plus"===t&&(i=this.stepFirst>0&&this.inputVal<this.stepFirst?this.stepFirst:this.calcPlus(this.inputVal,this.step)),this.stepStrictly){let t=i%this.step;t>0&&(i-=t)}i>this.max?i=this.max:i<this.min&&(i=this.min),this.inputVal=i,this.handleChange(i,t)},onBlur(t){let e=0,i=t.detail.value;if(/(^\d+$)/.test(i)&&0!=i[0]||(e=this.min),e=+i,this.stepFirst>0&&this.inputVal<this.stepFirst&&this.inputVal>0&&(e=this.stepFirst),this.stepStrictly){let t=e%this.step;t>0&&(e-=t)}e>this.max?e=this.max:e<this.min&&(e=this.min),this.$nextTick((()=>{this.inputVal=e})),this.handleChange(e,"blur")},handleChange(t,e){this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((()=>{this.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit("update:modelValue",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))},isNumber:t=>/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)}},[["render",function(t,e,p,d,c,b){const g=o,f=m;return i(),s(g,{class:"vk-data-input-number-box"},{default:a((()=>[n(g,{class:l(["u-icon-minus",{"u-icon-disabled":p.disabled||c.inputVal<=p.min}]),style:r({background:p.bgColor,height:p.inputHeight+"rpx",color:p.color,fontSize:p.size+"rpx",minHeight:"1.4em"}),onTouchstart:e[0]||(e[0]=u((t=>b.btnTouchStart("minus")),["prevent"])),onTouchend:u(b.clearTimer,["stop","prevent"])},{default:a((()=>[n(g,{style:r("font-size:"+(Number(p.size)+10)+"rpx"),class:"num-btn"},{default:a((()=>[h("－")])),_:1},8,["style"])])),_:1},8,["class","style","onTouchend"]),n(f,{modelValue:c.inputVal,"onUpdate:modelValue":e[1]||(e[1]=t=>c.inputVal=t),disabled:p.disabledInput||p.disabled,"cursor-spacing":b.getCursorSpacing,class:l([{"u-input-disabled":p.disabled},"u-number-input"]),type:"number",style:r({color:p.color,fontSize:p.size+"rpx",background:p.bgColor,height:p.inputHeight+"rpx",width:p.inputWidth+"rpx"}),onBlur:b.onBlur},null,8,["modelValue","disabled","cursor-spacing","class","style","onBlur"]),n(g,{class:l(["u-icon-plus",{"u-icon-disabled":p.disabled||c.inputVal>=p.max}]),style:r({background:p.bgColor,height:p.inputHeight+"rpx",color:p.color,fontSize:p.size+"rpx",minHeight:"1.4em"}),onTouchstart:e[2]||(e[2]=u((t=>b.btnTouchStart("plus")),["prevent"])),onTouchend:u(b.clearTimer,["stop","prevent"])},{default:a((()=>[n(g,{style:r("font-size:"+(Number(p.size)+10)+"rpx"),class:"num-btn"},{default:a((()=>[h("＋")])),_:1},8,["style"])])),_:1},8,["class","style","onTouchend"])])),_:1})}],["__scopeId","data-v-bc267c05"]]),b=t=>d({method:"POST",url:"/member/cart",data:t}),g=()=>d({method:"GET",url:"/member/cart"}),f=t=>d({method:"DELETE",url:"/member/cart",data:t}),y=(t,e)=>d({method:"PUT",url:`/member/cart/${t}`,data:e}),x=t=>d({method:"PUT",url:"/member/cart/selected",data:t});export{c as _,y as a,b,f as d,g,x as p};