/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingW4FZQC-9AM/
 
// PROBLEM STATEMENT
------------------------------------------------
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

class Solution { public int solution(int X, int[] A); }

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].

// STATEMENT KEY POINTS
------------------------------------------------
1 -

// EXAMPLE TESTS
------------------------------------------------
X = 5
A[0] = 1
A[1] = 3
A[2] = 1
A[3] = 4
A[4] = 2
A[5] = 3
A[6] = 5
A[7] = 4
6

// EDGE CASES
When impossible, returns -1
*/

// Unit tests
let testResults = ``;
const tests = [
  { test: [5, [1, 3, 1, 4, 2, 3, 5, 4]], result: 6 },
  { test: [5, [1, 2, 3, 4]], result: -1 },
  { test: [5, []], result: -1 },
  { test: [1, [1, 1, 1, 1, 1]], result: 0 },
  { test: [1, [2, 2, 2, 1]], result: 3 },
];

// Target - get to the other side of the river
// Starts at position 0
// Ends at position X+1
// There are leves where the

// A[] with N integers that show position of leaf at time K
// Find earliest time when frog can go from one point to another ( Positions from 1 to X are covered)

function solution(X, A) {
  // Brute force:
  let time = 0;
  let progress = 0;
  let map = {};

  for (let i = 1; i <= X; i++) {
    map[i] = 0;
  }

  for (let i = 0; i < A.length; i++) {
    let position = A[i];
    if (position <= X && map[position] == 0) {
      map[position] = 1;
      progress++;
      if (progress / X == 1) {
        return time;
      }
    }
    time++;
  }

  return -1;
}

for (let [index, test] of tests.entries()) {
  let X = test[0];
  let A = test[1];
  testResults += `
  Test #${index}: ${solution(X, A) == test.result}`;
}

// Output
console.log(testResults);
