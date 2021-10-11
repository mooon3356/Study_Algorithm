var wordPattern = function (pattern, s) {
  let splited = s.split(" ");
  let map = new Map();

  if (splited.length !== pattern.length) return false;
  if (new Set(pattern).size !== new Set(splited).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== splited[i]) return false;
    map.set(pattern[i], splited[i]);
  }
  return true;
};

// 수도 코드 - hashmap을 활용하여 구현
// 예외 처리 : 1. 매개 변수 pattern과 s(split 처리)의 길이가 같지 않다면 바로 false 리턴
//           2. 두 매개 변수를 각각 Set으로 중복 단어들을 제거한 뒤, set의 길이를 비교하여 같지 않다면 false 리턴
// 반복문 실행
// 1. pattern을 순회하면서 map에 저장이 되어 있지 않다면, pattern과 단어를 키와 값으로 하여 map에 저장한다.
// 2. 현재 pattern 알파벳이 map에 저장되어 있다면, 현재 단어가 map에 저장된 단어와 일치하는지 확인한다.

// 시간 복잡도 : O(pattern.length) -> O(N)
