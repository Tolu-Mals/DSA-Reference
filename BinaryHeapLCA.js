/*
I got this problem in the Flexisaf coding challenge I entered,
and that I'll win! 🤞🏾. 

Tweet at me on twitter for the question: @tolulopemalomo
*/

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
Approach 1:
Find the paths to each node,
The LCA is the node at which they diverge

Time complexity: O(n), where n is the depth of the tree
Space complexity: O(n), recursion uses a stack, plus the
for loop at the end of the code

PS: This approach didn't actually work
when I was taking the tests, but it worked
later when I was reviewing the problem
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

/*
Approach 2:
This approach is special to me 😊,
because this is the approach I used to win
the coding challenge 🤞🏾, even though I didn't
completely understand it then 😂.

I studied the solution after, so I get it now 😂
*/

const BinaryHeapLCA2 = (arrayString) => {
  let arr = arrayString[0];
  arr = arr.replaceAll(/#/g, 'null');
  arr = JSON.parse(arr);
  const val1 = arrayString[1];
  const val2 = arrayString[2];

  const getLeft = (i) => { 
    return (i * 2) + 1;
  }

  const getRight = (i) => {
    return (i * 2) + 2;
  }

  const findLCA = (root, val1, val2) => {
    if(arr[root] == null) return null;

    if(arr[root] == val1 || arr[root] == val2){
      return arr[root];
    }

    const leftLCA = findLCA(getLeft(root), val1, val2);
    const rightLCA = findLCA(getRight(root), val1, val2);
    
    if(leftLCA != null &&  rightLCA != null){
      return arr[root];
    }

    return (leftLCA != null) ? leftLCA : rightLCA;
  }
  
  return findLCA(0, val1, val2);
}

console.log(BinaryHeapLCA2(testCases[2].input));