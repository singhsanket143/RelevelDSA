function ternarySearch(arr, el) {
    /**
     * Time: O(logn)
     * Space: O(1)
     * No of comparisons os 2log3(n) which is more than binary search which is log2(n)
     */
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi) {
        let mid1 = lo + Math.floor((hi - lo) / 3);
        let mid2 = hi - Math.floor((hi - lo) / 3);
        if(arr[mid1] == el) return mid1;
        if(arr[mid2] == el) return mid2;
        if(el < arr[mid1]) {
            hi = mid1 - 1;
        } else if (el > arr[mid2]) {
            lo = mid2 + 1;
        } else {
            hi = mid2 - 1;
            lo = mid1 + 1;
        }
    }
    return -1;
} 

console.log(ternarySearch([5,9,9,11,12,13,19,22,23,25,37,40], 11))