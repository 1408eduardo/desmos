"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22629],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,y=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40343:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"profile",title:"Query Profile",sidebar_label:"Profile",slug:"profile"},s="Query a profile",a={unversionedId:"developers/queries/profiles/profile",id:"version-2.3/developers/queries/profiles/profile",title:"Query Profile",description:"This query allows you to retrieve the details of a single profile having its DTag or address.",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/profile.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/profile",permalink:"/2.3/developers/queries/profiles/profile",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-2.3/02-developers/04-queries/profiles/profile.md",tags:[],version:"2.3",frontMatter:{id:"profile",title:"Query Profile",sidebar_label:"Profile",slug:"profile"},sidebar:"version-2.3/docs",previous:{title:"Unlink chain account",permalink:"/2.3/developers/transactions/profiles/unlink-chain-account"},next:{title:"Incoming DTag requests",permalink:"/2.3/developers/queries/profiles/incoming-dtag-requests"}},p={},c=[],u={toc:c};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"query-a-profile"}),"Query a profile"),(0,n.kt)("p",null,"This query allows you to retrieve the details of a single profile having its DTag or address. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLI")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"desmos query profiles profile [address_or_dtag]\n\n# Example\n# desmos query profiles profile desmos12a2y7fflz6g4e5gn0mh0n9dkrzllj0q5vx7c6t\n# desmos query profiles profile leonardo\n")))}f.isMDXComponent=!0}}]);