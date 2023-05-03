const array = [123, 3, 4, 541, 545, 5433, 2, 222, 44, 4324, 99];

for (let i = 0; i < array.length; i += 1) {
  for (let j = 0; j < array.length - 1; j += 1) {
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
