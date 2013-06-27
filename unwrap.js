"use strict"

var tau = 2.0 * Math.PI

function modf(x) {
  if(x < 0) {
    return tau + (x % tau)
  } else if(x > tau) {
    return x%tau
  }
  return x
}

function unwrapImpl(data, ptr, stride, n) {
  var pi = Math.PI
  var pphase = modf(data[ptr]), shift = 0
  ptr += stride
  for(var i=1; i<n; ++i, ptr+=stride) {
    var cphase = modf(data[ptr])
    var d = cphase - pphase
    if(d < -pi) {
      shift += tau
    } else if(d > pi) {
      shift -= tau
    }
    data[ptr] = cphase + shift
    pphase = cphase
  }
}

function unwrapImplGetter(data, ptr, stride, n) {
  var pi = Math.PI
  var pphase = modf(data.get(ptr)), shift = 0
  ptr += stride
  for(var i=1; i<n; ++i, ptr+=stride) {
    var cphase = modf(data.get(ptr))
    var d = cphase - pphase
    if(d < -pi) {
      shift += tau
    } else if(d > pi) {
      shift -= tau
    }
    data.set(ptr, cphase + shift)
    pphase = cphase
  }
}

function unwrapPhase(signal) {
  if(signal.shape.length !== 1) {
    throw new Error("Invalid shape for signal")
  }
  if("generic" === signal.dtype) {
    unwrapImplGetter(signal.data, signal.offset, signal.stride[0], signal.shape[0])
  } else {
    unwrapImpl(signal.data, signal.offset, signal.stride[0], signal.shape[0])
  }
  return signal
}

module.exports = unwrapPhase