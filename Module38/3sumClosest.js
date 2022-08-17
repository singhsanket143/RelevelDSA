function closest(arr, target){
    /**
     * Time: O(n^2)
     * Spacr: O(space of sorting algorithm)
     */
    arr.sort((a, b) => a-b);
    let diff = Infinity;
    for(let i = 0; i < arr.length && diff != 0; i++) {
        let v = arr[i];
        let lo = i+1, hi = arr.length - 1;
        while(lo <= hi) {
            sum = arr[i] + arr[lo] + arr[hi];
            if(Math.abs(target - sum) < Math.abs(diff)) {
                /// we found a closer element as diff is lesser
                diff = target - sum;
            }
            if(sum < target) lo++;
            else hi--;
        }
    }
    return target - diff;
}

function upperBound(arr, ele, st) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = st, end = arr.length - 1;
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

function closestBS(arr, target) {
    /**
     * Time: O(n*n*logn)
     * 
     */
    arr.sort((a, b) => a-b);
    let diff = Infinity;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let comp = target - arr[i] - arr[j];
            let ub = upperBound(arr, target, j + 1); // upper bound is the first value greater than target
            let hi = ub, lo = hi - 1;
            if(hi < arr.length && Math.abs(comp - arr[hi]) < Math.abs(diff)) {
                diff = comp - arr[hi];
            }
            if(lo < arr.length && Math.abs(comp - arr[lo]) < Math.abs(diff)) {
                diff = comp - arr[lo];
            }
        }
    }
    return target - diff;
}

console.log(closestBS([-1,2,1,-4], 1))