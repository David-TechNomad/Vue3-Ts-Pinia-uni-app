import{d as e,g as a,m as t,ao as s,o as l,c as r,w as o,j as i,F as u,r as n,a as d,b as c,e as f,t as p,u as v,n as m,B as _,E as y,f as g,h as k,i as S,k as b,v as h,l as C,S as w}from"./index-ed9e365a.js";import{o as x,O as R,g as I}from"./pay.d1a77779.js";import{i as j,e as B,f as D}from"./order.c56f7cb4.js";import{_ as F}from"./plugin-vueexport-helper.1b428a4d.js";import"./http.86124fb0.js";const O=F(e({__name:"OrderList",props:{orderState:null},setup(e){const C=e,{safeAreaInsets:w}=a(),F={page:1,pageSize:5,orderState:C.orderState},O=t([]),A=t(!1),H=async()=>{if(A.value)return;if(!0===J.value)return _({icon:"none",title:"没有更多数据~"});A.value=!0;const e=await j(F);A.value=!1,O.value.push(...e.result.items),F.page<e.result.pages?F.page++:J.value=!0};s((()=>{H()}));const J=t(!1),N=t(!1),P=async()=>{N.value=!0,F.page=1,O.value=[],J.value=!1,await H(),N.value=!1};return(e,a)=>{const t=g,s=k,C=S,j=b,F=h;return l(),r(F,{"enable-back-to-top":"","scroll-y":"",class:"orders","refresher-enabled":"","refresher-triggered":N.value,onRefresherrefresh:P,onScrolltolower:H},{default:o((()=>{var e;return[(l(!0),i(u,null,n(O.value,(e=>(l(),r(s,{class:"card",key:e.id},{default:o((()=>[d(" 订单信息 "),c(s,{class:"status"},{default:o((()=>[c(t,{class:"date"},{default:o((()=>[f(p(e.createTime),1)])),_:2},1024),d(" 订单状态文字 "),c(t,null,{default:o((()=>[f(p(v(x)[e.orderState].text),1)])),_:2},1024),d(" 待评价/已完成/已取消 状态: 展示删除订单 "),e.orderState>=v(R).DaiPingJia?(l(),r(t,{key:0,class:"icon-delete",onClick:a=>{return t=e.id,void y({content:"你确定要删除该订单？",confirmColor:"#27BA9B",success:async e=>{if(e.confirm){await D({ids:[t]});const e=O.value.findIndex((e=>e.id===t));O.value.splice(e,1)}}});var t}},null,8,["onClick"])):d("v-if",!0)])),_:2},1024),d(" 商品信息，点击商品跳转到订单详情，不是商品详情 "),(l(!0),i(u,null,n(e.skus,(a=>(l(),r(j,{key:a.id,class:"goods",url:`/pagesOrder/detail/detail?id=${e.id}`,"hover-class":"none"},{default:o((()=>[c(s,{class:"cover"},{default:o((()=>[c(C,{class:"image",mode:"aspectFit",src:a.image},null,8,["src"])])),_:2},1024),c(s,{class:"meta"},{default:o((()=>[c(s,{class:"name ellipsis"},{default:o((()=>[f(p(a.name),1)])),_:2},1024),c(s,{class:"type"},{default:o((()=>[f(p(a.attrsText),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["url"])))),128)),d(" 支付信息 "),c(s,{class:"payment"},{default:o((()=>[c(t,{class:"quantity"},{default:o((()=>[f("共"+p(e.totalNum)+"件商品",1)])),_:2},1024),c(t,null,{default:o((()=>[f("实付")])),_:1}),c(t,{class:"amount"},{default:o((()=>[c(t,{class:"symbol"},{default:o((()=>[f("¥")])),_:1}),f(p(e.payMoney),1)])),_:2},1024)])),_:2},1024),d(" 订单操作按钮 "),c(s,{class:"action"},{default:o((()=>[d(" 待付款状态：显示去支付按钮 "),e.orderState===v(R).DaiFuKuan?(l(),r(s,{key:0,class:"button primary",onClick:a=>(async e=>{await I({orderId:e}),_({title:"支付成功"}),O.value.find((a=>a.id===e)).orderState=R.DaiFaHuo})(e.id)},{default:o((()=>[f("去支付")])),_:2},1032,["onClick"])):(l(),i(u,{key:1},[c(j,{class:"button secondary",url:`/pagesOrder/create/create?orderId=${e.id}`,"hover-class":"none"},{default:o((()=>[f(" 再次购买 ")])),_:2},1032,["url"]),d(" 待收货状态: 展示确认收货 "),e.orderState===v(R).DaiShouHuo?(l(),r(s,{key:0,class:"button primary",onClick:a=>{return t=e.id,void y({content:"为保障您的权益，请收到货并确认无误后，再确认收货",confirmColor:"#27BA9B",success:async e=>{e.confirm&&(await B(t),_({icon:"success",title:"确认收货成功"}),O.value.find((e=>e.id===t)).orderState=R.DaiPingJia)}});var t}},{default:o((()=>[f(" 确认收货 ")])),_:2},1032,["onClick"])):d("v-if",!0)],64))])),_:2},1024)])),_:2},1024)))),128)),d(" 底部提示文字 "),c(s,{class:"loading-text",style:m({paddingBottom:(null==(e=v(w))?void 0:e.bottom)+"px"})},{default:o((()=>[f(p(J.value?"没有更多数据~":"正在加载..."),1)])),_:1},8,["style"])]})),_:1},8,["refresher-triggered"])}}}),[["__scopeId","data-v-8ecc2a5b"]]),A=F(e({__name:"list",props:{type:null},setup(e){const a=e,s=t([{orderState:0,title:"全部",isRender:!1},{orderState:1,title:"待付款",isRender:!1},{orderState:2,title:"待发货",isRender:!1},{orderState:3,title:"待收货",isRender:!1},{orderState:4,title:"待评价",isRender:!1}]),v=t(s.value.findIndex((e=>e.orderState===Number(a.type))));return s.value[v.value].isRender=!0,(e,a)=>{const t=g,_=k,y=w,S=C;return l(),r(_,{class:"viewport"},{default:o((()=>[d(" tabs "),c(_,{class:"tabs"},{default:o((()=>[(l(!0),i(u,null,n(s.value,((e,a)=>(l(),r(t,{class:"item",key:e.title,onClick:()=>{v.value=a,e.isRender=!0}},{default:o((()=>[f(p(e.title),1)])),_:2},1032,["onClick"])))),128)),d(" 游标 "),c(_,{class:"cursor",style:m({left:20*v.value+"%"})},null,8,["style"])])),_:1}),d(" 滑动容器 "),c(S,{class:"swiper",current:v.value,onChange:a[0]||(a[0]=e=>v.value=e.detail.current)},{default:o((()=>[d(" 滑动项 "),(l(!0),i(u,null,n(s.value,(e=>(l(),r(y,{key:e.title},{default:o((()=>[d(" 订单列表 "),e.isRender?(l(),r(O,{key:0,"order-state":e.orderState},null,8,["order-state"])):d("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["current"])])),_:1})}}}),[["__scopeId","data-v-35436412"]]);export{A as default};
