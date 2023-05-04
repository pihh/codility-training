/*

96% / 80%

*/

var climbStairs = function(n) {
    if(n <=2) return n;
    
    function fibonacci(n, memoized = { 1: 1, 2: 2, 3:3 }) {
      if (n in memoized) return memoized[n];

      memoized[n] = fibonacci(n - 1, memoized) + fibonacci(n - 2, memoized);
      return memoized[n];
    }

    return fibonacci(n)
};