class Solution(object):
    def replaceElements(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
        size = len(arr)
        max_right = -1
        
        for i in range(size - 1, -1, -1):
            current = arr[i]
            arr[i] = max_right
            max_right = max(max_right, current)
        
        return arr