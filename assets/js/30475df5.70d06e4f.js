"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48577],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(a),g=n,N=k["".concat(d,".").concat(g)]||k[g]||i[g]||l;return a?r.createElement(N,s(s({ref:e},o),{},{components:a})):r.createElement(N,s({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,s[1]=p;for(var m=2;m<l;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40243:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>o});a(67294);var r=a(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},p="Events",d={unversionedId:"developers/modules/posts/events",id:"developers/modules/posts/events",title:"Events",description:"The posts module emits the following events:",source:"@site/docs/02-developers/02-modules/posts/05-events.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/events",permalink:"/developers/modules/posts/events",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/docs/02-developers/02-modules/posts/05-events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/posts/messages"},next:{title:"Permissions",permalink:"/developers/modules/posts/permissions"}},m={},o=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreatePost",id:"msgcreatepost",level:3},{value:"MsgEditPost",id:"msgeditpost",level:3},{value:"MsgDeletePost",id:"msgdeletepost",level:3},{value:"MsgAddPostAttachment",id:"msgaddpostattachment",level:3},{value:"MsgRemovePostAttachment",id:"msgremovepostattachment",level:3},{value:"MsgAnswerPoll",id:"msganswerpoll",level:3},{value:"MsgUpdateParams",id:"msgupdateparams",level:3},{value:"MsgMovePost",id:"msgmovepost",level:3},{value:"MsgRequestPostOwnerTransfer",id:"msgrequestpostownertransfer",level:3},{value:"MsgCancelPostOwnerTransferRequest",id:"msgcancelpostownertransferrequest",level:3},{value:"MsgAcceptPostOwnerTransferRequest",id:"msgacceptpostownertransferrequest",level:3},{value:"MsgRefusePostOwnerTransferRequest",id:"msgrefusepostownertransferrequest",level:3},{value:"Keeper",id:"keeper",level:2}],i={toc:o};function k(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"events"}),"Events"),(0,r.kt)("p",null,"The posts module emits the following events:"),(0,r.kt)("h2",n({},{id:"handlers"}),"Handlers"),(0,r.kt)("h3",n({},{id:"msgcreatepost"}),"MsgCreatePost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"created_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"created_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"section_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{sectionID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"created_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"created_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"author"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"created_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"creation_time"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{CreationTime}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgCreatePost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgeditpost"}),"MsgEditPost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"edited_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"edited_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"edited_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"last_edit_time"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{LastEditTime}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgEditPost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgdeletepost"}),"MsgDeletePost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"deleted_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"deleted_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgDeletePost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgaddpostattachment"}),"MsgAddPostAttachment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"added_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"added_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"added_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"attachment_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{attachmentID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"added_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"last_edit_time"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{lastEditTime}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgAddPostAttachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgremovepostattachment"}),"MsgRemovePostAttachment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"removed_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"removed_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"removed_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"attachment_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{attachmentID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"removed_post_attachment"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"last_edit_time"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{lastEditTime}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgRemovePostAttachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msganswerpoll"}),"MsgAnswerPoll"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"answered_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"answered_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"answered_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"poll_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{pollID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgAnswerPoll")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgupdateparams"}),"MsgUpdateParams"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgUpdateParams")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgmovepost"}),"MsgMovePost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"moved_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"moved_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"moved_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"new_subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{newSubspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"moved_post"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"new_post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{newPostID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgMovePost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgrequestpostownertransfer"}),"MsgRequestPostOwnerTransfer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"requested_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"requested_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"requested_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"receiver"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{receiverAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"requested_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{senderAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgRequestPostOwnerTransfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgcancelpostownertransferrequest"}),"MsgCancelPostOwnerTransferRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"canceled_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"canceled_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"canceled_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{senderAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgCancelPostOwnerTransferRequest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgacceptpostownertransferrequest"}),"MsgAcceptPostOwnerTransferRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"accepted_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"accepted_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"accepted_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"new_subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{newSubspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"accepted_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"new_post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{newPostID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"accepted_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"receiver"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{receiverAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgAcceptPostOwnerTransferRequest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h3",n({},{id:"msgrefusepostownertransferrequest"}),"MsgRefusePostOwnerTransferRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"refused_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"refused_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"refused_post_owner_transfer"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"receiver"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{receiverAddress}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"module"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"posts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"action"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"desmos.posts.v3.MsgRefusePostOwnerTransferRequest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"message"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"sender"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{userAddress}")))),(0,r.kt)("h2",n({},{id:"keeper"}),"Keeper"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Key")),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),(0,r.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"tallied_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"subspace_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{subspaceID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"tallied_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"post_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{postID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"tallied_poll"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"poll_id"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"{pollID}")))))}k.isMDXComponent=!0}}]);