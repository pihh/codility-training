// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let isTriangle = function(A,x,y,z){
    let a = A[x]
    let b = A[y]
    let c = A[z]

    return (a+b>c) && (b+c > a) && (c+a > b);
}
function solution(A) {
    // 72% -> 100% , 25%
    // https://app.codility.com/demo/results/trainingD8HBZN-4V4/
    let count = 0;
    for(let a = 0 ; a < A.length-2; a++){
        for(let b = a+1 ; b < A.length-1; b++){
            for(let c = b+1 ; c < A.length; c++){
                if(isTriangle(A,a,b,c)){
                    count++;
                }
            }
        }
    }
    return count
}




function solution(A) {
    // 100%
    // https://app.codility.com/demo/results/trainingRR77FG-X5P/
    // tendo isto sorted, vai se vendo quantos dá para fazer de x,y -> 
    // n dando , ve de z,y+1 ->r 
    // se q == r q++,r++
    A = A.sort((a,b)=> a-b);
    let count = 0;
    for(let i = 0 ; i < A.length-2; i++){
        let pIdx = i;
        let qIdx = i+1;
        let rIdx = i+2;
        while(rIdx < A.length){
            if(A[pIdx] + A[qIdx] > A[rIdx]){
                count += rIdx-qIdx
                rIdx++;
            }else if (qIdx < rIdx){
                qIdx++;
            }else{
                rIdx++
                qIdx++
            }
        }
    }

    return count
}