function minCost(arr) {
    /**
     * Time: O(nlogn)
     * Space: space taken by the sorting algortihm
     */
    arr.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let result = 0;
    for(let i = 0; i < arr.length / 2; i++) {
        result += arr[i][0]; // add the cost of the Ath city
    }
    for(let i = arr.length / 2; i < arr.length; i++) {
        result += arr[i][1]; // add the cost of the Bth city
    }
    return result;
}

console.log(minCost([[10, 20], [30, 200], [400, 50], [30, 20]]));