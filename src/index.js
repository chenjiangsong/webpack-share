require('./a')
var $button = document.getElementById('btn')
$button.addEventListener('click', function() {
  require.ensure([], function(require){
      var my = require('./b');
      console.log(my)
  }, 'my');
})