'use strict';

var car = {
  model: 'Model X'
};

var property;

Object.defineProperty(car, 'make', {
  value: 'Tesla'
});

console.log(car.make);