/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let repeatedString = "";

    if(repeatedString === b) return 0;

    for(let i = 1; i <= Math.ceil(b.length / a.length) + 1; i++){
        repeatedString += a;
        if(repeatedString.includes(b)) return i;
    }
    
    return -1;
};

console.log(repeatedStringMatch("abc", "cabcabca"));