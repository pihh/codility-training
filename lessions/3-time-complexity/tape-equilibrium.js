https://app.codility.com/demo/results/trainingGSBT59-3M7/

// 50% Correctness 
function solution(A) {
    // Implement your solution here
    let total = A.reduce((a,b)=> a+b,0)

    // Brute force it:
    // P can go from 1 to N-1
    let min = 2000;
    for(let i = 1; i < A.length; i++){
        const left = A.slice(0,i).reduce((a,b)=> a+b,0);
        const right = A.slice(i).reduce((a,b) => a+b,0);
        const diff = Math.abs(left-right);
        if(diff < min){
            min = diff
        }
    }
    // I could put the reduce Fn outside and track the total - the accumulated progress as left and 
    // right but I'd risk and I wont try it because I'm on a schedule.
    return min
}

// 100% Correctness

function solution(A) {
    // Implement your solution here
    let right = 0;
    let left = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0 ; i < A.length; i++){
        right += A[i]
    }

    for(let i = 0; i < A.length-1; i++){
        right -= A[i]
        left += A[i];
        let diff = Math.abs(left-right);

        if(diff < min){
            min = diff
        }
    }

    return min
}