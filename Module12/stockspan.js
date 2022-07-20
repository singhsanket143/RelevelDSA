function pge(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let i = 0;
    let st = [];
    arr.reverse();
    let output = Array(arr.length);
    st.push(0);
    for(let i = 1; i < arr.length; i++) {
        let next = arr[i];
        let idx = i;
        if(st.length > 0) {
            element = st[st.length - 1];
            while(arr[element] < next) {
                output[element] = arr.length - idx - 1;
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
    output.reverse();
    arr.reverse();
    return output;
}

let arr = [100,80,60,70,60,75,85];
let pgi = pge(arr);
console.log(pgi);
let output = Array(arr.length);
output[0] = 1;
for(let i = 1; i < arr.length; i++) {
    output[i] = i - pgi[i];
}
console.log(output);

// Time : O(n)
// Space: O(n)