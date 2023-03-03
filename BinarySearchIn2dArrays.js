const testCases = [
  {
    input: {
      arr: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      target: 9
    },
    output: [1, 1]
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