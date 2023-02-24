const testCases = [
  {
    input: ["[5, 2, 6, 1, #, 8, #]", "2", "6"],
    output: 5,
  },
  {
    input: ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"],
    output: 5,
  },
  {
    input: ["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"],
    output: 12,
  },
];

/*
I got this problem in the Flexisaf coding challenge I entered,
and that I'll win! 🤞🏾. 

Time complexity: O(n), where n is the depth of the tree
Space complexity: O(n), recursion uses a stack, plus the
for loop at the end of the code
*/
const BinaryHeapLCA = (arrayString) => {
  let arr = arrayString[0];
  arr = arr.replaceAll(/#/g, 'null');
  arr = JSON.parse(arr);
  const val1 = arrayString[1];
  const val2 = arrayString[2];
  const path1 = [];
  const path2 = [];

  const getLeft = (i) => {
    return (i * 2) + 1;
  }
  
  const getRight = (i) => {
    return (i * 2) + 2;
  }

  const findPath = (root, val, path) => {
    if(arr[root] == null){
      return false;
    }

    path.push(arr[root]);

    if(arr[root] == val){
      return true;
    }

    if(findPath(getLeft(root), val, path) || findPath(getRight(root), val, path)){
      return true;
    }

    path.pop();
  }

  findPath(0, val1, path1);
  findPath(0, val2, path2);

  let i;

  for( i = 0; i < path1.length && i < path2.length; i++){
    if(path1[i] != path2[i]){
       break; 
    }
  }

  return path1[i - 1];
}

console.log(BinaryHeapLCA(testCases[2].input));