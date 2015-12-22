'use strict';

var car = {
  make: 'Tesla',
  model: 'Model X',
  released: '2016'
};

Object.defineProperty(car, 'released', { configurable: false });
Object.defineProperty(car, 'released', { enumerable: false }); // Should throw an error: TypeError: Cannot redefine property: released