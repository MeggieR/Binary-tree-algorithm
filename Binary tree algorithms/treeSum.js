//CALCULATES SUM OF THE TREE NODE VALUES
class Node {
    constructor(val) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}
//1. RECURSIVE VERSION
const treeSum = (root) => {
    if (root == null) return 0;
    return (root.val + treeSum(root.left) + treeSum(root.right));
};

//2. ITERATIVE VERSION
const treeSum = (root) => { //function takes the root node of a binary tree as a single parameter
    if (root == null) return 0;
    let totalSum = 0; //initialize to 0 to keep track of the cumulative sum of nodes

    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift(); //current node removed from the front of the node
        totalSum += current.val; //add current node to the totalSum

        if (current.left != null) queue.push(current.left); //push any left child to the end of the queue
        if (current.right != null) queue.push(current.right); //push any right child to the end of the queue
    }

    return totalSum; //after all nodes are processed, return totalSum
};

// Create nodes with numeric values
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// Calculate the sum of all values in the tree
console.log(treeSum(a)); // Output: 21