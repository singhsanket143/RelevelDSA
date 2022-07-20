function f1(grid) {
    /**
     * Time: O(nm)
     * Space: O(1)
     * 
     */
    let cR = 0, cG = 0, cY = 0;
    // iterate for red
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 0) cR++;
            if(cR > 1) break;
        }
        if(cR > 1) break;
    }
    if(cR == 1) {
        console.log("RED")
        return;
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) cG++;
            if(cG > 1) break;
        }
        if(cG > 1) break;
    }
    if(cG == 1) {
        console.log("GREEN");
        return;
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 2) cY++;
            if(cY > 1) break;
        }
        if(cY > 1) break;
    }
    if(cY == 1) {
        console.log("YELLOW");
        return;
    }
}


function f2(grid) {
    let mp = {"RED": 0, "GREEN": 0, "YELLOW": 0};
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 0) {
                // red color detected
                mp["RED"]++;
            } else if (grid[i][j] == 1) {
                mp["GREEN"]++;
            } else {
                mp["YELLOW"]++;
            }
        }
    }
    if(mp["RED"] == 1) console.log("RED");
    else if(mp["GREEN"] == 1) console.log("GREEN");
    else console.log("YELLOW")
}
f2([[0,0,1], [1,2,0], [0,1,1]]);