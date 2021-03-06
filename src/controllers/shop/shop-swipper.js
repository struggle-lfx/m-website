const swipperTpl = require('../../views/shop/shop-swipper.html');

module.exports ={
        swipper(){
            $.ajax({
                url:'/goodslist/shop/slide?mtoken=',
                type:'get',
                success(result){
                     const resultarr =JSON.parse(result);
                     const data = resultarr.data;
                     console.log(data);
                    //  const renderedSwipperTpl = template.render(swipperTpl, {data})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} 
                    //  document.querySelector('.swiper-wrapper').innerHTML = renderedSwipperTpl ;
                   
                }
            })
            var swiper = new Swiper('.swiper-wrapper', {
                //分页
                pagination: {
                    el: '.swiper-pagination',
                },
                //导航按钮
                navigation:{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //自动轮播
                autoplay: {
                    delay: 2500,//时间 毫秒
                    disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
                },
                loop:true,//循环 最后面一个往后面滑动会滑到第一个
            }); 
              
        }
    
}