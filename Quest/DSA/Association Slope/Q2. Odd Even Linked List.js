/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) {
        return null;
    }
  
    let oddTail = head;
    let evenTail = head.next;
    let evenHead = head.next;
  
    while (evenTail && evenTail.next) {
        oddTail.next = evenTail.next;
        oddTail = oddTail.next;
      
        evenTail.next = oddTail.next;
        evenTail = evenTail.next;
    }
  
    oddTail.next = evenHead;
  
    return head;
}