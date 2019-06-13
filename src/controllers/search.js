const{searchlist} = require('./search/searchlist')
const searchTpl = require('../views/search.html')
const BScroll = require('better-scroll').default
import Router from '../router/rooter'

const gotopage = (id)=>{  //id是gotopage方法传进去的
  let router = new Router({mode:'hash'})
  router.push('/index/details?id='+id);    //跳转到详情页,并且把id传进去
}
const render = ()=>{
  const renderSearchTpl = template.render(searchTpl, {})
  $('#index').html(renderSearchTpl);
  searchlist();
  $('.tuijianlist2').on("click",".listimg",function(){
    let id = $(this).attr('data-id')
    gotopage(id);
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