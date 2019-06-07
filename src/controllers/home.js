const homeTpl = require('../views/home.html')
export default {
  render() {
    const renderedHomeTpl = template.render(homeTpl, {})
    $('#index').html(renderedHomeTpl)
  }
}