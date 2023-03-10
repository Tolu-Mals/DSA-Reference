public class Solution {
    public int FindDuplicate(int[] nums) {
      int i = 0;

      while(i < nums.Length)
      {
        int currNum = nums[i];
        
        if(currNum != i + 1)
        {
          if(currNum == nums[currNum - 1])
          {
            return currNum;
          }

          //swap
          int temp = nums[currNum - 1];
          nums[currNum - 1] = nums[i];
          nums[i] = temp;
        }
        else
        {
          i++;
        }
      }

      return -1;
    }
}