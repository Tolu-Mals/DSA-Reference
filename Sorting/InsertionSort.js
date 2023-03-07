const testCases = [
  [0, 1, 2, 3, 4],
  [1, 3, 2, 0, 4],
  [4, 2, 3, 1, 0],
];

/*
  Time Complexity:
    Best Case: O(N)
    Worst Case: O(N²)

    More Info: 
    Although Bubble Sort and InsertionSort both
    have a best case complexity of O(N), insertion sort is
    actually more optimized because, it's more adaptive,
    it handles partially sorted arrays better than Bubble
    sort. For bubble sort, it usually does one extra check
    where 'swapped' remains true before breaking out of the loop.
    However for insertion sort, it breaks the loop more quickly
    when it detects a sorted section, hence it's more adaptable,
    and handles partially sorted arrays better.
*/

const insertion = (arr) => {
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j > 0; j--){
      if(arr[j] < arr[j - 1]){
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

insertion(testCases[2]);

console.log(testCases[2]);