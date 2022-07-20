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

function maxAreaRect(mat) {
    /**
     * Time: O(n^2)
     * Space: O(n)
     */
    for(let i = 1; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] == 0) continue;
            mat[i][j] = mat[i][j] + mat[i-1][j]
        }
    }
    let ans = 0;
    for(let i = 0; i < mat.length; i++) {
        ans = Math.max(ans, histogramLargestRectangle(mat[i]));
    }
    return ans;
}

let mat = [
    [1,0,1,0,0],
    [1,0,1,1,1],
    [1,1,1,1,1],
    [1,0,0,1,0]
]

console.log(maxAreaRect(mat))