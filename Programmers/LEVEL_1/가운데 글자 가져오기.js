// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12903
// 날짜 : 2021-07-02

function solution(s) {
    let length = s.length;
    let mid = Math.floor(s.length/2);
    
    if(length % 2 === 0) {
        return s[length/2-1] + s[length/2]
    } else {
        return s[mid]
    }
    
}

// 목표 : 단어 s의 가운데 글자를 반환하는 함수 구현
// 조건 : 단어의 길이가 짝수라면 가운데 두글자를 반환

// 1. 단어 s의 길이가 짝수인지 홀수인지 판단
// 1-1. 짝수라면, 길이를 2로 나눈 값과 -1을 한 값을 배열의 인덱스로 하여 글자를 가져온다.
// 1-2. 홀수라면, 길이를 2로 나눈 값에서 소수점을 제외한 값을 배열의 인덱스로 하여 글자를 가져온다.
