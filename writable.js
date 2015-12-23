'use strict';

var car = {
  make: 'Tesla',
  model: 'Model X',
  released: 2016
};

Object.defineProperty(car, 'released', { writable: false });

car.released = 2017; // TypeError: Cannot assign to read only property 'released' of #<Object>