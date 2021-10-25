var letterCombinations = function (digits) {
  if (!digits) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  function combine(idx, str) {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let i of map[digits[idx]]) {
      combine(idx + 1, str + i);
    }
  }

  combine(0, "");

  return result;
};

// 수도 코드
// 1. digits의 0번째 숫자부터 시작해서 각각의 알파벳들을 순회하여 조합한다.
// 2. 조합한 문자열의 길이가 digits의 길이와 같다면 result에 push, 아니라면 다음 번째 숫자가 가진 알파벳들을 다시 조합
