function countViolations(str) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let st = [];
    let count = 0;
    for(let i = str.length -1; i >= 0; i--) {
        if(st.length == 0) {
            st.push(str[i]);
        } else if(st[st.length - 1] == 'B' && str[i] == 'G') {
            count += 1;
            st.pop();
        } else {
            st.push(str[i]);
        }
    }
    return count;
}

console.log(countViolations("BBGBGGBG"))