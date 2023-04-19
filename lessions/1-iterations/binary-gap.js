/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingDFY8GW-652/

// PROBLEM STATEMENT
------------------------------------------------
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
The number 20 has binary representation 10100 and contains one binary gap of length 1. 
The number 15 has binary representation 1111 and has no binary gaps. 
The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. 
The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. 
Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

// STATEMENT KEY POINTS
------------------------------------------------
1 - They want to know the lenght of the maximum sequence of zeros surrounded by ones.
2 - They want to know it after converting a number to binary
3 - N is in between 1 ant 147483647

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5
32      -> 0
529     -> 4
20      -> 1
15      -> 0

// EDGE CASES
1 - Starting by 0 -> probably wont happen but it's better to prevent
2 - Ending in 0
*/

let testResults = ``;
const tests = [
  { test: 1041, result: 5 },
  { test: 32, result: 0 },
  { test: 529, result: 4 },
  { test: 20, result: 1 },
  { test: 15, result: 0 },
];

function solution(N) {
  // We can easily brute force this by looping and tracking a current max a and a localMax

  let localSequenceLength = 0;
  let maxGlobalSequenceLength = 0;
  let isOpenSequence = false;

  // Get integer binary representation
  const bin = N.toString(2);

  for (let b of bin) {
    // If a sequence starts/ends, reset the localCounter
    if (b == 1) {
      // Finnishing a sequence checks for the maximum
      if (isOpenSequence) {
        if (localSequenceLength > maxGlobalSequenceLength) {
          maxGlobalSequenceLength = localSequenceLength;
        }
      }
      localSequenceLength = 0;
      isOpenSequence = true;
    } else {
      if (isOpenSequence) {
        localSequenceLength++;
      }
    }
  }

  return maxGlobalSequenceLength;
}

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
