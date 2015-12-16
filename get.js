'use strict';

var modelX = {
  make: 'Tesla',
  model: 'Model X',
  released: 2016
};

var property;

Object.defineProperty(modelX, 'info', {
  get: function () {
    return this.make + ' ' + this.model;
  }
});

console.log(modelX.info);