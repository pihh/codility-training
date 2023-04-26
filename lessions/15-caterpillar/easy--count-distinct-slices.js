/*
    // Brute force
    // 70% -> 100% , 40%
    // https://app.codility.com/demo/results/trainingM7RSFA-KD3/

[0,0] 1
[0,1],[1,1] 3
[0,1],[1,2],[2,2] 6
[0,3],[1,3],[2,3],[3,3] 10
[0,4],[1,4],[2,4],[3,4],[4,4] 15
[0,5],[1,5],[2,5],[3,5],[4,5],[5,5] 21

*/

function solution(M, A) {
    // Brute force 
    let count = 0;
    let max = 1000000000
    for(let i = 0; i < A.length; i++){
        let map = new Map();
        count++;
        if(count == max){
            return max;
        }
        map.set(A[i],true);
        for(let j = i+1; j < A.length; j++){
            if(map.has(A[j])) break;
            count++;
            if(count == max){
                return max;
            }
            map.set(A[j],true);
            if(A[i]== A[j]){
                break;
            }
        }
    }
    return count;
}

function solution(M, A) {
    // 100%
    // https://app.codility.com/demo/results/trainingKMTQK2-FG9/
    let sum = 0;
    let front = 0;
    let back = 0;
    let set = new Set();
    while (front < A.length) {
        while (front < A.length && !set.has(A[front])){
            sum += (front-back+1);
            set.add(A[front]);
            front += 1;
        }
        while (A[back] != A[front]) {
            set.delete(A[back]);
            back += 1;
        }
        set.delete(A[back]);
        back += 1;
    }           
    return Math.min(sum, 1000000000);
}
