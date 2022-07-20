function nse(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let i = 0;
    let st = [];
    let output = Array(arr.length);
    st.push(0);
    for(let i = 1; i < arr.length; i++) {
        let next = arr[i];
        let idx = i;
        if(st.length > 0) {
            element = st[st.length - 1];
            while(arr[element] > next) {
                output[element] = idx;
                st.pop();
                if(st.length == 0) break;
                element = st[st.length - 1];
            }
        }
        st.push(i);
    }
    while(st.length  > 0) {
        output[st[st.length - 1]] = -1;
        st.pop();
    }
    return output;
}

console.log(nse([10,7,4,2,9,10,11,3,2]))