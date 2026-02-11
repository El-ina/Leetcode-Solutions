class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        max_index = 0
        for i in range(1, len(nums)):
            if nums[i] > nums[max_index]:
                max_index = i
        
        for i in range(len(nums)):
            if nums[i] != nums[max_index] and nums[i] * 2 > nums[max_index]:
                return -1
            
        return max_index