class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function lca(root, p, q) {
    /**
     * Time: O(h)
     * Space: O(h)
     */
    if(root == null) {
        // current subtree doesn't exist
        return null;
    }
    if(root.data < p && root.data < q) {
        // both p and q are greater than the element at the root, so both p and q will lie on right subtree
        return lca(root.right, p, q);
    }
    if(root.data > p && root.data > q) {
        // both p and q are lesser than the element at the root, so both p and q will lie on the left subtree
        return lca(root.left, p, q);
    }
    return root;
}

let ans = undefined;
function lcaOptimised(root, p, q) {
    /**
     * Time: O(n)
     * Space: O(h)
     * This works for every binary tree not just bst
     */
    // this function returns whether either p or q is present in subtree of root or not
    if(root == null) {
        // if the subtree is null, we wont find anything
        return false
    }
    let l = lcaOptimised(root.left, p, q) ? 1 : 0; // whether we found p or q in lst or not 
    let r = lcaOptimised(root.right, p, q) ? 1 : 0; // whether we found p or q in the rst or not
    let m = ((root.data == p) || (root.data == q)) ? 1 : 0;
    if(l + r + m >= 2) ans = root; // we found the lca
    return (l + r + m) > 0; // if we found any one of them we return true
}

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

lcaOptimised(root, 22, 4);
console.log(ans);