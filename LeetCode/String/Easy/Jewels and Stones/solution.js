var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let checkBox = Array(stones.length).fill(false);

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (checkBox[j] === true) continue;
      if (jewels[i] === stones[j]) {
        count++;
        checkBox[j] = true;
      }
    }
  }

  return count;
};

// 시간 복잡도 : O(N+M) checkBox 활용하여 중복 확인 제거
