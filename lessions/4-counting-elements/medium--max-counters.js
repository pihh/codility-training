/**
// TOTAL SCORE: 88% - missing edge case -> all maxCounters on extremelly large array
// https://app.codility.com/demo/results/trainingJP8JDE-KT4/
// TOTAL SCORE: 100% 
// https://app.codility.com/demo/results/trainingSCMWT2-KN4/
 
// PROBLEM STATEMENT
------------------------------------------------
MaxCounters
Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].

// STATEMENT KEY POINTS
------------------------------------------------
1 -

// EXAMPLE TESTS
------------------------------------------------
(1,[2,2,2,2,2])
(2,[2,2,2,2,2])
(2,[3,3,3,3,3])
(2,[1,3,3,3,3])

// EDGE CASES
*/

// Unit tests
let testResults = ``;
const tests = [
    // {test: 1041, result:5},

];
  
  
/*
You are given N counters, initially set to 0,

N = n counters
A = Array

A is non empty with M integerss -> consecutive operations 

INCREASE -> A[K] = X ( counter id ? ) -> 1 <= X <= N
MAX_COUNTER => A[K] = N + 1 -> operation K = maxCounter
*/

// 88% Score -> Failed at 1 test 
// https://app.codility.com/demo/results/trainingJP8JDE-KT4/
function solution(N, A) {
    
    let localMax = 0;
    let counters = new Array(N).fill(0);

    // Implement your solution here
    function increase(X){
        // Counter X increased by 1
        counters[X]++;
        if(counters[X]> localMax){
            localMax = counters[X];
        }
    }

    function maxCounter(){
        // All counters set to current maximum
        for(let i = 0 ; i<counters.length; i++){
            counters[i] = localMax;
        }
    }

    function execute(k,X){
        if(A[k] <= N){
            increase(X-1);
        }else if(A[k] == N+1){
            maxCounter();
        }
    }

    for(let k = 0; k< A.length; k++){
        const X = A[k]
      
        execute(k,X)
        //console.log(counters)
    }

    return counters
}

// 100% -> adds a localMax checkpoint and only increases if the localMax is greater ( prevent loop inside loop)
function solution(N, A) {
    
    let localMax = 0;
    let localMaxCheckpoint = 0;

    let counters = new Array(N).fill(0);

    // Implement your solution here
    function increase(X){
        // Counter X increased by 1
        counters[X]++;
        if(counters[X]> localMax){
            localMax = counters[X];
        }
    }

    function maxCounter(){
        if(localMaxCheckpoint == localMax){
            return;
        }
        // All counters set to current maximum
        for(let i = 0 ; i<counters.length; i++){
            counters[i] = localMax;
        }

        localMaxCheckpoint = localMax;
    }

    function execute(k,X){
        if(A[k] <= N){
            increase(X-1);
        }else if(A[k] == N+1){
            maxCounter();
        }
    }

    for(let k = 0; k< A.length; k++){
        const X = A[k]
      
        execute(k,X)
        //console.log(counters)
    }

    return counters
}
  

  for(let [index,test] of tests.entries()){
      testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
  
}
  

  // Output
  console.log(testResults)