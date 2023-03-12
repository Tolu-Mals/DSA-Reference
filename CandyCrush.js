/*
  https://leetcode.com/discuss/interview-question/380650/bloomberg-phone-screen-candy-crush
  
*/

function CandyCrush(str){
  let stack = [];
  let start = 0;
  let end = 0;

  while(end < str.length + 1){
    if(str[end] === str[start]){
      stack.push(str[end]);
      end++;
    } else {
      let match = end - start;
      if(match >= 3){
        stack = stack.slice(0, start);
        str = stack.join('') + str.slice(end);
        return CandyCrush(str);
      } else {
        start = end;
      }
    }
  }

  return stack.join('');
}

let testCases = [
  "aabbbacd",
   "aaabbbc",
  "aabbccddeeedcba",
  "aaabbbacd"
];

console.log(CandyCrush(testCases[3]));
