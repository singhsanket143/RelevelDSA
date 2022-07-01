function binarySearch(arr, ele) {
    /**
     * Time: O(logn)
     * space: O(logn) this is due to the cal stack entries of the helper function
     */
    return helper(arr, ele, 0, arr.length - 1);
} 

function helper(arr, ele, start, end) {
    if(start > end) return -1; // base case
    let mid = Math.floor((start + end)/2);
    if(arr[mid] == ele) return mid;
    if(arr[mid] > ele) {
        return helper(arr, ele, start, mid - 1);
    } else {
        return helper(arr, ele, mid + 1, end);
    }
}

console.log(binarySearch([1,3,5,7,11,13,17,19,23,29,31,37,41,43], 8));