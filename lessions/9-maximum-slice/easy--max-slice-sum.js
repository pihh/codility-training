
function solution(A) {
    // Brute force -> 69% -> 100% , 20$
    // https://app.codility.com/demo/results/training23EMEG-W5A/
    const sumAllElementsInArray = function (arr) {
        try{

        const sum = arr.reduce(add, 0); // with initial value to avoid when the array is empty

        function add(accumulator, a) {
            return accumulator + a;
        }

        return sum;
        }catch(ex){
            return Number.MIN_SAFE_INTEGER
        }
    };
    if(A.length < 2) return A[0];

    let maxSlice = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i <A.length; i++){
         for(j = i; j < A.length; j++){
             let sum = sumAllElementsInArray(A.slice(i,j+1))

             if(sum > maxSlice){
                 maxSlice = sum
             }
         }
    }

    return maxSlice
}