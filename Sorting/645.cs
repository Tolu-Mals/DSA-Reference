public class Solution {
    public int[] FindErrorNums(int[] nums) {
      int[] result = new int[2];

      //Sort the array and store duplicate
      int i = 0;
      while(i < nums.Length)
      {
        int currNum = nums[i];
        if(currNum != i + 1)
        {
          //check for duplicate
          if(currNum == nums[currNum - 1])
          {
            result[0] = currNum;
            i++;
          }
          else
          {
          //swap
          int temp = nums[currNum - 1];
          nums[currNum - 1] = nums[i];
          nums[i] = temp;
          }
        } else {
          i++;
        }
      }

      for(int j = 0; j < nums.Length; j++)
      {
        if(nums[j] != j + 1)
        {
          result[1] = j + 1;
        }
      }

      return result;
    }
}