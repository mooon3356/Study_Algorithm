function solution(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i];

    if (obj[another] !== undefined) {
      return [obj[another], i];
    }

    obj[nums[i]] = i;
  }
}

// 주어지는 숫자 배열에서 두 개의 element를 더한 값이 target과 같은 요소들의 인덱스를 구하시오.
// 조건 -> 시간복잡도 O(N)

// 1. 반복문을 실행해서 현재 값을 기억할 수 있는 객체를 생성한다.
// 2. 반복문 실행
//   -> target과 현재 index를 뺀 값이 객체에 존재한다면 [객체 값(index), 현재 인덱스]를 리턴
//   -> target과 현재 index를 뺀 값이 객체에 존재하지 않는다면, 현재 요소의 value와 index를 객체에 저장
