function sumOfTheArray(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    // this function returns the sum of all the elements
    let ans = 0; // this answer variable will at last hold the sum of all the elements
    for(let i = 0; i < arr.length; i++) {
        // we will iterate over the whole array
        ans = ans + arr[i];
    }
    return ans;
}

function sumOfKSmallest(arr, k) {
    /**
     * Time : O(k)
     * Space: O(1)
     */
    // this function returns the sum of k smallest numbers in a sorted arr
    let ans = 0; // in this variable we will at last get the sum 
    for(let i = 0; i < k; i++) {
        // We will only iterate on the first k elements
        ans = ans + arr[i];
    }
    return ans;
}

function sumOfKLargest(arr, k) {
    /**
     * Time : O(k)
     * Space: O(1)
     */
    // this function returns the sum of k largest numbers in the sorted array -> last k numbers
    let ans = 0; // this will store the actual sum
    for(let i = arr.length - 1; i >= 0; i--) {
        if(k <= 0) break;
        k--;
        ans = ans + arr[i];
    }
    return ans;
}

function maxWeightDiff(arr, k) {
    /**
     * Time: O(nlogn)
     * Space: O(space reqd for sorting)
     */
    arr.sort((a, b) => a-b); // sorted the array
    let total = sumOfTheArray(arr);
    let maxKSum = sumOfKLargest(arr, k);
    let minSum = sumOfKSmallest(arr, k);
    let ans = Math.max((maxKSum - (total - maxKSum)), ((total - minSum) - minSum));
    return ans;
}

console.log(maxWeightDiff([18,4,15,12,10], 2))