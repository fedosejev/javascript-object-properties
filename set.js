'use strict';

var car = {};

Object.defineProperty(car, 'name', {
  set: function (value) {
    var nameParts = value.split(' ');

    this.make = nameParts[0];
    this.model = nameParts[1] + ' ' + nameParts[2];
  }
});

car.name = 'Tesla Model X';

console.log(car.make);
console.log(car.model);