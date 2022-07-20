function maxSumSubarray(arr) {
    /** Kadane Algorithm
     * Time: O(n)
     * Space: O(1)
     */
    let result = -Infinity;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum < 0) {
            sum = 0;
            result = Math.max(result, arr[i]);
            continue;
        }
        result = Math.max(result, sum);
    }
    return result;
}

console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4,0,0]));