function solution(s) {
    let numArr = s.split(' ').map(el => Number(el))
    let max = Math.max(...numArr)
    let min = Math.min(...numArr)
    
    return `${min} ${max}`
}