import{a0 as t,x as e,a6 as a,B as o}from"./index-ed9e365a.js";const s={invoke(t){var a;t.url.startsWith("http")||(t.url="https://pcapi-xiaotuxian-front.itheima.net"+t.url),t.timeout=1e4,t.header={...t.header,"source-clint":"miniapp"};const o=null==(a=e().profile)?void 0:a.token;o&&(t.header.Authorizeation=o)}};t("request",s),t("uploadFile",s);const i=t=>new Promise(((s,i)=>{a({...t,success(t){t.statusCode>=200&&t.statusCode<300?s(t.data):401===t.statusCode?(e(),i(t)):(o({icon:"none",title:t.data.msg||"请求错误"}),i(t))},fail(t){o({icon:"none",title:"网络错误，换个网络试试"}),i(t)}})}));export{i as h};
