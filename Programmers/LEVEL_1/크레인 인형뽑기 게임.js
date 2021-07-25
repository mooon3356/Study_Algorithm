function solution(board, moves) {
    let stack = []
    let count = 0
  
    for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let targetIdx = moves[i] - 1
        let target = board[j][targetIdx]
        if (target !== 0) {
          if (stack[stack.length - 1] === target) {
            stack.pop()
            count += 2
          } else {
            stack.push(target)
          }
          board[j][targetIdx] = 0
          break
        }
      }
    }
    return count
  }
  