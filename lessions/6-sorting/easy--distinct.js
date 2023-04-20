/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingAPCW4R-4EJ/
 
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
  
  
function solution(A) {
    // Implement your solution 
    const uniques = function (arr) {
        return [...new Set(arr)];
    };
    return uniques(A).length
}
  

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)