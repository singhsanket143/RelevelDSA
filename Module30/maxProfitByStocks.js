let arr = [7,18,1,5,3,6,4];
function f(i, bool, trans) {
    if(i == arr.length) return 0;
    let result = -Infinity;
    if(trans == 0) return 0;
    if(bool == false && trans == 1) {
        result = Math.max(f(i+1, bool, trans), f(i + 1, true, trans) - arr[i]);
    } else if(bool == true && trans == 1) {
        result = Math.max(f(i+1, bool, trans), f(i + 1, false, trans - 1) + arr[i]);
    }
    return result;
}

function maxProfit(arr) {
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let ans = -Infinity;
    let cheapest = Infinity;
    for(let i = 0; i < arr.length; i++) {
        cheapest = Math.min(cheapest, arr[i]);
        ans = Math.max(ans, arr[i] - cheapest);
    }
    return ans;
}

console.log(f(0, false, 1));
console.log(maxProfit(arr));