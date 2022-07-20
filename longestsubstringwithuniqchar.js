function calc(str) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let left = 0, right = 0;
    let mp = {};
    let result = 0;
    while(right < str.length) {
        if(!mp[str[right]]) mp[str[right]] = 0;
        mp[str[right]]++;
        while(mp[str[right]] > 1) {
             // start shrinking
             mp[str[left]]--;
             left++;
        }
        result = Math.max(result, right - left + 1);
        right++;
    }
    return ((result/str.length)*100).toFixed(2);
}

console.log(calc("abytffcde"))