/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let encounteredLowercase = false;
    let allUpper = false;
    let allLower = true;
    let firstCap = false;

    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            if(i === 0) firstCap = true;
            else if(i !== 0 && firstCap) firstCap = false;
            allLower = false;
        }

        else if(encounteredLowercase === false){
            encounteredLowercase = true;
            if(allUpper) allUpper = false;
        }
    }

    if(encounteredLowercase === false) allUpper = true;

    return (allUpper || allLower || firstCap)
};
