"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32358],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>b});var t=n(67294);function s(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){s(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function r(e,o){if(null==e)return{};var n,t,s=function(e,o){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(s[n]=e[n]);return s}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=t.createContext({}),c=function(e){var o=t.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):p(p({},o),e)),n},l=function(e){var o=c(e.components);return t.createElement(i.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),u=c(n),b=s,d=u["".concat(i,".").concat(b)]||u[b]||_[b]||a;return n?t.createElement(d,p(p({ref:o},l),{},{components:n})):t.createElement(d,p({ref:o},l))}));function b(e,o){var n=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var a=n.length,p=new Array(a);p[0]=u;var r={};for(var i in o)hasOwnProperty.call(o,i)&&(r[i]=o[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,p[1]=r;for(var c=2;c<a;c++)p[c]=n[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9049:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});n(67294);var t=n(3905);function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function a(e,o){if(null==e)return{};var n,t,s=function(e,o){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(s[n]=e[n]);return s}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const p={id:"subspace-section-bool-exp",title:"subspace_section_bool_exp",hide_table_of_contents:!1},r=void 0,i={unversionedId:"graphql/inputs/subspace-section-bool-exp",id:"version-4.2.0/graphql/inputs/subspace-section-bool-exp",title:"subspace_section_bool_exp",description:"Boolean expression to filter rows from the table \"subspace_section\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-section-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-bool-exp",permalink:"/4.2.0/graphql/inputs/subspace-section-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-section-bool-exp.mdx",tags:[],version:"4.2.0",frontMatter:{id:"subspace-section-bool-exp",title:"subspace_section_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_avg_order_by",permalink:"/4.2.0/graphql/inputs/subspace-section-avg-order-by"},next:{title:"subspace_section_max_order_by",permalink:"/4.2.0/graphql/inputs/subspace-section-max-order-by"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_section_bool_exp!]</code>)",id:"_and-subspace_section_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_section_bool_exp</code>)",id:"_not-subspace_section_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_section_bool_exp!]</code>)",id:"_or-subspace_section_bool_exp",level:4},{value:"<code>children</code> (<code>subspace_section_bool_exp</code>)",id:"children-subspace_section_bool_exp",level:4},{value:"<code>description</code> (<code>String_comparison_exp</code>)",id:"description-string_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4},{value:"<code>parent</code> (<code>subspace_section_bool_exp</code>)",id:"parent-subspace_section_bool_exp",level:4},{value:"<code>posts</code> (<code>post_bool_exp</code>)",id:"posts-post_bool_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4},{value:"<code>user_groups</code> (<code>subspace_user_group_bool_exp</code>)",id:"user_groups-subspace_user_group_bool_exp",level:4},{value:"<code>user_permissions</code> (<code>subspace_user_permission_bool_exp</code>)",id:"user_permissions-subspace_user_permission_bool_exp",level:4}],_={toc:l};function u(e){var{components:o}=e,n=a(e,["components"]);return(0,t.kt)("wrapper",s({},_,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_section\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-graphql"}),"input subspace_section_bool_exp {\n  _and: [subspace_section_bool_exp!]\n  _not: subspace_section_bool_exp\n  _or: [subspace_section_bool_exp!]\n  children: subspace_section_bool_exp\n  description: String_comparison_exp\n  id: bigint_comparison_exp\n  name: String_comparison_exp\n  parent: subspace_section_bool_exp\n  posts: post_bool_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n  user_groups: subspace_user_group_bool_exp\n  user_permissions: subspace_user_permission_bool_exp\n}\n")),(0,t.kt)("h3",s({},{id:"fields"}),"Fields"),(0,t.kt)("h4",s({},{id:"_and-subspace_section_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-section-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_section_bool_exp!]")),")"),(0,t.kt)("h4",s({},{id:"_not-subspace_section_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-section-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"_or-subspace_section_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-section-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"[subspace_section_bool_exp!]")),")"),(0,t.kt)("h4",s({},{id:"children-subspace_section_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"children"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-section-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"description-string_comparison_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/string-comparison-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",s({},{id:"id-bigint_comparison_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/bigint-comparison-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",s({},{id:"name-string_comparison_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/string-comparison-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",s({},{id:"parent-subspace_section_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"parent"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-section-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_section_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"posts-post_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/post-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"subspace-subspace_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"subspace_id-bigint_comparison_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/bigint-comparison-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",s({},{id:"user_groups-subspace_user_group_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-user-group-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,t.kt)("h4",s({},{id:"user_permissions-subspace_user_permission_bool_exp"}),(0,t.kt)("a",s({parentName:"h4"},{href:"#"}),(0,t.kt)("inlineCode",{parentName:"a"},"user_permissions"))," (",(0,t.kt)("a",s({parentName:"h4"},{href:"../inputs/subspace-user-permission-bool-exp"}),(0,t.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"))}u.isMDXComponent=!0}}]);