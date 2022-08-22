/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let mp = {};
    for(let i = 0; i < nums.length; i++) {
        if(!mp[nums[i]]) mp[nums[i]] = 1;
        else mp[nums[i]]++;
    }
    nums.sort((a, b) => {
        if(mp[a] == mp[b]) return b - a;
        return mp[a] - mp[b]
    });
    return nums;
};