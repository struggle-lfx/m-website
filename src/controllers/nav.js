const navTpl = require('../views/index.html')

const renderedNavTpl = template.render(navTpl, {})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
document.querySelector('.nav').innerHTML = renderedNavTpl    //把内容放到首页内