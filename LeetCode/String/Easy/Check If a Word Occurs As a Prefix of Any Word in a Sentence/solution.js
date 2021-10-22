var isPrefixOfWord = function (sentence, searchWord) {
  let splited = sentence.split(" ");

  for (let i = 0; i < splited.length; i++) {
    let prefix = splited[i].slice(0, searchWord.length);
    if (prefix === searchWord) return i + 1;
  }

  return -1;
};
