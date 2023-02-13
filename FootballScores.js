//Link to question: https://leetcode.com/discuss/interview-question/1930478/football-scores-hackerrank-question

//Brute force solution
// const counts = (teamA, teamB) => {
//   let result = [];

//   for(let i = 0; i < teamB.length; i++){
//     let count = 0;

//     for(let j = 0; j < teamA.length; j++){
//       if(teamA[j] <= teamB[i]){
//         count++;
//       }
//     }

//     result.push(count);
//   }

//   return result;
// }

let input = [
  [[1 ,2 ,3], [2, 4]],
  [[2, 10, 5, 4, 8], [3, 1, 7, 8]],
  [[1, 4, 2, 4], [3, 5]]
];

const optmizedCount = (teamA,  teamB) => {
  teamA.sort((a,b) => a - b);
  let result = [];
  
  for(let i = 0; i < teamB.length; i++){
    const target = teamB[i];
    result.push(binarySearch(teamA, target) + 1);
  }

  return result;
}

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]){
      //target > arr[mid] 
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return end;
}

console.log(optmizedCount(input[2][0], input[2][1]));