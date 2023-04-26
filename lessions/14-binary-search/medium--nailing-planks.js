/*
A = start
B = end
C = position of the nail
plank [ak,bk] is nailed if can hammer the ith nail

J minimum #nails fter fits j nails


0 -> 1m4 , 1.5
0,1 -> 0,1,4 ,4,5, 5,9
0,1,2 -> 1,4  4,5  5,0
0,1,2,3 -> all planks

*/
function solution(A, B, C) {
    // Implement your solution here
    // Brute forcing 
    // 50% -> 100% , 0%
    // https://app.codility.com/demo/results/trainingWX88RR-EWG/
    let count = 0;
    for(let i = 0 ; i< C.length; i++){
        count++;
        let indices = []
        let c = C[i]
        for(let k = A.length-1 ; k >= 0; k--){
  
            if(c >= A[k] && c <= B[k]){
                indices.push(k)
            }
        }
     
        for(let k of indices){
            A.splice(k,1);
            B.splice(k,1)
        }

        if(A.length == 0){
            return count;
        }
    }

    return -1
}


// Implement your solution here
// Brute forcing 
// 75% -> 100% , 50%
// https://app.codility.com/demo/results/trainingWEY3EN-GZN/

function solution(A, B, C) {

    let cMap = {};
    let count = 0;
    for(let i = 0 ; i< C.length; i++){
        count++;
        let c = C[i]
        if(cMap[c]) continue;
        cMap[c]= true
        for(let k = A.length-1 ; k >= 0; k--){
            if(c >= A[k] && c <= B[k]){
                A.splice(k,1);
                B.splice(k,1)
            }
        }
        if(A.length == 0){
            return count;
        }
    }

    return -1
}


function solution(A, B, C) {
    // 100%
    // https://app.codility.com/demo/results/trainingH4YV68-CJR/
    var begin = 0;
    var end = C.length - 1;
    var res = -1;
    while (begin <= end) {
        var mid = parseInt((begin + end) / 2);
        if (check(A, B, C, mid+1)) {
            end = mid - 1;
            res = mid+1;
        } else {
            begin = mid + 1;
        }
    }
    return res;
}

function check(a, b, c, num) {
    var pNails = new Array(2*c.length + 1).fill(0);
    for (var i = 0; i < num; ++i) {
        ++pNails[c[i]];
    }
    for (i = 1; i < pNails.length; ++i) {
        pNails[i] += pNails[i-1];
    }
    for (i = 0; i < a.length; ++i) {
        if (pNails[b[i]] <= pNails[a[i]-1]) return false;
    }
    return true;
}