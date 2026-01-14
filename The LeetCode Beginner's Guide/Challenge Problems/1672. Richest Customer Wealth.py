class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        
        maxWealth = 0

        for i in range(len(accounts)):
            curWealth = 0
            for j in range(len(accounts[i])):
                curWealth += accounts[i][j]

            maxWealth = max(maxWealth, curWealth)


        return maxWealth