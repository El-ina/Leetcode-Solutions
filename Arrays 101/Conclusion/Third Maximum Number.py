class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        unique_nums = set(nums)
        sorted_nums = sorted(unique_nums, reverse=True)

        if len(sorted_nums) < 3:
            return sorted_nums[0]
        else:
            return sorted_nums[2]