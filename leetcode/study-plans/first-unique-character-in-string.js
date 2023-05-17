/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(!map[char]){
            map[char]= {i:i,count:0}
        }
        map[char].count++
    }
    
  
    for(let char in map){
        if(map[char].count ==1) {
            return map[char].i
        }
    }
    
    return -1
};