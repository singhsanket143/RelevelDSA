class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let output = [];
function pathToX(root, x) {
    /**
     * Time: O(n)
     * Space: O(h)
     */
    if(root == null) {
        return false;
    }
    if(root.data == x) {
        output.push(root.data);
        return true;
    }
    output.push(root.data);
    let left = pathToX(root.left, x);
    if(left) {
        return true;
    }
    let right = pathToX(root.right, x);
    if(right) {
        return true;
    }
    output.pop();
    return false;
}

function search(InOrder, x) {
    for(let i = 0; i < InOrder.length; i++) {
        if(InOrder[i] == x) return i;
    }
    return -1;
}

let preindex = 0;
function buildBTWithPreIn(preOrder, InOrder, lo, hi) {
    /**
     * Time: O(n)
     */
    if(lo > hi) return;
    let newNode = new Node(preOrder[preindex]);
    preindex++;
    if(lo == hi) return newNode; // as the current node will be a leaf
    let idx = search(InOrder, newNode.data);
    newNode.left = buildBTWithPreIn(preOrder, InOrder, lo, idx - 1);
    newNode.right = buildBTWithPreIn(preOrder, InOrder, idx + 1, hi);
    return newNode;
}

function postOrder(root) {
    if(root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

let pre = [3,9,20,15,7]
let inO = [9,3,15,20,7];

let root = buildBTWithPreIn(pre, inO, 0, pre.length - 1);

pathToX(root, 9);
console.log(output);