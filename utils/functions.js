/*
function sum(a,b,c){return a+b+c}
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}


*/
/* -------------------------------------------------------------------------- */
/*                                 CURRIED FN                                 */
/*              function that returns subfunctions of main fn                 */
/* -------------------------------------------------------------------------- */
var curry = function(fn) {
    
    let len = fn.length;
    let _args = []
    return function curried(...args) {
        args = [...args];
        for(let arg of args){
            _args.push(arg)
        }
        if(_args.length == len){
            return fn(..._args)
        }
        return curried
        
    };
};

var curry = function(fn) {
    const arr = []
    return curried = (...params) =>  {
        arr.push(...params)
        if (fn.length !== arr.length) {
            return curried
        }
        else {
            return fn(...arr)
        }
    };
};