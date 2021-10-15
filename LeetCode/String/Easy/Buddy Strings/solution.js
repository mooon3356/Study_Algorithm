var buddyStrings = function (A, B) {
  // A와 B의 길이가 같지 않다면, false 리턴
  if (A.length != B.length) return false;

  // 두 문자열 간의 다른 문자열들을 보관할 배열 선언
  const diff = [];

  // 문자열 A 반복문 실행
  for (let i = 0; i < A.length; i++) {
    // 비교하는 두 문자가 같지 않다면, 인덱스를 diff에 push
    if (A[i] != B[i]) diff.push(i);

    // 만약 diff의 길이가 3 이상이라면, 스왑 한 번으로 B와 같게 만들 수 없으므로 바로 false 리턴
    if (diff.length > 2) return false;
  }

  // 만약 두 문자열이 같다면, set을 활용하여 중복 문자를 제거한 새로운 문자열과 기존 문자열을 비교하여 boolean 값 리턴
  if (!diff.length) return A.length != new Set(A).size;

  // diff 배열에서 차이가 있는 문자열의 인덱스를 스왑한 결과값을 비교한다.
  const [i, j] = diff;
  return A[i] === B[j] && B[i] === A[j];
};
