class Solution:
    def pivotIndex(self, nums):
        left_sum = 0
        right_sum = sum(nums)
      
        for index, current_value in enumerate(nums):
            right_sum -= current_value
            if left_sum == right_sum:
                return index
            left_sum += current_value
            
        return -1
            