/**
 * @param {number[]} target
 * @return {boolean}
 */
function isPossible(target) {
    const maxHeap = new MaxPriorityQueue();
    let totalSum = 0;
  
    for (const element of target) {
        totalSum += element;
        maxHeap.enqueue(element);
    }
  
    while (maxHeap.front() > 1) {
        const largestElement = maxHeap.dequeue();
        const sumOfOthers = totalSum - largestElement;
      
        if (sumOfOthers < 1 || largestElement - sumOfOthers < 1) {
            return false;
        }
      
        const previousValue = largestElement % sumOfOthers || sumOfOthers;
      
        maxHeap.enqueue(previousValue);
        totalSum = totalSum - largestElement + previousValue;
    }
  
    return true;
}