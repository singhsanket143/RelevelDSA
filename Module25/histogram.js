function histogramLargestRectangle(heights) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let len = heights.length;
    let st = [];
    let maxArea = 0;
    for(let i = 0; i <= len; i++) {
        let h = (i == len) ? 0 : heights[i];
        if(st.length == 0 || h > heights[st[st.length - 1]]) {
            st.push(i);
        } else {
            let tp = st[st.length - 1];
            st.pop();
            maxArea = Math.max(maxArea, heights[tp]*((st.length == 0) ? i : (i - st[st.length - 1] - 1)));
            i--;
        }
    }
    return maxArea;
}

console.log(histogramLargestRectangle([2,4,8,10,8,4,2]));