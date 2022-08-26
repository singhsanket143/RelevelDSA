function minInSortedRotatedArray(arr) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        
        let mid = start + Math.floor((end-start)/2);
        if(mid - 1 >= 0 && arr[mid] < arr[mid-1]) {
            return mid;
        } 
        if(mid == 0 && arr[mid] < arr[mid + 1]) return mid;
        if(arr[mid] < arr[end]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return undefined;
}

console.log(minInSortedRotatedArray([5,6,7,1,2,3,4]))