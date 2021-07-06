// 링크 : https://programmers.co.kr/learn/courses/30/lessons/12977
// 날짜 : 2021-07-06

function solution(nums) {
    let count = 0;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) count++
            }
        }
    }
    
    return count;
   
}

function isPrime(n) {
    if(n === 2 || n === 3) {
        return true;
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}