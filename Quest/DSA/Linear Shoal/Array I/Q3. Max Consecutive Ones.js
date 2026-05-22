var findMaxConsecutiveOnes = function(nums) {
    let maxZeroes = 0;
    let curZeroes = 0;
    
    for(let i = 0; i <= nums.length - 1; i++){
        if(nums[i] === 1){
            curZeroes++;
            if(maxZeroes < curZeroes) maxZeroes = curZeroes;
        }

        if(nums[i] === 0){
            curZeroes = 0;
        }
    }

    return maxZeroes;
};