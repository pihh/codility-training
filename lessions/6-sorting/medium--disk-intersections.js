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