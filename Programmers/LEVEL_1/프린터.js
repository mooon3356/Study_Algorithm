function solution(priorities, location) {
  let target = {
    name: "target",
    value: priorities[location],
  };

  let result = [];
  let arr = [...priorities];
  arr[location] = target.name;

  while (!result.includes(target.name)) {
    let first = arr.shift();
    let newPri = [...arr.filter((el) => el !== target.name), target.value];

    if (first === target.name) {
      target.value === Math.max(...newPri) ? result.push(first) : arr.push(first);
    } else {
      first === Math.max(...newPri, first) ? result.push(first) : arr.push(first);
    }
  }
  return result.length;
}

/*
  핵심 : 배열에서 Location에 해당하는 문서가 출력된 배열에 push 됐을 때, 반복문을 끝내고 길이를 리턴해야됨.
  -> pri 배열에서 Location에 해당하는 숫자를 기억할 수 있어야됨.
  
  어떻게?
  - 중요도 숫자를 기억할 수 있게 target 객체를 만들자. target.name='target' target.value=pri[location]
  
  풀이 :
  1. 반복문을 돌린다.(result 배열에 target.name이 존재할 때까지)
   -> pri 배열의 첫 번째 문서가 가장 중요도가 높은 문서라면 result에 push
   -> 그렇지 않다면, 배열에 다시 push해준다.
   
  2. result 배열에 target.name이 존재한다면, 반복문이 끝난다.
  -> result의 길이를 리턴
  
  */
