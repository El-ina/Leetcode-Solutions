/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let sum = 0;
    let leftSum = 0;
    
    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    for(let i = 1; i <= n; i++) {
        leftSum += i;
        
        if(leftSum == sum) {
            return i;
        }
        sum -= i;
    }

    return -1;
};