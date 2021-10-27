var numSpecialEquivGroups = function (words) {
  let set = new Set();

  for (let i = 0; i < words.length; i++) {
    let arr = words[i].split("");
    let even = arr.filter((el, idx) => idx % 2 === 0).sort();
    let odd = arr.filter((el, idx) => idx % 2 === 1).sort();
    set.add(even.join("") + odd.join(""));
  }

  return set.size;
};

// 수도 코드
// 1. words를 순회한다.
// 2. i번째 문자열을 짝수 번째 숫자들과 홀수 번째 숫자들을 sort 처리하여 새롭게 문자를 만든다.
//    -> 생성한 문자를 set에 저장한다.
