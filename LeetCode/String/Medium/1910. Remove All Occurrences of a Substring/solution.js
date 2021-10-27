var removeOccurrences = function (s, part) {
  let regex = new RegExp(part);

  while (regex.test(s)) {
    s = s.replace(part, "");
  }

  return s;
};

// 수도 코드
// 1. 문자열에 part가 존재하지 않을 때까지 반복문 실행
// 2. 존재한다면, replace를 사용하여 문자열에 포함된 part를 하나 제거
// 3. 반복문이 종료되면 s를 리턴
