/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a,b)=> a-b);
    
    for(let i = 0 ; i < arr.length -2; i++){
        console.log(i)
        let left = i
        let center = i+1;
        let right = arr.length-1
        while(center < right){
            let a = arr[left]
            let b = arr[center]
            let c = arr[right]
            
            let s1 = a-b
            let s2 = b-c;
            console.log({s1,s2,a,b,c,center,left,right})
            if(s1 == s2)return true;
            
            if(s1 < s2){
                center++
            }else{
                right--
            }
        }
        let n = arr[i]
        
        while(i <= arr.length-2 ){
            if(n !== arr[i+1]) break;
            i++
        }
        console.log({i})
        
    }
    return false
};