// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12954
// 날짜 : 2021-07-27

function solution(n, m) {
  const result = (a, b) => {
    if (a % b === 0) {
      return [b, (n * m) / b];
    } else {
      return result(b, a % b);
    }
  };
  return result(m, n);
}

/* 유클리드 호제법

두 자연수 a와 b의 최대공약수는 b와 a와 b를 나눈 나머지 r의 최대공약수와 같다.
이 성질을 이용하여 b와 나머지 r을 계속하여 재귀함수로 진행해보자.

재귀함수 조건 : 두 자연수 a에 b를 나눈 나머지가 0이라면, 재귀함수 정지.
-> 이 시점에서 b가 최대공약수가 된다. 최소공배수는 기존 두 자연수의 곱에 최대공약수를 나누면 값이 나온다.

*/
