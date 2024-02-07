"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},i="Permissions",l={unversionedId:"developers/modules/subspaces/permissions",id:"developers/modules/subspaces/permissions",title:"Permissions",description:"Based on which x/subspaces related action your users want to perform, they need to be granted with one or more",source:"@site/docs/02-developers/02-modules/subspaces/06-permissions.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/permissions",permalink:"/developers/modules/subspaces/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/docs/02-developers/02-modules/subspaces/06-permissions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/developers/modules/subspaces/events"},next:{title:"Client",permalink:"/developers/modules/subspaces/client"}},p={},m=[],d={toc:m};function c(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"permissions"}),"Permissions"),(0,n.kt)("p",null,"Based on which ",(0,n.kt)("inlineCode",{parentName:"p"},"x/subspaces")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),(0,n.kt)("strong",{parentName:"th"},"Permission Value")),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),(0,n.kt)("strong",{parentName:"th"},"Permission Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"EDIT_SUBSPACE")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to change the subspace's information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"DELETE_SUBSPACE")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to delete a subspace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_SECTIONS")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's sections")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_GROUPS")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's groups")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to set other users' permissions except for ",(0,n.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_TREASURY_AUTHORIZATIONS")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's treasury authorizations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"MANAGE_ALLOWANCES")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to manage the subspace's fee allowances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"EVERYTHING")),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Allows to do everything")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),"\nNote that when setting permission ",(0,n.kt)("inlineCode",{parentName:"p"},"EVERYTHING")," to a user, that user will de facto be the same as the subspace owner,\nhaving control over everything and being able to do everything within that subspace. Use this with caution.")))}c.isMDXComponent=!0}}]);