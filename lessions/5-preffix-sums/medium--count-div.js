
/**
// TOTAL SCORE: 100%
// 
 
// PROBLEM STATEMENT
------------------------------------------------
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.

// STATEMENT KEY POINTS
------------------------------------------------
1 -

// EXAMPLE TESTS
------------------------------------------------
1041    -> 5
[6, 11, 2] -> 3
[6,12,2] -> 4
[2,12,6] -> 2

[1,10,1] -> 10
[5,10,11] -> 0
// EDGE CASES
*/

// Unit tests
let testResults = ``;
const tests = [
    {test: 1041, result:5},

];
  
  
function solution(A, B, K) {
    // Bruteforced -> 50% -> 100%,0%
    // https://app.codility.com/demo/results/trainingAASGGN-XTK/
    let range = []
    let count = 0;
    for(let i = A; i<=B; i++){
        range.push(i);
        if(i%K == 0)count++;        
    }

    return count
}

function solution(A, B, K) {
    // Improved soluion -> 75% -> 100% + 50%
    // Bigger steps -> didnt consider MAX_SAFE_INT and a step of 1
    let step = 1;
    let count = 0;
    let i = A;

    while(i <=B){
        if(i%K == 0){
            count++;
            step = K;        
        }
        i+= step;
    }


    return count
}

function solution(A, B, K) {
    // 100%
    // https://app.codility.com/demo/results/training6VW6P2-KHD/
    // Get first divisor and last divisor
    const start = Math.ceil(A/K)
    const end = Math.floor(B/K);
    return (end - start)+1
}
  

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)