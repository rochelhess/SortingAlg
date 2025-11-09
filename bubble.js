function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap using destructuring
        swapped = true;
      }
    }
    n--; // after each pass, the largest element is at the end
  } while (swapped);

  return arr;
} console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));


function merge(arr1, arr2) {
    const merged = [];
    let i = 0; // pointer for arr1
    let j = 0; // pointer for arr2

    // Compare elements from both arrays and push the smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // If any elements are left in arr1, add them
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // If any elements are left in arr2, add them
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves and merge
    return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const arrayMerge = [38, 27, 43, 3, 9, 82, 10];
const sortedArrayMerge = mergeSort(arrayMerge);
console.log(sortedArrayMerge); // [3, 9, 10, 27, 38, 43, 82]


function insertionSort(arr) {
    // Start from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];   // the element we want to insert
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key at the correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const arrayIns = [12, 11, 13, 5, 6];
const sortedArrayIns = insertionSort(arrayIns);
console.log(sortedArrayIns); // [5, 6, 11, 12, 13]

//code for selection sort
function selectionSort(arr) {
    const n = arr.length;

    // Move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Assume the first element of the unsorted part is the minimum
        let minIndex = i;

        // Find the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const arraySel = [64, 25, 12, 22, 11];
const sortedArraySel = selectionSort(arraySel);
console.log(sortedArraySel); // [11, 12, 22, 25, 64]

//quicksort:
// QuickSort function
function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;

    // Choose a pivot (here we pick the last element)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Partition array into two subarrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);   // smaller than pivot
        } else {
            right.push(arr[i]);  // greater or equal to pivot
        }
    }

    // Recursively sort left and right subarrays and combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arrayQ = [10, 7, 8, 9, 1, 5];
const sortedArrayQ = quickSort(arrayQ);
console.log(sortedArrayQ); // [1, 5, 7, 8, 9, 10]


function radixSort(arr) {
    const getMax = (arr) => Math.max(...arr);

    let maxNum = getMax(arr);
    let digitPlace = 1;

    while (Math.floor(maxNum / digitPlace) > 0) {
        arr = countingSortByDigit(arr, digitPlace);
        digitPlace *= 10;
    }

    return arr;
}
//radixsort
function countingSortByDigit(arr, digitPlace) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0); // digits 0-9

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / digitPlace) % 10;
        count[digit]++;
    }

    // Accumulate counts
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output array
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / digitPlace) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

// Example usage:
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray); // [2, 24, 45, 66, 75, 90, 170, 802]
