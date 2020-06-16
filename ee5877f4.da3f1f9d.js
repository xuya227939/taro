(window.webpackJsonp=window.webpackJsonp||[]).push([[1394],{1530:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(9),o=(t(0),t(1631)),c={title:"Canvas",sidebar_label:"Canvas"},p={id:"version-1.3.42/components/canvas/canvas",title:"Canvas",description:"##### \u753b\u5e03",source:"@site/versioned_docs/version-1.3.42/components/canvas/canvas.md",permalink:"/taro/docs/1.3.42/components/canvas/canvas",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/components/canvas/canvas.md",version:"1.3.42",sidebar_label:"Canvas",sidebar:"version-1.3.42/components",previous:{title:"Map",permalink:"/taro/docs/1.3.42/components/maps/map"},next:{title:"Ad",permalink:"/taro/docs/1.3.42/components/open/ad"}},s=[],i={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u753b\u5e03"},"\u753b\u5e03"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<Canvas />")," \u7ec4\u4ef6\u7684 RN \u7248\u672c\u5c1a\u672a\u5b9e\u73b0\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5c0f\u7a0b\u5e8f\u7aef\u53c2\u6570\u652f\u6301\u8be6\u89c1\u5404\u5c0f\u7a0b\u5e8f\u5b98\u7f51")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Canvas"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/canvas/#canvas"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Canvas"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/component/canvas"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Canvas"),"\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/canvas.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f Canvas"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Canvas \u7ec4\u4ef6\nimport { Canvas } from '@tarojs/components'\n\nclass App extends Components {\n  render () {\n    return (\n      <Canvas style='width: 300px; height: 200px;' canvasId='canvas' />\n    )\n  }\n}\n")))}l.isMDXComponent=!0},1631:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(v,p({ref:n},i,{components:t})):a.a.createElement(v,p({ref:n},i))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);