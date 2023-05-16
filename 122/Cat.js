const Animal = require('./Animal');

class Cat extends Animal {
  constructor({ name, age = 1 }) {
    super(name, age);
    this.clawsEdge = true;
  }
}

module.exports = Cat;
