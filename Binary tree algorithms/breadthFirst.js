
//ITERATIVE SOLUTION FOR BREADTH FIRST TRAVERSAL
class Node {   //this class represents nodes in a binary tree. each with value 'val', left child 'left and right child 'right'
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    if (root == null) return [];

    const values = [];   //initialize a array to stire values of nodes as they are visited
    const queue = [ root ];  //initialize a queueto keep track of nodes to visit

    while (queue.length > 0) { //loop to prosess the nodes as long as they exist
        const current = queue.shift(); //node removed from front of queue
        values.push(current.val); //node is added to the 'values' array

        if (current.left != null) queue.push(current.left); //if current has left child, it is added to the end of the queue
        if (current.right != null) queue.push(current.right); //if current has right child, it is added to the end of the queue
    }

    return values;
}

//construct a tree
const a = new Node('a'); //create a new instance of 'Node' with a.val being 'a', a.right and a.left being null
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//construct a binary tree by creating instances of the 'Node' class and linking them together
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

breadthFirstValues (a);