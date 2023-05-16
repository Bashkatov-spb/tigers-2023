class Work {
  constructor(firm, salary = 30_000, koef = 1) {
    this.firm = firm;
    this.salary = salary;
    this.koef = koef;
  }

  working(human, food, item) {
    if (!human.isDead()) {
      human.money += this.payments(human) - food.cost - 15000;
      human.age += 0.1;
      human.experience += 0.1;
      if (item.length > 0 && human.money >= item[0].cost) {
        human.items.push(item[0].title);
        human.money -= item[0].cost;
        item.shift();
      }
    } else {
      console.log(
        'Меньше кушайте дешевую еду, я прожил "хорошую жизнь" - всего хорошего! Я накопил на гробик =('
      );
    }
  }

  payments(human) {
    if (human.experience >= 2) {
      this.koef = 1.5;
    }
    if (human.experience >= 5) {
      this.koef = 2;
    }
    if (human.experience >= 10) {
      this.koef = 3;
    }
    if (human.experience >= 20) {
      this.koef = 4;
    }
    return this.salary * this.koef;
  }
}

module.exports = Work;
