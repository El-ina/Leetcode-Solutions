var getPermutation = function(n, k) {
    let result = '';
  
    const isUsed = Array.from({ length: n + 1 }, () => false);
  
    for (let position = 0; position < n; position++) {
        let factorial = 1;
        for (let i = 1; i < n - position; i++) {
            factorial *= i;
        }
      
        for (let digit = 1; digit <= n; digit++) {
            if (!isUsed[digit]) {
                if (k > factorial) {
                    k -= factorial;
                } else {
                    result += digit;
                    isUsed[digit] = true;
                    break;
                }
            }
        }
    }
  
    return result;
}