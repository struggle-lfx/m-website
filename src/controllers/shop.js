const shopTpl = require('../views/shop.html')
const {swipper} = require('./shop/shop-swipper')
const{swipper2} = require('./shop/shop-swipper2')
export default{
    render(){
        $('main').html(shopTpl);          
        swipper();
        swipper2();
    }
}






