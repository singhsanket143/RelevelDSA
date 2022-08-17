function sortGrid(grid) {
    /**
     * Time: O(nmlogm)
     * Space: Equal to the space taken by the sorting algorithm
     */
    for(let row = 0; row < grid.length; row++) {
        grid[row].sort((a, b) => a-b);
    }
    return grid;
}

console.log(sortGrid([[5,3,7,8], [3,9,4,1]]))