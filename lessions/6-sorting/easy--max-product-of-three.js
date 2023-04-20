/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingZBZZC7-H2J/
 
// PROBLEM STATEMENT
------------------------------------------------


// STATEMENT KEY POINTS
------------------------------------------------
1 -

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5

// EDGE CASES
- All negatives
- first two negatives can be greater than last 2and3
*/

// Unit tests
let testResults = ``;
const tests = [{ test: 1041, result: 5 }];

function solution(A) {
    // Implement your solution here
    const sort = function (arr) {
      return arr.sort(function (a, b) {
        return a - b;
      });
    };
    A = sort(A);
    let len = A.length;
    let right = A[len-1];
    let left = 0;
    if (right >= 0) {
      left = Math.max(A[0] * A[1], A[len - 3] * A[len - 2]);
    }else{
      left = A[len-3]*A[len-2];
    }
    return left * right;
  }

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
