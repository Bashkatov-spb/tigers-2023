const myProto = { x: 1 };

// создать объект на основе шаблона
// const myObject = Object.create(myProto);

// myProto.x = 2;
// console.log(myObject.x);

const myObject = Object.create(myProto);

// получить прототип объекта
// console.log(myProto.toString()); // {x: 1}

// установить новый прототип объекта
Object.setPrototypeOf(myObject, { y: 2 });
console.log(Object.getPrototypeOf(myObject));
