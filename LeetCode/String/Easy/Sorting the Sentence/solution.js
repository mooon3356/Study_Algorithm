var sortSentence = function (s) {
  let sorted = s.split(" ").sort((a, b) => a[a.length - 1] - b[b.length - 1]);

  return sorted.map((el) => el.slice(0, -1)).join(" ");
};