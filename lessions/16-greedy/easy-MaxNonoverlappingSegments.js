// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // https://app.codility.com/demo/results/trainingYT9FNA-PCB/
    // 60% -> 100% , 20%
    let N = A.length;
    if (N < 2) return N
    let maxNumberSegments = 1;
    for(let i = 0; i < A.length; i++){
        let start = A[i];
        let end = B[i];
        let segments = 1;
        for(let j = i+1; j < A.length; j++){
            if(A[j] > end){
                end = B[j]
                segments++
                if(segments > maxNumberSegments){
                    maxNumberSegments=segments
                }
            }
        }
    }

    return maxNumberSegments
}

function solution(A, B) {
    // 100% 
    // https://app.codility.com/demo/results/trainingV899PF-9AZ/
    let start = 0;
    let count = 0;
    let index = 0;

    while (index < A.length) {
        if (index == 0) {
            count++;
            index++;
        } else if (A[index] > B[start]) {
            count++;
            start = index;
        } else {
            index++;
        }
    }

    return count;
}