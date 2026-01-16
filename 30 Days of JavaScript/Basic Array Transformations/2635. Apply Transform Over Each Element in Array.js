/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultArr[i] = fn(arr[i], i);
    }

    return resultArr;
};