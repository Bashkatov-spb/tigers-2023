const obj = {
  name: 'Alex',
  age: 30,
  'my salary': 500_000,
  10: 'dfjnsaf',
  60: 'tut',
  50: 'mamba',
};

const array = ['Mary', 25, 500_000];

// const { name: newName, age = 50, salary = 100_000 } = obj;
// const { name: newName, ...functions } = obj;

// const [age, ...rest] = array;

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

function some() {
  return 'some';
}

some.prop = 100_000;
some.func = function somesome() {
  return 'somesome';
};

Object.keys = () => 123124124;

array.func = () => 98123760128376;

console.log(array.func());
