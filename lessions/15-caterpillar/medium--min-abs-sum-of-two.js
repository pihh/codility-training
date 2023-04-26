// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    // Brute force
    // 54% -> 100% , 28%
    // https://app.codility.com/demo/results/trainingCKURWV-8CW/
    let minAbs = Number.MAX_SAFE_INTEGER;
    for(let i =0; i < A.length; i++){
        for(let j = i ; j < A.length; j++){
            let absSum = Math.abs(A[i]+A[j]);
            if(absSum < minAbs){
                minAbs = absSum
            }
        }
    }

    return minAbs
}



function solution(A) {
    // Implement your solution here
    // Brute force + Remove duplicates
    // 63% -> 100% + 42%
    // https://app.codility.com/demo/results/trainingV8VFEV-FUF/
    A = [...new Set(A)]

    let minAbs = Number.MAX_SAFE_INTEGER;
    for(let i =0; i < A.length; i++){
        for(let j = i ; j < A.length; j++){
            let absSum = Math.abs(A[i]+A[j]);
            if(absSum < minAbs){
                minAbs = absSum
            }
        }
    }

    return minAbs
}




function solution(A) {
    // 100%
    // https://app.codility.com/demo/results/training7TF53D-3C6/
    A= A.sort((a,b)=> a-b);
    let tail = 0;
    let head = A.length-1;
    let minAbs = Math.abs(A[tail]+ A[head]);
    while(tail <= head){
        let currentSum = A[tail] + A[head];
        minAbs = Math.min(minAbs, Math.abs(currentSum))
        if(currentSum <=0){
            tail++
        }else{
            head--
        }
    }

    return minAbs
}
