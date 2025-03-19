/*
  Selection sort repeatedly finds the minimum element from
  the unsorted part of the array and swaps it with the first element of the unsorted part.
  Time Complexity: 0(n^2)
*/

function swapElements(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  /*
  == First Call ==
  swapElements(array, 0, 4);
  firstIndex = 0
  secondIndex = 4
  Current: [20, 12, 10, 15, 2]

  const temp = array[0];
  temp = 20;
  array[firstIndex] = array[secondIndex];
  array[0] = 2;
  Current: [2, 12, 10, 15, 2]
  array[secondIndex] = temp;
  array[4] = 20;
  Current: [2, 12, 10, 15, 20]
  */

  /*
    == Second Call ==
    Current: [2, 12, 10, 15, 20]
    swapElements(array, 1, 2);
    firstIndex = 1
    secondIndex = 2
    const temp = array[firstIndex];
    const temp = array[1];
    temp = 12;
    array[firstIndex] = array[secondIndex];
    array[1] = array[2];
    Current: [2, 12, 10, 15, 20]
    array[1] = 10;
    Current: [2, 10, 10, 15, 20]
    array[secondIndex] = temp;
    array[2] = 12;
    Current: [2, 10, 12, 15, 20]
  */
}

function selectionSort(array) {
  /*
    Outer loop: (Focus on each pass (ex. First Pass, Second Pass...))
    - Iterate through the array from the beginning to the second-to-last element
    - For each iteration, it considers a new unsorted subarray starting from the current outerIndex.
    */
  /*
    === First Pass ===
    outerIndex = 0
    outerIndex < array.length - 1
    0 < 5 - 1;
    0 < 4 = true;
    minIndex = 0
    // Go to the First Pass - 1st Iteration of the inner loop...
    Current: [2, 12, 10, 15, 20]
    outerIndex = 0 + 1 = 1

    === Second Pass ===
    outerIndex =  1
    outerIndex < array.length - 1
    1 < 5 - 1;
    1 < 4 = true;
    minIndex = 1
    // Go to the Second Pass - 1st Iteration of the inner loop...
    Current: [2, 10, 12, 15, 20]
    outerIndex =  1 + 1 = 2
   */
  for (let outerIndex = 0; outerIndex < array.length - 1; outerIndex++) {
    // Find the minimum element's index in the unsorted subarray

    /*
        Inner Loop: (Iterate over each element)
          - Iterates through the unsorted subarray, starting from the element after the current outerIndex.
          - Compares each element in the subarray with the current minimum element.
          - If a smaller element is found, it updates the minIndex to point to the new minimum element.
      */
    let minIndex = outerIndex;

    /*
    === First Pass ===
    == 1st Iteration ==
    outerIndex = 0
    minIndex = 0
    innerIndex = 1
    1 < 5 = true
    array[innerIndex] < array[minIndex]
    array[1] < array[0]
    Current: [20, 12, 10, 15, 2]
    12 < 20 = true
    minIndex = 1
    innerIndex = 1 + 1 = 2

    == 2nd Iteration ==
    innerIndex = 2
    minIndex = 1
    innerIndex < array.length
    2 < 5 = true
    array[innerIndex] < array[minIndex]
    array[2] < array[1]
    Current: [20, 12, 10, 15, 2]
    10 < 12 = true
    minIndex = 2
    innerIndex = 2 + 1 = 3

    == 3rd Iteration ==
    innerIndex = 3
    minIndex = 2
    innerIndex < array.length;
    3 < 5 = true;
    array[innerIndex] < array[minIndex]
    array[3] < array[2]
    Current: [20, 12, 10, 15, 2]
    15 < 10 = false
    innerIndex = 3 + 1 = 4

    == 4th Iteration ==
    innerIndex = 4
    minIndex = 2
    innerIndex < array.length;
    4 < 5 = true
    array[innerIndex] < array[minIndex]
    array[4] < array[2]
    Current: [20, 12, 10, 15, 2]
    2 < 10 = true
    minIndex = 4
    innerIndex = 4 + 1 = 5

    == 5th Iteration ==
    innerIndex = 5
    innerIndex < array.length;
    5 < 5 = false
    --- Terminal the inner loop ---
    minIndex = 4
    outerIndex = 0

    minIndex !== outerIndex
    4 !== 0 = true
    swapElements(array, outerIndex, minIndex);
    swapElements(array, 0, 4);
    */

    /*
    === Second Pass ===
    Current: [2, 12, 10, 15, 20]

    == 1st Iteration ==
    outerIndex = 1
    minIndex = 1
    innerIndex = outerIndex + 1
    innerIndex = 2
    innerIndex < array.length;
    2 < 5 = true
    array[innerIndex] < array[minIndex]
    array[2] < array[1]
    Current: [2, 12, 10, 15, 20]
    10 < 12 = true
    minIndex = 2
    innerIndex = 2 + 1 = 3

    == 2nd Iteration ==
    innerIndex = 3
    minIndex = 2
    innerIndex < array.length;
    3 < 5 = true
    array[innerIndex] < array[minIndex]
    array[3] < array[2]
    Current: [2, 12, 10, 15, 20]
    15 < 10 = false
    innerIndex = 3 + 1 = 4

     == 3rd Iteration ==
     innerIndex = 4
     minIndex = 2
     innerIndex < array.length;
     4 < 5 = true
     array[innerIndex] < array[minIndex]
     array[4] < array[2]
     Current: [2, 12, 10, 15, 20]
    20 < 10 = false;
    innerIndex = 4 + 1 = 5

    == 4th Iteration ==
    innerIndex = 5
    outerIndex = 1
    minIndex = 2
     innerIndex < array.length;
     5 < 5 = false
     --- Terminate the inner loop --
     minIndex !== outerIndex
     2 !== 1 = true
     swapElements(array, outerIndex, minIndex);
     swapElements(array, 1, 2);
    */
    for (
      let innerIndex = outerIndex + 1;
      innerIndex < array.length;
      innerIndex++
    ) {
      if (array[innerIndex] < array[minIndex]) {
        minIndex = innerIndex;
      }
    }

    if (minIndex !== outerIndex) {
      swapElements(array, outerIndex, minIndex);
    }
  }
}

// Example usage
const numbers = [20, 12, 10, 15, 2];

// Sort the array using selection sort
selectionSort(numbers);

console.log("Sorted array:", numbers);
