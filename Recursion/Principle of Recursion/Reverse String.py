class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        begPtr = 0
        endPtr = len(s) - 1
        
        
        def revStr(begPtr, endPtr):
            if begPtr >= endPtr:
                return
            
            z = s[begPtr]
            s[begPtr] = s[endPtr]
            s[endPtr] = z

            revStr(begPtr + 1, endPtr - 1)
        
        revStr(begPtr, endPtr)
        