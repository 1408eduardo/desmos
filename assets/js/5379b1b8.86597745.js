"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[12250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=s,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});r(67294);var n=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const a={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},i="Permissions",l={unversionedId:"developers/modules/subspaces/permissions",id:"version-4.2.0/developers/modules/subspaces/permissions",title:"Permissions",description:"Based on which x/subspaces related action your users want to perform, they need to be granted with one or more",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/06-permissions.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/permissions",permalink:"/4.2.0/developers/modules/subspaces/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/06-permissions.md",tags:[],version:"4.2.0",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/4.2.0/developers/modules/subspaces/events"},next:{title:"Client",permalink:"/4.2.0/developers/modules/subspaces/client"}},p={},m=[],c={toc:m};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",s({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"permissions"}),"Permissions"),(0,n.kt)("p",null,"Based on which ",(0,n.kt)("inlineCode",{parentName:"p"},"x/subspaces")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),(0,n.kt)("strong",{parentName:"th"},"Permission Value")),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),(0,n.kt)("strong",{parentName:"th"},"Permission Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"EDIT_SUBSPACE")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to change the subspace's information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"DELETE_SUBSPACE")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to delete a subspace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_SECTIONS")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's sections")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_GROUPS")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's groups")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to set other users' permissions except for ",(0,n.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"EVERYTHING")),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"Allows to do everything")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),"\nNote that when setting permission ",(0,n.kt)("inlineCode",{parentName:"p"},"EVERYTHING")," to a user, that user will de facto be the same as the subspace owner, having control over everything and being able to do everything within that subspace. Use this with caution.")))}d.isMDXComponent=!0}}]);