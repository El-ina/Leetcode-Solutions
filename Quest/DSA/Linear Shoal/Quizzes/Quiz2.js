//Remove Duplicate Letters
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const lastOccurrence = {};
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    const stack = [];
    const visited = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (visited.has(char)) {
            continue;
        }
        while (stack.length > 0 && stack[stack.length - 1] > char && lastOccurrence[stack[stack.length - 1]] > i) {
            const removed = stack.pop();
            visited.delete(removed);
        }
        stack.push(char);
        visited.add(char);
    }

    return stack.join('');
};

console.log(removeDuplicateLetters("cbacdcbc"));