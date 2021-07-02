// 링크 : https://programmers.co.kr/learn/courses/30/lessons/42748
// 날짜 : 2021-07-02

function solution(array, commands) {
    var answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let [start, end, index] = commands[i]
        
        let newArr = array.slice(start-1, end).sort((a, b) => a - b)
        
        answer.push(newArr[index-1])
    }
    
    return answer;
}

// 1. commands의 길이만큼 반복문을 돌린다.

// 반복문의 로직은 다음과 같다.
// 1-1. array를 commands의 첫 번째 값과 두 번째 값을 이용하여 slice한다.
// 1-2. slice한 배열을 오름차순으로 정렬한다.
// 1-3. 정렬된 배열에서 commands의 세 번째 값을 이용하여 값을 가져온다.
// 1-4. 가져온 값을 answer에 push한다.
