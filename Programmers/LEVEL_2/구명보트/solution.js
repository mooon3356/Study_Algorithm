function solution(people, limit) {
    people.sort((a, b) => a - b)
    let count = 0;
        
    while(people.length > 0) {
        let max = people.pop()
        let min = people[0]
        if(max + min <= limit){
            people.shift()
            count++
        } else {
             count++
        }
    }
    return count;
}