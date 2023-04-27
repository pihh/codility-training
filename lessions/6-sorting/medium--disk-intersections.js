// 81%
// https://app.codility.com/demo/results/training4B2D9T-79A/

function solution(A) {
    // Brute forcing:
    const disks = []
    for(let i = 0; i <A.length; i++){
        disks.push([i-A[i],i+A[i]])
    }
    let count = 0;
    let limit = 10000000;
    for(let i = 0; i < disks.length; i++){
        for(let j = i+1; j < disks.length; j++){
            if(
                (disks[j][0]<= disks[i][0] && disks[i][0]<= disks[j][1])
                ||
                (disks[i][1]>=disks[j][0])
            ){
                count++
                if(count > limit){
                    return -1
                }
            }
        }
    }

    return count
}



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // 100% - https://app.codility.com/demo/results/trainingW955ZC-BD4/
    let startsMap ={}
    let endsMap = {}
    let tl = []
    let max = 10000000
    for(let i = 0; i < A.length; i++){
        let start = Math.max(0,i-A[i])
        let end = i+A[i];
        tl.push(start);
        tl.push(end)
        if(!startsMap[start])startsMap[start]=0
        if(!endsMap[end])endsMap[end]=0
        startsMap[start]++
        endsMap[end]++
    }

    tl = [...new Set(tl.sort((a,b)=> a-b))]

    let intersections = 0;
    let stack = 0
    for(let t of tl){
        if(startsMap[t]){
            for(let i = startsMap[t]; i >0; i--){
                stack+= 1;
                intersections+= stack-1
                if(intersections>max){
                    return -1
                }
            }
        }
        if(endsMap[t]){
            stack-= endsMap[t];
       
        }
    }

    return intersections
}