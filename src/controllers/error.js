const errorTpl = require('../views/error.html')
export default {
  render() {
    
    $('#app').html(errorTpl)
  }
}

