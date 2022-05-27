(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{429:function(e,t,_){"use strict";_.r(t);var a=_(18),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"vite-的好与坏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vite-的好与坏"}},[e._v("#")]),e._v(" Vite 的好与坏")]),e._v(" "),_("h1",{attrs:{id:"一、vite-是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、vite-是什么"}},[e._v("#")]),e._v(" 一、Vite 是什么")]),e._v(" "),_("p",[e._v("2020年4月，尤大大发了这么一个推：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/3xDuJ3eiciblnQsN3ooicgFjPicfXpaHPQgPpWoI0etnYVFEuPFuCdLfukvjicWfFDmh4RBDibSjNlGUqpBAeJLgdA1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),_("p",[e._v("随后，2021年2月，Vite 2.0 它来了，上来就是一套组合拳：")]),e._v(" "),_("ul",[_("li",[e._v("基于 "),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484332&idx=1&sn=90475ae1c238a09ad4cd07cb8d394d98&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),_("OutboundLink")],1),e._v(" 实现的极速开发体验")]),e._v(" "),_("li",[e._v("多框架支持")]),e._v(" "),_("li",[e._v("兼容 Rollup 的插件机制与 API")]),e._v(" "),_("li",[e._v("SSR 支持")]),e._v(" "),_("li",[e._v("旧浏览器支持")])]),e._v(" "),_("p",[e._v("一开始我是拒绝的，从 grunt、gulp ，到 Webpack、Rollup、Snowpack 以及若干知名不知名构建框架，都2021了，还来？然后试用了一下，嗯，是真的香！")]),e._v(" "),_("h1",{attrs:{id:"二、vite-的优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、vite-的优势"}},[e._v("#")]),e._v(" 二、Vite 的优势")]),e._v(" "),_("h2",{attrs:{id:"_2-1-真-tm-快"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-真-tm-快"}},[e._v("#")]),e._v(" 2.1 真 TM 快")]),e._v(" "),_("p",[e._v("Vite 非常非常快，对比 Vue-cli(基于 Webpack)：")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th"),e._v(" "),_("th",[e._v("Dev 启动时长")]),e._v(" "),_("th",[e._v("Dev 页面加载速度")]),e._v(" "),_("th",[e._v("Build 时长")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("Vue-cli")]),e._v(" "),_("td",[e._v("2568ms")]),e._v(" "),_("td",[e._v("320ms")]),e._v(" "),_("td",[e._v("5.14s")])]),e._v(" "),_("tr",[_("td",[e._v("Vite")]),e._v(" "),_("td",[e._v("232ms")]),e._v(" "),_("td",[e._v("379ms")]),e._v(" "),_("td",[e._v("2.39s")])])])]),e._v(" "),_("blockquote",[_("p",[e._v("示例代码：Vue3 项目，10个组件")])]),e._v(" "),_("p",[e._v("测试两者的 dev 命令运行耗时相差十倍，且理论上，项目越大性能差距越大，为什么呢？最大的原因是 Vite 在开发模式下并没有做太多打包操作！")]),e._v(" "),_("p",[e._v("Webpack 启动后会做一堆事情，经历一条很长的编译打包链条，从入口开始需要逐步经历语法解析、依赖收集、代码转译、打包合并、代码优化，最终将高版本的、离散的源码编译打包成低版本、高兼容性的产物代码，这可满满都是 CPU、IO 操作啊，在 Node 运行时下性能必然是有问题。")]),e._v(" "),_("p",[e._v("而 Vite 运行 Dev 命令后只做了两件事情，一是启动了一个用于承载资源服务的 service；二是使用 "),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484332&idx=1&sn=90475ae1c238a09ad4cd07cb8d394d98&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("esbuild"),_("OutboundLink")],1),e._v(" 预构建 npm 依赖包。之后就一直躺着，直到浏览器以 http 方式发来 ESM 规范的模块请求时，Vite 才开始“"),_("strong",[e._v("「按需编译」")]),e._v("”被请求的模块。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/3xDuJ3eiciblnQsN3ooicgFjPicfXpaHPQgPOM6oCsia9nXhWQW66FSTe8BNA0wnKMUVe2icCZORpjPuoAbckoiaXBypA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),_("p",[e._v("这里 Vite 预设的前提是：")]),e._v(" "),_("ul",[_("li",[e._v("现代浏览器大多数已经原生支持 ESM 规范，构建工具 —— 特别是开发环境下已经没有太大必要为了低版本兼容把大量的时间花在编译打包上了！")])]),e._v(" "),_("p",[e._v("这么一对比，Webpack 是啥都做了，浏览器只要运行编译好的低版本(es5)代码就行；而 Vite 只处理问题的一部分，剩下的事情交由浏览器自行处理，那速度必然贼 TM 快。")]),e._v(" "),_("p",[e._v("除了启动阶段跳过编译操作之外，Vite 还有很多值得一提的性能优化，整体梳理一下：")]),e._v(" "),_("ul",[_("li",[e._v("预编译：npm 包这类基本不会变化的模块，使用 Esbuild 在 "),_("strong",[e._v("「预构建」")]),e._v(" 阶段先打包整理好，减少 http 请求数")]),e._v(" "),_("li",[e._v("按需编译：用户代码这一类频繁变动的模块，直到被使用时才会执行编译操作")]),e._v(" "),_("li",[e._v("客户端强缓存：请求过的模块会被以 http 头 "),_("code",[e._v("max-age=31536000,immutable")]),e._v(" 设置为强缓存，如果模块发生变化则用附加的版本 query 使其失效")]),e._v(" "),_("li",[e._v("产物优化：相比于 Webpack ，Vite 直接锚定高版本浏览器，不需要在 build 产物中插入过多运行时与模板代码")]),e._v(" "),_("li",[e._v("内置更好的分包实现：不需要用户干预，默认启用一系列智能分包规则，尽可能减少模块的重复打包")]),e._v(" "),_("li",[e._v("更好的静态资源处理：Vite 尽量避免直接处理静态资源，而是选择遵循 ESM 方式提供服务，例如引入图片 "),_("code",[e._v("import img from 'xxx.png'")]),e._v(" 语句，执行后 "),_("code",[e._v("img")]),e._v(" 变量只是一个路径字符串。")])]),e._v(" "),_("p",[_("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),_("p",[e._v("可以看出，Vite 的快是全方位的，从 Dev 到 Build，从 npm 包到项目源码，再到静态资源处理都在 ESM 规则框架下尽可能地实现各种优化措施，理论性能急剧提升。")]),e._v(" "),_("h2",{attrs:{id:"_2-2-简单"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-简单"}},[e._v("#")]),e._v(" 2.2 简单")]),e._v(" "),_("p",[e._v("Vite 的用法很简单， 执行初始化命令：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("yarn create @vitejs/app my-vue-app --template vue\n")])])]),_("p",[e._v("就得到了一个预设好的开发环境，可以开始愉快地写 demo 了，Vite 开箱就给你一堆功能，包括 css 预处理器、html 预处理器、hash 命名、异步加载、分包、压缩、HMR 等：")]),e._v(" "),_("p",[_("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),_("p",[e._v("这些功能，作者都按行业最佳实践预设好了，通常不需要用户介入做变更。")]),e._v(" "),_("p",[e._v("Vite 的表现很容易让人联想到 vue-cli，不过两者区别还是挺大的：vue-cli 底层依赖 Webpack，实际的构建工作通常由各种 Webpack loader、plugin 实现，比如 less => css 由 less-loader 实现；图片加载由 img-loader 实现等。这套设计很灵活，你可以在 Webpack 体系下做任何你能想到的变更，只需要学习一点点 Webpack 的知识，包括百来个配置项、成千上万的插件、若干虚无缥缈的构建概念等。")]),e._v(" "),_("p",[e._v("而 Vite 显得特别简洁，它只是暴露了极少数的配置项与 plugin 接口，设计上就没打算让你做太多自定义操作。。。这是因为 Vite 从一开始就没打算做成另一个 Webpack，而是做成一套“能够显著提升前端开发体验的前端构建工具”，重在 "),_("strong",[e._v("「开发体验」")]),e._v(" 啊同学们，Vite 可谓是用心良苦，想尽办法降低学习入门成本，它就不希望你为了使用工具又学一大堆复杂、缥缈的概念，希望这些事情都在框架层面屏蔽了 —— 虽然代价是丧失灵活性。")]),e._v(" "),_("p",[e._v("简单说吧，Vite 定位就是傻瓜式但强大的构建工具，你专心写好业务代码，早点下班，不用再为了工具费神费力了。")]),e._v(" "),_("h2",{attrs:{id:"_2-3-生态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-生态"}},[e._v("#")]),e._v(" 2.3 生态")]),e._v(" "),_("p",[e._v("除了极致的运行性能与简易的使用方法外，Vite 对已有生态的兼容性也不容忽略，主要体现在两个点：")]),e._v(" "),_("ul",[_("li",[e._v("与 Vue 解耦，兼容支持 React、Svelte、Preact、Vanilla 等，这意味着 Vite 可以被应用在大多数现代技术栈中")]),e._v(" "),_("li",[e._v("与 Rollup 极其接近的插件接口，这意味着可以复用 Rollup 生态中大部分已经被反复锤炼的工具")])]),e._v(" "),_("p",[e._v("说真的，这两条摆上桌面，加上前面讨论的性能优势和超低学习成本，一时半会真想不到拒绝的理由了。。。")]),e._v(" "),_("h1",{attrs:{id:"三、vite-的劣势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、vite-的劣势"}},[e._v("#")]),e._v(" 三、Vite 的劣势")]),e._v(" "),_("p",[e._v("Vite 还很新，虽然它从理论与体感上提供了非常极致的开发体验，还是有一些值得关注的问题。")]),e._v(" "),_("h2",{attrs:{id:"_3-1-兼容性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-兼容性"}},[e._v("#")]),e._v(" 3.1 兼容性")]),e._v(" "),_("p",[e._v("默认情况下，无论是 dev 还是 build 都会直接打出 ESM 版本的代码包，这就要求客户浏览器需要有一个比较新的版本，这放在现在的国情下还是有点难度的。")]),e._v(" "),_("p",[e._v("不过 Vite 同时提供了一些弥补的方法，使用 "),_("code",[e._v("build.polyfillDynamicImport")]),e._v(" 配置项配合 @vitejs/plugin-legacy 打包出一个看起来兼容性比较好的版本，我相信这一点会随时间慢慢被抹平。")]),e._v(" "),_("h2",{attrs:{id:"_3-2-缺少-show-case"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-缺少-show-case"}},[e._v("#")]),e._v(" 3.2 缺少 Show Case")]),e._v(" "),_("p",[e._v("Vite 太新了，直到最近才释放出正式 2.0版本，社区还没太反应过来，自然也就没什么大型、复杂的商业落地案例，谁都说不准这里面可能有多少坑。")]),e._v(" "),_("p",[e._v("不过好消息是社区对 Vite 的搜索热度在最近几个月急剧增长：")]),e._v(" "),_("p",[_("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),_("blockquote",[_("p",[e._v("数据来自谷歌指数 (https://trends.google.com/trends/explore?date=2021-01-01%202021-07-01&q=vite,webpack)")])]),e._v(" "),_("p",[e._v("相信很快就会出现一大批布道者，毕竟这玩意儿是真的很有竞争力。")]),e._v(" "),_("h2",{attrs:{id:"_3-3-代价"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-代价"}},[e._v("#")]),e._v(" 3.3 代价")]),e._v(" "),_("p",[e._v("不要忘记，工程化本身的复杂度不会凭空消失，只 Vite 背后的团队在帮我们负重前行，这对 Vite 开发团队而言，维护这么多构建规则是一个不小的负担。而站在用户的角度，越容易上手的工具往往意味着越难被定制。")]),e._v(" "),_("p",[e._v("另外，如果只是在 Vite 预设好的边框里面玩确实很容易，但随着项目复杂度的提高，用户迟早还是会接触到底层的 esbuild 或 Rollup，高工们该补的知识还是迟早还是得补回来，逃不掉的。")]),e._v(" "),_("h1",{attrs:{id:"三、总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[e._v("#")]),e._v(" 三、总结")]),e._v(" "),_("p",[e._v("Vite 给我最大的启示：Webpack 并不是标准答案，前端构建工具可以有一些新的玩法：")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("「打包」")]),e._v(" 不是目的，"),_("strong",[e._v("「运行」")]),e._v(" 才是，2021年了，能够交给浏览器做的事情就交给浏览器吧")]),e._v(" "),_("li",[e._v("一个灵活的框架，对作者而言可能意味着逐步失控的开发量；对用户而言可能意味高学习成本，以及不断重复的类似空格好还是 tab 好的争论。那么，一套内置好各种业界 "),_("strong",[e._v("「最佳实践」")]),e._v("，没有太多定制空间的工具，某些情况下反而能提升大家的效率")])]),e._v(" "),_("p",[e._v("我个人对 Vite 的态度：短期保持观望，长期非常看好。")]),e._v(" "),_("p",[e._v("我相信现在开始上手学习 Vite 是一个不错的选择，这东西封装的太好了，学习成本极低(吹逼效果极好)，可以写点 Demo 或者就直接在一些用户范围可控的小型新项目落地。但是，建议不要激进地直接重构一些已有的大型项目，别自己给自己埋坑了，早点下班不香吗。")]),e._v(" "),_("p",[_("img",{attrs:{src:"http://mmbiz.qpic.cn/mmbiz_png/3xDuJ3eiciblkrkIk3XeyL1jc2o7J5FUibbjapRDRicM4S9rFHhoJFK8EBW9SWf8CPO8pSSanB9oo3dD4VPThlbeeA/0?wx_fmt=png",alt:"Tecvan"}})]),e._v(" "),_("p",[_("strong",[e._v("Tecvan")])]),e._v(" "),_("p",[e._v("专注前端框架源码解读")]),e._v(" "),_("p",[e._v("18篇原创内容")]),e._v(" "),_("p",[e._v("公众号")]),e._v(" "),_("blockquote",[_("p",[e._v("往期文章：")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484332&idx=1&sn=90475ae1c238a09ad4cd07cb8d394d98&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Esbuild 为什么那么快"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("["),_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247483744&idx=1&sn=d7128a76eed20746cd8c5100f0899138&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("万字总结] 一文吃透 Webpack 核心原理"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247483941&idx=1&sn=ce7597dfc8784e66d3c58f0e8df51f6b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列二：插件架构深度讲解"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247483743&idx=1&sn=0ce0845ee3e5316bcac05993035de3ed&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列三：Dependency Graph 深度解析"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484029&idx=1&sn=7862737524e799c5eaf1605325171e32&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列四：Chunk 分包规则详解"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247483956&idx=1&sn=a2066fcc76cd97de88a6d6cb397e6c2a&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列五：module.issuer 属性详解"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484088&idx=1&sn=41bf509a72f2cbcca1521747bf5e28f4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列六：彻底理解 Webpack 运行时"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484137&idx=1&sn=bbf2bd1350a5cd362d3de59bd6f0ec69&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列七：如何编写loader"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484374&idx=1&sn=1e91a1a9bc90b4a2b28bdbc992067fbf&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 原理系列八：产物转译打包逻辑"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484005&idx=1&sn=ae3e478259a50c54e0282b2efbc28c3f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("分享几个 Webpack 实用分析工具"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247484259&idx=1&sn=afc05ec9cec29e4e1b7a750356b30502&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("你不知道的 VSCode 代码高亮原理"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTYwMjcxMA==&mid=2247483978&idx=1&sn=a331e378755412c9b6e8d96d7653f79b&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端 Offer 提速：如何写出有亮点的简历"),_("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);