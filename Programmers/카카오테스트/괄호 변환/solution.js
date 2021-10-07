function solution(p) {
  // 빈 문자열이 들어올 경우 빈 문자열 리턴
  if (!p) return p;

  // 문자열 p를 u와 v로 분리하기 위한 head, tail 변수 선언
  let head = 0;
  let tail = 0;
  let u = "";
  let v = "";

  // 문자열 p를 순회하며 처음으로 균형잡힌 괄호 문자열이 나올 때까지 반복
  for (let i = 0; i < p.length; i++) {
    if (head === tail && head > 0 && tail > 0) break;
    if (p[i] === "(") head++;
    if (p[i] === ")") tail++;
    u += p[i];
  }
  // u에 균형잡힌 괄호 문자열을 할당 후, 나머지 문자열을 v에 할당
  v = p.slice(u.length);

  // u 문자열이 올바른 문자열이라면, v를 인자로 재귀 호출 후 문자열 u와 합쳐서 리턴
  if (checkBalanced(u)) {
    return u + solution(v);
  } else {
    // u 문자열이 올바른 문자열이 아니라면, 작성한 수도 코드대로 실행
    let newStr1 = "(" + solution(v) + ")";
    let newStr2 = "";
    for (let i = 1; i < u.length - 1; i++) {
      if (u[i] === ")") newStr2 += "(";
      if (u[i] === "(") newStr2 += ")";
    }
    return newStr1 + newStr2;
  }
}

// 올바른 괄호 문자열인지 확인하는 함수
const checkBalanced = function (str) {
  if (str.length === 0) return true;

  let stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    let bracket = stack[stack.length - 1] + str[i];

    if (bracket === "[]" || bracket === "{}" || bracket === "()") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length === 0) return true;
  return false;
};

const input1 = "(()())()";
const output1 = solution(input1);
console.log(output1); // -> "(()())()"

const input2 = ")(";
const output2 = solution(input2);
console.log(output2); // -> "()"

const input3 = "()))((()";
const output3 = solution(input3);
console.log(output3); // -> "()(())()"

// 수도 코드
// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환한다.
// 2. 문자열 p를 반복문으로 순회하여 u, v로 분리한다.
// 3. 분리한 문자열 u가 올바른 괄호 문자열이라면, 나머지 v를 매개 변수로 재귀 호출한다.
//    -> 여기서 반환되는 문자열은 u에 붙어서 반환된다.
// 4. 분리한 문자열 u가 올바른 괄호 문자열이 아니라면, 아래 과정 실행
//    -> 빈 문자열을 생성하고 '('를 더한다.
//    -> 문자열 v를 재귀 호출하고 문자열에 이어 붙인다.
//    -> 이어서 ')'를 이어 붙인다.
//    -> u의 첫 번째, 마지막 문자 제거 후 나머지 문자열들 괄호 방향 뒤집어서 뒤에 붙임
