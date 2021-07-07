// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12948
// 날짜 : 2021-07-07

function solution(phone_number) {
    let first = '';
    let end = phone_number.slice(-4);

    for(let i = 0; i < phone_number.length - 4; i++) {
        first += '*'
    }
    
    return first + end;
}