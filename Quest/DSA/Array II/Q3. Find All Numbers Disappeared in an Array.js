var findDisappearedNumbers = function(nums) {
    let numsMap = new Map();
    let n = nums.length;

    for(let i = 1; i <= n; i++){
        numsMap.set(i, false);
    }

    for(let i = 0; i < n; i++){
        numsMap.set(nums[i], true);
    }

    let result = [];
    
    for(let i = 1; i <= n; i++){
        if(numsMap.get(i) === false){
            result.push(i);
        }
    }

    return result;
};