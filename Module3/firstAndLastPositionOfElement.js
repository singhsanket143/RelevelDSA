
 function upperBound(arr, ele) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0, end = arr.length - 1;
    let ans = arr.length;
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
var searchRange = function(nums, target) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let ans = [];
    let lb = lowerBound(nums, target);
    let ub = upperBound(nums, target);
    if(nums[lb] == target) ans.push(lb);
    else ans.push(-1);
    if(ub-1 >= 0 && nums[ub-1] == target) ans.push(ub-1);
    else ans.push(-1);
    return ans;
}