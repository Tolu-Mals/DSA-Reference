/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let i = 0;
  let result = [];
  
  while(i < nums.length){
    currNum = nums[i];
    if(currNum != nums[currNum - 1]){
      let temp = nums[currNum - 1];
      nums[currNum - 1] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }

  for(let j = 0; j < nums.length; j++){
    let currNum = nums[j];
    if(currNum != j + 1){
      result.push(currNum);
    }
  }

  return result;
};