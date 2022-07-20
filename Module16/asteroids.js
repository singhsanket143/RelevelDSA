function collision(asteroids) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let ans = [];
    for(let i = 0; i < asteroids.length; i++) {
        let n = asteroids[i];
        let bool = false;
        while(ans.length > 0 && ans[ans.length - 1] > 0 && !bool) {
            if(ans[ans.length - 1] >= -n) bool = true;
            if(ans[ans.length - 1] <= -n) ans.pop();
        }
        if(!bool) ans.push(n);
    }
    return ans;
}

console.log(collision([12, 5, 3, 8, -6, 7, -10]))