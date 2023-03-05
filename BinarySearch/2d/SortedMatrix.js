/*
  Approach:
  Visualize the 2d array as a 1d array,
  then use regular binary search to find
  the target.

  To get the values of mid, map the 
  element's index in the 1d array to
  it's corresponding row and column
  using the following formula:

  Row: i / cols
  Column: i % cols
  
  For reference, see Youtube Video: https://youtu.be/FOa55B9Ikfg
*/

const testCase = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

const BS = (matrix, target) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  //Get's the row of element in the 2d array from element's index in the corresponding flattened array
  const getRow = (i) => {
    return Math.floor(i / cols);
  }

  //Get's the column of element in the 2d array from element's index in the corresponding flattened array
  const getColumn = (i) => {
    return i % cols;
  }

  const getValue = (i) => {
    const matrixPosition = get2dPosition(i);
    return matrix[matrixPosition[0]][matrixPosition[1]];
  }

  const get2dPosition = (i) => {
    const col = getColumn(i);
    const row = getRow(i);

    return [row, col];
  }

  //start in flattened array
  let start = 0;

  //end in flattened array
  let end = rows * cols - 1;

  while(start <= end){
    let mid = Math.floor((start + end ) / 2);
    let midValue = getValue(mid);

    if(midValue === target){
      return get2dPosition(mid);
    } else if(target > midValue){
        start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [-1, -1];
}

console.log(BS(testCase, 5));