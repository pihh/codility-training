/**
// TOTAL SCORE: 100%
// https://app.codility.com/demo/results/trainingW4FZQC-9AM/
 
// PROBLEM STATEMENT
------------------------------------------------


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
const tests = [{ test: 1041, result: 5 }];

function solution(S, P, Q) {
  // Bruteforce ->
  // https://app.codility.com/demo/results/trainingDX83KY-7DT/

  /*
DNA Sequence = string of A,C,G,T ( types of successive nucleotides in the sequence)
Nucleotide has a impact factor -> integer.
A - 1
C - 2 
G - 3
T - 4
What it the miniml impact factor of nucleotides contained in a particular DNA sequence?

DNA-> String S ( non empty ) with N characters;
M queries -> Non empty array P,Q consisting of M inteers
Kth query require to find the minima impact factor os nucleotides contained in the DNA sequence between P[K] and Q[K] inclusive

// Constraints
sequence between 2,4 -> 2,3,4 
the minimal impact factor here is C -> 2
*/

  // Brute forcing it
  const impactMap = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };

  function strToImpact(S) {
    const impact = [];
    for (let i = 0; i < S.length; i++) {
      impact.push(impactMap[S[i]]);
    }
    return impact;
  }
  const impact = strToImpact(S);
  let mins = [];

  // Improved solution thinking here, will keep the brute force
  // const min2 = []
  // const min3 = []

  for (let i = 0; i < P.length; i++) {
    let p = P[i];
    let q = Q[i] + 1;
    mins.push(Math.min(...impact.slice(p, q)));
  }
  return mins;
}


function solution(S, P, Q) {
    // 100%
    // https://app.codility.com/demo/results/trainingCNCERS-6ZK/
    const impactMap = {
      A: {value:1,currentSum:0, preffixSum: Array(S.length+1).fill(0)},
      C: {value:2,currentSum:0, preffixSum: Array(S.length+1).fill(0)},
      G: {value:3,currentSum:0, preffixSum: Array(S.length+1).fill(0)},
      T: {value:4,currentSum:0, preffixSum: Array(S.length+1).fill(0)},
    };
  
   
    for(let i = 0; i < S.length; i++){
        let nucleotide = S[i]
        impactMap[nucleotide].currentSum++;
        impactMap.A.preffixSum[i+1]= impactMap.A.currentSum
        impactMap.C.preffixSum[i+1]= impactMap.C.currentSum
        impactMap.G.preffixSum[i+1]= impactMap.G.currentSum
        impactMap.T.preffixSum[i+1]= impactMap.T.currentSum
    }
    
    let mins = [];
  
    for(let i = 0; i < P.length; i++){
        let p = P[i]; 
        let q = Q[i]+1;
        for(let key of Object.keys(impactMap)){
  
          if(impactMap[key].preffixSum[q]> impactMap[key].preffixSum[p]){
            mins.push(impactMap[key].value)
            break
          }
        }
    }
  
    return mins;
  }

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
