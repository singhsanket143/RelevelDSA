function linearSearch(arr, element) {
    /**
     * Time: O(n)
     * Space: O(!)
     */
    for(let i = 0; i < arr.length; i++) {
        // we will be iterating on each possible index of the array
        if(arr[i] == element) {
            // we will be checking on every index that whether the element at the curr index is equal to the element to be found or not
            return i; //we return the index i where element is found
        }
    }
    return -1;
}

function gobalLinearSearch(arr, ele) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == ele) {
            result.push(i);
        }
    }
    return result;
}

console.log(linearSearch([-1,0,6,9,-7,3,18], -7))