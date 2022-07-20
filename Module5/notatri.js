function upperBound(arr, ele, st) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = st, end = arr.length - 1;
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


let arr = [4,2,10];
arr.sort((a, b) => a-b);
let ans = 0;
for(let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let ub = upperBound(arr, arr[i] + arr[j], j+1);
        if(ub == -1) continue;
        ans += (arr.length - ub);
    }
}

console.log(ans);

/**
 * Time: (n^2logn)
 * Space: O(space of sorting algo);
 */