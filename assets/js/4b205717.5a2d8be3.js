"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32809],{63135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>p});n(67294);var l=n(3905),a=n(62382),o=n(98662);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},d="Installing RocksDB",c={unversionedId:"fullnode/rocksdb-installation",id:"version-2.3/fullnode/rocksdb-installation",title:"Use RocksDB",description:"By default, Desmos uses LevelDB as its database backend engine. However, since version",source:"@site/versioned_docs/version-2.3/03-fullnode/04-rocksdb-installation.mdx",sourceDirName:"03-fullnode",slug:"/fullnode/rocksdb-installation",permalink:"/2.3/fullnode/rocksdb-installation",draft:!1,editUrl:"https://github.com/desmos-labs/desmos/tree/master/docs/versioned_docs/version-2.3/03-fullnode/04-rocksdb-installation.mdx",tags:[],version:"2.3",sidebarPosition:4,frontMatter:{id:"rocksdb-installation",title:"Use RocksDB",sidebar_position:4},sidebar:"version-2.3/docs",previous:{title:"Update",permalink:"/2.3/fullnode/update"},next:{title:"Use Cosmovisor",permalink:"/2.3/fullnode/cosmovisor"}},u={},p=[{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:2},{value:"2. Install RocksDB",id:"2-install-rocksdb",level:2}],b={toc:p};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,l.kt)("wrapper",s({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"installing-rocksdb"}),"Installing RocksDB"),(0,l.kt)("p",null,"By default, Desmos uses ",(0,l.kt)("a",s({parentName:"p"},{href:"https://github.com/google/leveldb"}),"LevelDB")," as its database backend engine. However, since version\n",(0,l.kt)("inlineCode",{parentName:"p"},"v0.6.0")," we've also added the possibility of optionally using ",(0,l.kt)("a",s({parentName:"p"},{href:"https://github.com/facebook/rocksdb"}),"Facebook's RocksDB"),",\nwhich, although still being experimental, is know to be faster and could lead to lower syncing times.\nIf you want to try out RocksDB (which we suggest you to do) you can take a look at our\n",(0,l.kt)("a",s({parentName:"p"},{href:"/2.3/fullnode/rocksdb-installation"}),"RocksDB installation guide")," before proceeding further."),(0,l.kt)("p",null,"The following guide allows you to install ",(0,l.kt)("a",s({parentName:"p"},{href:"https://github.com/facebook/rocksdb"}),"Facebook's RocksDB")," inside your local machine,\nso that you will be able to use as Desmos' backend engine for better performances."),(0,l.kt)("h2",s({},{id:"1-install-the-dependencies"}),"1. Install the dependencies"),(0,l.kt)("p",null,"The first thing to do is to install all the dependencies for RocksDB.\nFollowing you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the\n",(0,l.kt)("a",s({parentName:"p"},{href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"}),"official installation guide")),(0,l.kt)(a.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install -y \\\n  libgflags-dev \\\n  libsnappy-dev \\\n  zlib1g-dev \\\n  libbz2-dev \\\n  libzstd-dev \\\n  liblz4-dev\n"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# Only needed if you are first time developing of your machine\nxcode-select --install\n\n# Install the dependencies\nbrew tap homebrew/versions; brew install gcc48 --use-llvm\n")))),(0,l.kt)("h2",s({},{id:"2-install-rocksdb"}),"2. Install RocksDB"),(0,l.kt)("p",null,"After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions.\nIf you are running another OS, please refer to the ",(0,l.kt)("a",s({parentName:"p"},{href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"}),"official documentation"),"."),(0,l.kt)(a.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# Clone RocksDB\ngit clone https://github.com/facebook/rocksdb.git && cd rocksdb\n\n# Build RocksDB\nDEBUG_LEVEL=0 make shared_lib\n\n# Install RocksDB so that Desmos can access it\nsudo make install-shared\n\n# Make sure the newly built library is linked correctly\nsudo ldconfig\n"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"brew install rocksdb\n")))),(0,l.kt)("p",null,"Once the installation has finished, you will be able to compile Desmos using the following command: "),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"make install DB_BACKEND=rocksdb\n")))}k.isMDXComponent=!0}}]);