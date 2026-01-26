/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout = null
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(fn, t, ...args)
    }
};