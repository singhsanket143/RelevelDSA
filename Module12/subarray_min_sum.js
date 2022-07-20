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
        output[st[st.length - 1]] = arr.length;
        st.pop();
    }
    return output;
}

function pse(arr) {
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
            while(arr[element] > next) {
                output[element] = arr.length - 1 - idx;
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

// console.log(nse([3,1,2,4]))
// console.log(pse([3,1,2,4]))
let arr = [3,1,2,4]; // 4 2 1 3
let psi = pse(arr);
let nsi = nse(arr);
console.log(psi, nsi);
let ans = 0;
for(let i = 0; i < arr.length; i++) {
    ans += (i - psi[i])*(nsi[i] - i)*arr[i]
}

console.log(ans);