const testCases = [
  [0, 1, 2, 3, 4],
  [1, 3, 2, 0, 4],
  [4, 2, 3, 1, 0],
];

const bubble = (arr) => {
  let swapped = false;
  for(let i = 1; i < arr.length; i++){
    swapped = false;
    for(let j = 0; j < arr.length - i; j++){
      if(arr[j] > arr[j + 1]){
        swapped = true;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if(!swapped) break;
  }

  return arr;
}

console.log(bubble(testCases[2]));