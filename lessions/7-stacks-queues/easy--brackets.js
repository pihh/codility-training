// 100 % https://app.codility.com/demo/results/trainingG9VNK6-JGV/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    let stack = "";
    let map = {
        "}":"{",
        "]":"[",
        ")":"("
    }
    for(let i = 0; i < S.length; i++){
        let s = S[i];
        if(!map[s]){
            stack+= s;
        }else{

            if(stack[stack.length-1] != map[s]){
                return 0
            }else{
                stack = stack.slice(0,-1)
            }
        }
        
    }
    if(stack.length >0) return 0;
    return 1
}