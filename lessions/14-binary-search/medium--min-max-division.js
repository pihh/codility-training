function solution(K, M, A) {
// 100% - https://app.codility.com/demo/results/trainingNR9MGC-78Z/
/**
    Logic here:
    On the example, the minimum large sum = 5 and the greater = 15
    The mid is 10;

    So, check if any of the splits can reach the mid before end -> lower the max to mid -1
    else increment the min to mid +1

    Check splits 
    0 + 1 > mid ?  yes = > 0+1+2 > mid ? no ? => increase splits, set sum = current element

    if mid = max we have a result.
 */
    function divisionSolvable(mid, k, a) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
            if (sum > mid) {
                sum = a[i];
                k--;
            }
            if (k < 0) {
                return false;
            }
        }
        return true;
    }

    // Implement your solution here
    let min = Math.max(...A);
    let max = Math.max(min,A.reduce((a, v) => (a + v), 0))
    let result = max;

    while (min <= max) {
        let mid = Math.round((min + max) / 2);
        if (divisionSolvable(mid, K - 1, A)) {
            max = mid - 1;
            result = mid;
        } else {
            min = mid + 1;
        }
    }
    return result;
    
}

