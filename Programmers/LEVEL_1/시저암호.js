// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12926
// 날짜 : 2021-07-28

function solution(s, n) {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (let i = 0; i < 2; i++) {
    arr = [...arr, ...arr];
  }

  let answer = "";

  let stringArr = s.split("");

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === " ") {
      answer += " ";
      continue;
    }

    let idx = arr.indexOf(stringArr[i].toLowerCase());

    if (stringArr[i] === stringArr[i].toUpperCase()) {
      answer += arr[idx + n].toUpperCase();
    } else {
      answer += arr[idx + n];
    }
  }

  return answer;
}

// 1. 모든 알파벳을 적는다.
// 2. 반복문을 돌려 stringArr[i]번째 알파벳이 모든 알파벳 중 몇 번째 인덱스에 속한 지 확인한다.
// 3. 인덱스 + n번째 알파벳으로 변경한다
