function cycleRotate(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let n = arr.length;
    let x = arr[n-1];
    for(let i = n-1; i >= 1; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = x;
}

arr = [1,2,3,4];
cycleRotate(arr);
console.log(arr)