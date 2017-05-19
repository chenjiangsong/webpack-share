require('./style.css')
var obj = require('./test')
var _ = require('lodash')
_.extend({}, obj)
var a = 1

require.ensure([], (require) => {
  require('./my')
})