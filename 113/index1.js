function countdown(num) {
  console.log(`Осталось: ${num} секунд`);

  if (num <= 0) {
    return console.log(num); // базовый случай
  }
  countdown(num - 1); // рекурсивный случай
}

countdown(15);
