class Solution(object):
    def sortArrayByParity(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arrArr = []
        for el in nums:
            if el % 2 != 0:
                arrArr.append(el)
            else:
                arrArr.insert(0, el)
        
        return arrArr
        