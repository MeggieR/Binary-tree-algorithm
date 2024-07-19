//CHECK IF TARGET EXISTS IN A BINARY TREE USING BREADTHFIRST SEARCH ALGORITHM
class Node {
    constructor (val) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const treeincludes = (root, target) => {
    if (root == null) return false;

    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current.val);
        if (current.val == target) {
            return true;
        }

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}

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
