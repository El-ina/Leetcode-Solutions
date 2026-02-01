class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        uniqueNums = list(dict.fromkeys(nums))
        uniqueNums.sort()
        nums[:] = uniqueNums
        return len(nums)
    