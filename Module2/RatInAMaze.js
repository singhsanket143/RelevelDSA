let grid = [
    [0,0,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,0],
    [0,0,0,0,0]
];
let vis = [];
function isSafe(i, j, n, m) {
    return i >= 0 && j >= 0 && i < n && j < m && grid[i][j] == 0 && vis[i][j] == false;
}
function ratmaze(i, j, n, m) {
    /**
     * Time: O(3^(nm))
     * Space: O(nm)
     */
    if(i == n-1 && j == m-1) {
        return 1;
    }
    vis[i][j] = true; // we mark current cell visited to avoid repeated calls
    let ans = 0;
    if(isSafe(i+1, j, n, m)) { // check for down
        ans += ratmaze(i+1, j, n, m);
    }
    if(isSafe(i, j+1, n, m)) { // check for right
        ans += ratmaze(i, j+1, n, m);
    }
    if(isSafe(i-1, j, n, m)) { // check for up
        ans += ratmaze(i-1, j, n, m);
    } 
    if(isSafe(i, j-1, n, m)) { // check for left
        ans += ratmaze(i, j-1, n, m);
    }
    vis[i][j] = false; // we mark current cell unvisited for backtracking
    return ans;
}

function solve() {
    for(let i = 0; i < grid.length; i++) {
        let arr = Array(grid[i].length).fill(0);
        vis.push(arr);
    }
    let ans = ratmaze(0,0,grid.length, grid[0].length);
    console.log(ans);
}

solve();
