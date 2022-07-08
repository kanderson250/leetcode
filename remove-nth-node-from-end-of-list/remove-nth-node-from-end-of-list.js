/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //to prevent the need for a third counter, slow will actually count one BEFORE the nth 
    //to last node.
    //dummy node to establish a prev. 
    let dummy = new ListNode(0, head); 
    let slow = dummy; 
    let fast = head; 
    let counter = 1; 
    while (fast.next) {
        if (counter >= n) {
            fast = fast.next; 
            slow = slow ? slow.next : head; 
        } else {
            fast = fast.next; 
            counter++; 
        }
    }
    unLink(slow.next, slow);
    return dummy.next; 
};

//remove node helper function

function unLink(node, prev) {
    prev.next = node.next; 
    node.next = null; 
}