"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69091],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(t),u=o,b=f["".concat(p,".").concat(u)]||f[u]||c[u]||i;return t?n.createElement(b,a(a({ref:r},s),{},{components:t})):n.createElement(b,a({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51316:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"profile-relationship-order-by",title:"profile_relationship_order_by",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/profile-relationship-order-by",id:"version-4.2.0/graphql/inputs/profile-relationship-order-by",title:"profile_relationship_order_by",description:'Ordering options when selecting data from "profile_relationship".',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/profile-relationship-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-relationship-order-by",permalink:"/4.2.0/graphql/inputs/profile-relationship-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/inputs/profile-relationship-order-by.mdx",tags:[],version:"4.2.0",frontMatter:{id:"profile-relationship-order-by",title:"profile_relationship_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_min_order_by",permalink:"/4.2.0/graphql/inputs/profile-relationship-min-order-by"},next:{title:"profiles_params_bool_exp",permalink:"/4.2.0/graphql/inputs/profiles-params-bool-exp"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>receiver</code> (<code>profile_order_by</code>)",id:"receiver-profile_order_by",level:4},{value:"<code>receiver_address</code> (<code>order_by</code>)",id:"receiver_address-order_by",level:4},{value:"<code>sender</code> (<code>profile_order_by</code>)",id:"sender-profile_order_by",level:4},{value:"<code>sender_address</code> (<code>order_by</code>)",id:"sender_address-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],c={toc:s};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "profile_relationship".'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-graphql"}),"input profile_relationship_order_by {\n  receiver: profile_order_by\n  receiver_address: order_by\n  sender: profile_order_by\n  sender_address: order_by\n  subspace: order_by\n}\n")),(0,n.kt)("h3",o({},{id:"fields"}),"Fields"),(0,n.kt)("h4",o({},{id:"receiver-profile_order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"receiver"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../inputs/profile-order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,n.kt)("h4",o({},{id:"receiver_address-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",o({},{id:"sender-profile_order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"sender"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../inputs/profile-order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,n.kt)("h4",o({},{id:"sender_address-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",o({},{id:"subspace-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}f.isMDXComponent=!0}}]);