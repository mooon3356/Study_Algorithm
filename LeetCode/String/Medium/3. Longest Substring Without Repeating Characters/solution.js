// 1. O(n^2) 방법
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  let map = new Map();
  let set = new Set();
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        temp += s[j];
        set.add(s[j]);
      } else {
        map.set(temp, temp.length);
        set.clear();
        temp = "";
        break;
      }
    }
  }

  let nums = [...map.values()];
  return Math.max(...nums);
};

// 수도 코드
// 1. 문자를 순회한다.
// 2. i번째 문자가 map에 존재하지 않는다면, temp에 더한다.
// 3. i번째 문자가 map에 존재한다면, temp를 map에 저장한다.(length가 value)
//.   -> 저장 후, i번째 문자를 temp로 변경한 후 다시 반복문 진행
// 4. 반복문이 끝나면, 문자열 내에서 반복되지 않는 문자열들이 map에 저장되어 있음. 이 중에서 가장 긴 문자(숫자)를 리턴

// 2. O(n) 방법
var lengthOfLongestSubstring = function (s) {
  // 첫 시작 인덱스를 확인하기 위한 start, 가장 긴 결과의 길이를 저장할 maxLen 변수 선언
  let start = 0;
  let maxLen = 0;
  let map = new Map();

  // 반복문 실행
  for (let i = 0; i < s.length; i++) {
    // i번째 문자가 map에 저장되어 있고, 그 문자의 인덱스가 start보다 크거나 같다면 저장된 문자의 인덱스 + 1을 start에 할당
    if (map.get(s[i]) >= start) start = map.get(s[i]) + 1;

    // 만약 현재까지 합친 문자열의 길이가 maxLen보다 크다면 maxLen 변경
    if (i - start + 1 > maxLen) maxLen = i - start + 1;

    // 위의 조건들을 마무리 후, 현재 문자와 인덱스를 map에 저장
    map.set(s[i], i);
  }
  return maxLen;
};
