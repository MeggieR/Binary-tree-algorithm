//A RECURSIVE VERSION OF CHECKING TREE
class Node {   //this class represents nodes in a binary tree. each with value 'val', left child 'left and right child 'right'
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeIncludes = (root, target) => {
    if (root == null) return false;
    if (root.val == target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// Create nodes
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

// Build the tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// Search for a value
console.log(treeIncludes(a, 'e')); // true
console.log(treeIncludes(a, 'z')); // false