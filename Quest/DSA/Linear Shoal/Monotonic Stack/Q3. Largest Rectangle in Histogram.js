/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

let maxArea = 0;
    const n = heights.length;
    const monotoneStack = [];  
    
    const leftBoundary = new Array(n).fill(-1);
    const rightBoundary = new Array(n).fill(n);
  
    for (let i = 0; i < n; i++) {
        while (monotoneStack.length > 0 && heights[monotoneStack[monotoneStack.length - 1]] >= heights[i]) {
            rightBoundary[monotoneStack[monotoneStack.length - 1]] = i;
            monotoneStack.pop();
        }
      
        if (monotoneStack.length > 0) {
            leftBoundary[i] = monotoneStack[monotoneStack.length - 1];
        }
      
        monotoneStack.push(i);
    }
  
    for (let i = 0; i < n; i++) {
        const width = rightBoundary[i] - leftBoundary[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
  
    return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));