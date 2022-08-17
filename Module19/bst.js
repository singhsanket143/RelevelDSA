class Node {
    // node is going to be the fundamental building block for trees
    constructor(data) {
        this.data = data; // this will store data of the node
        this.left = null; // this is going to store ref to the root of left subtree 
        this.right = null; // this is going to store ref to the root of the right subtree
    }
}

function insert(root, x) {
    /**
     * Time: theta(h) -> general , omega(logn) -> perfect or complete , O(n) -> skewed
     * Space: Same as time
     */
    if(root == null) {
        const newNode = new Node(x);
        return newNode;
    }
    if(x < root.data) {
        root.left = insert(root.left, x);
    } else {
        root.right = insert(root.right, x);
    }
    return root;
}

function remove(root, x) {
    /**
     * Time: O(h)
     * Space: O(h)
     */
    if(root == null) return null;
    if(root.data == x) {
        // is it a leaf node ? 
        if(root.left == null && root.right == null) {
            return null;
        }
        if(root.left == null && root.right != null) {
            // we dont have a left child but we have a right child
            let temp = root.right; // storing the access to the subtree before hand
            root.right = null; // we need to break the connection
            return temp;
        }
        if(root.left != null && root.right == null) {
            // we dont have a right child, but we have a left child
            let temp = root.left;
            root.left = null;
            return temp;
        }
        let temp = root.left;
        while(temp.right != null) temp = temp.right;
        root.data = temp.data;
        remove(root.left, temp.data);
        return root;
    }
    if(x < root.data) {
        root.left = remove(root.left, x);
    } else {
        root.right = remove(root.right, x);
    }
    return root;
}

function preorder(root) {
    if(root == null) {
        return;
    }
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

function inorder(root) {
    if(root == null) {
        return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function isBST(root) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    if(root == null) {
        return {
            isBST: true,
            min: Infinity,
            max: -Infinity
        }
    }
    let leftAns = isBST(root.left);
    let rightAns = isBST(root.right);
    if(leftAns.isBST && rightAns.isBST && leftAns.max < root.data && rightAns.min > root.data) {
        return {
            isBST: true,
            min: Math.min(rightAns.min, leftAns.min, root.data),
            max: Math.max(rightAns.max, leftAns.max, root.data)
        }
    }
    return {
        isBST: false,
        min: Math.min(rightAns.min, leftAns.min, root.data),
        max: Math.max(rightAns.max, leftAns.max, root.data)
    }
}

let i = 0;
function printLeaf(pre, min, max) {
    if(i >= pre.length) {
        return false;
    }
    if(pre[i] > min && pre[i] < max) {
        i++;
        let left = printLeaf(pre, min, pre[i-1]);
        let right = printLeaf(pre, pre[i-1], max);
        if(!left && !right) {
            console.log(pre[i-1]);
        } 
        return true;
    }
    return false;
} 


let sum = 0;
function convert(root) {
    if(root.right != null) convert(root.right);
    sum = root.data = sum + root.data;
    if(root.left != null) convert(root.left);
    return root;
}

let root = new Node(10);
// insert(root, -2);
// insert(root, 18);
// insert(root, 11);
// insert(root, 14);
// insert(root, 15);
// insert(root, 6);
// insert(root, 4);
// insert(root, 7);

// root.left = new Node(100);
// preorder(root);
// console.log("**");
// inorder(root);
// remove(root, 10);
// console.log("**");
// preorder(root);
let ans = isBST(root);
console.log(ans.isBST);