function solution(arr) {
  let total = arr.reduce((acc, cur) => acc + cur)
  let diff = total - 100

  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] + arr[j] === diff) {
        arr[i] = 0;
        arr[j] = 0;
      }
    }
  }

  let result = arr.filter(el => el !== 0)
  return result.sort((a, b) => a - b)
}

let input = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let output = solution(input);
console.log(output) // [7, 8, 10, 13, 19, 20, 23]

// 수도 코드
// 1. 9명의 난쟁이들의 키를 모두 더하고 100과 비교한 값을 구한다.
// 2. 난쟁이들 배열을 이중 반복문으로 순회한다.
// 3. 난쟁이 두 명의 키를 합한 값이 1번에서 구한 값과 같다면, 두 난쟁이를 뺀 나머지 난쟁이들만 리턴한다.