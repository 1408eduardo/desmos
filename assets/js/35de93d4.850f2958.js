"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39846],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>l});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),l=o,m=d["".concat(p,".").concat(l)]||d[l]||b[l]||s;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63652:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",hide_table_of_contents:!1},u=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-member-order-by",id:"version-4.2.0/graphql/inputs/subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",description:'Ordering options when selecting data from "subspaceusergroup_member".',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-order-by",permalink:"/4.2.0/graphql/inputs/subspace-user-group-member-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-order-by.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-user-group-member-order-by",title:"subspace_user_group_member_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_min_order_by",permalink:"/4.2.0/graphql/inputs/subspace-user-group-member-min-order-by"},next:{title:"subspace_user_group_min_order_by",permalink:"/4.2.0/graphql/inputs/subspace-user-group-min-order-by"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>group</code> (<code>subspace_user_group_order_by</code>)",id:"group-subspace_user_group_order_by",level:4},{value:"<code>member_address</code> (<code>order_by</code>)",id:"member_address-order_by",level:4}],b={toc:c};function d(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)("wrapper",o({},b,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "subspace_user_group_member".'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-graphql"}),"input subspace_user_group_member_order_by {\n  group: subspace_user_group_order_by\n  member_address: order_by\n}\n")),(0,n.kt)("h3",o({},{id:"fields"}),"Fields"),(0,n.kt)("h4",o({},{id:"group-subspace_user_group_order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../inputs/subspace-user-group-order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_group_order_by")),")"),(0,n.kt)("h4",o({},{id:"member_address-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}d.isMDXComponent=!0}}]);