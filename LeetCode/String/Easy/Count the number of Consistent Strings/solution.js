const countConsistentStrings = (allowed, words) => {
  let set = new Set(allowed);
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let isValid = words[i].split("").every((el) => set.has(el));
    if (isValid) count++;
  }
  return count;
};

// 수도 코드
// 1. allowed 문자열을 모두 set에 저장한다.
// 2. words를 순회하며 각 word를 구성하고 있는 문자열들이 set에 모두 포함하는지 여부를 확인한다.
// 3. 모두 포함하여 true를 리턴한다면, count++ 한다. 
// 4. count 리턴

// 시간 복잡도 : O(words의 길이 * 가장 긴 word의 길이)
