
//commonjs规范
//const name = require('./controllers/name')

import Router from './router/rooter'
new Router({
    mode:'hash' //hash | history
})

// const indexTpl = require('./views/home.html')
// const {main} = require('./controllers/main');

// const renderedIndexTpl = template.render(indexTpl, {})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
// document.querySelector('#app').innerHTML = renderedIndexTpl    //把内容放到首页内
// main();



//ES6模块化
// import{name} from './controllers/name'
