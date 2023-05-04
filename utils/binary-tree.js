function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
* @param {TreeNode} root
* @return {number[]}
*/
var inorderTraversal = function(root) {
  const solution =[]
  function print(node){
      if(node === null)return
      print(node.left)
      solution.push(node.val)
      print(node.right)
  }
  print(root)
  return solution
};


// WEIGHTED BST FROM SORTED LIST
class ThreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
 
// function to convert the array to BST
// and return the root of the created tree
function sortedArrayToBST(nums) {
 
// if the array is empty return NULL
    if (nums.length === 0) {
        return null;
    }
 
    const mid = Math.floor(nums.length / 2);
    const root = new ThreeNode(nums[mid]);
     
    // initializing queue
    const q = [[root, [0, mid - 1]], [root, [mid + 1, nums.length - 1]]];
 
    while (q.length > 0) {
        const [parent, [left, right]] = q.shift();
 
          // if there are elements to process and parent node is not NULL
        if (left <= right && parent != null) {
            const mid = Math.floor((left + right) / 2);
            const child = new ThreeNode(nums[mid]);
 
            // set the child node as left or right child of the parent node
            if (nums[mid] < parent.val) {
                parent.left = child;
            } else {
                parent.right = child;
            }
 
            // push the left and right child and their indices to the queue
            q.push([child, [left, mid - 1]]);
            q.push([child, [mid + 1, right]]);
        }
    }
 
 
    

    return root
 
}