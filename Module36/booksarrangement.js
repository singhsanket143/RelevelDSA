function arrange(rack, k) {
    /**
     * Time: O(nm)
     * Space: O(1)
     */
    for(let i = 0 ; i < rack.length; i++) {
        // we are going on each row
        let res = "";
        for(let j = k; j < rack[0].length; j++) { // print the last n-k columns
            res += rack[i][j] + " "
        }
        for(let j = 0; j < k; j++) { // print the first k columns
            res += rack[i][j] + " "
        }

        console.log(res); // print the currrent row
    }
}

let rack = [[10,11,12], [6,5,7], [22,21,23]];
arrange(rack, 2);