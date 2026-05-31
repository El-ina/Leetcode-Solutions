/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let pattern = /^(.*)\1+$/;
    return pattern.test(s);
};