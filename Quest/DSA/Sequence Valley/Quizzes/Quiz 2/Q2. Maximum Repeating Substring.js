/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let counter = 0;

    let accumulatedWord = word;

    while(true){
        if(sequence.includes(accumulatedWord)) counter++;
        else break;
        accumulatedWord += word;
    }

    return counter;
    
};