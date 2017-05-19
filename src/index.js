require('./a');
var $button = document.getElementById('btn')
$button.addEventListener('click', function() {
  console.log('click')
  require.ensure([], function(require){
      require('./b');
  }, 'my');
})