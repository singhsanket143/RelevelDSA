let grid = [];
function isSafe(row, col, num) {
    // check the col
    for(let i = 0 ; i < 9; i++){
        if(grid[i][col] == num) return false;
    }
    // check the row
    for(let i = 0 ; i < 9; i++){
        if(grid[row][i] == num) return false;
    }
    let r = Math.floor(row/3)*3;
    let c = Math.floor(col/3)*3;
    for(let i = r; i < (r+3); i++) {
        for(let j = c; j < (c+3); j++) {
            if(grid[i][j] == num) return false;
        }
    }
    return true;
}
function sudoku(row, col) {
    
    if(col == 9) {
        return sudoku(row+1, 0);
    }
    if(row == 9) {
        // console.log(grid);
        for(let i = 0; i < 9; i++) {
            let s = "";
            for(let j = 0; j < 9; j++) {
                s += grid[i][j] + " ";
            }
            console.log(s);
        }
        return true;
    }
    if(grid[row][col] == '.') {
        for(let num = 1; num <= 9; num ++) {
            if(isSafe(row, col, num)) {
                grid[row][col] = num;
                let res = sudoku(row, col+1);
                if(res) return true;
                grid[row][col] = '.';
            }
        }
        return false;
    }
    else {
        return sudoku(row, col+1);
    }

}

function solve() {
    grid = [
        [3, '.', 6, 5, '.', 8, 4, '.', '.'],
        [5, 2, '.', '.', '.', '.', '.', '.', '.'],
        ['.', 8, 7, '.','.','.','.',3, 1],
        ['.','.',3, '.','1','.','.',8,'.'],
        [9, '.','.', 8, 6, 3, '.','.',5],
        ['.', 5, '.','.',9,'.',6,'.','.'],
        [1,3,'.','.','.','.',2,5,'.'],
        ['.','.','.','.','.','.','.',7, 4],
        ['.','.',5, 2, '.', 6, 3, '.','.']
    ]
    sudoku(0, 0);
    
}

solve();