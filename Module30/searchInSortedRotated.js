function binarySearchOnSortedRotated(arr) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        console.log(start, end)
        let mid = start + Math.floor((end - start)/2);
        if(mid - 1 >= 0 && arr[mid-1] > arr[mid]) {
            return mid;
        }
        if(mid == 0 && arr[mid] < arr[mid+1]) return mid
        if(arr[start] < arr[mid] && arr[end] > arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearchOnSortedRotated([4,5,6,7,0]))