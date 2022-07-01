function longestConsecutiveSequence(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let mp = {}; // this map will store all the elements, and we can check existence of an element with it
    for(let i = 0; i < arr.length; i++) { // we will iterate over all the elements and insert them in mp
        mp[arr[i]] = true;
    }
    //console.log(mp, mp[10-1]);
    let ans = -1;
    for(let i = 0; i < arr.length; i++) {
        if(mp[arr[i] - 1]) {
            /**
             * Here we are detecting that arr[i] can be start of a sequence or not
             * It wont be start of a sequence of arr[i] - 1 exists in mp
             */
            continue;
        } else {
            // if arr[i] is start of a sequence
            let len = 0;
            let x = arr[i];
            while(mp[x]) {
                len++;
                x++;
            }
            ans = Math.max(ans, len);
        }
    }
    return ans;
}

console.log(longestConsecutiveSequence([9, 3, -1, -2, 1, 8, 7, 0, 6, 10]));