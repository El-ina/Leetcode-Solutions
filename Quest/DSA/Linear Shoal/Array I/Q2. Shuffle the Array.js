/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let resultArr = [];

    for(let i = 0; i < n; i++){
        resultArr.push(nums[i]);
        resultArr.push(nums[n+i]);
    }

    console.log(resultArr);
};
