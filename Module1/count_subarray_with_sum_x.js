function countSubarray(arr, x) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let pref = Array(arr.length).fill(0);
    pref[0] = arr[0];
    for(let i = 1; i < arr.length; i++) {
        pref[i] = pref[i-1] + arr[i];
    }
    let mp = {};
    let ans = 0;
    console.log(pref);
    for(let j = 0; j < pref.length; j++) {
        if(mp[pref[j]]) {
            mp[pref[j]]++;
        } else {
            mp[pref[j]] = 1;
        }
        if(mp[pref[j] - x])
            ans += mp[pref[j] - x]
        if(pref[j] == x) ans += mp[pref[j]]
    }
    return ans;
}

console.log(countSubarray([4, -3, 2, 2, -1], 1));