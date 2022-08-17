function coinchange(coins, amount, i) {
    /**
     * TIme: O(2^n)
     * Space: O(n)
     */
    if(i == coins.length) return 0;
    if(amount == 0) return 1;
    if(coins[i] > amount) return coinchange(coins, amount, i+1);
    return coinchange(coins, amount, i+1) + coinchange(coins, amount - coins[i], i);
}

console.log(coinchange([2], 2, 0));