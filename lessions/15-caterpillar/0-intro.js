
const caterpillar = function(A,s){
    let n = A.length();
    let front = 0;
    let total = 0;
    for(let back = 0; back < n; back++){
        while(front < n && total + A[front] < s){
            total +=A[front]
            front++;
        }
        if(total == s){
            return trueM
        }
        total-= A[back]
    }

    return false
}


/* -------------------------------------------------------------------------- */
/*                                  EXERCISE                                  */
/*                              TRIANGLE TRIPLETS                             */
/* -------------------------------------------------------------------------- */

/*
You are given n sticks (of lengths 1 <= a0 <= a1 <= . . . <= an−1 <= 109). The goal is
to count the number of triangles that can be constructed using these sticks. More precisely,
we have to count the number of triplets at indices x < y < z, such that ax + ay > az.

Logic:
A+B > C ? -> Next else B To C 
When fail -> A+1 B = A

For every pair x, y we can find the largest stick z that can be used to
construct the triangle. Every stick k, such that y < k <= z, can also be used, because the
condition ax + ay > ak will still be true. We can add up all these triangles at once

A = [2,3,4,6,7]
[2,3] -> 5  -> 5  > 4      -> 1
[2,4] -> 6  -> 6  > nada   -> 1
[2,6] -> 8  -> 8  > 7      -> 2
[3,4] -> 7  -> 7  > 6      -> 3
[3,6] -> 9  -> 9  > 7      -> 4
[4,6] -> 10 -> 10 > 7      -> 5

*/


function triangles(A){
    // Helpers
    function isTriangle(a,b,c){
        return A[a]+A[b] > A[c];
    }

    // Trackers
    let n = A.length;
    let result = 0;
    
    // Main loop
    for(let x = 0; x < n-2; x++){
        for(let y =x+1; y < n -1; y++){
          	let z = y+1
  
          	
          
            while(z < n && isTriangle(x,y,z)){
                z+=1
            }
            
            result+= z -y-1
        }
    }   

    return result
}
