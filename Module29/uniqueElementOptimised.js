function getUnique(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let result = 0; // in this variable we will store the result of xor of all the elements
    for(let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}

console.log(getUnique([-1,3,-1,2,5,3,5]));