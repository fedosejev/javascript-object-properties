'use strict';

var car = {
  make: 'Tesla',
  model: 'Model X',
  released: 2016
};

Object.defineProperty(car, 'info', {
  get: function () {
    return this.make + ' ' + this.model;
  }
});

console.log(car.info);