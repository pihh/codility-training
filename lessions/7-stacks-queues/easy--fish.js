// 100% https://app.codility.com/demo/results/trainingYP7R33-FZN/
// á terceira..

function solution(A, B) {
    // Implement your solution here
    let eaten = 0;
    let downstream = [];
    for (let i = 0; i < A.length; i++){
        const direction = B[i]
        const weight = A[i]
        if(direction == 1){
            downstream.push(weight)
        }else{
            let keepLooping = true;
            while(keepLooping){
                if(downstream.length == 0){
                    keepLooping = false;
                }else{
                    eaten++;
                    if(downstream[downstream.length-1] > weight){
                        keepLooping = false;
                    }else{
                        downstream.pop();
                    }
                }
            }
        }
    }

    return A.length-eaten;
}