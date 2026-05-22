/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const operations = [];
  
    let currentNumber = 1;
  
    for (const targetNumber of target) {
        for (; currentNumber < targetNumber; ++currentNumber) {
            operations.push('Push', 'Pop');
        }
      
        operations.push('Push');
        ++currentNumber;
    }
  
    return operations;
};