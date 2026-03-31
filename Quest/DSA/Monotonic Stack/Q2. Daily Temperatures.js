function dailyTemperatures(temperatures) {
    const length = temperatures.length;
    const result = new Array(length).fill(0);
    const stack = [];
  
    for (let currentIndex = length - 1; currentIndex >= 0; currentIndex--) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[currentIndex]) {
            stack.pop();
        }
      
        if (stack.length > 0) {
            result[currentIndex] = stack[stack.length - 1] - currentIndex;
        }
      
        stack.push(currentIndex);
    }
  
    return result;
}