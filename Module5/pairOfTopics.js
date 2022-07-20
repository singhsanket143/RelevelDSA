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
    return ans ;
}

let a = [1,3,2,4];
let b = [1,3,2,4];
let c = [];
for(let i = 0; i < a.length; i++) {
    c.push(a[i] - b[i]);
}
// console.log(c);
c.sort((a, b) => a - b); // O(nlogn)
let ans = 0;
for(let i = 0; i < c.length - 1; i++) {
    let ub = upperBound(c, -c[i], i+1);
    if(ub == -1) {
        continue;
    }
    ans += c.length - ub;
}

console.log(ans);

// Time:O(nlogn);
