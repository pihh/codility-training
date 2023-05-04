/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let solution = []
     
    if(digits[digits.length-1]!== 9){
        digits[digits.length-1] = digits[digits.length-1]+1
        solution = digits
    }else{
        let carry = 1;
        solution.unshift(0)
        for(let i = digits.length-2; i >= 0; i--){
            let d = digits[i]+carry
            if(d > 9){
                carry = 1;
                d=0
            }else{
                carry = 0;
            }
            solution.unshift(d)
        }
        if(carry>0){
            solution.unshift(1)
        }
    }
    
    return solution
};
/*
[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
[1,2,3]
[4,3,2,1]
[9]
[0]
[1,9]
[8,9,9,9]
*/