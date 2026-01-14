# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def middleNode(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        
        arr = []

        current = head

        while current is not None:
            arr.append(current)
            current = current.next


        return arr[int(len(arr) / 2)]
    