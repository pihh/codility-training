function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

// Javascript implementation of Counting Sort
function countingSort(arr)
{
    var n = arr.length;
 
    // The output character array that will have sorted arr
    var output = Array.from({length: n}, (_, i) => 0);
 
    // Create a count array to store count of individual
    // characters and initialize count array as 0
    var count = Array.from({length: 256}, (_, i) => 0);
 
 
    // store count of each character
    for (var i = 0; i < n; ++i)
        ++count[arr[i].charCodeAt(0)];
    // Change count[i] so that count[i] now contains actual
    // position of this character in output array
    for (var i = 1; i <= 255; ++i)
        count[i] += count[i - 1];
 
    // Build the output character array
    // To make it stable we are operating in reverse order.
    for (var i = n - 1; i >= 0; i--) {
        output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
        --count[arr[i].charCodeAt(0)];
    }
 
    // Copy the output array to arr, so that arr now
    // contains sorted characters
    for (var i = 0; i < n; ++i)
        arr[i] = output[i];
     return arr;
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }