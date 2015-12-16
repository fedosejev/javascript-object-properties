'use strict';

var modelX = {
  make: 'Tesla',
  model: 'Model X',
  released: 2016
};

var property;

Object.defineProperty(modelX, 'released', { writable: false });

modelX.released = 2017; // TypeError: Cannot assign to read only property 'released' of #<Object>