"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(r),f=s,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||n;return r?o.createElement(b,a(a({ref:t},c),{},{components:r})):o.createElement(b,a({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,a=new Array(n);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,a[1]=p;for(var i=2;i<n;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var o=r(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const a={id:"subspace-user-group-stddev-pop-fields",title:"subspace_user_group_stddev_pop_fields",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/objects/subspace-user-group-stddev-pop-fields",id:"version-4.2.0/graphql/objects/subspace-user-group-stddev-pop-fields",title:"subspace_user_group_stddev_pop_fields",description:"aggregate stddev_pop on columns",source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-group-stddev-pop-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-stddev-pop-fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-stddev-pop-fields",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-group-stddev-pop-fields.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-user-group-stddev-pop-fields",title:"subspace_user_group_stddev_pop_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_stddev_fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-stddev-fields"},next:{title:"subspace_user_group_stddev_samp_fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-stddev-samp-fields"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Float</code>)",id:"id-float",level:4},{value:"<code>subspace_id</code> (<code>Float</code>)",id:"subspace_id-float",level:4}],d={toc:c};function u(e){var{components:t}=e,r=n(e,["components"]);return(0,o.kt)("wrapper",s({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"aggregate stddev_pop on columns"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-graphql"}),"type subspace_user_group_stddev_pop_fields {\n  id: Float\n  subspace_id: Float\n}\n")),(0,o.kt)("h3",s({},{id:"fields"}),"Fields"),(0,o.kt)("h4",s({},{id:"id-float"}),(0,o.kt)("a",s({parentName:"h4"},{href:"#"}),(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",s({parentName:"h4"},{href:"../scalars/float"}),(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",s({},{id:"subspace_id-float"}),(0,o.kt)("a",s({parentName:"h4"},{href:"#"}),(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",s({parentName:"h4"},{href:"../scalars/float"}),(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"))}u.isMDXComponent=!0}}]);