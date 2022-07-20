function numJewelsStones(jewels, stones) {
    /**
     * Time: O(nm)
     * Space: O(n)
     */
    let mp = {};
    for(let i = 0; i < jewels.length; i++) {
        if(!mp[jewels[i]]) mp[jewels[i]] = true;
    }
    let result = 0;
    for(let i = 0; i < stones.length; i++) {
        if(mp[stones[i]]) {
            result++;
        }
    }
    return result;
}