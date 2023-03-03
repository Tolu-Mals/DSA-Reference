const testCases = [
  {
    input: {
      arr: [
        /*
        Note that we're dealing with a Row Column Matrix/Array:
        This is an Array/Matrix where every row is sorted and 
        every column is sorted. But the array itself is not
        strictly sorted.
        */
        [10, 20, 30, 40],
        [15, 25, 35, 45],
        [28, 29, 37, 49],
        [33, 34, 38, 50],
      ],
      target: 37
    },
    output: [2, 2]
  }
]

/*
Time Complexity: O(N)
The max no of steps we can take is
N - 1 steps moving from the last column to the first column
And N - 1 steps moving from the first row to the last row
That's N + N = 2N = O(N) (Since we don't look at constants)

Space Complexity: O(1)
We're storing just r and c which don't grow
in size relative to the the size of the input
*/

const BS = (arr, target) => {
  //Assuming this is a square matrix (ie. no of rows = no of columns)
  //In a non square matrix, c = no of columns
  let r = 0;
  let c = arr.length - 1; //or arr[0].length

  while(r < arr.length && c >= 0){
    if(arr[r][c] === target){
      return [r, c];
    } else if(arr[r][c] < target){
      r++;
    } else {
      c--;
    }
  }

  return [-1, -1];
}

console.log(BS(testCases[0].input.arr, testCases[0].input.target));