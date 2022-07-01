function upperBound(arr, ele) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0, end = arr.length - 1;
    let ans = -1;
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2);
        if(arr[mid] <= ele) {
            // if the mid element is <= element, then jump right
            start = mid + 1;
        } else {
            // we found a poteintial ans, try to find better one on left side
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
}

console.log(upperBound([1,3,5,7,7,7,7,19,23,29,31,37,41,43], -1));