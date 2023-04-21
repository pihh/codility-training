// 100%
// https://app.codility.com/demo/results/trainingCDY782-93F/
/*
Dominator é o valor que ocorre em mais de 50% das vezes de A
*/

function solution(A) {
    
    // Implement your solution here
    const map = {}
    const target = A.length/2;
    for(i =0; i < A.length; i++){
        const val = A[i]
        if(!map[val]){
            map[val]=0
        }
        map[val]++
     
        if(map[val]> target){
            return i
        }
    }
    return -1
}