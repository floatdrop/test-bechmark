var assert = require('assert');
var objectAssign = require('./');

var source1 = {a: 1, b: 2, c: 3};
var source2 = {c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 15, o: 15, p: 16};

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite
.add('small', function() {
  objectAssign({foo: 0}, {bar: 1});
})
.add('opts', function() {
  objectAssign({}, {foo: 0}, {foo: 1});
})
.add('big', function() {
  objectAssign({}, source1, source2);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run();
