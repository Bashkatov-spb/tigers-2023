function recurSum(n) {
  if (n === 1) {
    return n;
  }
  return n + recurSum(n - 1);
}

recurSum(5);

function recurSum(5) {
  //
  return 5 + <=== 10 -- recurSum(5 - 1) {
    //
    return 4 + <=== 6 -- recurSum(4 - 1) {
      //
      return 3 + <=== 3 -- recurSum(3 - 1) {
        //
        return 2 + <=== 1 -- recurSum(2 - 1) {
          // +++++++
          return 1
          }
        }
      }
    }
  }
}