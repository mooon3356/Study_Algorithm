// 첫 번째 코드
function solution(n) {
  const memo = [0, 1];

  const recursive = (n) => {
    if (memo[n] !== undefined) return memo[n];

    memo[n] = recursive(n - 1) + recursive(n - 2);
    return memo[n];
  };

  return recursive(n) % 1234567;
}

// 두 번째 코드
function solution(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n];
}
