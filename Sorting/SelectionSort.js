const testCases = [
  [0, 1, 2, 3, 4],
  [1, 3, 2, 0, 4],
  [4, 2, 3, 10, 0],
];

/*
  Time Complexity: O(N²)
  Space Complexity: O(1)
*/
const getMax = (arr, start, end) => {
  let max = start; 

  for(let i = start + 1; i <= end; i++){
    if(arr[max] < arr[i]){
      max = i;
    }
  }

  return max;
}

const swapWithEnd = (arr, start, end) => {
  const max = getMax(arr, start, end);

  //A little optimization, don't swap if the value is already at the corerct position
  if(max === end) return;

  let temp = arr[end];
  arr[end] = arr[max];
  arr[max] = temp;
}

const selection = (arr) => {
  for(let i = 1; i < arr.length; i++){
    swapWithEnd(arr, 0, arr.length - i);
  }
};

selection(testCases[2]);
console.log(testCases[2]);