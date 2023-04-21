// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // BruteForce
    // 55% -> 100% Correct , 0% performant

    // Helpers
    function hasLeader(A){
        const map = {}
        const len = A.length;
        const target = len/2;

        for(let i = 0; i < len ; i++){
            const el = A[i]
            if(!map[el]) map[el]=0;
            map[el]++
            if(map[el]> target) return el
        }

        return false;
    }
    function splitIntoTwoByIndex(A,index){
        l = A.slice(0,index);
        r = A.slice(index)
        return [l,r]
    }

    let equileaders = 0;

    for(let i = 1; i < A.length; i++ ){
        const [l,r] = splitIntoTwoByIndex(A,i);
        let a = [];
        let b = [];
        if(l.length < r.length){
            a = l;
            b = r
        }else{
            a = r;
            b = l;
        }
        let localLeader = hasLeader(a);
        if(localLeader!== false){
            if(hasLeader(b)== localLeader){
                equileaders++
            }
        }
    }


    return equileaders;
}




function solution(A) {
    // 100% - https://app.codility.com/demo/results/training99GJMJ-CB6/
    const timeline = []
    const map={}

    let localMax = 0;
    let localMaxElement = A[0];

    for(let i = 0; i < A.length; i++){
        let el = A[i];
        let target = (i+1)/2;

        if(!map[el]) map[el]=0;
        map[el]++
        if(map[el]> localMax){
            localMax = map[el]
            localMaxElement = el;
        }
        if(localMax>target){
            timeline.push(localMaxElement)
        }else{
            timeline.push(false)
        }
    }

    let equileaders = 0;
    for(let i = 0; i < A.length;i++){
        let el = A[i];
        let target = (A.length-i-1)/2
        map[el]--;
        let leftEquileader = timeline[i];
        
        if(leftEquileader !== false){
            let rightEquileader = map[leftEquileader];
            if(rightEquileader > target){
                equileaders++  
            }
        }
       
    }

 
    return equileaders
}