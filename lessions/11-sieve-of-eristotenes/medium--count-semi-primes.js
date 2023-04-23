/**
 * Created a timeline tracking the number of semi primes occurring at that point
 * Then it's a matter of triming the timeline and check the difference.
 * @param {} N 
 * @param {*} P 
 * @param {*} Q 
 * @returns 
 */

function solution(N, P, Q) {
    // 100% 
    // https://app.codility.com/demo/results/training8HEHPQ-ZUZ/
    const sieveOfEratosthenes = function (n) {

        const map = []; //  map true/false from 2 to n 
        const max = Math.floor(Math.sqrt(n));
        const primes = [];

        for (let i = 0; i < n; i++) {
            map.push(true);
        }

        for (let i = 2; i <= max; i++) { // loop from 2 to sqrt of n
            if (map[i]) { // if exists -> will remove all it's multiples
                for (let j = i * i; j < n; j += i) {
                    map[j] = false; // set all the multiples to false
                }
            }
        }

        for (let i = 2; i < n; i++) { // iterate from 2 to n
            if (map[i]) { // if true its prime
                primes.push(i);
            }
        }

        return primes
    }
    function getSemiPrimes(N, primes) {
        const semiPrimes = Array(N + 1).fill(0);
        for (let i = 0; i < primes.length; i++) {
            for (let k = i; k < primes.length; k++) {
                const semiPrime = primes[i] * primes[k];
                if (semiPrime > N) {
                    break
                }
                semiPrimes[semiPrime] = 1
            }
        }
        return semiPrimes
    }

    const primes = sieveOfEratosthenes(N);
    const semiPrimes = getSemiPrimes(N, primes);
    const semiPrimesTimeline = Array(semiPrimes.length).fill(0)
    for (let i = 1; i < semiPrimes.length; i++) {
        semiPrimesTimeline[i] = semiPrimesTimeline[i - 1] + semiPrimes[i]
    }

    let result = []
    for (let i = 0; i < P.length; i++) {
        result.push(
            semiPrimesTimeline[Q[i]] -
            semiPrimesTimeline[P[i] - 1]
        )
    }
    return result
}