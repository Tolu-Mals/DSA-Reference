/**
 * @param {number[]} nums
 * @return {number[]}
 * Asked in Google
 */
var findDisappearedNumbers = function(nums) {
  let result = [];
  let i = 0;

  //Sort numbers using Cyclic Sort
  while(i < nums.length) {
    let currNum = nums[i];
    
    if(currNum - 1 < nums.length && currNum !== i + 1 && nums[currNum - 1] !== currNum) {
      let temp = nums[currNum - 1];
      nums[currNum - 1] = currNum;
      nums[i] = temp;
    } else {
      i++;
    }
  }

  for(let j = 0; j < nums.length; j++){
    if(nums[j] !== j + 1) result.push(j + 1);
  }

  return result;
};