"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[63613],{3905:(e,s,t)=>{t.d(s,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function l(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?l(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,r,a=function(e,s){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var s=r.useContext(p),t=s;return e&&(t="function"==typeof e?e(s):n(n({},s),e)),t},u=function(e){var s=i(e.components);return r.createElement(p.Provider,{value:s},e.children)},m={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},c=r.forwardRef((function(e,s){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=i(t),d=a,v=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(v,n(n({ref:s},u),{},{components:t})):r.createElement(v,n({ref:s},u))}));function d(e,s){var t=arguments,a=s&&s.mdxType;if("string"==typeof e||a){var l=t.length,n=new Array(l);n[0]=c;var o={};for(var p in s)hasOwnProperty.call(s,p)&&(o[p]=s[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var i=2;i<l;i++)n[i]=t[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97807:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function a(){return a=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,s){if(null==e)return{};var t,r,a=function(e,s){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const n={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},o="x/subspaces",p={unversionedId:"developers/modules/subspaces/overview",id:"version-4.2.0/developers/modules/subspaces/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/01-overview.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/overview",permalink:"/4.2.0/developers/modules/subspaces/overview",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/01-overview.md",tags:[],version:"4.2.0",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/4.2.0/developers/modules/relationships/client"},next:{title:"Concepts",permalink:"/4.2.0/developers/modules/subspaces/concepts"}},i={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],m={toc:u};function c(e){var{components:s}=e,t=l(e,["components"]);return(0,r.kt)("wrapper",a({},m,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"xsubspaces"}),(0,r.kt)("inlineCode",{parentName:"h1"},"x/subspaces")),(0,r.kt)("h2",a({},{id:"abstract"}),"Abstract"),(0,r.kt)("p",null,"This document specifies the subspaces module of Desmos.  "),(0,r.kt)("p",null,"This module allows users to create and manage the representation of different social networks inside which contents will be created."),(0,r.kt)("h2",a({},{id:"contents"}),"Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/concepts"}),"Concepts")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/concepts#subspace"}),"Subspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/concepts#section"}),"Section")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/concepts#user-group"}),"User Group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/concepts#user-permission"}),"User Permission")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/state"}),"State")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#next-subspace-id"}),"Next Subspace ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#subspace"}),"Subspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#next-section-id"}),"Next Section ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#section"}),"Section")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#next-group-id"}),"Next Group ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#user-group"}),"User Group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#user-group-member"}),"User Group Member")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/state#user-permission"}),"User Permission")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/messages"}),"Msg Service")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgcreatesubspace"}),"Msg/CreateSubspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgeditsubspace"}),"Msg/EditSubspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgdeletesubspace"}),"Msg/DeleteSubspace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgcreatesection"}),"Msg/CreateSection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgeditsection"}),"Msg/EditSection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgmovesection"}),"Msg/MoveSection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgdeletesection"}),"Msg/DeleteSection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgcreateusergroup"}),"Msg/CreateUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgeditusergroup"}),"Msg/EditUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgmoveusergroup"}),"Msg/MoveUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgsetusergrouppermissions"}),"Msg/SetUserGroupPermissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgdeleteusergroup"}),"Msg/DeleteUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgaddusertousergroup"}),"Msg/AddUserToUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgremoveuserfromusergroup"}),"Msg/RemoveUserFromUserGroup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/messages#msgsetuserpermissions"}),"Msg/SetUserPermissions")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/events"}),"Events")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/events#handlers"}),"Handlers")," "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/permissions"}),"Permissions"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",a({parentName:"strong"},{href:"/4.2.0/developers/modules/subspaces/client"}),"Client")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/client#cli"}),"CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/client#grpc"}),"gRPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/4.2.0/developers/modules/subspaces/client#rest"}),"REST"))))))}c.isMDXComponent=!0}}]);