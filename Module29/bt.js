class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let i = 0;
function buildTree(preorder) {
    /**
     * Time: O(n)
     */
    let data = preorder[i];
    i++;
    let root;
    if(data != null) {
        root = new Node(data);
    } else {
        return null;
    }
    root.left = buildTree(preorder);
    root.right = buildTree(preorder);
    return root;
}

function postOrder(root) {
    if(root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}

function inOrder(root) {
    if(root == null) return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}

function maxDepth(root) {
    /**
     * Time: O(n)
     * Space: O(n) 
     */
    if(root == null) {
        // if root is null there is no node in the longest path
        return 0;
    }

    let getDepthLeft = maxDepth(root.left); // this will help us to calc max depth of the left subtree
    let getMaxDepthRight = maxDepth(root.right); // this will help us to calc max depth of the right subtree
    return Math.max(getDepthLeft, getMaxDepthRight) + 1; // self work
}

let pre = [1, 2, null, null, 3, 4, 6, null, null, null, 5, null, null];
let root = buildTree(pre);
console.log(maxDepth(root));