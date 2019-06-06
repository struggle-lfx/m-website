const goodslistTpl = require('../views/homeindex/goodslist.html')
const goodslist0 = require('../views/goods/goods0.html')
const goodslist1 = require('../views/goods/goods1.html')
const BScroll = require('better-scroll').default

module.exports = {
    goodslist() {
        $.ajax({
            url: '/goodslist/index/other_advert',
            type: 'get',
            success(result) {
                const resultstr = JSON.parse(result);
                const data = resultstr.data;
                console.log(data);
                //本次需要用到的数据，但是出现了循环嵌套
                // console.log(resultstr.data.article_list);
                // const list0data = resultstr.data.article_list[0].ads_info;
                // console.log(list1data);
                // const list1data = resultstr.data.article_list[1].ads_info;


                const renderedGoodsTpl = template.render(goodslistTpl, {data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                document.querySelector('#goodslist').innerHTML = renderedGoodsTpl;

                // const renderedGoodsTpl0 = template.render(goodslist0, { list0data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl0;
                // const renderedGoodsTpl1 = template.render(goodslist1, { list1data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl1;
                
                
                //添加滚动
                
                // let bScroll = new BScroll('.list2', {
                //     probeType: 1,
                //     click: true,
                //     eventPassthrough: "vertical"

                //   })


            }
        })
    }
}