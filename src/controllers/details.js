const detailsTpl = require('../views/details.html');
const querystring = require('query-string');
export default {
  render() {
    //location.hash获取url地址，并通过？把地址分成两组，取第二组，然后转换成对象
    let query = querystring.parse(location.hash.split('?')[1])
    console.log(query.id)
    $.ajax({
      url: '/goodslist/good/goodsdetail/?id=' + query.id + '&from=&mtoken=',
      type: 'get',
      success(result) {

        const resultstr = JSON.parse(result);
        let data = resultstr.data
        console.log(data);
        const renderSearchTpl = template.render(detailsTpl, { data })
        $('#index').html(renderSearchTpl);
      }
    })
    var swiper = new Swiper('.swiper-container', {
      //分页
      pagination: {
        el: '.swiper-pagination',
      },
      //导航按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      //自动轮播
      autoplay: {
        delay: 2500,//时间 毫秒
        disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
      },
      loop: true,//循环 最后面一个往后面滑动会滑到第一个
    });
  }
}