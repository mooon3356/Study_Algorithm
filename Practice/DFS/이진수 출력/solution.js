// 인자 값으로 들어오는 숫자 n의 이진수를 출력하는 함수를 구현하시오. (재귀 사용)

function solution(n) {
  let answer = "";

  function dfs(n) {
    if (n === 0) {
      return;
    } else {
        dfs(Math.floor(n/2))
        answer += n%2
    }
  }

  dfs(n);
  return answer;
}

const answer = solution(11);

console.log(answer);
