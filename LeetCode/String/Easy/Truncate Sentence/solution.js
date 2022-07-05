var truncateSentence = function(s, k) {
  let splited = s.split(' ').slice(0, k)
  return splited.join(' ')
};