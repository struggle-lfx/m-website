const{searchlist} = require('./search/searchlist')
const searchTpl = require('../views/search.html')
export default {
  render() {
    const renderSearchTpl = template.render(searchTpl, {})
    $('#index').html(renderSearchTpl);
    searchlist();
  }
}