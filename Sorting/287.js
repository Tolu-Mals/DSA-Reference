/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let i = 0;

  while(i < nums.length) {
    let currNum = nums[i];
    
    if(currNum !== i + 1){
      if(nums[currNum - 1] === currNum) return currNum;
      
      //swap
      let temp = nums[currNum - 1];
      nums[currNum - 1] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }
};