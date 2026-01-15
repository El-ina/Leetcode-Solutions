/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let valueToBeCounted = init;
    return {
        increment: function() {
            valueToBeCounted += 1;
            return valueToBeCounted;
        },
        decrement: function() {
            valueToBeCounted -= 1;
            return valueToBeCounted;
        },
        reset: function() {
            valueToBeCounted = init;
            return valueToBeCounted;
        }
    };
};