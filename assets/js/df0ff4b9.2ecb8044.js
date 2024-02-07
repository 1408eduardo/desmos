"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},s="ADR 002: Mutual DTags exchange",l={unversionedId:"architecture/adr-002-mutual-dtags-exchange",id:"architecture/adr-002-mutual-dtags-exchange",title:"ADR 002: Mutual DTags exchange",description:"Changelog",source:"@site/docs/architecture/adr-002-mutual-dtags-exchange.md",sourceDirName:"architecture",slug:"/architecture/adr-002-mutual-dtags-exchange",permalink:"/architecture/adr-002-mutual-dtags-exchange",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/docs/architecture/adr-002-mutual-dtags-exchange.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ADR 001: Change chain link plain text encoding to hex",permalink:"/architecture/adr-001-change-chain-links-plain-text-encoding-to-hex"},next:{title:"ADR 003: Remove custom JSON tags from Proto files",permalink:"/architecture/adr-003-remove-custom-json-tags-from-profo-files"}},c={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],p={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"adr-002-mutual-dtags-exchange"}),"ADR 002: Mutual DTags exchange"),(0,n.kt)("h2",a({},{id:"changelog"}),"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"October 8th, 2021: First draft;"),(0,n.kt)("li",{parentName:"ul"},"October 11th, 2021: Moved from draft to proposed;"),(0,n.kt)("li",{parentName:"ul"},"October 18th, 2021: First review;"),(0,n.kt)("li",{parentName:"ul"},"October 18th, 2021: Second review;"),(0,n.kt)("li",{parentName:"ul"},"October 18th, 2021: Third review;"),(0,n.kt)("li",{parentName:"ul"},"October 18th, 2021: Fourth review;"),(0,n.kt)("li",{parentName:"ul"},"October 19th, 2021: Fifth review.")),(0,n.kt)("h2",a({},{id:"status"}),"Status"),(0,n.kt)("p",null,"ACCEPTED Implemented"),(0,n.kt)("h2",a({},{id:"abstract"}),"Abstract"),(0,n.kt)("p",null,"We SHOULD edit the inner logic of the DTag transfer acceptance in order to make\nthe mutual exchange of DTags possible between users. "),(0,n.kt)("h2",a({},{id:"context"}),"Context"),(0,n.kt)("p",null,"Currently, the DTag transfer process doesn't allow two users to swap their DTag when accepting a transfer request.\nFor example, if Alice and Bob want to exchange their own DTag with each other, they need to follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Alice transfers the DTag ",(0,n.kt)("inlineCode",{parentName:"li"},"@alice")," to Bob;"),(0,n.kt)("li",{parentName:"ol"},"Alice selects a random temporary DTag (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"@charles"),");"),(0,n.kt)("li",{parentName:"ol"},"Alice edits her profile to select the ",(0,n.kt)("inlineCode",{parentName:"li"},"@bob")," DTag.")),(0,n.kt)("p",null,"Although this flow works, in between steps 2 and 3, a third user MIGHT create a profile with the now free ",(0,n.kt)("inlineCode",{parentName:"p"},"@bob")," DTag before Alice does.\nIf this happens, Alice will be forced to choose a new DTag or send a new transfer request to the third user in order to\nobtain Bob's original DTag. For this reason, we should make it possible for the DTag transfer recipient to claim the\nsender's original DTag without performing additional steps later."),(0,n.kt)("h2",a({},{id:"decision"}),"Decision"),(0,n.kt)("p",null,"In order to properly support DTag swaps, we will edit how ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgAcceptDTagTransferRequest")," are handled in order to allow\nthe request receiver to specify the request sender's DTag as their new DTag."),(0,n.kt)("p",null,"To make this more clear to the users, we can add a description with ",(0,n.kt)("inlineCode",{parentName:"p"},"Short")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Long")," to specify this new behavior:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-go"}),'func GetCmdAcceptDTagTransfer() *cobra.Command {\ncmd := &cobra.Command{\nUse:   "accept-dtag-transfer-request [DTag] [address]",\n...\nShort:  `Accept a DTag transfer request made by the user with the given address.\nWhen accepting the request, you can specify the request recipient DTag as your new DTag. \nIf this happens, your DTag and the other user\'s one will be effectively swapped.`\n...\n}\n')),(0,n.kt)("p",null,"The major change will however be inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"AcceptDTagTransferRequest")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"msgServer")," implementation for\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"x/profiles")," module. Here we need to make sure that if the accepting user specifies a DTag that is equal to the one\nof the receiving user, the method correctly handles the request by swapping users DTags:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-go"}),"func (k msgServer) AcceptDTagTransferRequest(goCtx context.Context, msg *types.MsgAcceptDTagTransferRequest) (*types.MsgAcceptDTagTransferRequestResponse, error) {\n    ...\n    // Check for an existent profile of the receiving user\n    receiverProfile, exist, err := k.GetProfile(ctx, msg.Sender)\n    if err != nil {\n        return nil, err\n    }\n\n    if exist && msg.NewDTag == receiverProfile.DTag {\n        err = k.storeProfileWithoutDTagCheck(ctx, currentOwnerProfile)\n        if err != nil {\n            return nil, err\n        }\n    } else {\n        err = k.StoreProfile(ctx, currentOwnerProfile)\n        if err != nil {\n            return nil, err\n        }\n    }\n    ...\n}\n")),(0,n.kt)("p",null,"Here follows the specification of the new ",(0,n.kt)("inlineCode",{parentName:"p"},"StoreProfileWithoutDTagCheck")," method introduced above at line 69:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-go"}),'// StoreProfileWithoutDTagCheck stores the given profile inside the current context\n// without checking if another profile with the same DTag exists.\n// It assumes that the given profile has already been validated.\nfunc (k Keeper) storeProfileWithoutDTagCheck(ctx sdk.Context, profile *types.Profile) error {\n    store := ctx.KVStore(k.storeKey)\n\n    oldProfile, found, err := k.GetProfile(ctx, profile.GetAddress().String())\n    if err != nil {\n        return err\n    }\n    if found && oldProfile.DTag != profile.DTag {\n        // Remove the previous DTag association (if the DTag has changed)\n        store.Delete(types.DTagStoreKey(oldProfile.DTag))\n\n        // Remove all incoming DTag transfer requests if the DTag has changed since these will be invalid now\n        k.DeleteAllUserIncomingDTagTransferRequests(ctx, profile.GetAddress().String())\n    }\n\n    // Store the DTag -> Address association\n    store.Set(types.DTagStoreKey(profile.DTag), profile.GetAddress())\n\n    // Store the account inside the auth keeper\n    k.ak.SetAccount(ctx, profile)\n\n    k.Logger(ctx).Info("stored profile", "DTag", profile.DTag, "from", profile.GetAddress())\n    return nil\n}\n')),(0,n.kt)("p",null,"By introducing this method, we SHOULD also edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"StoreProfile")," method to use the new function in order\nto pursue the DRY principle:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-go"}),'// StoreProfile stores the given profile inside the current context.\n// It assumes that the given profile has already been validated.\n// It returns an error if a profile with the same DTag from a different creator already exists\nfunc (k Keeper) StoreProfile(ctx sdk.Context, profile *types.Profile) error {\n    addr := k.GetAddressFromDTag(ctx, profile.DTag)\n    if addr != "" && addr != profile.GetAddress().String() {\n        return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest,\n            "a profile with DTag %s has already been created", profile.DTag)\n    }\n\n    return k.storeProfileWithoutDTagCheck(ctx, profile)\n}\n')),(0,n.kt)("h2",a({},{id:"consequences"}),"Consequences"),(0,n.kt)("h3",a({},{id:"backwards-compatibility"}),"Backwards Compatibility"),(0,n.kt)("p",null,"There are no backwards compatibility issues related to these changes."),(0,n.kt)("h3",a({},{id:"positive"}),"Positive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the possibility to swap DTags between users")),(0,n.kt)("h3",a({},{id:"negative"}),"Negative"),(0,n.kt)("p",null,"(none known)"),(0,n.kt)("h3",a({},{id:"neutral"}),"Neutral"),(0,n.kt)("p",null,"(none known)"),(0,n.kt)("h2",a({},{id:"further-discussions"}),"Further Discussions"),(0,n.kt)("h2",a({},{id:"test-cases-optional"}),"Test Cases ","[optional]"),(0,n.kt)("p",null,"The following tests cases needs to be added:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Accepting a DTag transfer request specifying the receiver DTag works properly;"),(0,n.kt)("li",{parentName:"ol"},"Swapping two profiles DTags works properly.")),(0,n.kt)("h2",a({},{id:"references"}),"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Issue ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/desmos-labs/desmos/issues/643"}),"#643"))))}d.isMDXComponent=!0}}]);