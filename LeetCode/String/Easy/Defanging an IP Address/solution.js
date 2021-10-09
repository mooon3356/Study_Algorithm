var defangIPaddr = function (address) {
  let result = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result += "[.]";
    } else {
      result += address[i];
    }
  }
  return result;
};

// 시간 복잡도 : O(N)
