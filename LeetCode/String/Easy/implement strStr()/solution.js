var strStr = function (haystack, needle) {
  if (!needle || haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;
  let isValid = false;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j]) {
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
      if (isValid) return i;
    }
  }

  return -1;
};

// 다른 사람 코드
// 전체적인 코드의 로직은 거의 비슷한데, 반복문 조건 설정을 다르게 하여 속도가 좀 더 빨랐다.

const strStr = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0; // the only mandatory check here is (needle === '')
  if (haystack.length < needle.length) return -1; // the other ones are for efficiency

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // start looping through haystack until the remaining substring is shorter than needle
    if (haystack[i] === needle[0]) {
      // as soon as we see a character that matches the first character of needle
      for (let j = 0; j < needle.length; j++) {
        // start looping through both needle and haystack
        if (needle[j] !== haystack[i + j]) {
          // as soon as the characters don't match
          break; // break out of the loop and return to looping through haystack
        } else if (j === needle.length - 1) {
          // otherwise, if we looped through the entire needle and all of the characters matched
          return i; // return the index of the first character of haystack with which we started the loop
        }
      }
    }
  }

  return -1; // return -1 if there wasn't a match
};