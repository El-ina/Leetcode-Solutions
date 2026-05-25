/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let totalTime = 0;
    
    for(let i = 0; i < tickets.length; i++){
        if(i <= k) totalTime += Math.min(tickets[i], tickets[k]);
        else totalTime += Math.min(tickets[i], tickets[k] - 1);
    }

    return totalTime;
};