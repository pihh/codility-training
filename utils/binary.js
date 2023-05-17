/**
 * BASICS
 */
const int2bin = function(int,signed=false){
  
    let bin = (int >>> 0).toString(2);
  	if(signed && Math.sign(int)==1){
     		let left = "0".repeat(32-bin.length); 
      bin = left+bin 
    }
  
  	return bin;
}

const bin2int = function(bin){
    return parseInt(bin, 2) >> 0;
}


/**
 * Positive number binary representation
 * @param {Number} num 
 * @returns 
 */
export const positiveNum2bin = function(num){
    return num.toString(2);
}
/**
 * Gets integer binary representation
 * @param {Number} num 
 * @returns 
 */


const uniqueNotRepeated = function(nums) {
    let out = 0;

   for (let n of nums) {
       out ^= n;
   }

   return out;
};

function reverseBits(num) {

    let reversed = num.toString(2);
    const padding = "0";
    reversed = padding.repeat(32 - reversed.length) + reversed;
    return parseInt(reversed.split('').reverse().join(''), 2);
}


const getSigned = binStr => parseInt(binStr.length >= 8 && binStr[0] === "1" ? binStr.padStart(32, "1") : binStr.padStart(32, "0"), 2) >> 0;

var unsigned = someVar >>>0


var countOneBits = function(n){
    let count = 0
    while (n){
        count += n & 1
        n >>= 1
    }
    return count
        
}