/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingW4FZQC-9AM/
 
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
  
  
// https://app.codility.com/demo/results/trainingZ83BS6-TER/

function solution(A) {
    if(A.length < 3) return 0
    const sort = function (arr) {
        return arr.sort(function (a, b) {
            return a - b;
        });
    };
    // Implement your solution here
    function isConditionMet(p,q,r){
        let condition1 = p+q > r;
        let condition2 = q+r>p;
        let condition3 = r+p > q;
        return condition1&&condition2&&condition3 ? 1:0
    }

    // Brute force:
    A = sort(A);
    for(let i = 0; i< A.length+2; i++){
        if(isConditionMet(A[i],A[i+1],A[i+2]) == 1)return 1
    }
    return 0
}

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)