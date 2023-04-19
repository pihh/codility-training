/**
// TOTAL SCORE: 66% - Failing performance on very large 
// https://app.codility.com/demo/results/trainingEB5DXN-JRF/
 
// PROBLEM STATEMENT
------------------------------------------------


// STATEMENT KEY POINTS
------------------------------------------------
1 -

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5

// EDGE CASES
*/

// Unit tests
let testResults = ``;
const tests = [
    {test: 1041, result:5},

];
  
  
/*
Target -> get the smallest positive int gt0 that does not occur in A
The min is 1 if none is present

*/
// 66% Solution
const sort = function(arr){
    return arr.sort(function(a, b){return a - b});
}
const uniques = function(arr){
    return [...new Set(arr)]
}

function solution(A) {
    // Implement your solution here
    let currentMin = 1;
    

    A=A.filter(a => a>0);
    
    if(A.length == 0) return currentMin;
    
    // Sort A
    A=sort(A); 
    // Remove repeated values from A
    A=uniques(A);

    let possibleMax = Math.max(A.length+1,Math.max(...A))
    let startLoopAt = Math.min(...A);

    if(startLoopAt >1){
        return currentMin;
    }
    for(let i = 0; i < possibleMax; i++){
        if(-1 == A.indexOf(i+1)){
            return i+1;
        }
    }
    return currentMin;
}


// 100% Solution
// Uses gaps


const positives = function(arr){
    return arr.filter(a => a>0);
}
function solution(A) {
    A = positives(A)
    A = uniques(A)
    A = sort(A)

    if(A.length == 0) return 1;
    if(A[0]> 1) return 1
    for(let i = 1; i< A.length; i++){
        if(A[i]-A[i-1] > 1) return A[i-1]+1
    }

    return A.length+1
}
  

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)