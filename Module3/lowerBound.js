function lowerBound(arr, ele) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0; 
    let end = arr.length - 1;
    let ans = -1;
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] >= ele) {
            // then the current index can be one of our possible ans
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

console.log(lowerBound([1,3,5,7,7,7,7,19,23,29,31,37,41,43], 7));