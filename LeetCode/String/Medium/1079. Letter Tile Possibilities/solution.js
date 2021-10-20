var numTilePossibilities = function (tiles) {
  let checkList = Array(tiles.length).fill(false);
  let result = new Map();

  for (let i = 0; i < tiles.length; i++) {
    if (result.get(tiles[i])) continue;
    checkList[i] = true;
    dfs(tiles[i], i);
  }

  return result.size;

  function dfs(str, idx) {
    if (str.length === tiles.length) {
      result.set(str, true);
      checkList[idx] = false;
      return;
    }

    for (let i = 0; i < checkList.length; i++) {
      if (!checkList[i]) {
        checkList[i] = true;
        dfs(str + tiles[i], i);
      }
    }

    result.set(str, true);
    checkList[idx] = false;
  }
};

// 수도 코드
// 1. tiles의 길이만큼 checklist를 생성한다.
// 2. tiles의 길이만큼 반복문을 실행한다. dfs 실행 -> 여기서 인자로 넣은 문자열을 체크리스트에 체크
//    -> 인자로 들어온 문자열의 길이가 tiles의 길이와 같다면, 해당 문자를 map에 할당하고 함수 종료
//    -> 아니라면, checklist를 순회하여 체크가 되지 않은 문자열을 더해서 다시 dfs 호출
