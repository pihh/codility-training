/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  let track = [];
  let solution = null;
  // Brute forcing
  for (let i = 0; i < list1.length; i++) {
    track.push(list1[i]);
  }
  for (let i = 0; i < list2.length; i++) {
    track.push(list2[i]);
  }

  track.sort((a, b) => a - b);

  if (!solution && track[0]) {
    solution = new ListNode(track[0]);
  }
  let prev = solution;
  for (let i = 1; i < track.length; i++) {
    prev.next = new ListNode(track[i]);
    prev = prev.next;
  }

  return solution;
};
