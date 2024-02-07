"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),i=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?s.createElement(m,o(o({ref:t},c),{},{components:r})):s.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<a;i++)o[i]=r[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});r(67294);var s=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={id:"subspace-user-group-stddev-samp-fields",title:"subspace_user_group_stddev_samp_fields",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/objects/subspace-user-group-stddev-samp-fields",id:"version-4.2.0/graphql/objects/subspace-user-group-stddev-samp-fields",title:"subspace_user_group_stddev_samp_fields",description:"aggregate stddev_samp on columns",source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-group-stddev-samp-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-stddev-samp-fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-stddev-samp-fields",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/objects/subspace-user-group-stddev-samp-fields.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-user-group-stddev-samp-fields",title:"subspace_user_group_stddev_samp_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_stddev_pop_fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-stddev-pop-fields"},next:{title:"subspace_user_group_sum_fields",permalink:"/4.2.0/graphql/objects/subspace-user-group-sum-fields"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Float</code>)",id:"id-float",level:4},{value:"<code>subspace_id</code> (<code>Float</code>)",id:"subspace_id-float",level:4}],u={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,s.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"aggregate stddev_samp on columns"),(0,s.kt)("pre",null,(0,s.kt)("code",n({parentName:"pre"},{className:"language-graphql"}),"type subspace_user_group_stddev_samp_fields {\n  id: Float\n  subspace_id: Float\n}\n")),(0,s.kt)("h3",n({},{id:"fields"}),"Fields"),(0,s.kt)("h4",n({},{id:"id-float"}),(0,s.kt)("a",n({parentName:"h4"},{href:"#"}),(0,s.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,s.kt)("a",n({parentName:"h4"},{href:"../scalars/float"}),(0,s.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,s.kt)("h4",n({},{id:"subspace_id-float"}),(0,s.kt)("a",n({parentName:"h4"},{href:"#"}),(0,s.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,s.kt)("a",n({parentName:"h4"},{href:"../scalars/float"}),(0,s.kt)("inlineCode",{parentName:"a"},"Float")),")"))}d.isMDXComponent=!0}}]);