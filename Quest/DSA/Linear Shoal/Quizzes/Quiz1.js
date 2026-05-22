//Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--){
        if (digits[i] !== 9){
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};


//Mountain Array
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;

    let leftPointer = 0;
    let rightPointer = arr.length - 1;
  
    while (leftPointer + 1 < arr.length - 1 && arr[leftPointer] < arr[leftPointer + 1]) {
        leftPointer++;
    }
  
    while (rightPointer - 1 > 0 && arr[rightPointer] < arr[rightPointer - 1]) {
        rightPointer--;
    }
  
    return leftPointer === rightPointer;
};