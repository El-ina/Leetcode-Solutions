/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let pr1 = await promise1;
    let pr2 = await promise2;
    return pr1 + pr2;
};