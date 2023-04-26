/**
 * Join two arrays firstArray.concat(secondArray)
 */
// MAPS ARE FASTER
function increment(map,n){
  let count = map.get(n)+1 || 1
  map.set(n, count);
  return count;
}
const map = new Map();
increment(map,2)
increment(map,1)
increment(map,1)
map.has(2)
map.get(2)
map.clear();

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

const removeOne = function(arr,index){
  if (index > -1) { // only splice array when item is found
    arr.splice(index, 1); // 2nd parameter means remove one item only
  }
}

const removeAll = function(arr,value){
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

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

// Max slice
const kadane = function(A) {
  // 100% -> uses Kadane algorithm who assumes that the localMaximum is the greater between the sum of the current value + currentLocal Max or current value
  // https://app.codility.com/demo/results/training98HXY6-2ZK/
  let localMax = A[0];
  let currentMax = A[0];
  for(let i = 1; i < A.length; i++){
      let el = A[i];
      localMax = Math.max(localMax+el, el);
      if(localMax > currentMax){
          currentMax = localMax;
      }
  }

  return currentMax;
}