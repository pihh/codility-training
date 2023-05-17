function isPalindrome(s, i) {
    return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i);
}

var isPalindrome = function(s) {
    s = alphanumeric(s.toLowerCase())   
    
    let left = Math.floor(s.length/2);
    let right = Math.round(s.length/2);
    
    for(let i = 0; i <= Math.floor(s.length/2); i++){
        left--;
        right++
        if(s.charAt(left)!== s.charAt(right-1)) return false
    }
    
    return true
};

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
// Well tested
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

// function change(str, i,j){
// let charI = map[str.charAt(i)]
// let charJ = map[str.charAt(j)]

// str = str.replaceAt(j,charJ)  
// return str.replaceAt(i, charI); 
// 	//return str
// }

// str
// change(str,1,2)
