function smallestRepunitDivByK(k) {
    let remainder = 1 % k;
  
    for (let length = 1; length <= k; length++) {
        if (remainder === 0) {
            return length;
        }
      
        remainder = (remainder * 10 + 1) % k;
    }
  
    return -1;
}