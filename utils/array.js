/**
 * Join two arrays firstArray.concat(secondArray)
 */

// Simple sort
const sort = function (arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
};

const uniques = function (arr) {
  return [...new Set(arr)];
};

const max = function (arr) {
  return Math.max(...arr);
};

const arrayOfIndependentObjects = function (len, blueprint = {}) {
  let arr = new Array(len).fill(0).map((v) => ({ ...blueprint }));

  //arr[0].a = 10
  return arr;
};

const sumAllElementsInArray = function (arr) {
  const sum = arr.reduce(add, 0); // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a;
  }

  return sum;
};

const cumulativeSumArray = function (A) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    const el = A[i];
    sum += el;
    arr.push(sum);
  }

  return arr;
};

const cumulativeSumInRangeBase = function (A, a, b) {
  let arr = cumulativeSumArray(A);
  return arr[b] - arr[a] + A[a];
};
const cumulativeSumInRange = function (A, _A, a, b) {
  return _A[b] - _A[a] + A[a];
};
const removeFromEnd = function(A){
  const last = A.pop();
  return last;
}

const splitIntoTwoByIndex = function(A,index,inplace=false){
  let l = []
  let r = []
  if(inplace){
    l = A;
    r = l.splice(index);
  }else{
    l = A.slice(0,index);
    r = A.slice(index)
  }

  return [l,r]
}

const reverse = function(A,inplace=false){
  let reversed = A;
  if(inplace){
    reversed = A.reverse()
  }else{
    reversed = A.toReversed()
    reversed = [...A].reverse()
  }
  return reversed
}