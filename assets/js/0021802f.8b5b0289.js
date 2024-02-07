"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[18174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"report-max-fields",title:"report_max_fields",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/objects/report-max-fields",id:"version-4.2.0/graphql/objects/report-max-fields",title:"report_max_fields",description:"aggregate max on columns",source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/report-max-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-max-fields",permalink:"/4.2.0/graphql/objects/report-max-fields",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/objects/report-max-fields.mdx",tags:[],version:"4.2.0",frontMatter:{id:"report-max-fields",title:"report_max_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_avg_fields",permalink:"/4.2.0/graphql/objects/report-avg-fields"},next:{title:"report_min_fields",permalink:"/4.2.0/graphql/objects/report-min-fields"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>message</code> (<code>String</code>)",id:"message-string",level:4},{value:"<code>reporter_address</code> (<code>String</code>)",id:"reporter_address-string",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],d={toc:p};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"aggregate max on columns"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-graphql"}),"type report_max_fields {\n  creation_date: timestamp\n  id: bigint\n  message: String\n  reporter_address: String\n  subspace_id: bigint\n}\n")),(0,n.kt)("h3",a({},{id:"fields"}),"Fields"),(0,n.kt)("h4",a({},{id:"creation_date-timestamp"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/timestamp"}),(0,n.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,n.kt)("h4",a({},{id:"id-bigint"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/bigint"}),(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,n.kt)("h4",a({},{id:"message-string"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",a({},{id:"reporter_address-string"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"reporter_address"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",a({},{id:"subspace_id-bigint"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/bigint"}),(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}m.isMDXComponent=!0}}]);