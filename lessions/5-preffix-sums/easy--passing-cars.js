/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingW4FZQC-9AM/
 
// PROBLEM STATEMENT
------------------------------------------------
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

// STATEMENT KEY POINTS
------------------------------------------------
1 - return −1 if the number of pairs of passing cars exceeds 1,000,000,000
2 - if one goes east, how many in the future will go west

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5

// EDGE CASES
*/

// Unit tests
let testResults = ``;
const tests = [{ test: 1041, result: 5 }];
// [0, 1, 0, 1, 1] -> 5
// [0,0,0,0] -> 0
// [0]
// [0,1]
// [1,0]

function solution(A) {
  // Brute force solution: 60% - 100% correct, 20% performant
  // https://app.codility.com/demo/results/training4YZVFR-BR7/
  let pairs = 0;
  const LIMIT = 1000000000;

  for (let i = 0; i < A.length; i++) {
    let P = A[i];
    if (P == 0) {
      for (let j = i + 1; j < A.length; j++) {
        let Q = A[j];
        if (Q == 1) {
          pairs++;
          // Edge case
          if (pairs > LIMIT) {
            return -1;
          }
        }
      }
    }
  }

  return pairs;
}

// Improved solution: 100%
// https://app.codility.com/demo/results/trainingTG4F7B-F2R/
// Uses a timeline of future events to save the nested loop
const sumAllElementsInArray = function (arr) {
  const sum = arr.reduce(add, 0); // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a;
  }

  return sum;
};
// Tracks number of cars traveling west in the future from that point
const createTimeline = function (A) {
  const timeline = Array(A.length).fill(0);
  let totalFutureWestCars = sumAllElementsInArray(A);
  for (i = 0; i < A.length; i++) {
    const el = A[i];
    if (el == 1) {
      totalFutureWestCars--;
    }
    timeline[i] = totalFutureWestCars;
  }

  return timeline;
};
function solution(A) {
  const LIMIT = 1000000000;
  let pairs = 0;
  let timeline = createTimeline(A);

  for (let i = 0; i < A.length; i++) {
    let P = A[i];
    if (P == 0) {
      pairs += timeline[i];
      // Edge case
      if (pairs > LIMIT) {
        return -1;
      }
    }
  }

  return pairs;
}

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
