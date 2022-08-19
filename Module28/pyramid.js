function getMaxPyramidHeight(arr) {
    /**Time: O(nlogn) 
     * Space: O(dependent of space taken by sorting algo)
     * 
    */
    // the input array is the array that represents the width of every object
    arr.sort((a, b) => a - b); // sorted the array
    let ans = 1;
    let prevWidth = arr[0];
    let prevCount = 1;
    let currWidth = 0;
    let currCount = 0
    for(let i = 1; i < arr.length; i++) {
        currWidth += arr[i];
        currCount += 1; 
        if(currWidth > prevWidth && currCount > prevCount) {
            prevWidth = currWidth
            prevCount = currCount
            currCount = 0;
            currWidth = 0;
            ans++;
        }
    } 
    return ans;

}

console.log(getMaxPyramidHeight([10,20,30,40,50,60,70]))