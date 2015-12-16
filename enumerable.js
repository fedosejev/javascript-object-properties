'use strict';

var modelX = {
  make: 'Tesla',
  model: 'ModelX',
  released: '2016'
};

var property;

Object.defineProperty(modelX, 'make', { enumerable: false });

for (property in modelX) { // Should not log 'make'
  console.log(property);
}