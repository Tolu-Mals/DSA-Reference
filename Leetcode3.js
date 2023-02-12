//Method 1
//Time complexity: O(N)
//Space Complexity: O(1)

// const lengthOfLongestSubstring = (s) => {
//   let max = 0;
//   let start = 0;
//   const map = new Map();

//   for(let end = 0; end < s.length; end++){
//     if(map.get(s[end]) !== undefined && map.get(s[end]) >= start){
//       start = map.get(s[end]) + 1;
//     }
//     map.set(s[end], end);
//     max = Math.max(max, end - start + 1);
// //    console.log(`${start} ${max}`);
//   }

//   return max;
// }

// console.log(lengthOfLongestSubstring("0b0ced"));


//Method 2: Set Solution or Sliding Window

const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let start = 0;
  const set = new Set();

  for(let end = 0; end < s.length; end++){
    while(set.has(s[end])){
      set.delete(s[start]);
      start = start + 1;
    }
    set.add(s[end]);
    max = Math.max(max, end - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("0b0ced"));
