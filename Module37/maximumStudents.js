function lowerBound(arr, ele) {
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let start = 0; 
    let end = arr.length - 1;
    let ans = arr.length;
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


let arr = [[0, 0, 0, 1],
           [0, 0 ,0, 0],
           [1, 1, 1, 1],
           [0, 1, 1, 1]];

let ans = -1, maxOcc = 0;
for(let i = 0; i < arr.length; i++) {
    let lb = lowerBound(arr[i], 1);
    let occ = arr[0].length - lb;
    if(occ > maxOcc) {
        maxOcc = occ;
        ans = i+1;
    }    
}

console.log(ans);
/**
 * Time: O(nlogn)
 * Space: O(1)
 */