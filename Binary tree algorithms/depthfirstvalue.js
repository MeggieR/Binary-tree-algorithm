

//This class defines a 'Node' in a binary tree, Each node has a value 'val', a left child 'left' and a right child 'right', initially, both children are set to null

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//1. ITERATIVE VERSION SOLUTION
//this function performs a depth-first traversal, starting from the root it uses a stack to keep track of nodes to visit
const depthFirstValues = (root) => {
    if (root == null) return [];

    const result = [];
    const stack = [ root ];  //initialize stack by pushing root node onto a stack
    while (stack.length > 0) { //this traversal loop runs as long as stack is not empty
        const current = stack.pop(); //the node at the top of the stack is popped off and its value printed
        result.push(current.val);

        if (current.right) stack.push(current.right); //the right child is pushed to the stack
        if (current.left) stack.push(current.left); //then the left child is pushed to the stack
    }
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