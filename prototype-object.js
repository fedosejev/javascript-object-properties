function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.mileage = 0;

var modelS = new Car('Tesla', 'Model S');
var modelX = new Car('Tesla', 'Model X');

Car.prototype = {
  mileage: 1000
};

var model3 = new Car('Tesla', 'Model 3');

console.log(modelS.model + ': ' + modelS.mileage);
console.log(modelX.model + ': ' + modelX.mileage);
console.log(model3.model + ': ' + model3.mileage);