function exclusiveTime(n, logs) {
    const result = Array(n).fill(0);
    let previousTimestamp = 0;
  
    const functionStack = [];
  
    for (const logEntry of logs) {
        const logParts = logEntry.split(':');
        const functionId = logParts[0];
        const operation = logParts[1];
        const currentTimestamp = logParts[2];
      
        if (operation[0] === 's') {
            if (functionStack.length > 0) {
                const topFunctionId = functionStack[functionStack.length - 1];
                result[topFunctionId] += Number(currentTimestamp) - previousTimestamp;
            }
          
            functionStack.push(Number(functionId));
          
            previousTimestamp = Number(currentTimestamp);
        } else {
            const poppedFunctionId = functionStack.pop();
            result[poppedFunctionId] += Number(currentTimestamp) - previousTimestamp + 1;
          
            previousTimestamp = Number(currentTimestamp) + 1;
        }
    }
  
    return result;
}
