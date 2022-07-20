function getFreq(str) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let mp = {}; // this object will become the frequency map
    for(let i = 0; i < str.length; i++) {
        if(!mp[str[i]]) {
            // when the character is not already visited
            mp[str[i]] = 1;
        } else {
            // the character has been already visited, so frwquency will be increased
            mp[str[i]]++;
        }
    }
    let keys = Object.keys(mp);
    let maxFreq = -Infinity;
    let ans = '';
    for(let i = 0; i < keys.length; i++) {
        if(mp[keys[i]] > maxFreq) {
            maxFreq = mp[keys[i]];
            ans = keys[i];
        }
    }
    return ans;

}

console.log(getFreq("relevel"));