class Solution{
    constructor(s, numRows){
        this.s = s;
        this.numRows = numRows;
        this.numRowsMod = numRows-1;
        
        this.down = true;
        this.depth = 0;
        this.idx = 0;
        this.placeholder = Array(numRows).fill("")
    }
    
    get done(){
        return this.idx == this.s.length;
    }
    
    get solution(){
        return this.placeholder.join('')
    }
    
    next(){
        let s = this.s[this.idx]
        this.placeholder[this.depth]+=s
        this.idx++;
        if(this.down){
            this.depth++
            if(this.depth==this.numRows-1 ){
                this.down= !this.down;
                
            }
        }else{
            this.depth--
            if(this.depth == 0){
                this.down= !this.down;
                
            }
        } 
    }
    
}
var convert = function(s, numRows) {
    if(numRows <2) return s;
    let solution = new Solution(s,numRows)
    while(!solution.done){
        solution.next()    
    }
    
    return solution.solution
};

/**
 // TEST CASE

"PAYPALISHIRING"
3
"PAYPALISHIRING"
4
"A"
1
"ABC"
2
"ABCD"
2
*/