'use strict';

var modelX = {
  make: 'Tesla',
  model: 'ModelX',
  released: '2016'
};

Object.defineProperty(modelX, 'released', { configurable: false });
Object.defineProperty(modelX, 'released', { enumerable: false }); // Should throw an error: TypeError: Cannot redefine property: released