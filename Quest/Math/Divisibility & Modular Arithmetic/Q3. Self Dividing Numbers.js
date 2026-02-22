/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let selfDividingArr = [];

    for(let i = left; i <= right; i++){
        let num = i;
        let flag = true
        while(num != 0){
            let lastDigit = num % 10;
            if(lastDigit === 0 || i % lastDigit !== 0){
                flag = false;
                break;
            }
            num = Math.floor(num / 10);
        }

        if(flag){
            selfDividingArr.push(i)
        }
    }

    return selfDividingArr;
};