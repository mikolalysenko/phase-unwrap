var ndarray = require("ndarray")
var unwrap = require("../unwrap.js")
var plot = require("plotter").plot


//Create a signal
var x = ndarray.zeros([100])
require("ndarray-fill")(x, function(i) {
  return (0.25 * i) % (2.0 * Math.PI)
})

//Plot input signal
plot({
  data:  { "signal": Array.prototype.slice.call(x.data) },
  filename: "input.svg",
  format: "svg"
})

//Unwrap
unwrap(x)

//Plot unwrapped signal
plot({
  data:  { "unwrapped": Array.prototype.slice.call(x.data) },
  filename: "unwrapped.svg",
  format: "svg"
})