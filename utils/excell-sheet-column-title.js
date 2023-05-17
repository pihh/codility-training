/*
123456 -> [ 16, 26, 6, 8 ]
28 -> [1,2]
27 -> [1,1]
26 -> [26]

*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
    
    let map = new Map()
    let chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for(let i = 0; i < chars.length; i++){
       map.set(i+1,chars[i])
    }
    let nums = []
    let step = function(n){
      if(n == 0)return 0;

      let rest = n % 26 || 26
      n -= rest;
        n /= 26
      nums.unshift(map.get(rest))
      return n   
    }

    
    let n = step(columnNumber)
    while(n !=0){
        n=step(n)
    }
    
    

    return nums.join(''); 
};
