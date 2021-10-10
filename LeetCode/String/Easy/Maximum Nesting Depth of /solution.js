// 1. 첫 번째 코드
var maxDepth = function (s) {
  let head = 0;
  let tail = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") head++;
    if (s[i] === ")") tail++;

    if (head > 0 && tail === 1) {
      stack.push(head);
      head--;
      tail--;
    }
  }

  if (stack.length === 0) {
    return 0;
  } else {
    return Math.max(...stack);
  }
};

// 시간 복잡도 : O(N)

/*
 1. 속도 문제점
 마지막 리턴할 때 Math.max를 사용해서 가장 큰 숫자를 가져오게 구현되어 있다.
 현재 매개변수 문자열 길이의 범위가 100까지인데, ()의 개수가 많다면 stack에 많이 쌓이게 된다.
 그래서 가장 큰 숫자를 확인하는 과정에서 불필요한 연산이 발생하게 된다.
 */

// 속도 개선한 코드
const maxDepth = (s) => {
  let head = 0;
  let tail = 0;

  return s.split("").reduce((depth, cur) => {
    if (cur === "(") head++;
    if (cur === ")") tail++;
    return Math.max(head - tail, depth);
  }, 0);
};

// 문자열을 순회하는 과정에서 계속 가장 깊은 depth를 계산할 수 있게 구현
// 처음 구현한 코드와 시간 복잡도는 같지만, 속도는 더 빠름
// 시간 복잡도 : O(N)
