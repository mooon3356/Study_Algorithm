// 1. 반복문이랑 map 활용하여 풀이한 방법
var numUniqueEmails = function (emails) {
  let map = new Map();

  for (let i = 0; i < emails.length; i++) {
    // map에 .을 필터하고 + 뒤의 문자들을 제거한 새로운 메일을 할당
    map.set(getNewEmail(emails[i]), true);
  }
  // 중복되는 메일들을 제거한 map의 길이를 리턴
  return map.size;
};

function getNewEmail(str) {
  let splited = str.split("@");
  let [local, domain] = splited;
  let newLocal = "";

  for (let i = 0; i < local.length; i++) {
    if (local[i] === "+") break;
    if (local[i] === ".") continue;
    newLocal += local[i];
  }

  return `${newLocal}@${domain}`;
}

// 2. 정규 표현식이랑 set 활용하여 풀이한 방법
var numUniqueEmails = function (emails) {
  let set = new Set(
    emails.map((mail) => {
      let splited = mail.split("@");
      let [local, domain] = splited;
      // 정규 표현식으로 .이랑 + 조건을 처리함
      return `${local.replace(/\+.*$|\./g, "")}@${domain}`;
    })
  );

  return set.size;
};
