'use strict';

var car = {
  model: 'Model X'
};

Object.defineProperty(car, 'make', {
  value: 'Tesla'
});

console.log(car.make);