function binarySearch(arr, ele) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0, end = arr.length - 1; // these are the boundary points of search space
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == ele) {
            // we have found our element at index mid
            return mid;
        } else if (arr[mid] > ele) {
            // if arr[mid] > ele, then everything to the right of mid is also greater
            // jump to left
            end = mid - 1;
        } else {
            // if arr[mid] < ele, then everything to the left of mid is also lesser
            // jump to right
            start = mid + 1;
        }
    }
    return -1; // element not found
}

console.log(binarySearch([1,3,5,7,11,13,17,19,23,29,31,37,41,43], 43));