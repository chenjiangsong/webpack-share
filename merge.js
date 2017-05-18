var merge = require('webpack-merge')

var obj1 = {
  entry: 'aaa',
  output: {
    a: 1,
    b: [12,3]
  }
}

var obj2 = {
  entry: 'vvv',
  output: {
    a: 1,
    b: [4,5]
  }
}

var output = merge(obj1, obj2)

console.log(output)