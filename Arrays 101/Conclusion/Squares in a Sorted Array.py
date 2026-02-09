class Solution:
    def sortedSquares(self, nums):
        result = []
        left_pointer = 0
        right_pointer = len(nums) - 1
      
        while left_pointer <= right_pointer:
            left_square = nums[left_pointer] * nums[left_pointer]
            right_square = nums[right_pointer] * nums[right_pointer]
            if left_square > right_square:
                result.append(left_square)
                left_pointer += 1
            else:
                result.append(right_square)
                right_pointer -= 1

                
        return result[::-1]
