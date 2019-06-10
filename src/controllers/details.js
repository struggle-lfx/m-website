const detailsTpl = require('../views/details.html');
export default {
  render() {
    const renderSearchTpl = template.render(detailsTpl, {})
    $('#index').html(renderSearchTpl);
  }
}