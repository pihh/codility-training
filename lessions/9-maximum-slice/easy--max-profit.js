/*
A => daily stock price 
P => index bought
Q => index sold

Profit = A[Q] - A[P]
0 -> impossible to gain any profit
*/
function solution(A) {
    // Brute force solution
    // 66% -> 100% Correct , 25%  performance
    // https://app.codility.com/demo/results/training924KCP-MYH/
    let maxProfit = Number.MIN_SAFE_INTEGER;
    
    for(let i = 1; i < A.length; i++){
        let l = A.slice(0,i);
        let r = A.slice(i);
        let min = Math.min(...l);
        let max = Math.max(...r);

        const profit = max-min;
        if(profit > maxProfit){
            maxProfit = profit
        }
    }

    return Math.max(0,maxProfit)

}


function solution(A) {
    // Improved solution
    // 100%
    // https://app.codility.com/demo/results/trainingF2XKFK-YVQ/
    let mins = []
    let localMin = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < A.length-1; i++){
        let el = A[i];
        if(el < localMin){
            localMin = el;
        }
        mins.push(localMin);
    }

    let maxs = []
    let localMax = Number.MIN_SAFE_INTEGER
    for(let i = A.length-1; i > 0; i--){
        let el = A[i];
        if(el > localMax){
            localMax=el
        }
        maxs.push(localMax)
    }
    maxs.reverse()

    let maxProfit = 0;
    for(let i = 0; i< mins.length;i++){
        let p = mins[i]
        let q = maxs[i]
        let profit = q-p 
        if(profit > maxProfit){
            maxProfit=profit
        }
    }

    return maxProfit
}