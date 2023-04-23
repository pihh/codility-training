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

  /* -------------------------------------------------------------------------- */
  /*                                  EXERCISES                                 */
  /* -------------------------------------------------------------------------- */
  /*
   
  /* 
    Reversing coins
    ----------------------------- 
    Consider n coins aligned in a row. Each coin is showing heads at the beginning.
    [0,1,2,3,4,5,6,7,8,9]

    Then, n people turn over corresponding coins as follows: 
    Person i reverses coins with numbers that are multiples of i. That is, person i flips coins i, 2 · i, 3 · i, . . . until no more appropriate
    coins remain. 

    The goal is to count the number of coins showing tails. 
    
    In the above example,the final configuration is:
    [0,3,8] , 3 coins are tails

    Assume n >=1
*/

function reversingCoins(n=1){
    /*
        brute force steps 
        1 -> all coins are shifted
        2 -> all coins n/2 % 2 = 0 -> are shifted -> starts at 2 -> 4 -> 6 
        0 [0,0,0,0]
        1 [1,1,1,1]
        2 [1,0,1,0]
        3 [1,0,0,1]

    */
    if(n == 0)return 0;
    if(n == 1) return 1;

    n++;
    let coins = Array(n).fill(false);
    for(let i = 1; i < n; i++){
        for(let j = i; j < n; j+=i){
            if(j%i == 0){
                coins[j] = !coins[j]
            }
        }
    }

    return coins.slice(1).filter(el => el==true).length

}