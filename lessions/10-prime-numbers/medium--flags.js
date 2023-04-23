/*
A -> N integers 
Peak = A[-1]<A[0]> A[1]

Want to set max number of flags

Rule for flags:
- can only be set on peaks
- distance between 2 flags >= K
*/

function solution(A) {
    // 66% -> 100% , 28%
    // https://app.codility.com/demo/results/trainingPQQY3Z-HQ4/
    // Brute force:
    function getPeaks(A){
        let peaks = []
        for(let i = 1; i < A.length -1; i++){
            let a = A[i-1];
            let b = A[i]
            let c = A[i+1]
            if(a <b && b > c){
                peaks.push(i)
            }
        }

        return peaks
    }
    let peaks = getPeaks(A);

    /*
    4 flags 
    [1,3,5,10]
    meto 1 em 1 -> next : a partir de 5 
    meto 1 em 5 -> next a partir de 9
    meto 1 em 10 
    */
   
    let maxFlags = 0
    if(peaks.length == 0) return 0
    if(peaks.length == 1) return 1

    for(let f = peaks.length ; f >0; f--){
        
        if(f <= maxFlags) return maxFlags;
        let initialFlags = f;
        for(let i = 0; i < peaks.length-1; i++){
            let availableFlags = initialFlags-1;

            let j = i+1;
            while(j < peaks.length){
                let a = peaks[i]
                let b = peaks[j]
                let dist = b-a;
            
                if(dist >=initialFlags){
                    availableFlags--
                    i = j
                }
                j++ 
            }
            let setFlags = initialFlags-availableFlags;
            if(setFlags > maxFlags){
                maxFlags = setFlags
            }
    }

    }    
    return maxFlags
}


/*
A -> N integers 
Peak = A[-1]<A[0]> A[1]

Want to set max number of flags

Rule for flags:
- can only be set on peaks
- distance between 2 flags >= K
*/

function solution(A) {
    // 93% -> 100% , 85%
    // https://app.codility.com/demo/results/training8NRD69-JWK/
    
    function getPeaks(A){
        let peaks = []
        for(let i = 1; i < A.length -1; i++){
            let a = A[i-1];
            let b = A[i]
            let c = A[i+1]
            if(a <b && b > c){
                peaks.push(i)
            }
        }

        return peaks
    }
    let peaks = getPeaks(A);

    /*
    4 flags 
    [1,3,5,10]
    meto 1 em 1 -> next : a partir de 5 
    meto 1 em 5 -> next a partir de 9
    meto 1 em 10 
    */
   
    let maxFlags = 0
    if(peaks.length == 0) return 0
    if(peaks.length == 1) return 1

    let maxPossibleFlags = Math.min(Math.floor(Math.sqrt(A.length)),peaks.length);
    for(let f = maxPossibleFlags ; f >0; f--){
        
        if(f <= maxFlags) return maxFlags;
        let initialFlags = f;
        for(let i = 0; i < peaks.length-1; i++){
            let availableFlags = initialFlags-1;

            let j = i+1;
            while(j < peaks.length){
                let a = peaks[i]
                let b = peaks[j]
                let dist = b-a;
            
                if(dist >=initialFlags){
                    availableFlags--
                    i = j
                }
                j++ 
            }
            let setFlags = initialFlags-availableFlags;
            if(setFlags > maxFlags){
                maxFlags = setFlags
            }
    }

    }    
    return maxFlags
}// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 100% 
    // https://app.codility.com/demo/results/training6AC5Q2-PQX/
    if(A.length <3)return 0
    
    let peaks = []

    for(let i = 1; i < A.length-1; i++){
        if(A[i-1]< A[i] && A[i+1]< A[i]){
            peaks.push(i)
        }
    }

    if(peaks.length == 0) return 0;
    if(peaks.length == 1) return 1;

    // Knowing that the maximum number of flags would be the greatest divisor
    let possibleFlags = Math.min(Math.floor(Math.sqrt(A.length))+1, peaks.length);
    let max = 0
    for(let i = possibleFlags; i > 0; i--){
        let lastFlag = 0;
        let countFlag = 1;

        for(let j = 1; j < peaks.length; j++){
            if(peaks[j]-peaks[lastFlag] >= i && countFlag < i){
                countFlag+=1
                lastFlag= j;
            }
        }
        if(countFlag < max){
            return max;
        }else if(countFlag > max){
            max = countFlag
        }
    }

    return max
}
