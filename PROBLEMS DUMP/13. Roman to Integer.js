function romanToInt(s) {
    const romanToValueMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let result = romanToValueMap.get(s[s.length - 1]);
  
    for (let i = 0; i < s.length - 1; i++) {
        const currentValue = romanToValueMap.get(s[i]);
        const nextValue = romanToValueMap.get(s[i + 1]);
      
        const sign = currentValue < nextValue ? -1 : 1;
        result += sign * currentValue;
    }
  
    return result;
}
