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

const arrayOfIndependentObjects = function(len,blueprint={}){
    
    let arr = new Array(len).fill(0).map(v=> ({...blueprint}))

    //arr[0].a = 10
    return arr; ;
}