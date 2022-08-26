let arr = [7,8,1,5,3,6,4];
function f(i, hasBought, trans) { 
    if(i == arr.length) {
        return 0;
    }
    let result = -Infinity;
    if(trans == 0) return 0;
    if(hasBought == false && trans == 1) {
        result = Math.max(f(i+1, hasBought, trans), f(i+1, true, trans) - arr[i]);
    } else if(hasBought == true && trans == 1) {
        result = Math.max(f(i+1, hasBought, trans), f(i+1, false, 0) + arr[i]);
    }
    return result;
}

function maxProfit(arr) {
    /**
     * Time : O(n)
     * Space: O(1)
     */
    let ans = -Infinity; // in the ans variable we will be storing the final maximum profit
    let cheapest = Infinity; // this will track the minimum stock price uptill an ith day
    for(let i = 0; i < arr.length; i++) {
        ans = Math.max(ans, arr[i] - cheapest);
        cheapest = Math.min(cheapest, arr[i]);
    }
    return ans;
}

console.log(maxProfit(arr));