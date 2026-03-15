/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const arrayLength = nums.length;
  
    const expectedSum = (arrayLength * (arrayLength + 1)) >> 1;
    const uniqueElementsSum = [...new Set(nums)].reduce((accumulator, current) => accumulator + current, 0);
    const actualSum = nums.reduce((accumulator, current) => accumulator + current, 0);
  
    return [actualSum - uniqueElementsSum, expectedSum - uniqueElementsSum];
};
