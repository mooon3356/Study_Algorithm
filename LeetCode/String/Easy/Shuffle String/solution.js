var restoreString = function (s, indices) {
  let result = Array(s.length).fill("");

  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};

// 시간 복잡도 : O(N)
