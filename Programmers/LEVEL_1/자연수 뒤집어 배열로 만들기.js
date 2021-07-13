// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12932
// 날짜 : 2021-07-13

function solution(n) {
    const arr = String(n).split('')
    let result = []
    
    for(let i = 0; i < arr.length; i++) {
        result.unshift(arr[i])
    }
        
    return result.map(el => Number(el))
}

/*
1. 숫자로 만든 배열을 반복문을 돌린다.

반복문의 로직은 아래와 같다.
1) 배열의 i번째 숫자를 result 배열에 unshift한다.
2) result 배열의 요소들을 숫자로 만들어 리턴한다.
*/

//reverse 메소드를 사용한 방법

function solution(n) {
    const arr = String(n).split('').reverse()
        
    return arr.map(el => Number(el))
}
