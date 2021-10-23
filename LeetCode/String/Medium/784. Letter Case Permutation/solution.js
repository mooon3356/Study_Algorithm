var letterCasePermutation = function (s) {
  if (Number(s)) return [s];
  let map = new Map();

  dfs(s, 0);

  function dfs(str, idx) {
    if (map.has(str)) return;
    else map.set(str, true);

    for (let i = idx; i < str.length; i++) {
      if (!Number(str[i])) {
        let splited = str.split("");
        splited[i] = splited[i].toLowerCase();
        dfs(splited.join(""), i + 1);
        splited[i] = splited[i].toUpperCase();
        dfs(splited.join(""), i + 1);
      }
    }
  }

  return [...map.keys()];
};

// 수도 코드
// 1. 문자열 s와 idx를 매개 변수로 dfs를 실행한다.
// 2. 문자열 s가 map에 이미 존재한다면, return. 존재하지 않는다면, result에 push
//.   -> 그리고 idx를 시작으로 문자를 순회한다.
//    -> 순회하는 과정에서 현재 문자열에서 idx 번째 요소가 문자열이라면, 소문자 대문자로 바꿔서 각각 다시 dfs 호출(여기서 i++)
