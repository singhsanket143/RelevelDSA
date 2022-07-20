function nodesKDIstanceDown(root, k) {
    if(root == null || k < 0) return;
    if(k == 0) {
        console.log(root.data);
        return;
    }
    nodesKDIstanceDown(root.left, k-1);
    nodesKDIstanceDown(root.right, k-1);
}

function NodesAtDistK(root, target, k) {
    /**
     * Time: O(n)
     */
    if(root == null) {
        // tree is empty
        return -1; // nothing present in the subtree
    }
    if(root.data == target) {
        // if the target is same as root, we will just check all nodes in subtree with distance k
        nodesKDIstanceDown(root, k);
        return 0;
    }
    // search in the left subtree
    let left = NodesAtDistK(root.left, target, k);
    // if somewhere we found the target the value wont be -1
    if(left != -1) {
        if(left + 1 == k) {
            // if the root is at a distance k from target, print root
            console.log(root.data);
        } else {
            // else go to right subtree and print all k-d-2 dustant nodes
            // why we are doing -2, because if left subtree root is at a distance 2 from right subtree root
            nodesKDIstanceDown(root.right, k-d-2);
        }
        // add 1 to the distance and return value for parent child
        return 1+left;
    }
    let right = NodesAtDistK(root.right, target, k);
    if(right != -1) {
        if(right+1 == k) {
            if(right+1 == k) {
                console.log(root.data);
            }
        } else {
            nodesKDIstanceDown(root.left, k-d-2);
        }
        return 1+right;
    }
    return -1;
}