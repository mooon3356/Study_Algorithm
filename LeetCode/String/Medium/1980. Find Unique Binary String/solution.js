var findDifferentBinaryString = function (nums) {
  if (nums[0] === "0") return "1"; // 예외 처리
  if (nums[0] === "1") return "0"; // 예외 처리

  let set = new Set(nums);
  let result = "";

  if (dfs("1") === undefined) return dfs("0");
  else return dfs("1");

  function dfs(str) {
    if (str.length === nums.length) {
      result = str;
      return;
    }

    dfs(str + "1");
    if (!set.has(result)) return result;
    dfs(str + "0");
    if (!set.has(result)) return result;
  }
};

// 수도 코드
// 1. nums 배열을 set에 저장한다.
// 2. 문자열 1을 매개 변수로 dfs 실행
//    -> str의 길이가 nums의 길이와 일치한다면 아래 조건 실행
//       -> set에 저장된 문자라면, 그냥 리턴. set에 저장되지 않은 문자라면, 해당 문자 리턴
//    -> str의 길이가 nums의 길이와 일치하지 않는다면, 1을 추가한 문자와 0을 추가한 문자를 매개 변수로 다시 dfs 실행
