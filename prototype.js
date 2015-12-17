'use strict';

var cars = ['Model S', 'Model X', 'Model 3'];

Object.defineProperty(Array.prototype, 'last', {
  get: function (value) {
    return this[this.length - 1];
  }
});

console.log(cars.last);