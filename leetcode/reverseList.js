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

const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current) {
    const next = current.next; // store pointer to next node
    current.next = prev; // destroy old pointer
    prev = current; // move to next node in list
    current = next; // move to next node in list
  }
  return prev; // new head
};

module.exports = reverseList;
