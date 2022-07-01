function longestSubarrayWithSumZero(arr) {
    let pref = Array(arr.length).fill(0);
    pref[0] = arr[0];
    for(let i = 1; i < arr.length; i++) {
        pref[i] = pref[i-1] + arr[i];
    }
    let mp = {};
    let ans = -1;
    for(let i = 0; i < arr.length; i++) {
        if(mp[pref[i]]) {
            ans = Math.max(ans, i - mp[pref[i]]);
        } else {
            mp[pref[i]] = i;
        }
    }
    return ans;
}

console.log(longestSubarrayWithSumZero([4,3,-2,-1,5,-4,-1,3]))