/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        ans[nums.length + i] = nums[i];
    }
    
    return ans;
};