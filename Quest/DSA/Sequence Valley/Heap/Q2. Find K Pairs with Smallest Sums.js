/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

function kSmallestPairs(nums1, nums2, k) {
    const result = [];
    if (!nums1.length || !nums2.length) return result;

    const minHeap = [[nums1[0] + nums2[0], 0, 0]];

    while (result.length < k && minHeap.length > 0) {
        const [, i, j] = minHeap.shift();
        result.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length) {
            minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
        if (j === 0 && i + 1 < nums1.length) {
            minHeap.push([nums1[i + 1] + nums2[j], i + 1, j]);
        }

        minHeap.sort((a, b) => a[0] - b[0]);
    }

    return result;
}