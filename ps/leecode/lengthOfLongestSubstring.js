const lengthOfLongestSubstring = function(s) {
  let subStr = "";
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (subStr.includes(s[i])) {
      console.log(subStr.slice(subStr.indexOf(s[i]) + 1));
      subStr = subStr.slice(subStr.indexOf(s[i]) + 1);
    }
    subStr += s[i];
    result.push(subStr.length);
  }
  return Math.max(...result);
};
console.log(lengthOfLongestSubstring("abcabcbb"));
