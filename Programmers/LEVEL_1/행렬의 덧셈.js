// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12950
// 날짜 : 2021-07-07

function solution(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        let newArr = arr1[i].map((el,idx) => {
            return el + arr2[i][idx]
        })
        result.push(newArr)
    }
    return result;
}