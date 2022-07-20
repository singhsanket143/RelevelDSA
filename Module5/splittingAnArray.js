function getSplit(arr, k) {
    /**
     * Space: O(1)
     * Time: O(nlogn)
     */
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArray += arr[i];
    }
    let lo = 1;
    let hi = sumOfArray;
    let result = 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let count = 1;
        let sum = 0, ans = 0;
        for(let i = 0; i < arr.length; i++) {
            if(sum + arr[i] > mid) {
                ans = Math.max(ans, sum);
                sum = 0;
                count++;
                if(count > k) break;
            }
            sum += arr[i];
        }
        ans = Math.max(ans, sum);
        if(count == k) {
            result = ans;
        }
        if(count > k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return result;
}

console.log(getSplit([1,3,2,4,10,8,4,2,5,3], 4))