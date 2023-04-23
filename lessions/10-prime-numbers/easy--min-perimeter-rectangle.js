/*
N -> int -> rectangle area 
A,B = rectangle sides
Area = A*B
Perimeter = 2* (A+B)

Find minimal perimeter of rectangle with area = N
*/
function solution(N) {
    // 100%
    // https://app.codility.com/demo/results/training7257Q3-6KQ/
    if(N == 1) return 4;

    const getDivisors = function (n) {
        let pairs = []
        let i = 1;
    
        while (i * i < n) {
            if (n % i == 0) {
                pairs.push([i,n/i])
            
            }
            i += 1
        }
        if (i * i == n) {
            pairs.push([i,i])
     
        }
        return pairs;
    }


    let pairs= getDivisors(N);
  	let minimalPerimeter = Number.MAX_SAFE_INTEGER
    for(let pair of pairs){
     	let perimeter = 2*(pair[0]+pair[1]);
      if(perimeter < minimalPerimeter){
       	minimalPerimeter = perimeter 
      }
    }
  
  	return minimalPerimeter
}