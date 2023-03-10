/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  sort(nums);

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i) return i;
  }

  return nums.length;
};

function sort(nums) {
 let i = 0;

 while(i < nums.length){
   let currNum = nums[i];

   if(currNum < nums.length && currNum !== i){
     let temp = nums[currNum];
     nums[currNum] = nums[i];
     nums[i] = temp;
   } else {
     i++; 
   }
 }
}