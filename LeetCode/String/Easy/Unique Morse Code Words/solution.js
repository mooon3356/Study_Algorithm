var uniqueMorseRepresentations = function(words) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  
  let hash = new Map()

  // 알파벳과 모스 코드를 키와 값으로 하는 hash map 생성
  for (let i = 0; i < alphabet.length; i++) {
    hash.set(alphabet[i], codes[i])
  }
  // string 배열을 hash map을 참조하여 알파벳을 모스 코드로 변환
  const transformedWordList = words.map((word) => {
    let transformedWord = ''
    for (let i = 0; i < word.length; i++) {
      transformedWord += hash.get(word[i])
    }
    return transformedWord
  })

  // 중복된 코드를 제거하기 위해 set에 할당한 후, 길이 리턴
  return new Set(transformedWordList).size
};