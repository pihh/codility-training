/* -------------------------------------------------------------------------- */
/*                                BINARY SEARCH                               */
/* -------------------------------------------------------------------------- */

// Bottom up
function binarySearchIterative(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        }

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) {
        return mid;
    }

    if (start >= end) {
        return -1;
    }

    return val < arr[mid]
        ? binarySearchRecursive(arr, val, start, mid - 1)
        : binarySearchRecursive(arr, val, mid + 1, end);
}