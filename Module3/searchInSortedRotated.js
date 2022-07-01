function binarySearchOnSortedRotated(arr, x) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] >= arr[start]) {
            // case 1
            if(x >= arr[start] && x < arr[mid]) {
                // if the element lies in the sorted part of case 1
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(x > arr[mid] && x <= arr[end]) {
                // if the element lies in the sorted part of case 2
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(binarySearchOnSortedRotated([1], 0))