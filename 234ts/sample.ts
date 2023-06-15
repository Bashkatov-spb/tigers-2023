// Основные типы:

let isDone = true;
let decimal = 6;
let color: string = 'blue';
let u: undefined = undefined;
let n: null = null;

// Типы массивов:

const list: number[] = [1, 2, 3, 12312, 312312312421];
let list2: Array<number | string | number[]> = [
  1,
  2,
  3,
  '123123',
  'fdsfasd',
  'dosafnodsnf',
  1111,
  123123,
  [123123123, 123123, 123123, 432423],
]; // альтернативная форма

// Кортеж (Tuple):

let x: [string, number, boolean];
x = ['hello', 10, true]; // OK
x = [10, 'hello']; // Ошибка

// Void - отсутствие какого-либо типа:

function warnUser(): void {
  return console.log('This is a warning message');
}

function plus(a: number, b: number): number {
  return a + b;
}

type Person = {
  id: number;
  name: string;
  age: number;
  salary: number;
  education: string;
  tasks: string[];
  isAdmin?: boolean;
  gender: Gender;
};

type PersonId = Person['id'];
type PersonIsAdmin = Person['isAdmin'];

const jane: Person = {
  id: 10,
  name: 'Jane',
  age: 30,
  salary: 500_000,
  education: 'dsafadsf',
  tasks: ['sdgfkdasl'],
  gender: 'female',
};

type Gender = 'male' | 'female' | {} | [];

// Интерфейсы:

// interface LabelledValue {
//   label: string;
// }
// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);

// Типы объединения (Union Types):

let value: number | string; // переменная может быть типа number или string
value = 1; // окей
value = 'Hello'; // окей
value = true; // ошибка, так как переменная может быть только типа number или string

export {};
