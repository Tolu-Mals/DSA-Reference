const testCases = [
  {
    input: {
      arr: [
        /*
        Note that we're dealing with an array where
        every row is sorted and every column is sorted.
        But the array itself is not strictly sorted.
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