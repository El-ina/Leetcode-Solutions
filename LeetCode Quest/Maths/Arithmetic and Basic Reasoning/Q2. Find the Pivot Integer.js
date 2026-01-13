/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let leftSum = 0;
    let rightSum = n;

    for(let i = 1; i <= n; i++) {
        leftSum += i;
        rightSum -= i;

        if(leftSum == rightSum) {
            return i;
        }
    }

    return -1;
};

console.log(pivotInteger(8));