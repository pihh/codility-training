/*
D , N , M -> positive integer 
D is factor of N when M = D * M

*/

function solution(N) {
    // Brute force -> 71% -> 100%, 33%
    // https://app.codility.com/demo/results/training775JKS-7AM/
    function isFactor(D,N){
        return N % D == 0
    }


    let factors = 0; // 1 and self 
    for(let i = 1; i < N+1; i++){
        if(isFactor(i,N)) factors++
    }

    return factors
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // 100% 
    // https://app.codility.com/demo/results/trainingM688AF-49X/
    if(N == 1) return 1;
    const countingDivisors = function (n) {
    let i = 1;
    let result = 0;
    while (i * i < n) {
      if (n % i == 0) {
        result += 2
      }
      i += 1
    }
    if (i * i == n) {
      result++
    }
    return result;
  }
  
  return countingDivisors(N)
}