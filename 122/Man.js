const Work = require('./Work');
const Food = require('./Food');

const item = [
  {
    title: 'Iphone 15',
    cost: 150_000,
  },
  {
    title: 'BMW x6',
    cost: 15_000_000,
  },
  {
    title: 'Penthouse',
    cost: 25_000_000,
  },
  {
    title: 'Gold korobka',
    cost: 10_000_000,
  },
];

class Man {
  constructor(name, age, money = 500, experience = 0, items = [], dead = false) {
    this.name = name;
    this.age = age;
    this.money = money;
    this.experience = experience;
    this.items = items;
    this.dead = dead;
  }

  isDead() {
    if (this.age >= 70) {
      this.dead = Math.random() > 0.95 && true;
      return this.dead;
    }
    return false;
  }

  sayHi() {
    console.log(
      `Hello! My name is ${this.name}, i am ${Math.floor(this.age)} and i have ${this.money}rub
      My items: ${this.items}
      `
    );
  }
}

const gennadiy = new Man('Gennadiy', 25);
const gooooogle = new Work('Gugale');
const shavuha = new Food('Shaverma', 1500);
const soup = new Food('Solyanka', 2450);

gennadiy.sayHi();

for (let i = 0; i < 600; i += 1) {
  const food = i % 2 ? shavuha : soup;
  gooooogle.working(gennadiy, food, item);
}
gennadiy.sayHi();
