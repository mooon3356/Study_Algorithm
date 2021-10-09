var balancedStringSplit = function (s) {
  let countR = 0;
  let countL = 0;
  let result = [];
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") countR++;
    if (s[i] === "L") countL++;
    temp += s[i];

    if (countR === countL && countR > 0 && countL > 0) {
      result.push(temp);
      temp = "";
    }
  }
  return result.length;
};

// 시간 복잡도 : O(N)
