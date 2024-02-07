"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(r),d=a,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},59068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/queries/subspace-by-pk",id:"version-4.2.0/graphql/queries/subspace-by-pk",title:"subspace_by_pk",description:'fetch data from the table: "subspace" using primary key columns',source:"@site/versioned_docs/version-4.2.0/07-graphql/queries/subspace-by-pk.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-by-pk",permalink:"/4.2.0/graphql/queries/subspace-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/queries/subspace-by-pk.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reports_params",permalink:"/4.2.0/graphql/queries/reports-params"},next:{title:"subspace_free_text_params_by_pk",permalink:"/4.2.0/graphql/queries/subspace-free-text-params-by-pk"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],u={toc:l};function b(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "subspace" using primary key columns'),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-graphql"}),"subspace_by_pk(\n  id: bigint!\n): subspace\n")),(0,n.kt)("h3",a({},{id:"arguments"}),"Arguments"),(0,n.kt)("h4",a({},{id:"id-bigint"}),(0,n.kt)("a",a({parentName:"h4"},{href:"#"}),(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",a({parentName:"h4"},{href:"../scalars/bigint"}),(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h3",a({},{id:"type"}),"Type"),(0,n.kt)("h4",a({},{id:"subspace"}),(0,n.kt)("a",a({parentName:"h4"},{href:"../objects/subspace"}),(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,n.kt)("p",null,'columns and relationships of "subspace"'))}b.isMDXComponent=!0}}]);