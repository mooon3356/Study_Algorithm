var findAndReplacePattern = function (words, target) {
  let result = [];
  let targetPattern = getPattern(target);

  for (let i = 0; i < words.length; i++) {
    let wordPattern = getPattern(words[i]);
    if (targetPattern === wordPattern) result.push(words[i]);
  }

  return result;
};

function getPattern(str) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === undefined) {
      map.set(str[i], map.size);
      result.push(map.get(str[i]));
    } else {
      result.push(map.get(str[i]));
    }
  }
  return result.join("");
}

// 수도 코드
// 1. pattern을 map에 할당한 후, pattern을 이루는 알파벳들의 map에서의 index를 구한다.
//    -> ex) 문자열이 'baba' 인 경우 map에 문자와 인덱스를 쌍으로 b와 a를 저장한다. -> b: 0, a: 1
//           map에 저장하는 과정에서 index를 배열에 저장한다. -> [0, 1, 0, 1]
// 2. words 배열을 순회하면서 각각의 요소들에도 위 로직을 실행하여 패턴을 알 수 있는 배열을 구한 후, pattern 배열과 비교한다.
