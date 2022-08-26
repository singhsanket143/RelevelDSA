function maxSumSubarray(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let sum = arr[0];
    let maxSum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}