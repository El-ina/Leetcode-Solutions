/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const returnArr = [];

    for (let i = 0; i < arr.length; i += size) {
        returnArr.push(arr.slice(i, i + size));
    }

    return returnArr;
};
