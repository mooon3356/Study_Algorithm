// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12943
// 날짜 : 2021-07-28

function solution(num) {
    let count = 0;
    const result = (number) => {
        if(number === 1) return count;
        if(count === 500) return -1;
        
        if(number%2 === 0) {
            count++
            return result(number/2);
        } else {
            count++;
            return result(number*3+1)
        }
    }
    return result(num)
}

// 1. 주어진 숫자 num이 짝수라면 2를 나눈다
// 2. 주어진 숫자 num이 홀수라면 3을 곱하고 1을 더한다.

// 위 과정을 num이 1이 나올 때까지 반복하면 되므로 재귀 함수를 사용해보자.