var ndarray = require("ndarray")
var fill = require("ndarray-fill")
var unwrap = require("../unwrap.js")

require("tape")("phase-unwrap", function(t) {

  //Create a signal
  var x = ndarray.zeros([100])

  //Check positive phase
  fill(x, function(i) {
    return (0.25 * i) % (2.0 * Math.PI)
  })
  unwrap(x)
  for(var i=0; i<100; ++i) {
    t.equals(x.get(i), 0.25*i)
  }
  
  //Check negative phase
  fill(x, function(i) {
    return (-0.25 * i) % (2.0 * Math.PI)
  })
  unwrap(x)
  for(var i=0; i<100; ++i) {
    t.equals(x.get(i), -0.25*i)
  }
  
  t.end()
})
