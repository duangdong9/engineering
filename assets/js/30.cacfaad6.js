(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{443:function(t,s,a){"use strict";a.r(s);var e=a(18),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"缩小文件搜索范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩小文件搜索范围"}},[t._v("#")]),t._v(" 缩小文件搜索范围")]),t._v(" "),a("h2",{attrs:{id:"webpack如何解析文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack如何解析文件"}},[t._v("#")]),t._v(" webpack如何解析文件")]),t._v(" "),a("p",[a("code",[t._v("webpack")]),t._v("启动后会从"),a("code",[t._v("entry")]),t._v("入口开始，解析导入的语句然后再进行递归的解析；")]),t._v(" "),a("p",[t._v("导入语句时：")]),t._v(" "),a("ul",[a("li",[t._v("根据导入语句去寻找对应的导入文件")]),t._v(" "),a("li",[t._v("根据找到的导入文件的后缀，使用配置中的"),a("code",[t._v("loader")]),t._v("去处理文件")])]),t._v(" "),a("h2",{attrs:{id:"优化loader配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化loader配置"}},[t._v("#")]),t._v(" 优化loader配置")]),t._v(" "),a("blockquote",[a("p",[t._v("由于loader对文件转化操作很耗时，所以需要让尽可能少的文件被loader处理")])]),t._v(" "),a("h3",{attrs:{id:"优化module-noparse配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化module-noparse配置"}},[t._v("#")]),t._v(" 优化module.noParse配置")]),t._v(" "),a("blockquote",[a("p",[t._v("让webpack忽略对部分没采用模块化的文件的递归处理，提升构建的性能")])]),t._v(" "),a("h3",{attrs:{id:"优化resolve-alias配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化resolve-alias配置"}},[t._v("#")]),t._v(" 优化resolve.alias配置")]),t._v(" "),a("blockquote",[a("p",[t._v("通过别名将原有的导入路径映射成一个新的导入路径")])]),t._v(" "),a("h3",{attrs:{id:"优化resolve-extensions配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化resolve-extensions配置"}},[t._v("#")]),t._v(" 优化resolve.extensions配置")]),t._v(" "),a("blockquote",[a("p",[t._v("当导入文件没带后缀时，webpack会自动为文件加上后缀再去尝试询问文件是否存在")])]),t._v(" "),a("ul",[a("li",[t._v("频率出现高的文件写在前面")]),t._v(" "),a("li",[t._v("没有的文件后缀不用添加")]),t._v(" "),a("li",[t._v("代码中加上文件的后缀")])]),t._v(" "),a("h3",{attrs:{id:"优化resolve-modules配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化resolve-modules配置"}},[t._v("#")]),t._v(" 优化resolve.modules配置")]),t._v(" "),a("blockquote",[a("p",[t._v("配置webpack去哪些目录下找第三方模块")]),t._v(" "),a("p",[a("code",[t._v("resolve.modules")]),t._v(" 的默认值是 "),a("code",[t._v("['node_modules']")]),t._v("，含义是先去当前目录下的 "),a("code",[t._v("./node_modules")]),t._v(" 目录下去找想找的模块，如果没找到就去上一级目录 "),a("code",[t._v("../node_modules")]),t._v(" 中找，再没有就去 "),a("code",[t._v("../../node_modules")]),t._v(" 中找，以此类推，这和 Node.js 的模块寻找机制很相似")])]),t._v(" "),a("h3",{attrs:{id:"优化resolve-mainfields配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化resolve-mainfields配置"}},[t._v("#")]),t._v(" 优化resolve.mainFields配置")]),t._v(" "),a("blockquote",[a("p",[t._v("配置第三方模块使用哪个入口文件")])]),t._v(" "),a("p",[a("code",[t._v("resolve.mainFields")]),t._v(" 的默认值和当前的 "),a("code",[t._v("target")]),t._v(" 配置有关系，对应关系如下：")]),t._v(" "),a("ul",[a("li",[t._v("当 "),a("code",[t._v("target")]),t._v(" 为 "),a("code",[t._v("web")]),t._v(" 或者 "),a("code",[t._v("webworker")]),t._v(" 时，值是 "),a("code",[t._v('["browser", "module", "main"]')])]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("target")]),t._v(" 为其它情况时，值是 "),a("code",[t._v('["module", "main"]')])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js$\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用cacheDirectory对转出的js文件缓存")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只对 src 目录下的文件使用babel-loader")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("noParse")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("react\\.min\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 alias 把导入 react 的语句换成直接使用单独完整的 react.min.js 文件，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 减少耗时的递归解析操作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./node_modules/react/dist/react.min.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'), // react16")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//优先寻找文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定第三方模块的路径，减少搜索步骤")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只采用main作为入口文件描述字段，减少搜索步骤")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mainFields")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("optimization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("splitChunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cacheGroups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("monaco")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'monaco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]monaco-editor[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("reuseExistingChunk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此插件允许覆盖webpack打包时的查找规则")]),t._v("\nwebpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContextReplacementPlugin\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContextReplacementPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("moment[/\\\\]locale$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("zh-cn|zh-hk|en")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复用其他chunk内已拥有的模块 当chunks引用了已经存在的被抽离的chunks时不会新创建一个chunk而是复用chunk")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("reuseExistingChunk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);