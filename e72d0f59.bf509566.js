(window.webpackJsonp=window.webpackJsonp||[]).push([[1358],{1494:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(9),c=(a(0),a(1631)),b={title:"Camera",sidebar_label:"Camera"},o={id:"version-3.0.0-beta.5/components/media/camera",title:"Camera",description:"##### \u7cfb\u7edf\u76f8\u673a",source:"@site/versioned_docs/version-3.0.0-beta.5/components/media/camera.md",permalink:"/taro/docs/3.0.0-beta.5/components/media/camera",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/components/media/camera.md",version:"3.0.0-beta.5",sidebar_label:"Camera",sidebar:"version-3.0.0-beta.5/components",previous:{title:"Video",permalink:"/taro/docs/3.0.0-beta.5/components/media/video"},next:{title:"Map",permalink:"/taro/docs/3.0.0-beta.5/components/maps/map"}},i=[],p={rightToc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u7cfb\u7edf\u76f8\u673a"},"\u7cfb\u7edf\u76f8\u673a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"ReactNative"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"devicePosition"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"back"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u524d\u7f6e\u6216\u540e\u7f6e\uff0c\u503c\u4e3a front, back")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"onStop"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EventHandle"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u6444\u50cf\u5934\u5728\u975e\u6b63\u5e38\u7ec8\u6b62\u65f6\u89e6\u53d1\uff0c\u5982\u9000\u51fa\u540e\u53f0\u7b49\u60c5\u51b5")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"onError"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EventHandle"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7528\u6237\u4e0d\u5141\u8bb8\u4f7f\u7528\u6444\u50cf\u5934\u65f6\u89e6\u53d1")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Camera"),"\u3002"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/media/#camera"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Camera"),"\u3002"))}l.isMDXComponent=!0},1631:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),j=r,d=m["".concat(b,".").concat(j)]||m[j]||O[j]||c;return a?n.a.createElement(d,o({ref:t},p,{components:a})):n.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var p=2;p<c;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);