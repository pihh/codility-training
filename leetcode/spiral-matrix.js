/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let x1 = matrix[0].length-1
    let y1 = matrix.length;

    let x0 = 0;
    let y0 = 0;

    let solution = []
    solution.concat(matrix[0])
    for(let i = y0+1; i < y1; i++){
        solution.push(solution[i][x1])
    }

    let l = matrix[y1-1].slice(x0,x1-1)
    l.reverse()
    solution.concat(l)

    for(let i = y1-2; i > y0; i--){
        solution.push(solution[i][x0])
    }

    x0++;
    y0++;
    x1--;
    y1--;
    
    
    return solution
};