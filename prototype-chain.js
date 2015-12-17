function Car(make, model) {
  this.make = make;
  this.model = model;
}

function Tesla(model, powertrain) {
  Car.call(this, 'Tesla', model);
  this.powertrain = powertrain;
}

Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;

var modelS = new Tesla('Model S', '85 kWh');

console.log(modelS);