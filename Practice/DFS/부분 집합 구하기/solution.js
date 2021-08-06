// 자연수 n이 주어지면 숫자 1부터 n까지 부분 집합을 구하시오.

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function dfs(v) {
    if (v === n + 1) {
      let result = "";
      for (let i = 1; i < ch.length; i++) {
        if (ch[i] === 1) {
          result += i + "";
        }
      }
      if (result !== "") answer.push(result);
      
    } else {
      ch[v] = 1;
      dfs(v + 1);
      ch[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);

  return answer;
}

console.log(solution(3));
