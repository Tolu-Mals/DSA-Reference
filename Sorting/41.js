/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = 0;

  while(i < nums.length)  
  {
    let currNum = nums[i];
    if(currNum > 0 && currNum - 1 < nums.length && currNum !== nums[currNum - 1]){
      //swap
      let temp = nums[currNum - 1];
      nums[currNum - 1] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }

  for(let j = 0; j < nums.length; j++){
    if(nums[j] != j + 1){
      return j + 1; 
    }
  }

  return nums.length + 1;
};