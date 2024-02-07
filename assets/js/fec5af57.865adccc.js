"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13122],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,g=u["".concat(c,".").concat(b)]||u[b]||l[b]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96447:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"subspace-registered-reaction-avg-order-by",title:"subspace_registered_reaction_avg_order_by",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql/inputs/subspace-registered-reaction-avg-order-by",id:"version-4.2.0/graphql/inputs/subspace-registered-reaction-avg-order-by",title:"subspace_registered_reaction_avg_order_by",description:'order by avg() on columns of table "subspaceregisteredreaction"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-registered-reaction-avg-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-avg-order-by",permalink:"/4.2.0/graphql/inputs/subspace-registered-reaction-avg-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-registered-reaction-avg-order-by.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-registered-reaction-avg-order-by",title:"subspace_registered_reaction_avg_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_aggregate_order_by",permalink:"/4.2.0/graphql/inputs/subspace-registered-reaction-aggregate-order-by"},next:{title:"subspace_registered_reaction_bool_exp",permalink:"/4.2.0/graphql/inputs/subspace-registered-reaction-bool-exp"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],l={toc:d};function u(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by avg() on columns of table "subspace_registered_reaction"'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-graphql"}),"input subspace_registered_reaction_avg_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",o({},{id:"fields"}),"Fields"),(0,n.kt)("h4",o({},{id:"id-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",o({},{id:"subspace_id-order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);