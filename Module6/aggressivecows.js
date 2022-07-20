function isPossible(mid, barn, c) {
    /**
     * Mid ->  the candidate length that must be present atleast between two adjacent cows
     * barn -> layout of the barn with stalls configuration
     * c -> no of cows
     */
    /**
     * Time: O(n)
     * Space: O(1)
     */
    let count = 1; // atleast one cow we can always place
    let lastPos = barn[0]; // the first cow we will put at the 0th stall of the barn
    for(let i = 1; i < barn.length; i++) {
        // we will one by one go to each stall in the barn
        if(barn[i] - lastPos >= mid) { // if the diff between the current stall and last placed stal is atleast mid
            count++; // place one more cow
            lastPos = barn[i]; 
        }

        if(count >= c) {
            // we will be able to place atleast c cows easily
            return true;
        }
    }
    return false;
}

let n = 5;
let barn = [1,2,4,8,9];
let c = 3;
barn.sort((a, b) => a-b);
let lo = 1;
let hi = barn[n-1] - barn[0];
let ans = -1;
while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo)/2);
    if(isPossible(mid, barn, c)) {
        ans = mid;
        lo = mid + 1;
    } else {
        hi = mid - 1;
    }
}
console.log(ans);

/**
 * Time: O(nlog(maxai))
 * Space: O(1)
 */