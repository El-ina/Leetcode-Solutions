class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        sums = [nums[0]]

        for i in range(1, len(nums)):
            sums.append(sums[i - 1] + nums[i])

        return sums

