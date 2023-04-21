// https://app.codility.com/demo/results/trainingSBV2RT-YU2/

/**
  - A string is valid when all the parentheses are closed 
  - A string is invalid when a condition makes it impossible to be proper closed
 */

  function solution(S) {
    const list = [];
    for(let i = 0; i < S.length; i++){
        const s = S[i];
        if(s == '('){
            list.push(s);
        }else{
            if(list.length > 0){
                list.pop();
            }else{
                return 0
            }
        }
    }

    return Number(list.length == 0) 
}