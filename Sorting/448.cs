public class Solution
{
    public static IList<int> FindDisappearedNumbers(int[] nums)
    {
       List<int> result = new List<int>(); 
       int i = 0;

       while(i < nums.Length)
       {
         int currNum = nums[i];

         if(currNum - 1 < nums.Length && currNum != i + 1 && nums[currNum - 1] != currNum)
         {
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
        if(nums[j] != j + 1)
        {
          result.Add(j + 1);
        }
      }

      return result;
    }
}