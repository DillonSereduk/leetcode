const checkTree = root => root.val === (root.left.val + root.right.val);
// Time Complexity: O(1)
// Space Complexity: O(1)

// OR 

var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
};


