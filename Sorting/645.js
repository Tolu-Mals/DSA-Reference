/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let result = [];
  let i = 0;
  
  while(i < nums.length){
    let currNum = nums[i];
    if(currNum !== i + 1){
      if(currNum === nums[currNum - 1]){
        result[0] = currNum;
        i++;
      } else {
        let temp = nums[currNum - 1];
        nums[currNum - 1] = nums[i];
        nums[i] = temp;
      }
    } else {
      i++;
    }
  }

  for(let j = 0; j < nums.length; j++){
    if(nums[j] !== j + 1){
      result[1] = j + 1;
    }
  }

  return result;
};