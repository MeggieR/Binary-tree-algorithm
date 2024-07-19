

//This class defines a 'Node' in a binary tree, Each node has a value 'val', a left child 'left' and a right child 'right', initially, both children are set to null

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//1. RECURSIVE VERSION SOLUTION
//this function performs a depth-first traversal, starting from the root it uses a stack to keep track of nodes to visit
const depthFirstValues = (root) => {
 if (root == null) return [];
 const leftvalues = depthFirstValues(root.left); // [b, d, e]
 const rihtvalues = depthFirstValues(root.right); // [c, f]
 return [root.val, ...leftvalues, ...rihtvalues];
}



//construct the tree
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//construct binary tree by creating instances of the 'Node' class and linking them together
a.left = b; //a is the root node
a.right = c; //a has two children: b (left) and c (right).
b.left = d; //b has two children: d (left) and e (right).
b.right = e; 
c.right = f; //c has one child: f (right)

depthFirstValues(a);
