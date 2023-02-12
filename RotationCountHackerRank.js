const testcases = [
  [15, 18, 2, 3, 6, 12],
  [1, 2, 3, 4, 5]
]

//Brute force solution
/*
  Time complexity: O(n)
  Space complexity: O(1)
*/

const rotationCountBrute = (arr) => {
  //Check if arr is rotated
  //If the arr isn't rotated the last element is larger than the first, so the rotation count is zero
  if (arr[0] < arr[arr.length - 1]) return 0;

  //If the array is rotated, it will have a minimum rotation of 1
  let rotationCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      rotationCount++;
      continue;
    }

    else {
      return rotationCount;
    }
  }
}

// console.log(rotationCountBrute(testcases[1]));

//Optimized solution
const rotationCountOptimized = (arr) => {
  //Check if arr is rotated
  //If the arr isn't rotated the last element is larger than the first, so the rotation count is zero
  if (arr[arr.length - 1] > arr[0]) return 0;

  const peak = findPeak(arr);

  return peak + 1;
}

const findPeak = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end){
   let mid = Math.floor((start + end ) / 2);

   if(arr[mid] > arr[mid + 1]){
    return mid;
   }

   if(arr[mid - 1] > arr[mid]){
    return mid - 1;
   }

   if(arr[mid] > arr[start]) start = mid + 1;
   else end = mid -1 ;
  }

  return -1;
}

console.log(rotationCountOptimized(testcases[0]));

