var mostWordsFound = function (sentences) {
  let lengthArr = sentences.map((el) => {
    return el.split(' ').length
  })

  return Math.max(...lengthArr)
}

// 시간 복잡도 O(n)