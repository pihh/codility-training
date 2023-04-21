/*
[0,3,6] -> 1,2,4,5
[3,4,5] -> None


Rule for slice = [a->c] - a , b , c 
*/

function solution(A) {
    // Brute force
    // 53% -> 100% - 14%
    if(A.length <= 3){
        return 0;
    }
    function slice(A,x,y,z){
        let l = A.slice(x+1,y);
        let r = A.slice(y+1,z);
        return l.concat(r);
    }
    function sumAllElementsInArray(arr) {
        const sum = arr.reduce(add, 0); // with initial value to avoid when the array is empty
        function add(accumulator, a) {
            return accumulator + a;
        }
        return sum;
    };

    function doubleSlice(A,x,y,z){
        return sumAllElementsInArray(slice(A,x,y,z))
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i< A.length-2; i++){
        for(let j = i+1 ; j < A.length-1; j++){
            for(let k = j+1; k < A.length; k++){
                const localSum = doubleSlice(A,i,j,k);
                if(localSum > max){
                    max = localSum
                }
            }
        }
    }

    return max
}

// Improved solution would be
// 2 kadane timelines :
// rtl + ltr
// Compare who gives best two sides
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


  
  function solution(A) {
    // 96% -> failed one edge case 
    // https://app.codility.com/demo/results/trainingPZ5HBB-4N8/

    /*
For example, for the input [6, 1, 5, 6, 4, 2, 9, 4] the solution returned a wrong answer (got 25 expected 26).
    */
      if(A.length <=3)return 0

      // Implement your solution here
      const kadane = function(A) {
        // 100% -> uses Kadane algorithm who assumes that the localMaximum is the greater between the sum of the current value + currentLocal Max or current value
        // https://app.codility.com/demo/results/training98HXY6-2ZK/
        let localMax = 0;
        let currentMax = 0;
        let timeline = [0]
        for(let i = 1; i < A.length-1; i++){
            let el = A[i];
            localMax = Math.max(localMax+el, el,0);
            if(localMax > currentMax){
                currentMax = localMax;
            }
            timeline.push(localMax)
        }
      
        return timeline;
      }
      let ltr = kadane(A);
      let rtl = kadane([...A].reverse()).reverse()
      
      let maxSlice = 0;
      for(let i = 1; i < ltr.length-1; i++){
          const l = ltr[i]
          const r = rtl[i+1]
          const slice = l+r;
          if(slice > maxSlice){
              maxSlice = slice
          }
      }
  
      return Math.max(maxSlice,0)
  }