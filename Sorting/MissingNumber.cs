public class Solution {
    public int MissingNumber(int[] nums) {
      sort(nums);

      for(int i = 0; i < nums.Length; i++)
      {
        if(nums[i] != i)
          return i;
      }

      return nums.Length;
    }

    public static void sort(int[] nums)
    {
      int i = 0;
      while(i < nums.Length) 
      {
        int currInt = nums[i];
        
        if(currInt < nums.Length && currInt != nums[currInt])
        {
          int temp = nums[currInt];
          nums[currInt] = currInt;
          nums[i] = temp;
        }
        else 
        {
          i++;
        }
      }
    }
}