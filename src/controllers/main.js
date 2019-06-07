

export default {
    render() {
        const homeindexTpl = require('../views/homeindex/homeindex.html')
        const { swipper } = require('./main/swipper')
        const { goodslist } = require('./main/list')

        const renderedHomeindexTpl = template.render(homeindexTpl, {})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
        $('main').html(renderedHomeindexTpl)
        // document.querySelector('').innerHTML = renderedHomeindexTpl    //把内容放到首页内
        swipper();
        goodslist();
    }
}

