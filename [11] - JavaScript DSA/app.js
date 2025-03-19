/*
  Binary Search:
  An efficient algorithm for finding a target value in a sorted array.
  It works by repeatedly dividing the search space in half.

  Key Steps:
  1. Initialize pointers:
    - left: Points to the leftmost index.
    - right: Points to the rightmost index.
  2. Find the middle index:
    - mid = (left + right) / 2
  3. Compare the middle element with the target value:
    - If equal, return the index.
    - If less than the target, search the right half.
    - If greater than the target, search the left half.
  4. Repeat steps 2 and 3 until the target is found or the search space is empty.
*/

function binarySearch(sortedArray, targetValue) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;
  let middleIndex;

  /*
  Sorted Array: [10, 20, 30, 40, 50, 60]
  targetValue = 40

  leftIndex = 0
  rightIndex = 5
  middleIndex = undefined

  == 1st Iteration ==  
  rightIndex >= leftIndex
  5 >= 0 = true;
  middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  middleIndex = 0 + Math.floor((5 - 0) / 2);
  middleIndex = 0 + Math.floor(5 / 2);
  middleIndex = 0 + Math.floor(2.5);
  middleIndex = 0 + 2;
  middleIndex = 2;

  sortedArray[middleIndex] === targetValue
  sortedArray[2] === 40
  30 === 40 = false
  sortedArray[2] > 40
  30 > 40 = false
  leftIndex = middleIndex + 1;
  leftIndex = 2 + 1;
  leftIndex = 3;

  == 2nd Iteration ==  
  leftIndex = 3;
  rightIndex = 5
  rightIndex >= leftIndex
  5 >= 3 = true

  middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  middleIndex = 3 + Math.floor((5 - 3) / 2);
  middleIndex = 3 + Math.floor(2 / 2);
  middleIndex = 3 + Math.floor(1);
  middleIndex = 3 + 1;
  middleIndex = 4;

  sortedArray[middleIndex] === targetValue
  sortedArray[4] === 40
  50 === 40 = false

  sortedArray[middleIndex] > targetValue
  sortedArray[4] > 40
  50 > 40 = true
  rightIndex = middleIndex - 1;
  rightIndex = 4 - 1;
  rightIndex = 3;

  == 3rd Iteration ==  
  rightIndex = 3;
  leftIndex = 3;
  rightIndex >= leftIndex
  3 >= 3 = true

  middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  middleIndex = 3 + Math.floor((3 - 3) / 2);
  middleIndex = 3 + Math.floor(0 / 2);
  middleIndex = 3 + Math.floor(0);
  middleIndex = 3 + 0;
  middleIndex = 3;

  sortedArray[middleIndex] === targetValue
  sortedArray[3] === 40
  40 === 40 = true
  return middleIndex;
  return 3;
  */

  while (rightIndex >= leftIndex) {
    middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    // If the target value is at the middle index
    if (sortedArray[middleIndex] === targetValue) {
      return middleIndex;
    }

    // If the target value is smaller than the middle value,
    // search the left half of the array
    if (sortedArray[middleIndex] > targetValue) {
      rightIndex = middleIndex - 1;
    } else {
      // Otherwise, search the right half of the array
      leftIndex = middleIndex + 1;
    }
  }

  // If the target value is not found
  return -1;
}

// Example usage
const numbers = [10, 20, 30, 40, 50, 60];
const target = 40;

const result = binarySearch(numbers, target);
console.log("Result:", result);
