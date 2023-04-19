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
export const int2bin = function(int){
    return (int >>> 0).toString(2);
}

export const bin2int = function(bin){
    return parseInt(bin, 2) >> 0;
}