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
function subsets(arr) {
    /**
     * Time: O(2^n) ->  TLE
     * Space: O(1)
     */
    let n = arr.length;
    let countOfSubsets = (1 << n); // (1 << n) == 2^N
    let res = [];
    for (let num = 0; num < countOfSubsets; num++) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            if((num & (1 << i)) != 0) sum += arr[i]
        }
        res.push(sum);
    }
    return res;
}

let arr = [1, -2, 3];
let A = -1, B = 2;
const left = arr.slice(0, arr.length/2);
const right = arr.slice(arr.length/2, arr.length);
const m = subsets(left);
const n = subsets(right);

m.sort((a, b) => a-b);
n.sort((a, b) => a-b);
let ans = 0;
for(let i = 0; i < m.length; i++) {
    let lb = lowerBound(n, A-m[i]); 
    let ub = upperBound(n, B-m[i]);
    if(ub == -1 ) ub = n.length;
    if(lb == -1) lb = n.length;
    ans += (ub - lb);
}
console.log(ans);
