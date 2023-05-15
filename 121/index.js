function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.start = function () {
    console.log(`${this.model} started on diesel ${this.diesel}`);
  };
  this.some = 'sdofnapdsoifn';
}

const obj = {
  model: 'x3',
  year: 2010,
  color: 'white',
  diesel: false,
  turbo: true,
};

function M5({ model, year, color, diesel, turbo }) {
  Car.call(this, model, year, color);
  this.diesel = diesel;
  this.turbo = turbo;
}

Object.setPrototypeOf(M5.prototype, Car.prototype);

const car1 = new Car('BMW', 2023, 'black');
const car2 = new M5(obj);

console.log(car2);
