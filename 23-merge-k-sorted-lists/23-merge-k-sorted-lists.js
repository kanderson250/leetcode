/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {   
    if (!lists.length) {
        return null; 
    }
    return mergeBetween(0, lists.length - 1, lists); 
    
      
    //APPROACH 1 : merge 2, move on
    //return lists.reduce((prev, i) => mergeTwoLists(prev, i), null);
};
//merges lists [lo, hi]
function mergeBetween(lo, hi, lists) {
    if (lo === hi) {
        return lists[lo]; 
    }
    let mid = Math.floor((lo + hi)/2);
    //merge left
    let l = mergeBetween(lo, mid, lists); 
    //merge right
    let r = mergeBetween(mid + 1, hi, lists);
    //merge 
    return mergeTwoLists(l, r); 
}


function mergeTwoLists(a, b) {
    if (!a) {
        return b; 
    }
    if (!b) {
        return a; 
    }
    //now two pointer insert nodes of b into a.
    //use a dummy node. 
    let dummy = new ListNode(null, a); 
    let prev = dummy; 
    let curA = a; 
    let curB = b; 
    while (curA && curB) {
       if (curB.val < curA.val) {
           //perform an insert between prev and curA
           //first, create a temporary node var and reassign curB to curB.next
           let node = curB; 
           curB = curB.next; 
           //now insert node. 
           prev.next = node; 
           node.next = curA;
           //advance prev. 
           prev = node;        
       } else {
           //advance curA and prev.
           prev = curA; 
           curA = curA.next; 
       }    
    }
    if (curB) {
        prev.next = curB; 
    }    
 return dummy.next;    
}