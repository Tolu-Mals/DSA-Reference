const testCases = [
  [0, 1, 2, 3, 4],
  [1, 3, 2, 0, 4],
  [4, 2, 3, 10, 0],
];

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

  let temp = arr[end];
  arr[end] = arr[max];
  arr[max] = temp;
}

const selection = (arr) => {
  for(let i = 1; i < arr.length; i++){
    // const max = getMax(arr, 0, arr.length - i);
    swapWithEnd(arr, 0, arr.length - i);
  }
};

selection(testCases[2]);
console.log(testCases[2]);