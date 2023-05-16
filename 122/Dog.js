const Animal = require('./Animal');

class Dog extends Animal {
  constructor(name, age = 1) {
    super(name, age);
    this.budkaHome = true;
  }
}

module.exports = Dog;
