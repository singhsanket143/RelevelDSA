let vis = [];
let a = [-2, -1, -2, -1, +1, +2, +1, +2]; // k dash
let b = [-1, -2, +1, +2, -2, -1, +2, +1]; //  k double dash
function isSafe(i, j, n) {
    return i >= 0 && j >= 0 && i < n && j < n && vis[i][j] == -1;
}

function knightsTour(i, j, n, curr) {
    /**
     * Time: O(7^(n*n))
     * Space: O(n^2)
     */
    if(curr == n*n - 1) {
        vis[i][j] = curr;
        console.log(vis);
        console.log("********");
        return;
    }
    for(let d = 0; d < 8; d++) {
        if(isSafe(i + a[d], j + b[d], n)) {
            // console.log(i+a[d], j+b[d])
            vis[i][j] = curr;
            knightsTour(i+a[d], j+b[d], n, curr + 1);
            vis[i][j] = -1;
        }
    }
}

function solve() {
    let n = 5;
    for(let i = 0; i < n; i++) {
        let arr = Array(n).fill(-1);
        vis.push(arr);
    }
    
    vis[0][0] = 0;
    knightsTour(0,0, n, 0);
}

solve();