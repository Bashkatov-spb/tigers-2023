const array = [1, [1], 10, [], [100, [250, 100], [999], [10000, [1000, [666]]]]];

const result = 0;

// function sum(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!Array.isArray(arr[i])) {
//       result += arr[i];
//     } else {
//       sum(arr[i]);
//     }
//   }
// }

function sum(arr) {
  if (typeof arr === 'number') return arr;
  return arr.map((el) => sum(el)).reduce((acc, el) => acc + el, 0);
}

console.log(sum(array));
