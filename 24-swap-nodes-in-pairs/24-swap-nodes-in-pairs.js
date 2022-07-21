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
var swapPairs = function(head) {
    //initialize dummy node
    const dummy = new ListNode(null,head);
    let prev = dummy; 
    let node = head; 
    while (node && node.next) { 
       swap(prev, node, node.next); 
        prev = node; 
        node = node.next;
    }    
    return dummy.next; 
};

//swaps node1 and node2, given the chain prev --> node1 ---> node2
function swap(prev, node1, node2) {
    prev.next = node2; 
    node1.next = node2.next; 
    node2.next = node1; 
}