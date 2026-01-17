class Solution(object):
    def duplicateZeros(self, arr):
        resultArr = []
        
        for i in range(len(arr)):
            if len(resultArr) >= len(arr):
                break
                
            if arr[i] == 0:
                resultArr.append(0)
                if len(resultArr) < len(arr):
                    resultArr.append(0)
            else:
                resultArr.append(arr[i])

        for i in range(len(arr)):
            arr[i] = resultArr[i]