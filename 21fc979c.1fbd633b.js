(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1631:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=p(a),d=r,m=j["".concat(c,".").concat(d)]||j[d]||O[d]||b;return a?n.a.createElement(m,l({ref:t},o,{components:a})):n.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},365:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),b=(a(0),a(1631)),c={title:"Taro.downloadFile(param)",sidebar_label:"downloadFile"},l={id:"version-3.0.0-beta.5/apis/network/fileTransfer/downloadFile",title:"Taro.downloadFile(param)",description:"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/network/fileTransfer/downloadFile.md",permalink:"/taro/docs/3.0.0-beta.5/apis/network/fileTransfer/downloadFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/network/fileTransfer/downloadFile.md",version:"3.0.0-beta.5",sidebar_label:"downloadFile",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.uploadFile(param)",permalink:"/taro/docs/3.0.0-beta.5/apis/network/fileTransfer/uploadFile"},next:{title:"Taro.request(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/network/request/request"}},i=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"Promise&lt;object res&gt; promise",id:"promiseobject-res-promise",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u4e0b\u8f7d\u6587\u4ef6\u8d44\u6e90\u5230\u672c\u5730\u3002\u5ba2\u6237\u7aef\u76f4\u63a5\u53d1\u8d77\u4e00\u4e2a HTTPS GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u8def\u5f84\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002"),Object(b.b)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u5728\u670d\u52a1\u7aef\u54cd\u5e94\u7684 header \u4e2d\u6307\u5b9a\u5408\u7406\u7684 Content-Type \u5b57\u6bb5\uff0c\u4ee5\u4fdd\u8bc1\u5ba2\u6237\u7aef\u6b63\u786e\u5904\u7406\u6587\u4ef6\u7c7b\u578b\u3002"),Object(b.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.downloadFile.html"}),Object(b.b)("inlineCode",{parentName:"a"},"wx.downloadFile")),"\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"object-param"},"object param"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"url"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e0b\u8f7d\u8d44\u6e90\u7684 url")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[header]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"object")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HTTP \u8bf7\u6c42\u7684 Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[filePath]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6307\u5b9a\u6587\u4ef6\u4e0b\u8f7d\u540e\u5b58\u50a8\u7684\u8def\u5f84(h5\u7aef\u8be5\u53c2\u6570\u65e0\u6548)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[success()]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[fail()]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[complete()]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),Object(b.b)("h3",{id:"promiseobject-res-promise"},"Promise","<","object res",">"," promise"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"promise.headersReceive(callback)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u63a5\u6536\u5230http header\u7684\u56de\u8c03")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"promise.progress(callback)"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7ed1\u5b9a\u8bf7\u6c42\u8fdb\u5ea6\u66f4\u65b0\u7684\u56de\u8c03")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"promise.abort()"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e2d\u65ad\u8bf7\u6c42")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"res.statusCode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"number")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u7684\u8fd4\u56de\u72b6\u6001\u7801")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"res.tempFilePath"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4e0b\u8f7d\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.downloadFile(params).then(...)\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.downloadFile"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);