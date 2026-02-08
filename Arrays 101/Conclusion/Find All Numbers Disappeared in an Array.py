class Solution(object):
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        numbers_present = set(nums)
      
        missing_numbers = [
            number 
            for number in range(1, len(nums) + 1) 
            if number not in numbers_present
        ]
      
        return missing_numbers

            