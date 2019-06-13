const errorTpl = require('../views/error.html')
export default {
  render() {   
    const rendererrorTpl = template.render(errorTpl, {})
    $('#index').html(rendererrorTpl)
  }
}


