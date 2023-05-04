2. Поиск всех чисел в строке:

let str = "The price is $15.99 for 2 items";
let pattern = /\d+/g;
let result = str.match(pattern);
console.log(result); // ["15", "99", "2"]

3. Поиск всех слов, начинающихся с большой буквы:

let str = "The Quick Brown Fox Jumps Over The Lazy Dog";
let pattern = /\b[A-Z][a-z]\*\b/g;
let result = str.match(pattern);
console.log(result); // ["The", "Quick", "Brown", "Fox", "Jumps", "Over", "The", "Lazy", "Dog"]

4. Проверка наличия хотя бы одной цифры и одной буквы в пароле:

let password = "Abc123";
let pattern = /^(?=._[0-9])(?=._[a-zA-Z])[a-zA-Z0-9]+$/;
let result = pattern.test(password);
console.log(result); // true

5. Разбиение строки на массив слов:

let str = "The quick brown fox jumps over the lazy dog";
let pattern = /\b\w+\b/g;
let result = str.match(pattern);
console.log(result); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
