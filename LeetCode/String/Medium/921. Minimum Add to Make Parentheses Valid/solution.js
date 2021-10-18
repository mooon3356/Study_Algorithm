// 1. 스택을 사용해서 풀이한 방법
// 완성된 괄호는 스택에서 제거하다가 마지막에 남은 괄호들의 개수를 리턴
var minAddToMakeValid = function (str) {
  let stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    let bracket = stack[stack.length - 1] + str[i];

    bracket === "()" ? stack.pop() : stack.push(str[i]);
  }

  return stack.length;
};

// 2. 문자를 순회하면서 괄호에 따라 count를 하면서 풀이하는 방법
var minAddToMakeValid = function (str) {
  let open = 0;
  let close = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") open++;
    // 괄호가 '('라면 open 카운트
    else if (!open) close++;
    // 열린 괄호 카운트가 0이고, 현재 괄호가 ')'라면 close 카운트
    else open--;
    // 열린 카운트가 1 이상이고, 현재 괄호가 ')'라면 완성된 괄호이므로 open만 1 제거
  }

  // 완성된 괄호를 완성하지 못한 괄호들의 개수를 리턴
  return open + close;
};
