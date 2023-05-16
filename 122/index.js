class Point {
  #password; // объявление приватного поля

  #admin = false;

  PORT = 10000;

  constructor(password, admin = false, port) {
    this.#password = password;
    this.#admin = admin;
    this.PORT = port;
  }

  // геттер
  get x() {
    if (this.#admin) {
      return this.#password;
    }
  }

  // сеттер
  set x(value) {
    if (value >= 0 && this.#admin) {
      this.#password = value;
    }
  }
}
const a = new Point('aisjdbfoiasdubfoi', true);
// a.x = 1000;
console.log(Point.PORT);
