function solution(n, computers) {
    let count = 0;
    let visited = {}
    
    for(let vertex = 0; vertex < computers.length; vertex++) {
        if(!visited[vertex]) {
          dfs(vertex, computers, 0)
          count++
        }
    }
    
    function dfs(vertex, computers) {
        visited[vertex] = true;

        for(let i = 0; i < computers[vertex].length; i++){
            if(computers[vertex][i] === 1 && !visited[i]) {
                dfs(i, computers)
            } 
        }        
    }
    
    return count;
}