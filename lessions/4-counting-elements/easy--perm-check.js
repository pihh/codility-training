/**
// EASY
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingTDNEHK-9HG/

// PROBLEM STATEMENT
------------------------------------------------
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].

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
    {test: [0], result:0},
    {test: [1,1], result:0},
    {test: [0,1], result:0},
    
];
  
  
// A is non empty, has N integers ( 1 -> 100.000 ) of range (1->1.000.000.000)
// Permutation is a sequence containining all from 1 to N once and only once

// Every number must appear once and only once

function solution(A) {
    // Implement your solution here

    const isAllUniqueElements = function(arr){
        const uniques =[...new Set(arr)]
        return uniques.length == arr.length;
    }

    const isInBounds = function(arr){
        const min = Math.min(...arr);
        const max = Math.max(...arr)

        return min == 1 && max == arr.length;
    }

    if(!isAllUniqueElements(A))return 0;
    if(!isInBounds(A))return 0;

    return 1
}
  

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)