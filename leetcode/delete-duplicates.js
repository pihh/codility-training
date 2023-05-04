/**
 *  92.28%
 * 70%
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
  if(!head)return head;
  
  let prev = head
  
  while(prev.next){
      let val = prev.val;
      let next = prev.next;
      let nextVal = next.val

      
      if(val == nextVal){
          prev.next = next.next
      }else{
          prev = next
      }
  }
  return head
};