class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(`Hello, my name is ${this.name}, i am ${this.age}`);
  }
}

module.exports = Animal;
