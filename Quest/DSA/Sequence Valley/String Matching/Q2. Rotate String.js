/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let sIni = s;
    let flag = false;
    while(true){
        s = s.slice(1) + s[0];
        if(s === goal){
            flag = true;
            break;
        }
        if(s === sIni) break;
    }

    return flag;
        
};

console.log(rotateString("abcde", "cdeaab"));