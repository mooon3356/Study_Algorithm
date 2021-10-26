var reverseString = function (s, count = 0) {
  if (count === Math.floor(s.length / 2)) {
    return s;
  }

  let temp = s[count];
  s[count] = s[s.length - count - 1];
  s[s.length - count - 1] = temp;
  count++;

  return reverseString(s, count);
};
