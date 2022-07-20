function removeKDigits(str, k) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    // number of operations are greater than the length of the given string
    if(str.length <= k) {
        return "0";
    }
    if(k == 0) {
        // no deletions possible
        return str;
    }
    let st = [];
    st.push(str[0]); // always 0th element gets added directly as there is no preceeding element
    for(let i = 1; i < str.length; i++) {
        while(k > 0 && st.length != 0 && str[i] < st[st.length - 1]) {
            k--;
            st.pop();
        }
        st.push(str[i]);
        if(st.length == 1 && str[i] == '0') {
            st.pop();
        }
    }
    while(k > 0 && st.length > 0) {
        // if we have added all the numbers and still k is left then we delete the last ones and they are biggest ones
        k--;
        st.pop();
    }
    let result = "";
    for(let i = 0; i < st.length; i++) {
        result += st[i];
    }
    if(result.length == 0) return "0";
    return result;
}

console.log(removeKDigits("10", 2))