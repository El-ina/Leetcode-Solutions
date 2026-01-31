class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        n = len(arr)
        
        if n < 3:
            return False

        left_pointer = 0
        right_pointer = n - 1
      
        while left_pointer + 1 < n - 1 and arr[left_pointer] < arr[left_pointer + 1]:
            left_pointer += 1
      
        while right_pointer - 1 > 0 and arr[right_pointer - 1] > arr[right_pointer]:
            right_pointer -= 1
      
        return left_pointer == right_pointer