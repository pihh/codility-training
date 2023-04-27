function solution(K, A) {
    // 100%
    // https://app.codility.com/demo/results/trainingFAZPHZ-NT3/
    let prev = 0;
    let count = 0;
    for(let i = 0; i < A.length; i++){
        let len = A[i]+prev
        prev = len;
        if(len >= K){
            count++;
            prev = 0;
        }
    }
    return count
}