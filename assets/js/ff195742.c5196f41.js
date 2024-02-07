"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[58973],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,u=d["".concat(p,".").concat(h)]||d[h]||f[h]||i;return t?n.createElement(u,l(l({ref:r},c),{},{components:t})):n.createElement(u,l({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62716:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={id:"profile-relationship",title:"profile_relationship",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/queries/profile-relationship",id:"version-4.2.0/graphql/queries/profile-relationship",title:"profile_relationship",description:'fetch data from the table: "profile_relationship"',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/profile-relationship.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/profile-relationship",permalink:"/4.2.0/graphql/queries/profile-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/queries/profile-relationship.mdx",tags:[],version:"4.2.0",frontMatter:{id:"profile-relationship",title:"profile_relationship",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_aggregate",permalink:"/4.2.0/graphql/queries/profile-relationship-aggregate"},next:{title:"profile",permalink:"/4.2.0/graphql/queries/profile"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_relationship_select_column!]</code>)",id:"distinct_on-profile_relationship_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_relationship_order_by!]</code>)",id:"order_by-profile_relationship_order_by",level:4},{value:"<code>where</code> (<code>profile_relationship_bool_exp</code>)",id:"where-profile_relationship_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_relationship</code>",id:"profile_relationship",level:4}],f={toc:c};function d(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "profile_relationship"'),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-graphql"}),"profile_relationship(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): [profile_relationship!]!\n")),(0,n.kt)("h3",o({},{id:"arguments"}),"Arguments"),(0,n.kt)("h4",o({},{id:"distinct_on-profile_relationship_select_column"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../enums/profile-relationship-select-column"}),(0,n.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",o({},{id:"limit-int"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../scalars/int"}),(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",o({},{id:"offset-int"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../scalars/int"}),(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",o({},{id:"order_by-profile_relationship_order_by"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../inputs/profile-relationship-order-by"}),(0,n.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",o({},{id:"where-profile_relationship_bool_exp"}),(0,n.kt)("a",o({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",o({parentName:"h4"},{href:"../inputs/profile-relationship-bool-exp"}),(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",o({},{id:"type"}),"Type"),(0,n.kt)("h4",o({},{id:"profile_relationship"}),(0,n.kt)("a",o({parentName:"h4"},{href:"../objects/profile-relationship"}),(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship"))),(0,n.kt)("p",null,'columns and relationships of "profile_relationship"'))}d.isMDXComponent=!0}}]);