public class Solution {
    public IList<int> FindDuplicates(int[] nums) {
      List<int> result = new List<int>();          
      int i = 0;

      while(i < nums.Length)
      {
        int currNum = nums[i];
        if(currNum != nums[currNum - 1])
        {
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

      for(int j = 0; j < nums.Length; j++)
      {
        int currNum = nums[j];
        if(currNum != j + 1)   
        {
          result.Add(currNum);
        }
      }

      return result;
    }
}