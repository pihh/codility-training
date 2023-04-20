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
[4, 2, 2, 5, 1, 5, 8] -> 1
[1,2]
[-1,1,1,-1,-1]
// EDGE CASES


*/

// Unit tests
let testResults = ``;
const tests = [{ test: 1041, result: 5 }];

/*
A non empty e tem min 2 els 
Avg slide PQ = Sum A[p->q]/(q-p+1)

*/

function solution(A) {
  // Brute force solution - 50% -> 100% , 0%
  // https://app.codility.com/demo/results/trainingZAAD4V-N7Z/
  const sumAllElementsInArray = function (arr) {
    const sum = arr.reduce(add, 0); // with initial value to avoid when the array is empty

    function add(accumulator, a) {
      return accumulator + a;
    }

    return sum;
  };

  // Brute force solution
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = 0;
  for (let P = 0; P < A.length - 1; P++) {
    for (let Q = P + 1; Q < A.length; Q++) {
      const slice = A.slice(P, Q + 1);
      const avgSlice = sumAllElementsInArray(slice) / (Q - P + 1);
      if (avgSlice < min) {
        min = avgSlice;
        minIdx = P;
      }
    }
  }
  return minIdx;
}



function solution(A){
    // Improved : 90% -> failed 1
    // https://app.codility.com/demo/results/trainingB92SUH-XVN/

    let min = Number.MAX_SAFE_INTEGER;
    let idx = 0;
    let len = A.length;
    for(let i = 0; i < len-2; i++){
        let sum2 = A[i]+A[i+1]
        let sum3 = sum2+A[i+2]
        let sumNext2 = (sum3-A[i])/2
        let localMin = Math.min(sum2/2, sum3/3)
       
        if(localMin < min){
            min = localMin;
            idx = i;
        }

        localMin = Math.min(localMin,sumNext2);
        if(localMin < min){
            min = localMin;
            idx = i+1
        }
        
    }



    return idx;
}

function solution(A){
    // Improved : 100% -> Needed to calculate the next computation so it passes the last loop
    // https://app.codility.com/demo/results/trainingB92SUH-XVN/

    let min = Number.MAX_SAFE_INTEGER;
    let idx = 0;
    let len = A.length;
    for(let i = 0; i < len-2; i++){
        let sum2 = A[i]+A[i+1]
        let sum3 = sum2+A[i+2]
        let sumNext2 = (sum3-A[i])/2
        let localMin = Math.min(sum2/2, sum3/3)
       
        if(localMin < min){
            min = localMin;
            idx = i;
        }

        localMin = Math.min(localMin,sumNext2);
        if(localMin < min){
            min = localMin;
            idx = i+1
        }
        
    }



    return idx;
}

for (let [index, test] of tests.entries()) {
  testResults += `
  Test #${index}: ${solution(test.test) == test.result}`;
}

// Output
console.log(testResults);
