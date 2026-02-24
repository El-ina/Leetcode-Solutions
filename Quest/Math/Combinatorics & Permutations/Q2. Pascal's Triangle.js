/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let ans = []

    for (let i = 0; i < numRows; i++) {
        ans.push(Array(i + 1).fill(1))
    }

    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < ans[i].length - 1; j++) {
            ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j]
        }
    }

    return ans;


};