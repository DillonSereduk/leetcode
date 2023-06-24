const checkTree = root => root.val === (root.left.val + root.right.val);

// OR 

var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
};
