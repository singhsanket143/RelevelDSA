function getFreq(str, ch) {
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
    if(mp[ch]) {
        return mp[ch];
    } else {
        return 0;
    }
}


function getFreq1(str, ch) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == ch) count++;
    }
    return count;   
}

console.log(getFreq1("unacademy", "a"));