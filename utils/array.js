/**
 * Join two arrays firstArray.concat(secondArray)
 */

// Simple sort
const sort = function(arr){
    return arr.sort(function(a, b){return a - b});

}

const uniques = function(arr){
    return [...new Set(arr)]
}

const max = function(arr){
    return Math.max(...arr)
}