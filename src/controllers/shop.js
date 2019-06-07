const shopTpl = require('../views/shop.html')
const {swipper} = require('./shop/shop-swipper')
export default{
    render(){
        $('main').html(shopTpl); 
           
        swipper();
    }
}






