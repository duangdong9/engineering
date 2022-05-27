(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{438:function(a,t,n){"use strict";n.r(t);var e=n(18),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"_1-什么是微前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是微前端"}},[a._v("#")]),a._v(" 1. 什么是微前端")]),a._v(" "),n("p",[a._v("类似于一种微服务的框架， 将微服务的理念运用于浏览器端，及将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用， 他们也可以在共享组件的同时进行并行开发 ---这些组件可以通过 npm 或者 Git tag, git submodule 来管理")]),a._v(" "),n("h3",{attrs:{id:"_2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用场景"}},[a._v("#")]),a._v(" 2. 使用场景")]),a._v(" "),n("ul",[n("li",[a._v("项目很多，规模很大，都是每个项目独立使用 git 此类仓库维护的、技术栈为 vue/react/angular 的这类应用")]),a._v(" "),n("li",[a._v("需要整合到统一平台上，你正在寻找可能比 iframe 更合适的替代方案")]),a._v(" "),n("li",[a._v("项目 A 有功能 A1、A2、A3,项目 B 有功能 B1、B2、B3，此时需要把 A2、B1、B3 组合成一个包含这些功能的新项目")]),a._v(" "),n("li",[a._v("维护、迭代成本高，需求变更影响范围大")])]),a._v(" "),n("h3",{attrs:{id:"_3-主应用与微应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-主应用与微应用"}},[a._v("#")]),a._v(" 3.主应用与微应用")]),a._v(" "),n("ul",[n("li",[a._v("简单来讲，某平台代表主应用， 项目 A,项目 B..就是代表各个子应用。")]),a._v(" "),n("li",[a._v("主应用应该是包含了系统中的公共部分例如：菜单栏、登录、退出等功能；")]),a._v(" "),n("li",[a._v("微应用则是为满足业务需求所开发的多数子项目，需要区分的是微应用和组件的区别，组件是为了满足单一模块的功能，组件组件之间可以根据业务进行通信等，而微应用则是一个完整独立的项目，所以如果关联紧密存在频繁通信的应用应该做成一个微应用。")])]),a._v(" "),n("h3",{attrs:{id:"_4-场景对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-场景对比"}},[a._v("#")]),a._v(" 4. 场景对比")]),a._v(" "),n("ul",[n("li",[a._v("iframe:\n缺点: 结构冗余、事件通讯繁琐、只能处理视图相关服务、操作反馈复杂。。。")]),a._v(" "),n("li",[a._v("single-spa.js\n缺点： 只有 app 级别的隔离、没有统一的服务规范、 使用了 system.js、对业务的侵入性太强。。。")])]),a._v(" "),n("p",[a._v("###5. 构成\n"),n("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/17959310-968684e3f13583a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"微内核应用---前端系统"}})]),a._v(" "),n("p",[n("strong",[a._v("解析")]),a._v("：将公共服务放在系统核心，其他功能等放在外部服务。每个外部服务有他的 context 上下文（用来与整个系统交互），events 事件，以及 life Cycle 生命周期，manifest 签名(描述外部服务的基本行为)。\n为实现系统核心和外部服务的链接，服务器需要根据当前的场景，拿到对应外部服务的 manifest 注册到系统核心，（此过程称为服务发现），在点击该服务页面时，根据 manifest 中的入口开始调起， 拿到所属服务中的 modules,之后开始调起生命周期。")]),a._v(" "),n("h3",{attrs:{id:"_6-single-spa-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-single-spa-使用"}},[a._v("#")]),a._v(" 6.single-spa 使用")]),a._v(" "),n("h4",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),n("p",[a._v("single-spa 一个基于 JavaScript 的 微前端 框架，他可以用于构建可共存的微前端应用，每个前端应用都可以用自己的框架编写，完美支持 Vue React Angular。可以实现 服务注册 事件监听 子父组件通信 等功能。")]),a._v(" "),n("h4",{attrs:{id:"实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),n("p",[a._v("(1) 搭建基础框架后，在父项目注册子项目\n"),n("code",[a._v("singleSpa.registerApplication")]),a._v("：这是注册子项目的方法。参数如下：")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("appName")]),a._v(": 子项目名称")]),a._v(" "),n("li",[n("code",[a._v("applicationOrLoadingFn")]),a._v(": 子项目注册函数，用户需要返回 single-spa 的生命周期对象。后面我们会介绍 single-spa 的生命周期机制")]),a._v(" "),n("li",[n("code",[a._v("activityFn")]),a._v(": 回调函数入参 location 对象，可以写自定义匹配路由加载规则。")])]),a._v(" "),n("p",[n("code",[a._v("singleSpa.start")]),a._v("：这是启动函数。")]),a._v(" "),n("p",[a._v("（2）子项目")]),a._v(" "),n("ul",[n("li",[a._v("安装具体环境的 npm 包，（如使用 vue 子项目提供 single-spa-vue）,可以快速和 sigle-spa 父项目集成，并提供了一些比较便携的 api。")]),a._v(" "),n("li",[a._v("在入口文件引入 npm 包，包装一个微前端服务对象，传入挂载参数，就可以实现注册。它会返回一个对象，里面有 single-spa 需要的生命周期函数。使用 export 导出即可")])]),a._v(" "),n("p",[a._v("（3）webpack 的处理\n只是导出了，还需要挂载到 window\n在项目目录下新建 config.js, 修改 webpack 配置，修改 webpack output 内的 library 和 libraryTarget 字段。")]),a._v(" "),n("ul",[n("li",[a._v("output.library: 导出的对象名")]),a._v(" "),n("li",[a._v("output.libraryTarget: 导出后要挂载到哪里")])]),a._v(" "),n("p",[a._v("（4）独立运行\nsingle-spa 有个属性，叫做 window.singleSpaNavigate。如果为 true，代表就是 single-spa 模式。如果 false，就可以独立渲染。")]),a._v(" "),n("h3",{attrs:{id:"_7-qiankun-基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-qiankun-基本使用"}},[a._v("#")]),a._v(" 7. qiankun 基本使用")]),a._v(" "),n("h4",{attrs:{id:"qiankun-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qiankun-简介"}},[a._v("#")]),a._v(" qiankun 简介")]),a._v(" "),n("ul",[n("li",[a._v("基于 single-spa 进行二次开发， 提供了开箱即用的 API。")]),a._v(" "),n("li",[a._v("技术栈无关，任意技术栈的应用均可使用/接入，不论是 React/vue/Angular/Jquery 还是其他等框架。")]),a._v(" "),n("li",[a._v("HTML Entry 接入方式, 接入微应用像使用 iframe 一样简单。")]),a._v(" "),n("li",[a._v("样式隔离， 确保微应用之间样式互不干扰。")]),a._v(" "),n("li",[a._v("JS 沙箱，确保微应用之间全局变量/事件 不冲突。")]),a._v(" "),n("li",[a._v("资源预加载， 在浏览器空闲时间预加载未打开的微应用资源， 加速微应用打开速度。")]),a._v(" "),n("li",[a._v("umi 插件， 提供了@umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。")])]),a._v(" "),n("h4",{attrs:{id:"安装、注册、应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装、注册、应用"}},[a._v("#")]),a._v(" 安装、注册、应用")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://qiankun.umijs.org/zh/guide/getting-started.html#%E4%B8%BB%E5%BA%94%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网教程"),n("OutboundLink")],1),a._v("\n（1）安装 qiankun"),n("br"),a._v(" "),n("code",[a._v("$ yarn add qiankun # 或者 npm i qiankun -S")]),a._v("\n（2）在主应用中注册微应用")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("import { registerMicroApps, start } from 'qiankun';\n\nregisterMicroApps([\n  {\n    name: 'react app', // app name registered\n    entry: '//localhost:7100',\n    container: '#yourContainer',\n    activeRule: '/yourActiveRule',\n  },\n  {\n    name: 'vue app',\n    entry: { scripts: ['//localhost:7100/main.js'] },\n    container: '#yourContainer2',\n    activeRule: '/yourActiveRule2',\n  },\n]);\n\nstart();\n")])])]),n("p",[a._v("当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。")]),a._v(" "),n("p",[a._v("如果微应用不是直接跟路由关联的时候，可以选择手动加载微应用的方式：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("import { loadMicroApp } from 'qiankun';\n\nloadMicroApp(\n  {\n    name: 'app',\n   \tentry: '//localhost:7100',\n    container: '#yourContainer',\n  }\n);\n")])])]),n("p",[a._v("(3) 微应用\n微应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 bootstrap、mount、unmount 三个生命周期钩子，以供主应用在适当的时机调用。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("/**\n * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。\n * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n */\nexport async function bootstrap() {\n  console.log('react app bootstraped');\n}\n\n/**\n * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法\n */\nexport async function mount(props) {\n  console.log(props);\n  ReactDOM.render(<App />, document.getElementById('react15Root'));\n}\n\n/**\n * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例\n */\nexport async function unmount() {\n  ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);