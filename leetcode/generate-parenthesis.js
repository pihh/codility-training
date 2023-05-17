/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let combinations = [];
  
      function next(str="(", left=1,right=0){
          if(right > left)return
          if(str.length == n*2){
              if(left == right){
                  combinations.push(str)
              }
          }else if(str.length < n*2){
              next(str+')',left,right+1)
              next(str+'(',left+1,right)          
          }
          
      }
  
      next()
      return combinations
  };
  