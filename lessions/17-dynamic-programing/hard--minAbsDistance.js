/*



*/
function solution(A) {
    // 72%  - 100% correct  40% performance
    // https://app.codility.com/demo/results/training2AXAGK-S8B/
    if(A.length ==0)return 0;
    function step(i =1, possibilities = [A[0]]){
        if(i == A.length){
            // time to make some calculations
            return Math.min(...possibilities)
        }else{

            let _possibilities = []
            for(let possibility of possibilities){
                _possibilities.push(Math.abs(possibility+ A[i]))
                _possibilities.push(Math.abs(possibility- A[i]))
            }
            _possibilities = [...new Set(_possibilities)]
        
            return step(i+1,_possibilities)
        }
    }
    return step()
}