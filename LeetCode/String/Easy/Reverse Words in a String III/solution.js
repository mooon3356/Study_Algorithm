var reverseWords = function (s) {
  const words = s.split(' ')

  const reversedWords = words.map((el) => {
    return el.split('').reverse().join('')
  })

  return reversedWords.join(' ')
}
