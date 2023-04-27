// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    // Bruteforce it 
    let maxSum = A[0]
    function solve(i = 0, sum = 0) {
        if (i == A.length - 1) {
            if (sum > maxSum) {
                maxSum = sum
            }
        } else {
            for (let j = 1; j <= 6; j++) {
                if (j + i < A.length) {
                    solve(i + j, sum + A[i + j])
                }
            }
        }

    }

    solve(i = 0, A[0])
    return maxSum
}


/*
1 + -2 = possible minimum

0   -   1  -2  0   9   -1  -2
1   -   1  -1  -1  8    7   5
2   -   1  -1  1   10   9   8 ->

[-2, 5, 1]  -> 4  
[1,-2] -> -1
*/

function solution(A) {

    // Helpers
    function generateMatrix(A, len) {
        let matrix = Array(7);
        matrix[0] = A
        for (let i = 1; i <= 6; i++) {
            matrix[i] = Array(len).fill(0)
            matrix[i][0] = A[0]
        }
        return matrix;
    }
    // Implement your solution here
    let len = A.length;
    let range = len - 1;
    let globalMax = A[0] + A[range];
    let matrix = generateMatrix(A, len);
    let sides = [1, 2, 3, 4, 5, 6];

    for (let side of sides) {

        for (let i = 0; i < len; i++) {
            if (i < side) {
                matrix[side][i] = matrix[side - 1][i]
            } else {
                matrix[side][i] = Math.max(
                    matrix[side][i - side] + A[i],
                    matrix[side][i - 1] + A[i],
                    matrix[side - 1][i]
                )
            }
        }
    }

    return matrix[6][range]

}






function solution(A) {

    // Helpers
    let sum = A[0]
    let action = "maxSum"; // || "maxSum" "minDamage"
    let sides = [1, 2, 3, 4, 5, 6];
    let checkpoint = 0;
    let timeline = Array(A.length).fill(0);
    timeline[0] = A[0]

    function stepMax(i) {
        if (checkpoint + i >= A.length) return false;

        let value = A[checkpoint + i];
        timeline[checkpoint + i] = sum + value;
        if (value >= 0) {
            sum += value
            timeline[checkpoint + i] = sum;
            checkpoint += i;
            return true
        } else {
            return false;
        }
    }

    function stepDamage(i) {
        let damageTimeline = [0,]
        for (let side of sides) {

        }
        if (checkpoint + i >= A.length) return false;
        /*
        let value = A[checkpoint+i];
        timeline[checkpoint+i] = sum+value;
        if(value >= 0){
            sum += value
            timeline[checkpoint+i] = sum;
            checkpoint += i;
            return true
        }else{
            return false;
        }
        */

    }

    let success = true;
    let loops = 0
    while (success || loops < 10) {
        success = false;
        loops++;
        for (let side of sides) {
            if (stepMax(side)) {
                success = true;
                break
            }
        }
        if (!success) {
            checkpoint += 1
        }
    }
    console.log({ timeline, checkpoint, loops })
    return timeline[timeline.length - 1]

}



function solution(A) {

    // Helpers
    let sum = A[0]
    let sides = [1, 2, 3, 4, 5, 6];
    let checkpoint = 0;
    let timeline = Array(A.length).fill(0);
    timeline[0] = A[0]

    function stepMax(i) {
        if (checkpoint + i >= A.length) return false;

        let value = A[checkpoint + i];
        timeline[checkpoint + i] = sum + value;
        if (value >= 0) {
            sum += value
            timeline[checkpoint + i] = sum;
            checkpoint += i;
            return true
        } else {
            return false;
        }
    }

    function stepDamage(i) {
        if (checkpoint >= A.length - 1) {
            return false;
        }
        // let minDamage = Number.MIN_SAFE_INTEGER
        let minDamageIndex = 0;
        let globalMinDamage = Number.MIN_SAFE_INTEGER;
        for (let side of sides) {
            if (checkpoint + side >= A.length - 1) {
                break;
            }
            if (A[checkpoint + side] >= 0) {
                checkpoint += side;
                timeline[checkpoint + side] = sum
                return true
            }
            let minDamage = sum + A[checkpoint + side]
            for (let backSide of sides) {
                if (checkpoint + side - backSide < 0) {
                    break;
                }
                let damage = sum + A[checkpoint + side - backSide]
                if (damage > minDamage) {
                    minDamage = damage
                }
                if (damage >= globalMinDamage) {
                    globalMinDamage = damage;
                    minDamageIndex = side
                }
            }
            timeline[checkpoint + side] = minDamage;




        }
        checkpoint += minDamageIndex;
        sum += A[checkpoint]
        timeline[checkpoint] = sum

        return false;

    }

    let success = true;

    while (success || checkpoint < A.length) {
        success = false;

        for (let side of sides) {
            if (stepMax(side)) {
                success = true;

                break
            }
        }
        if (!success) {
            if (stepDamage()) {
                success = true

            }
            checkpoint++
        }

    }

    return timeline[timeline.length - 1]

}

/*

[-1,2,3]
[-1,2]

[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
[-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000,-1000]


[1, -2, 0, 9, -1, -2,-1]

[-1,3,2]
[1,-2]

[-4, -10, -7] - 11
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let dp = Array(A.length);
    dp[0] = A[0];

     for(let i=1; i<A.length; i++){
            
            // keep the biggest one 
            // be very careful: could be negtive (so use MIN_SAFE_INTEGER)
            let max = Number.MIN_SAFE_INTEGER;
            
            // a die could be "1 to 6" 
            for(let die=1; die<=6; die++){
                if( i-die >= 0){
                    // very important: not "A[i-die]+A[i]"
                    // instead, have to use "dp[i-die]+A[i]"
                    max = Math.max( dp[i-die]+A[i], max );
                    // dynamic programming:
                    // take the best:
                    // takeBest( dp[i-j] + value[j], curBest )
              
                }
            }    
            dp[i] = max; // keep the best one as the dp value    
        }
        console.log(dp)
        return dp[A.length-1];
}

