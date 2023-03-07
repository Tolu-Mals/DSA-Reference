const testCases = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 5, 4],
  [5, 4, 3, 2, 1],
];

/*
  Time complexity: O(N), n - 1 checks
  Space Complexity: O(1)

  Should be used when your array is numbered 1 to N
*/
const cyclic = (arr) => {
  let i = 0;

  while (i < arr.length) {
    let value = arr[i];

    if (value !== i + 1) {
      let temp = arr[value - 1];
      arr[value - 1] = value;
      arr[i] = temp;
    } else {
      i++;
    }
  }
}

cyclic(testCases[2]);

console.log(testCases[2]);