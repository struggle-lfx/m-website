const searchlistTpl = require('../../views/search/searchlist.html')


module.exports = {
    searchlist() {
        $.ajax({
            url: '/goodslist/search/recommend_list',
            type: 'get',
            success(result) {
                const resultstr = JSON.parse(result);
                const data = resultstr.data.recommend_products;
                console.log(data);
                //本次需要用到的数据，但是出现了循环嵌套
                // console.log(resultstr.data.article_list);
                // const list0data = resultstr.data.article_list[0].ads_info;
                // console.log(list1data);
                // const list1data = resultstr.data.article_list[1].ads_info;


                const renderedGoodsTpl = template.render(searchlistTpl, {data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                document.querySelector('.tuijianlist').innerHTML = renderedGoodsTpl;

                // const renderedGoodsTpl0 = template.render(goodslist0, { list0data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl0;
                // const renderedGoodsTpl1 = template.render(goodslist1, { list1data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl1;


            }
        })
    }
}