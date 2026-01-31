class Solution(object):
    def checkIfExist(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        lgth = len(arr)
        for i in range(0, lgth):
            for j in range(0, lgth):
                if i != j and arr[i] == 2 * arr[j]:
                    return True
                
        return False
        