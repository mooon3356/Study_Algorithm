// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12947
// 날짜 : 2021-07-08

function solution(x) {
    let sum = String(x).split('').reduce((acc, cur) => Number(acc) + Number(cur))
    
    return x % sum === 0
}
