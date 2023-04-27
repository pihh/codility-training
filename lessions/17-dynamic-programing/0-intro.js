/*

Dynamic programming is a method by which a solution is determined based on solving
successively similar but smaller problems. This technique is used in algorithmic tasks in
which the solution of a bigger problem is relatively easy to find, if we have solutions for its
sub-problems.

*/

const coinChangeCombinations = function(C,k){
    C = C.sort((a,b)=> a-b);
    const combinations = Array(k+1).fill(0);
    combinations[0]=1
    for(let coin of C){
        for(let i =1; i <k+1; i++){
            if(i >= coin){
                combinations[i] += combinations[i-coin]
            }
        }
    }

    return combinations[combinations.length-1]
}

coinChange([1,2,5],12)


function createMatrix(n,m){
    let matrix = Array(n)
    

    for(let i = 0; i <matrix.length;i++){
        matrix[i] = Array(m+1).fill(1)
    }
    return matrix;
}


function coinChange(C,k){
    let matrix = createMatrix(C.length,k);
  	for(let c=0; c < C.length; c++){
      let coin = C[c]

      for(let i = 1; i < k+1; i++){
        if(i >= coin){
            matrix[c][i] = Math.min(matrix[c][i-coin]+1, k)
        }else{
            matrix[c][i] = matrix[c][i]
        }
      }
    }
    return matrix
}


//coinChange([1,5,6,8],11)
coinChange([1,2],11)