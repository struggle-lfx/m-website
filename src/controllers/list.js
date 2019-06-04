const goodslistTpl =  require('../views/goodslist.html')

module.exports ={
    goodslist(){
        $.ajax({
            url:'/index/other_advert',
            type:'get',
            success(result){
                
                 const resultstr = JSON.parse(result);
                 const data = resultstr.data;
                 console.log(resultstr.data.new_register[0].ad_link);
                 const renderedGoodsTpl = template.render(goodslistTpl, {data})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                document.querySelector('#goodslist').innerHTML = renderedGoodsTpl ;
                 

            }
        })
    }
}