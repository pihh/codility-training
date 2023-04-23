/*
A com N inteiros.
Para cada numero A[i] queremos saber quantos não são divisores por ele.
Cada elemento de A é um int entre 1 e 2*Len

*/
function solution(A) {
    // Brute force:
    // 77% -> 100% , 50%
    // https://app.codility.com/demo/results/trainingM7ZSD8-UZK/
    const map = {};
    const countMap = {};
    const uniques = [];
    for(let i = 0; i < A.length; i++){
        let n = A[i]
        if(!map[n]){
            map[n] = 0;
            countMap[n] = 0;
            uniques.push(n)
        }
        map[n]++
    }
    uniques.sort((a,b)=> a-b)
    for(let i = 0; i < uniques.length; i++){
        let unique1 = uniques[i];
        for(let j = 0; j < uniques.length; j++){
            let unique2 = uniques[j]
            if(unique1%unique2 != 0){
                countMap[unique1] += map[unique2]
            }
        }
        //countMap[unique1]+= map[unique1]
    }

    let result = []
    for(let i = 0; i < A.length; i++){
        result.push(countMap[A[i]])
    }


    return result
}



function solution(A){
    // 100%
    // https://app.codility.com/demo/results/trainingCUA3JG-24P/
    const getDivisors = function (n,ocorrencesMap,len) {
 
        let i = 0;
        let divisors = []
        let ocorrences = 0
        while (i * i < n) {
          if (n % i == 0) {
            ocorrences+= ocorrencesMap[i]
            ocorrences+= ocorrencesMap[n/i]
          }
          i += 1
        }
        if (i * i == n) {
    
          ocorrences+= ocorrencesMap[i]
        }
        if(ocorrencesMap[n] > 1){
          // ocorrences-= ocorrencesMap[n]
        }
        return len-ocorrences;
    }

    
    let ocurrencesMap = Array(A.length*2+1).fill(0)
    let nonDivisorsMap = {}
    let uniques = {}
    for(let i = 0; i < A.length; i++){
        let el = A[i]
        if(!uniques[el]){
            uniques[el] = true;
        }
        ocurrencesMap[el]++;
    }
    uniques = Object.keys(uniques).sort((a,b)=> a-b).map(el =>parseInt(el))

    let last = uniques[uniques.length-1];

    ocurrencesMap = ocurrencesMap.slice(0,last+1)

    for(let unique of uniques){
        if(!nonDivisorsMap[unique]){

            nonDivisorsMap[unique] =  getDivisors(unique,ocurrencesMap,A.length);
         
        }
    
    }

    const result = []
    for(let i = 0 ; i < A.length; i++){
        const el = A[i]
        result.push(nonDivisorsMap[el])
    }

    return result
}