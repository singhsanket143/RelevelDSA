function uniqueBruteForce(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let mp = {}; // this will be the frequency map where we will store the frequency
    for(let i = 0; i < arr.length; i++) {
        // iterate on all elements and make entries in the map
        if(!mp[arr[i]]) {
            // if the current element of arr[i] is not in the mapping, we create it
            mp[arr[i]] = 1;
        } else {
            // the current element is inside the mapping, then just inc the frequency
            mp[arr[i]]++;
        }
    }
    let keys = Object.keys(mp);
    for(let i = 0; i < keys.length; i++) {
        if(mp[keys[i]] == 1) {
            // element has frequency 1
            return keys[i];
        }
    }
    return -1;
}

console.log(uniqueBruteForce([1,9,-3,9,1,6,-3,2,2]));