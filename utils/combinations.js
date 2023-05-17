// Combination of all possible distributions of the  array~
const findPermutations = (arr = []) => {
    let res = []
    const helper = (arr2) => {
       if (arr2.length==arr.length)
       return res.push(arr2)
       for(let e of arr)
       if (!arr2.includes(e))
       helper([...arr2, e])
    };
    helper([])
    return res;
 };

 // Combinations of N 
 function k_combinations(set, k) {
   var i, j, combs, head, tailcombs;
   if (k > set.length || k <= 0) {
       return [];
   }
   if (k == set.length) {
       return [set];
   }
   if (k == 1) {
       combs = [];
       for (i = 0; i < set.length; i++) {
           combs.push([set[i]]);
       }
       return combs;
   }
   combs = [];
   for (i = 0; i < set.length - k + 1; i++) {
       head = set.slice(i, i+1);
       tailcombs = k_combinations(set.slice(i + 1), k - 1);
       for (j = 0; j < tailcombs.length; j++) {
           combs.push(head.concat(tailcombs[j]));
       }
   }
   return combs;
}
function combinationsAnyOrder(set) {
   var k, i, combs, k_combs;
   combs = [];
   for (k = 1; k <= set.length; k++) {
       k_combs = k_combinations(set, k);
       for (i = 0; i < k_combs.length; i++) {
           combs.push(k_combs[i]);
       }
   }
   return combs;
}
  
function combinationsInOrder(array, length) {
   function c(l, r) {
       var ll = l.slice();
       if (r.length === length) {
           result.push(r);
           return;
       }
       while (ll.length) {
           c(ll, r.concat(ll.shift()));
       }
   }
   var result = [];
   c(array, []);
   return result;
}




const combine = ([head, ...[headTail, ...tailTail]]) => {
   if (!headTail) return head
 
   const combined = headTail.reduce((acc, x) => {
     return acc.concat(head.map(h => `${h}${x}`))
   }, [])
 
   return combine([combined, ...tailTail])
 }
 /*
 console.log('With your example arrays:', combine([array1, array2]))
 console.log('With N arrays:', combine([array1, array2, array3]))
 
 //-----------UPDATE BELOW FOR COMMENT---------
 // With objects
 const array4=[{letter: "A"}, {letter: "B"}, {letter: "C"}]
 const array5=[{number: 1}, {number: 2}, {number: 3}]
 const array6=[{color: "RED"}, {color: "BLUE"}, {color: "GREEN"}]
 */
 const combineObjects = ([head, ...[headTail, ...tailTail]]) => {
   if (!headTail) return head
 
   const combined = headTail.reduce((acc, x) => {
     return acc.concat(head.map(h => ({...h, ...x})))
   }, [])
 
   return combineObjects([combined, ...tailTail])
 }
 