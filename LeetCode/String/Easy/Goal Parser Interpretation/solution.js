// 1. 내 풀이
var interpret = function (command) {
  let splited = command.split("");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] + splited[i + 1] === "()") {
      splited[i] = "o";
      splited[i + 1] = "";
      i++;
      continue;
    }

    if (splited[i] === "(" || splited[i] === ")") {
      splited[i] = "";
    }
  }

  return splited.join("");
};

// 시간 복잡도 : O(N)

// 2. 한 줄로 가능했던 다른 사람 코드(인자로 goal이 들어올 때만 가능한 코드)
var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};

// 시간 복잡도는 같음
