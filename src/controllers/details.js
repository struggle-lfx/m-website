const detailsTpl = require('../views/details.html');
const querystring = require('query-string');
export default {
  render() {
    //location.hash获取url地址，并通过？把地址分成两组，取第二组，然后转换成对象
    let query = querystring.parse(location.hash.split('?')[1])
    console.log(query.id)

    $.ajax({    
      url: '/goodslist/good/get_good_recommend?product_id='+query.id,
      type: 'get',
      success(result) {
          const resultstr = JSON.parse(result);
          
          console.log(resultstr);
          // const renderSearchTpl = template.render(detailsTpl, {data})
          // $('#index').html(renderSearchTpl);
      }
  })
  }
}