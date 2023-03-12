public class Solution {
    public int FirstMissingPositive(int[] nums) {
      int i = 0;

      while(i < nums.Length)
      {
        int currNum = nums[i];
        if(currNum > 0 && currNum - 1 < nums.Length && currNum != nums[currNum - 1])
        {
          //swap 
          int temp = nums[currNum - 1];
          nums[currNum - 1] = currNum;
          nums[i] = temp;
        }
        else
        {
          i++; 
        }
      }

      for(int j = 0; j < nums.Length; j++)
      {
        if(nums[j] != j + 1) return j + 1;
      }

      return nums.Length + 1;
    }
}