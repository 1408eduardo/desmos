"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),f=a,u=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"post-min-fields",title:"post_min_fields",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/objects/post-min-fields",id:"version-4.2.0/graphql/objects/post-min-fields",title:"post_min_fields",description:"aggregate min on columns",source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/post-min-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-min-fields",permalink:"/4.2.0/graphql/objects/post-min-fields",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/objects/post-min-fields.mdx",tags:[],version:"4.2.0",frontMatter:{id:"post-min-fields",title:"post_min_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention",permalink:"/4.2.0/graphql/objects/post-mention"},next:{title:"post_reference",permalink:"/4.2.0/graphql/objects/post-reference"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>String</code>)",id:"author_address-string",level:4},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>external_id</code> (<code>String</code>)",id:"external_id-string",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>last_edited_date</code> (<code>timestamp</code>)",id:"last_edited_date-timestamp",level:4},{value:"<code>reply_settings</code> (<code>String</code>)",id:"reply_settings-string",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4},{value:"<code>text</code> (<code>String</code>)",id:"text-string",level:4}],c={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"aggregate min on columns"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-graphql"}),"type post_min_fields {\n  author_address: String\n  creation_date: timestamp\n  external_id: String\n  id: bigint\n  last_edited_date: timestamp\n  reply_settings: String\n  subspace_id: bigint\n  text: String\n}\n")),(0,r.kt)("h3",a({},{id:"fields"}),"Fields"),(0,r.kt)("h4",a({},{id:"author_address-string"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",a({},{id:"creation_date-timestamp"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/timestamp"}),(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,r.kt)("h4",a({},{id:"external_id-string"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"external_id"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",a({},{id:"id-bigint"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/bigint"}),(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",a({},{id:"last_edited_date-timestamp"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"last_edited_date"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/timestamp"}),(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,r.kt)("h4",a({},{id:"reply_settings-string"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"reply_settings"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",a({},{id:"subspace_id-bigint"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/bigint"}),(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",a({},{id:"text-string"}),(0,r.kt)("a",a({parentName:"h4"},{href:"#"}),(0,r.kt)("inlineCode",{parentName:"a"},"text"))," (",(0,r.kt)("a",a({parentName:"h4"},{href:"../scalars/string"}),(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);