function solution(lottos, win_nums, result = []) {
    let count = 0;
    let rank = [6, 6, 5, 4, 3, 2, 1];
    
    if(result.length === 2) {
        return [rank[result[0]], rank[result[1]]]
    }
    
    for(let i = 0; i < lottos.length; i++) {
        if(result.length === 0) {
            if(win_nums.indexOf(lottos[i]) >= 0 || lottos[i] === 0) {
                count++
            } 
        } else {
            if(win_nums.indexOf(lottos[i]) >= 0) {
                count++
            }
        } 
    }
    
    result.push(count);
    
    return solution(lottos, win_nums, result)
}

// 목표 : lottos와 win_nums를 비교하여 최고 순위와 최저 순위를 구하시오

// 최고 순위 구하는 코드
// 1. lottos 배열을 이용하여 반복문을 돌린다.
// 1-1. lottos의 i번째 값을 indexOf 메소드를 사용하여 win_nums에 존재 여부를 확인한다.
//      -> 0 이상이라면, win_nums에 존재하는 숫자이므로 count++
//      -> -1 이라면, win_nums에 존재하지 않는 숫자이므로 패스
// 1-2. i번째 값이 0이라면, count++

// 최저 순위 구하는 코드
// 1. lottos 배열을 이용하여 반복문을 돌린다.
// 1-1. lottos의 i번째 값을 indexOf 메소드를 사용하여 win_nums에 존재 여부를 확인한다.
//      -> 0 이상이라면, win_nums에 존재하는 숫자이므로 count++
//      -> -1 이라면, win_nums에 존재하지 않는 숫자이므로 패스

// 비슷한 반복문이 두 번 반복하여서 재귀 함수로 로직을 바꿈