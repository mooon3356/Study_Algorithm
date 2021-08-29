function solution(maps) {
    let queue = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
  
    queue.push([0, 0, 1]);
    maps[0][0] = 0;
  
    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      if (x === n - 1 && y === m - 1) {
        return count;
      }
  
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
  
        if (nx >= 0 && nx <= n-1 && ny >= 0 && ny <= m-1 && maps[nx][ny] === 1) {
          queue.push([nx, ny, count + 1]);
          maps[nx][ny] = 0;
        }
      }
    }
  
    return -1;
  }
  
  // 1. 큐에 첫 정점을 할당한다.
  // 2. 반복문 실행한다. -> 큐의 길이가 0일 때까지
  //  -> 만약 queue에서 꺼낸 정점이 [maps.length-1, maps.length-1]이라면, 현재 카운트를 리턴
  //  -> 아니라면, 다음으로 갈 수 있는 정점들을 차례대로 큐에 push한다. (카운트와 함께)
  //  -> 큐에 갈 수 있는 정점들을 모두 push 했다면, 현재 정점은 방문한 곳이므로 0으로 처리
  // 3. 반복문이 종료된다면 상대팀 진영에 도달할 방법이 없는 것이므로 -1을 리턴