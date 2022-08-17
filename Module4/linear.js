function check(arr, x) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) ans++;
    }
    return ans;
}

console.log(check([3,2,5,6,7,3,5,9,4], 5));