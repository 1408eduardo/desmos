"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[71271],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>c});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),i=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},m=function(e){var r=i(e.components);return o.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(t),c=a,v=u["".concat(p,".").concat(c)]||u[c]||d[c]||s;return t?o.createElement(v,n(n({ref:r},m),{},{components:t})):o.createElement(v,n({ref:r},m))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,n=new Array(s);n[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var i=2;i<s;i++)n[i]=t[i];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51493:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>m});t(67294);var o=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const n={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},l="x/reports",p={unversionedId:"developers/modules/reports/overview",id:"developers/modules/reports/overview",title:"Overview",description:"Abstract",source:"@site/docs/02-developers/02-modules/reports/01-overview.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/overview",permalink:"/developers/modules/reports/overview",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/docs/02-developers/02-modules/reports/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/developers/modules/relationships/client"},next:{title:"Concepts",permalink:"/developers/modules/reports/concepts"}},i={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],d={toc:m};function u(e){var{components:r}=e,t=s(e,["components"]);return(0,o.kt)("wrapper",a({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",a({},{id:"xreports"}),(0,o.kt)("inlineCode",{parentName:"h1"},"x/reports")),(0,o.kt)("h2",a({},{id:"abstract"}),"Abstract"),(0,o.kt)("p",null,"This document specifies the reports module of Desmos.  "),(0,o.kt)("p",null,"This module handles the creation and management of a reporting system toward content and users."),(0,o.kt)("h2",a({},{id:"contents"}),"Contents"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/concepts"}),"Concepts")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/concepts#report"}),"Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/concepts#user-target"}),"User Target")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/concepts#post-target"}),"Post Target")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/concepts#reason"}),"Reason")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/state"}),"State")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#next-report-id"}),"Next Report ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#report"}),"Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#posts-report"}),"Post Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#user-report"}),"User Report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#next-reason-id"}),"Next Reason ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/state#reason"}),"Reason")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/messages"}),"Msg Service")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/messages#msgcreatereport"}),"Msg/CreateReport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/messages#msgdeletereport"}),"Msg/DeleteReport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/messages#msgsupportstandardreason"}),"Msg/SupportStandardReason")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/messages#msgaddreason"}),"Msg/AddReason")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/messages#msgremovereason"}),"Msg/RemoveReason")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/events"}),"Events")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/events#handlers"}),"Handlers")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/permissions"}),"Permissions"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/params"}),"Parameters"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",a({parentName:"strong"},{href:"/developers/modules/reports/client"}),"Client")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/client#cli"}),"CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/client#grpc"}),"gRPC")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/developers/modules/reports/client#rest"}),"REST"))))))}u.isMDXComponent=!0}}]);