// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12982
// 날짜 : 2021-07-02

function solution(d, budget) {
    let sum = 0;
    let answer = 0;
    d.sort((a, b) => a - b);

    for(let i = 0; d[i] + sum <= budget; i++) {
        sum += d[i];
        answer += 1
    }
    
    return answer
}

/*

목표 : 최대 몇 팀에게 예산을 지원할 수 있는지 구해야 됨.

1. 배열 d를 올림차순으로 정렬한다.
2. 반복문을 돌린다. (조건은 변수 sum에 배열의 첫 번째 값을 더한 값이 budget보다 작거나 같을 경우에만)
3. 배열 d의 i번째 값을 변수 sum에 더해주고 변수 answer에 1을 더해준다. (지원한 부서 추가하는 것)

*/