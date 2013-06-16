  phase-unwrap
============
1D phase unwrapping

## Example

```javascript
var ndarray = require("ndarray")
var unwrap = require("phase-unwrap")
var plot = require("plotter").plot


//Create a signal
var x = ndarray.zeros([100])
require("ndarray-fill")(x, function(i) {
  return (0.25 * i) % (2.0 * Math.PI)
})

//Plot input signal
plot({
  data:  Array.prototype.slice.call(x.data),
  filename: "input.svg"
})

//Unwrap
unwrap(x)

//Plot unwrapped signal
plot({
  data:  Array.prototype.slice.call(x.data),
  filename: "unwrapped.svg"
})
```

And here are the results:

### Input signal

<img src="https://mikolalysenko.github.io/phase-unwrapr/example/input.svg">

### Unwrapped signal

<img src="https://mikolalysenko.github.io/phase-unwrap/example/unwrapped.svg">


## Install

    npm install phase-unwrap
    
### `require("phase-unwrap")(signal)`
Unwraps the phase angle of a signal whose values are between 0 and 2pi to a continuous signal.

* `signal` is a 1D ndarray of values

**Returns** An `signal`.  Note that the unwrapping modifies signal.

## Credits
(c) 2013 Mikola Lysenko. MIT License
