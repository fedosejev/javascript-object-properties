'use strict';

var car = {
  make: 'Tesla',
  model: 'Model X',
  released: '2016'
};

var property;

Object.defineProperty(car, 'make', { enumerable: false });

for (property in car) { // Should not log 'make'
  console.log(property);
}