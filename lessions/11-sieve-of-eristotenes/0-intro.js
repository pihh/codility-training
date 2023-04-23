
// Find all primes from 2 to n
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
Quais os numeros primos, os quais multiplicados entre si dão x
*/
const primeFactorization = function (n) {
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
    return factors;
}