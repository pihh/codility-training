/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingW4FZQC-9AM/

// PROBLEM STATEMENT
------------------------------------------------
An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given

    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given

    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// STATEMENT KEY POINTS
------------------------------------------------
1 - Array pode ter N valores os incluindo ser vazia

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5

// EDGE CASES
1- Only one number
2- No numbers
*/

// Unit tests
let testResults = ``;
const tests = [
  { test: [[], 10], result: [] },
  { test: [[1], 10], result: [1] },
  { text: [[1,2,3,4],0], result:[1,2,3,4]}
];

function rotate(a) {
  const end = [a[a.length - 1]];
  const mid = a.slice(0, a.length - 1);

  return end.concat(mid);
}
function solution(A, K) {
  // Bruteforce
  if (A.length > 1) {
    for (let i = 0; i < K; i++) {
      A = rotate(A);
    }
  }
  return A;
}

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${
    JSON.stringify(solution(test.test[0], test.test[1])) ==
    JSON.stringify(test.result)
  }`;
}

// Output
console.log(testResults);
