const{searchlist} = require('./search/searchlist')
const searchTpl = require('../views/search.html')
const BScroll = require('better-scroll').default
import Router from '../router/rooter'

const gotopage = (id)=>{
  let router = new Router({mode:'hash'})
  router.push('/index/details');    //跳转到详情页
}
const render = ()=>{
  const renderSearchTpl = template.render(searchTpl, {})
  $('#index').html(renderSearchTpl);
  searchlist();
  $('.tuijianlist').on("click",".listimg",(e)=>{
    gotopage(0)
  })

  let bScroll = new BScroll('.tuijianlist',{
    probeType:1,
    click:true
  })


}


export default {
  render,
  gotopage 
}