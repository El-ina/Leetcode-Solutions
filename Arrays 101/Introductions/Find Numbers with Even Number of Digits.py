class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        counter = 0
        
        for i in nums:
            digitsCount = 0
            cpy = i
            
            while cpy != 0:
                cpy /= 10
                digitsCount += 1
                
            if digitsCount % 2 == 0:
                counter += 1
                
        
        return counter
                
        