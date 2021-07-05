//링크 : https://programmers.co.kr/learn/courses/30/lessons/12921
//날짜 : 2021-07-05


function solution(n) {
    let count = 1;
    for(let i = 3; i <= n; i++) {
        let isPrime = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            count++
        }
    }
    
    return count;
}

/*

목표 : 1부터 숫자 n 사이에 있는 소수의 개수를 구해야 됨.
-> 소수는 1과 자기 자신으로만 나누어지는 수이므로 반복문을 돌려서 다른 숫자로 나누어지지 않는다면 소수.

1. 1부터 숫자 n 사이에 있는 숫자들을 반복문 돌린다.
2. 이중반복문을 돌려서 i번째 숫자를 2부터 i-1까지 나누어 떨어지는지 확인한다.
2-1. 한 번이라도 나누어 떨어지지 않는다면, 소수이므로 변수 count++ 한다.
2-2. 한 번이라도 나누어 떨어진다면, 소수가 아니므로 패스

위 로직은 효율성이 매우 떨어져서 큰 숫자가 들어가면 시간 초과로 통과가 안됨

*/


// 아래는 Math.sqrt() 메소드를 사용하여 속도를 늘린 코드

function solution(n) {
    let count = 1;
    
    for(let i = 3; i <= n; i = i+2) {
        let isPrime = true;
        
        for(let j = 2; j <= Math.sqrt(i); j++) {
            
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) count++
    }
  return count;
}

/*

숫자 N의 약수는 무조건 sqrt() 범위 내에 존재하는 특성을 이용함
1과 숫자 N 사이의 숫자들에서 짝수는 무조건 소수가 아니므로 반복문 로직에서 +2를 해줌
여전히 효율성 테스트에서 통과 X

*/


// 아래는 에라토스테네스의 체 알고리즘을 사용한 코드

function solution(n) {
    let arr = [];
    
    for(let i = 2; i <= n; i++){
        arr[i] = i;
    }
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(arr[i] === 0) continue;

        for(let j = i+i; j <= n; j+=i){
            arr[j] = 0;
        }
    }
    
    
    return arr.filter(el => el !== 0).length;
}

/*

1. 숫자 0부터 n개까지 반복분을 돌려서 배열을 만든다. 
 숫자 0과 1은 소수가 아니라서 필요없는데 배열에 포함시킨 이유는? -> 인덱스와 해당하는 값이 일치하게 하기 위해서
 
2. 이중 반복문 사용
2-1. i 반복문에서는 숫자 2부터 숫자 N의 제곱근까지 반복문을 돌린다.
    -> 2와 숫자 N 제곱근 사이에 있는 소수들의 배수들을 빼면 소수만 남기 때문
2-2. j 반복문에서는 숫자 i+i부터 시작을 해서 숫자 i의 배수들을 제거한다. (0으로 처리)

3. 숫자 0이 아닌 값들을(소수) 필터한 배열의 length를 리턴한다. 
 
 */
