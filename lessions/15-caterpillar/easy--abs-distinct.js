/*
    A -> N numeros ordenados crescente
    AbsDistinctCount = # valores distintos absolutos na array;
*/

function solution(A) {
    // Implement your solution here
    // Brute force 
    A = [...new Set(A)].map(el => Math.abs(el));
    A = [...new Set(A)]
 
    return A.length;
}

function solution(A) {
    // Implement your solution here
    // Brute force 
    let map = {}
    let count = 0;
    for(let el of A){
        el = Math.abs(el)
        if(!map[el]){
            map[el] = true;
            count++;
        }
    }
 
    return count;
}
