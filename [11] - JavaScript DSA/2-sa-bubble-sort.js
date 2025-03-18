/*
  Bubble sort repeatedly compares adjacent elements and 
  swaps them if they are in the wrong order, 
  gradually "bubbling" larger elements to the end.

  Time Complexity: O(n^2)
*/

function bubbleSort(array) {
  // Outer Loop:
  //   Iterates over the array from the beginning to the second-to-last element.
  //   Determines the number of passes required to sort the list.

  /*
  === First Pass ===
  outerIndex = 0
  outerIndex < array.length - 1;
  0 < 4 - 1;
  0 < 3 = true
  // Go to the First pass - 1st iteration of the inner loop...
  outerIndex = 0 + 1 = 1

  === Second Pass ===
  outerIndex = 1
  outerIndex < array.length - 1;
  1 < 4 - 1;
  1 < 3 = true;
  let isSwapped = false;
  // Go to the Second pass - 1st iteration of the inner loop...
  outerIndex = 1 + 1 = 2

  === Third Pass ===
  outerIndex = 2
  outerIndex < array.length - 1;
  2 < 4 - 1;
  2 < 3 = true;
  let isSwapped = false;
  // Go to the Third pass - 1st iteration of the inner loop...
  outerIndex = 2 + 1 = 3

  === Fourth Pass ===
  outerIndex = 3
  outerIndex < array.length - 1
  3 < 4 - 1
  3 < 3 = false
  --- Terminate the outer loop ---
  Current: [3, 4, 6, 7]
  */

  for (let outerIndex = 0; outerIndex < array.length - 1; outerIndex++) {
    let isSwapped = false; // Indicate if any swaps occurred in the inner loop

    // Inner Loop:
    //   Iterates through a portion of the list in each pass.
    //   Compares adjacent elements and swaps them if they are in the wrong order.

    /*
    === First Pass ===
    Current Array: [7, 6, 4, 3]
    isSwapped = false;

    == 1st Iteration ==
    innerIndex = 0
    outerIndex = 0
    innerIndex < array.length - outerIndex - 1;
    0 < 4 - 0 - 1;
    0 < 3 = true
    array[0] > array[0 + 1]
    7 > 6 = true;
    temp = array[0]
    temp = 7
    array[innerIndex] = array[0 + 1];
    array[innerIndex] = array[1];
    array[0] = 6;
    [6, 6, 4, 3]
    array[0 + 1] = 7;
    array[1] = 7;
    [6, 7, 4, 3]
    isSwapped = true;
    innerIndex = 0 + 1 = 1

    == 2nd Iteration ==
    innerIndex = 1
    outerIndex = 0
    innerIndex < array.length - outerIndex - 1;
    1 < 4 - 0 - 1;
    1 < 3 = true
    array[innerIndex] > array[innerIndex + 1]
    array[1] > array[1 + 1]
    array[1] > array[2]
    Current: [6, 7, 4, 3]
    7 > 4 = true
    let temp = array[1];
    temp = 7;
    array[innerIndex] = array[1 + 1];
    array[innerIndex] = array[2];
    array[1] = 4;
    Current: [6, 4, 4, 3]
    array[1 + 1] = 7;
    array[2] = 7;
    Current: [6, 4, 7, 3]
    isSwapped = true;
    innerIndex = 1 + 1 = 2

    == 3rd Iteration ==
    innerIndex = 2
    outerIndex = 0
    innerIndex < array.length - outerIndex - 1;
    2 < 4 - 0 - 1;
    2 < 3 = true
    array[innerIndex] > array[innerIndex + 1]
    array[innerIndex] > array[2 + 1]
    array[2] > array[3]
    Current: [6, 4, 7, 3]
    7 > 3 = true
    let temp = array[innerIndex];
    let temp = array[2];
    temp = 7;
    array[innerIndex] = array[2 + 1];
    array[innerIndex] = array[3];
    Current: [6, 4, 7, 3]
    array[2] = 3;
    Current: [6, 4, 3, 3]
    array[2 + 1] = 7;
    array[3] = 7;
    Current: [6, 4, 3, 7]
    isSwapped = true;
    innerIndex = 2 + 1 = 3

    == 4th Iteration ==
    innerIndex = 3
    outerIndex = 0
    innerIndex < array.length - outerIndex - 1;
    3 < 4 - 0 - 1;
    3 < 3 = false
    --- Terminate the inner loop ---
    outerIndex = 0 + 1 = 1
    */

    /*
    === Second Pass ===
    == 1st Iteration ==
    Current: [6, 4, 3, 7]
    innerIndex = 0
    outerIndex = 1
    innerIndex < array.length - outerIndex - 1;
    0 < 4 - 1 - 1;
    0 < 2 = true;
    array[0] > array[0 + 1]
    array[0] > array[1]
    6 > 4 = true
    let temp = array[0];
    temp = 6;
    array[innerIndex] = array[innerIndex + 1];
    array[0] = array[0 + 1];
    array[0] = array[1];
    Current: [6, 4, 3, 7]
    array[0] = 4;
    Current: [4, 4, 3, 7]
    array[innerIndex + 1] = temp;
    array[0 + 1] = 6;
    array[1] = 6;
    Current: [4, 6, 3, 7]
    isSwapped = true;
    innerIndex = 0 + 1 = 1

    == 2nd Iteration ==
    Current: [4, 6, 3, 7]
    innerIndex = 1
    outerIndex = 1
    innerIndex < array.length - outerIndex - 1;
    1 < 4 - 1 - 1;
    1 < 2 = true;
    array[innerIndex] > array[innerIndex + 1]
    array[1] > array[1 + 1]
    array[1] > array[2]
    6 > 3 = true
    let temp = array[innerIndex];
    let temp = array[1];
    temp = 6;
    array[1] = array[1 + 1];
    array[1] = array[2];
    Current: [4, 6, 3, 7]
    array[1] = 3;
    Current: [4, 3, 3, 7]
    array[innerIndex + 1] = temp;
    array[1 + 1] = 6;
    Current: [4, 3, 3, 7]
    array[2] = 6;
    Current: [4, 3, 6, 7]
    isSwapped = true;
    innerIndex = 1 + 1 = 2

    == 3rd Iteration ==
    Current: [4, 3, 6, 7]
    innerIndex = 2
    outerIndex = 1
    innerIndex < array.length - outerIndex - 1;
    2 < 4 - 1 - 1;
    2 < 2 = false;
    --- Terminate the inner loop ---
    */

    /*
    === Third Pass ===
    == 1st Iteration ==
    Current: [4, 3, 6, 7]
    innerIndex = 0;
    outerIndex = 2
    innerIndex < array.length - outerIndex - 1;
    0 < 4 - 2 - 1;
    0 < 1 = true
    array[innerIndex] > array[innerIndex + 1]
    array[0] > array[0 + 1]
    array[0] > array[1]
    4 > 3 = true;
    let temp = array[innerIndex];
    let temp = array[0];
    temp = 4;
    array[innerIndex] = array[innerIndex + 1]
    array[0] = array[0 + 1]
    array[0] = array[1]
    Current: [4, 3, 6, 7]
    array[0] = 3
    Current: [3, 3, 6, 7]
    array[innerIndex + 1] = temp;
    array[0 + 1] = 4;
    Current: [3, 3, 6, 7]
    array[1] = 4;
    Current: [3, 4, 6, 7]
    isSwapped = true;
    innerIndex = 0 + 1 = 1;

    == 2nd Iteration ==
    Current: [3, 4, 6, 7]
    innerIndex = 1;
    outerIndex = 2
    innerIndex < array.length - outerIndex - 1;
    1 < 4 - 2 - 1;
    1 < 1 = false;
    --- Terminate the inner loop ---
    */
    for (
      let innerIndex = 0;
      innerIndex < array.length - outerIndex - 1;
      innerIndex++
    ) {
      if (array[innerIndex] > array[innerIndex + 1]) {
        // Swap the adjacent elements
        let temp = array[innerIndex];
        array[innerIndex] = array[innerIndex + 1];
        array[innerIndex + 1] = temp;
        isSwapped = true;
      }
    }

    // If no swaps occurred in the inner loop, the array is already sorted
    if (!isSwapped) {
      break;
    }
  }
}

// Function calling
const numbers = [7, 6, 4, 3];

// Sort the array using bubble sort
bubbleSort(numbers);

console.log("Sorted array:", numbers);
