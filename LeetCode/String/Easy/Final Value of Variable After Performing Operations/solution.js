var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    let head = operations[i][0];
    let tail = operations[i][operations[i].length - 1];

    if (head === "-" || tail === "-") x--;
    if (head === "+" || tail === "+") x++;
  }

  return x;
};

// 시간 복잡도 : O(N)
