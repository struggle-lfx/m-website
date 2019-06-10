const{searchlist} = require('./search/searchlist')
const searchTpl = require('../views/search.html')
import Router from '../router/rooter'

const gotopage = (id)=>{
  let router = new Router({mode:'hash'})
  console.log(router.push)
}
const render = ()=>{
  const renderSearchTpl = template.render(searchTpl, {})
  $('#index').html(renderSearchTpl);
  searchlist();
  $('.tuijianlist').on("click",".listimg",(e)=>{
    gotopage(0)
  })
}


export default {
  render,
  gotopage 
}