function peakElement(arr) {
    /**
     * Time: O(logn)
     * Space: O(logn)
     */
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;
    while(start < end) {
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] > arr[mid+1]) {
            // we are on a decreasing curve, we go left
            end = mid;
        } else {
            // we are on a increasing curve, we go right
            start = mid + 1;
            ans = mid + 1;
        }
    }
    return ans;
}

console.log(peakElement([-9, 0, 3, 12, 13, 5, 4, 8]));