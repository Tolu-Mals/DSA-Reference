/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
  let start = 0;
  let end = 0;

  for( let i = 0; i < nums.length; i++){
     start = Math.max(start, nums[i]);
     end += nums[i];
  }

  while(start < end){
    let mid = Math.floor((start + end) / 2);

    sum = 0;
    let peices = 1;

    //Calculate peices
    for(let i = 0; i < nums.length; i++){
       if(sum + nums[i] > mid){
         sum = nums[i];
         peices++;
       } else {
         sum += nums[i];
       }
    }

    //Reduce sample space intelligently
    if(peices > k){
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return end;
};