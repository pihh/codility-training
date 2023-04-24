
const fibonacci = function(n){
    if(n <= 1){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

function solution(A) {
    // 75% -> 100%, 50%
    // https://app.codility.com/demo/results/training8V8H9M-9QQ/
    // Implement your solution here

    // Add start and end position to the game
    A.unshift(1)
    A.push(1)

    // Define environment
    const target = A.length -1
    let minimumSteps = Number.MAX_SAFE_INTEGER;

    // Get fibonnaci sequence until the end
    const fibs = [1]
    
    let idx = 2;
    while(true){
        idx++
        const fib = fibonacci(idx);
        if(fib > target){
            break
        };
        fibs.push(fib)
    }

    fibs.reverse()
   
    function jump(position=0,steps=-1){
        steps++;
        if(steps > minimumSteps) return;
        if(!A[position]) return;
        
        if(position == target ){
            if(steps < minimumSteps){
                minimumSteps = steps;
            }
        }else{
            for(let i = 0; i < fibs.length; i++){
                jump(position+fibs[i],steps)
            }
        }
    }

    jump()

    return minimumSteps == Number.MAX_SAFE_INTEGER? -1: minimumSteps;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 100%
    // https://app.codility.com/demo/results/trainingTEE3GV-WHZ/
    // Backtrack the minimum path until certain leaf
    
    const fibonacci = new Array(30);
    fibonacci[0] = 1; 
    fibonacci[1] = 2;
    for (let i = 2; i < fibonacci.length; ++i) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    A.unshift(1);
    A.push(1);
    const minpaths = Array(A.length).fill(-1);
    minpaths[0]=0
    for(let i = 1 ; i < A.length; i++){
        if(A[i]== 0){
            minpaths[i] = -1;
            continue;
        }else{
            let min = Number.MAX_SAFE_INTEGER;
            for(let fib of fibonacci){
                let pos = i-fib;
                if(pos < 0) break;
                if(A[pos] && minpaths[pos]>-1){
                    let localSteps = minpaths[pos]+1;
                    min = Math.min(localSteps,min);
                    minpaths[i]= min
                }
            }
        }
    }

    return minpaths[minpaths.length-1]
}