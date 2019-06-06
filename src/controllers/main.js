module.exports = {
    main(){
        const homeindexTpl = require('../views/homeindex/homeindex.html')
const {swipper} = require('./swipper')
const {goodslist} = require('./list')

const renderedHomeindexTpl = template.render(homeindexTpl, {})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
document.querySelector('main').innerHTML = renderedHomeindexTpl    //把内容放到首页内



swipper();
goodslist();
    }
}

