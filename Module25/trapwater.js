function trap1(heights) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    if(heights.length == 0) return 0;
    let ans = 0;
    let n = heights.length;
    let leftMax = Array(n);
    let rightMax = Array(n);
    leftMax[0] = heights[0];
    rightMax[n-1] = heights[n-1];
    for(let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], heights[i]);
    }
    for(let i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], heights[i]);
    }
    for(let i = 0; i < n; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    return ans;
}

function trap2(heights) {
    /**
     * time: O(n)
     * space: O(n)
     */
    let st = [];
    let ans = 0;
    let curr = 0;
    while(curr < heights.length) {
        while(st.length != 0 && heights[curr] > heights[st[st.length - 1]]) {
            let top = st[st.length -1];
            st.pop();
            if(st.length == 0) break;
            let dist = curr - st[st.length - 1] - 1;
            let h = Math.min(heights[curr], heights[st[st.length - 1]]) - heights[top];
            ans += dist * h;
        }
        st.push(curr);
        curr++;
    }
    return ans;
}


console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]))