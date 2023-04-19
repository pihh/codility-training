// https://app.codility.com/demo/results/trainingHAXJCX-QTD/

function solution(A) {
    // Brute force:

    let total = 0;
    for(i = 1; i <= A.length+1; i++){
        total +=i
    }

    for(i of A){
        total -=i;       
    }

    return total
}