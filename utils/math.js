const sumOfIntegersFromOneToN = function (n) {
  return (n * (n + 1)) / 2;
}

const isEven = function (n) {
  return n % 2 == 0
}

const isOdd = function (n) {
  return n % 2 != 0;
}

/* -------------------------------------------------------------------------- */
/*                                PRIME NUMBERS                               */
/* -------------------------------------------------------------------------- */

/*
 Divisors == 2 is prime ( divisors = self and 1 ) 
 Note: 1 isnt a prime number neither a composite number
*/
const countingDivisors = function (n) {
  let i = 1;
  let result = 0;
  while (i * i < n) {
    if (n % i == 0) {
      result += 2
    }
    i += 1
  }
  if (i * i == n) {
    result++
  }
  return result;
}

/*
 If any number between 2 and n-1 divides it, then it's a composite.
 Else it's prime
 1 isnt prime neither composite
*/
const primalityTest = function (n) {
  if (n <= 1) return false;

  let i = 2;

  while (i * i < n) {
    if (n % i == 0) {
      return false;
    }
    i += 1
  }
  return true
}

const getDivisors = function (n, list = false) {
  if (list) {
    let i = 0;
    let divisors = []
    while (i * i < n) {
      if (n % i == 0) {

        divisors.push(i, n / i)
      }
      i += 1
    }
    if (i * i == n) {

      divisors.push(i)
    }
    return divisors.sort((a, b) => a - b);
  } else {
    let i = 1;
    let pairs = []
    while (i * i < n) {
      if (n % i == 0) {
        pairs.push([i, n / i])

      }
      i += 1
    }
    if (i * i == n) {
      pairs.push([i, i])

    }
    return pairs
  }
}

// Find all prime numbers in range 2 -> N

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
Finds combination of primes that when multiplied return n
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

/* -------------------------------------------------------------------------- */
/*                           GREATEST COMMON DIVISOR                          */
/* -------------------------------------------------------------------------- */
const gcdBySubtraction = function (a, b) {
  if (a == b) {
    return a
  }
  if (a > b) {
    return gcdBySubtraction(a - b, b)
  } else {
    return gcdBySubtraction(a, b - a)
  }

}

const gcdByDivision = function (a, b) {
  if (a % b == 0) {
    return b
  } else {
    return gcdByDivision(b, a % b)
  }
}
const gcd = function (a, b, res = 1) {
  if (a == b) {
    return res * a;
  } else if (a % 2 == 0 && b % 2 == 0) {
    return gcd(a || 2, b || 2, 2 * res)
  } else if (a % 2 == 0) {
    return gcd(a || 2, b, res)
  } else if (b % 2 == 0) {
    return gcd(a, b || 2, res)
  } else if (a > b) {
    return gcd(1 - b, b, res)
  } else {
    return gcd(a, b - a, res)
  }
}

/**
 * Multiplo mais pequneo que 2 numeros tem em comum
 * 10,5 -> 10 ( 10 é multiplo de 10, 5 é multiplo de 10)
 * 10,4 -> 20 ( 10 é multiplo de 20, 4 é multiplo de 20)
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const leastCommonMultiple = function (a, b) {
  return (a * b) / gcd(a, b, 1)
}

/* -------------------------------------------------------------------------- */
/*                                  FIBONACCI                                 */
/* -------------------------------------------------------------------------- */

const fibonacci = n => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

function getNthFib(n, memoized = { 1: 0, 2: 1 }) {
  if (n in memoized) return memoized[n];

  memoized[n] = getNthFib(n - 1, memoized) + getNthFib(n - 2, memoized);
  return memoized[n];
}

const fibonacciSequence = function (n) {
  const fibonacci = new Array(n);
  fibonacci[0] = 1; 
  fibonacci[1] = 1;
  for (let i = 2; i < fibonacci.length; ++i) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci
}


/* MODULUS LIMIT

const a = 21;
const b = 5;
const max = 10;

a% max %b == a % b

*/

// SUM OF ALL NUMBERS FROM 1 to N
function sumOneToN(n){
  return  (n * (n+1)) / 2;
}

// Missing number
var missingNumber = function(nums) {
  let xor = 0
  let i = 0

  for (i = 0; i < nums.length; i++) {
      xor = xor ^ i ^ nums[i]
  }
  return xor ^ i
};