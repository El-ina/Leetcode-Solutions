class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        counter = 0
        maxCounter = counter
        
        for i in nums:
            if i == 1:
                counter += 1
                if counter > maxCounter:
                    maxCounter = counter
                
            elif i == 0:
                counter = 0
            
            
        
        return maxCounter