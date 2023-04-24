const sieveOfEratosthenes = function (n, keepLast = false) {

    if (keepLast) n += 1;

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

    return primes;
}
/*
Finds combination of primes that when multiplied return n
*/
const primeFactorization = function (n) {
    const initialN = n;
    const factors = []
    const primes = sieveOfEratosthenes(n)
    for (let i = 0; i < primes.length; i++) {
        let prime = primes[i];
        let keepLooping = true;
        let loopIndex = 0;
        while (keepLooping) {
            loopIndex++;
            if (loopIndex > 10) {
                throw 'max loops reached ' + prime;
            }
            if (n == 0) return factors();
            if (n % prime == 0) {
                n = n / prime
                factors.push(prime)
            } else {
                keepLooping = false;
            }
        }
    }
    if (factors.length == 0) {
        factors.push(initialN)
    }
    return [...new Set(factors)];
}


function solution(A, B) {
    // 61% -> 100%, 16%
    //https://app.codility.com/demo/results/trainingRAN8X8-VK7/
    // Implement your solution here
    const map = {}
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let a = A[i];
        let b = B[i];
        if (!map[a]) {
            map[a] = JSON.stringify(primeFactorization(a))
        }
        if (!map[b]) {
            map[b] = JSON.stringify(primeFactorization(b))
        }
        if (map[a] == map[b]) {
            count++
        }
    }

    return count
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const gcd = function (a, b) {
    if (a % b == 0) {
        return b
    } else {
        return gcd(b, a % b)
    }
}
function solution(A, B) {
    // 69 -> 100, 33
    // https://app.codility.com/demo/results/trainingND7YQT-QQK/
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let aa = A[i]
        let bb = B[i]
        let a = Math.max(aa, bb)
        let b = Math.min(aa, bb)
        let c = gcd(a, b)
        let d = a / c
        if (b % d == 0) {
            count++
        }
    }

    return count;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // 75%



    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let aa = A[i]
        let bb = B[i]
        let a = Math.max(aa, bb)
        let b = Math.min(aa, bb)
        let c = a / b

        if (b % c == 0) {
            count++
        }
    }
    return count
}


function solution(A, B) {
    // 100% - n entendi bem a logica
    // https://app.codility.com/demo/results/trainingJDRCDG-CKG/

    const gcd = function (a, b) {
        if (a % b == 0) {
            return b
        } else {
            return gcd(b, a % b)
        }
    }

    let count = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < A.length; i++) {
        a = A[i]
        b = B[i]
        c = gcd(a, b)
        while (gcd(a, c) != 1) {
            a /= gcd(a, c)
        }
        while (gcd(b, c) != 1) {
            b /= gcd(b, c)
        }
        if (a == 1 && b == 1) {
            count++
        }
    }
    return count
}