function canPaint(mid, arr, p) {
    /**
     * p -> the total number of available painters
     * arr -> the length of all the n boards
     * mid -> max time that can be allocated to a painter
     * Time: O(n)
     * Space: O(1)
     */
    let count = 1; // count of painter to whom we have allocated boards
    let currLength = 0; // how much length one painter has been allocated to paint
    for(let i = 0; i < arr.length; i++) { // go to each board and start allocation
        if(currLength + arr[i] > mid) { // if by allocating the new board to the painter, the time exceeds mid
            count++; // we need a new painter
            currLength = arr[i]; // this new board will be allocated to the new painter;
            if(count > p) {
                // we cannot paint the boards as for the given time it is less and we need more painters
                return false;
            }
        } else {
            currLength += arr[i];
        }
    }
    return true;
}

let arr = [10,20,30,40];
let p = 2;
let lo = arr[arr.length - 1];
let hi = 0;
let ans = -1;
for (let i = 0; i < arr.length; i++) {
   hi += arr[i];
}
while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if(canPaint(mid, arr, p)) {
        ans = mid;
        hi = mid - 1; // try to find something even less
    } else {
        lo = mid + 1;
    }
}
console.log(ans);

/**
 * Time: O(nlog(sum(ai)))
 * Space: O(1)
 */