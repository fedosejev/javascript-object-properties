class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Tesla extends Car {
  constructor(model, powertrain) {
    super('Tesla', model);
    this.powertrain = powertrain;
  }
}

var modelS = new Tesla('Model S', '85 kWh');

console.log(modelS);