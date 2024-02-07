"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},i="Seed nodes",l={unversionedId:"mainnet/seeds",id:"mainnet/seeds",title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the mainnet.",source:"@site/docs/06-mainnet/02-seeds.md",sourceDirName:"06-mainnet",slug:"/mainnet/seeds",permalink:"/mainnet/seeds",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/docs/06-mainnet/02-seeds.md",tags:[],version:"current",lastUpdatedAt:1670002176,formattedLastUpdatedAt:"Dec 2, 2022",sidebarPosition:2,frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"docs",previous:{title:"Genesis File",permalink:"/mainnet/genesis-file"},next:{title:"Security",permalink:"/mainnet/security"}},c={},d=[],p={toc:d};function u(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"seed-nodes"}),"Seed nodes"),(0,r.kt)("admonition",o({},{title:"Mainnet only   ",type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"The following seed nodes are to be used when configuring a full node for the ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),".\nIf you are looking for testnet seed nodes, please refer to ",(0,r.kt)("a",o({parentName:"p"},{href:"/testnet/join-public/seeds"}),"this")," instead.  ")),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/desmos-labs/mainnet#seed-nodes"}),"mainnet repo")," to get the seed nodes."),(0,r.kt)("p",null,"Add the seed nodes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file each one\nseparated by a comma like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-toml"}),'seeds = "seed1,seed2,..."\n')))}u.isMDXComponent=!0}}]);