function firstNonRepeat(str) {
    /**
     * Time: O(n^2)
     * Space: O(1)
     */
    for(let i = 0; i < str.length; i++) {
        let flag = false;
        for(let j = 0; j < str.length; j++) {
            if(i == j) continue;
            if(str[j] == str[i]) {
                flag = true;
                break;
            }
        }
        if(flag == false) {
            return str[i];
        }
    }
    return undefined;
}

function nonRepeatOptimised(str) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let mp = {}; // this is going to be the frequency map
    for(let i = 0; i < str.length; i++) {
        if(!mp[str[i]]) {
            // if we are visiting the char for first time we add it in the map with freq 1
            mp[str[i]] = 1;
        } else {
            // if we have already visited the character previously, we increment the freq
            mp[str[i]]++;
        }
    }
    for(let i = 0; i < str.length; i++) {
        if(mp[str[i]] == 1) {
            return str[i];
        }
    }
    return undefined;
}

console.log(nonRepeatOptimised("nnaaww"))