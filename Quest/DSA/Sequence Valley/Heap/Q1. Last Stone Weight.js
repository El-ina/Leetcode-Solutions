/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a, b) => b - a).reverse();
        
        if(stones.length >= 2){
            let s1 = stones.pop();
            let s2 = stones.pop();

            let diff = Math.max(s1, s2) - Math.min(s1, s2);

            if(diff > 0){
                stones.push(diff);
            }
        }
    }

    if(stones.length === 1) return stones[0];
    else return 0;
};
