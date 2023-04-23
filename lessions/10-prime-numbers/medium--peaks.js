/*
A -> N integers
*/
function solution(A) {
    // 72% -> 100% , 40%
    // https://app.codility.com/demo/results/trainingSWNHQ7-6WK/
    // Implement your solution here
    function getPeaks(A) {
        let peaks = []
        for (let i = 1; i < A.length - 1; i++) {
            if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
                peaks.push(i)
            }
        }
        return peaks
    }

    let peaks = getPeaks(A)
    if (peaks.length == 0) return 0;
    if (peaks.length == 1) return 1;
    let maximumDivisor = A.length; //Math.floor(Math.sqrt(A.length)) + 1


    let maxBlocks = 1
    for (let d = 1; d <= maximumDivisor; d++) {

        if (A.length % d == 0) {

            let blocks = []
            let slice = A.length / d;

            for (let i = 0; i < A.length; i += slice) {
                const start = i;
                const end = start + slice - 1;
                blocks.push([start, end])

            }


            let validDivision = true
            for (let block of blocks) {
                let a = block[0];
                let b = block[1];
                let validBlock = false;
                for (let peak of peaks) {
                    if (a <= peak && b >= peak) {
                        validBlock = true;

                    }
                }
                if (!validBlock) {
                    validDivision = false;

                }
            }

            if (validDivision && blocks.length > maxBlocks) {
                maxBlocks = blocks.length
            };
        }

    }
    return maxBlocks
}



function solution(A) {
    // 100%
    // https://app.codility.com/demo/results/trainingN6WAZB-GJW/
    // Instead of tracking peak index and loop through -> tracked 0,1 and indexOf

    let peakCount = 0;
    let maxBlocks = 1
    function getPeaks(A) {
        let peaks = [0]
        for (let i = 1; i < A.length - 1; i++) {
            if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
                peaks.push(1)
                peakCount++;
            }else{
                peaks.push(0)
            }
        }
        peaks.push(0)
        return peaks
    }

    let peaks = getPeaks(A)

    if (peakCount == 0) return 0;
    if (peakCount == 1) return 1;

    let maximumDivisor = A.length; //Math.floor(Math.sqrt(A.length)) + 1

    for (let d = maximumDivisor; d >1; d--) {

        if (A.length % d == 0) {

            // let blocks = []
            let slice = A.length / d;
            let validDivision = true
            for (let i = 0; i < A.length; i += slice) {
                const start = i;
                const end = start + slice ;
                const block = peaks.slice(start,end);
                if(block.indexOf(1)==-1){
                    validDivision = false;
                    break
                }
            }

            if (validDivision && d > maxBlocks) {
                maxBlocks = d
                return d
            };
        }

    }
    return maxBlocks
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ CLEANED UP VERSION                                                                                              │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

class Problem{
    A=[];
    len = 0;

    peaks=[];
    peakCount = 0;
    
    maxBlocks = 1;
    
    constructor(A){
        this.A = A;
        this.len = A.length
        this.init();
    }

    init(){
        this.mapPeaks();
        this.maximumDivisor = this.len; //Math.floor(Math.sqrt(A.length)) + 1
    }
    mapPeaks(){
        const A = this.A;
        let peaks = [0]
        for (let i = 1; i < this.len - 1; i++) {
            if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
                peaks.push(1)
                this.peakCount++;
            }else{
                peaks.push(0)
            }
        }
        peaks.push(0)
        this.peaks = peaks;
    }

    solve(){
        if (this.peakCount == 0) return 0;
        if (this.peakCount == 1) return 1;
        for (let d = this.maximumDivisor; d >1; d--) {
            if (this.len % d == 0) {
                // let blocks = []
                let slice = this.len / d;
                let validDivision = true
                for (let i = 0; i < this.len; i += slice) {
                    const start = i;
                    const end = start + slice ;
                    const block = this.peaks.slice(start,end);
                    if(block.indexOf(1)==-1){
                        validDivision = false;
                        break
                    }
                }

                if (validDivision && d > this.maxBlocks) {
                    return d
                };
            }

        }
        return this.maxBlocks
    }
}

function solution(A) {
    // Implement your solution here
    const problem = new Problem(A)
    return problem.solve();
}

