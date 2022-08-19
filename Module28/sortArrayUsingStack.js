function sortArrayUsingStack(arr) {
    /**
     * Time: O(n*n)
     * Space: O(1)
     */
    let st = [];
    for(let i = 0; i < arr.length; i++) st.push(arr[i]); // transferred all the elements from arr to stack

    // sort the stack using a stack
    let temp = []; // temporary stack
    while(st.length != 0) {
        let el = st[st.length - 1];
        st.pop();
        while(temp.length != 0 && temp[temp.length - 1] > el) {
            st.push(temp[temp.length - 1]);
            temp.pop();
        }
        temp.push(el);
    }
    arr = [];
    while(temp.length != 0) {
        arr.push(temp[temp.length - 1]);
        temp.pop();
    }   
    arr.reverse();
    return arr;
}

console.log(sortArrayUsingStack([34,3,31,98,92,23]))