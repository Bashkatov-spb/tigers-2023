const array = [1, 'string', true, undefined, { name: 'Alex' }, [], () => console.log('123')];

const arr1 = [...array];
// arr1[0] = 100_000;
// arr1[4].name = 'Jane';
// console.log(arr1, array);
const arr2 = array.slice();
const arr3 = array.map((el) => el);
const arr4 = array.filter((el) => true);
const arr5 = new Array(array);
const arr6 = Array.from(array);
const arr7 = [];
array.forEach((element) => {
  arr7.push(element);
});
const arr8 = JSON.parse(JSON.stringify(array));
const arr9 = array.concat([]);
