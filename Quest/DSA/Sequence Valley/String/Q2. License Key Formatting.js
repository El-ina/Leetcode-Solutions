/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let chars = [];
    let result = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] !== '-') chars.push(s[i].toUpperCase());
    }

    let length = chars.length;
    let remainder = length % k;

    if(remainder > 0){
        let fGroup = "";
        for(let i = 0; i < remainder; i++){
            fGroup += chars[i];
        }
        result.push(fGroup);
    }

    for(let i = remainder; i < length; i += k){
        let group = "";
        for(let j = 0; j < k; j++){
            group += chars[i + j];
        }
        result.push(group);
    }

    return result.join('-');
};

console.log(licenseKeyFormatting("2aabb-za-5g-3-J", 2))