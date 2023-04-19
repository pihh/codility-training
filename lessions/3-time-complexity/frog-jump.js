/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingZZU4NB-CSX/
 
// PROBLEM STATEMENT
------------------------------------------------
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.

// STATEMENT KEY POINTS
------------------------------------------------
1 - X can be equal to Y -> therefore no jumps
2 - X,Y,D >= 1



// EXAMPLE TESTS
------------------------------------------------

// EDGE CASES

// NOTES:
Distance = Y-X therefore the minumum number of jumps is distance divided by D rounded up
*/

// Unit tests
let testResults = ``;
const tests = [];

function solution(X, Y, D) {
  // First of all, if it starts on same point, no jumps are required
  if (X == Y) return 0;

  // I might not be seeing this well but is Y-X = distance, Math.ceil(distance/D) ?
  const distance = Y - X;

  return Math.ceil(distance / D);
}

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
