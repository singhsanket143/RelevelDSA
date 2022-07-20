function binarySearch(arr, n) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] == n) {
            if(mid + 1 < arr.length && arr[mid+1] == n) {
                return true;
            }
            if(mid - 1 >= 0 && arr[mid-1] == n) return true;
            return false;
        } else if (arr[mid] < n) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return false;
}

console.log(binarySearch([1,2,2,2,3,4,4,4,5,5,6,7,8,9,9], 7));