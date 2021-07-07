// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12934
// 날짜 : 2021-07-07

function solution(n) {
    let sqrt = Math.sqrt(n)
    if(Number.isInteger(sqrt)) {
        return (sqrt+1) * (sqrt+1)
    } else {
        return -1
    }
}
