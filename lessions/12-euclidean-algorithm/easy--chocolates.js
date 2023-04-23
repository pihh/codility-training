/*

N -> numero de chocolares arranjados num circulo de 0 a n-1

Ao comer um chocolate deixo um envolcro
começa no 0
depois omite M-1 chocolares a seguir e come o proximo

Se comi x, proximo sera (x + m)%n

paro de comer quando encontro um papel vazio

*/

function solution(N, M) {
    // 62% -> 100% , 25%
    // https://app.codility.com/demo/results/trainingS39PC7-DWZ/
    let count = 1;
    const chocolates = Array(N).fill(1)
    chocolates[0] = 0;
    
    let prev = 0
    while(true){
        const next = (prev+M)%N;
        prev = next;
        if(chocolates[next] == 1){
            chocolates[next]= 0
            count++
        }else{
            break;
        } 
    }

    return count
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    // 100%
    // https://app.codility.com/demo/results/trainingR6DTQG-4TQ/
    const gcdByDivision = function (a, b) {
        if (a % b == 0) {
            return b
        } else {
            return gcdByDivision(b, a % b)
        }
    }

    const leastCommonMultiple = function(a,b){
        return (a*b)/gcdByDivision(a,b,1)
    }


    return leastCommonMultiple(N,M)/M
}