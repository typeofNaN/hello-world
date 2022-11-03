/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = p = {}
  while (l1 || l2) {
    // 求和
    const sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (p.val || 0)
    // 取模
    const exceed = ~~(sum / 10)

    l1 = l1 && l1.next
    l2 = l2 && l2.next

    // 取余
    p.val = sum % 10
    if (l1 || l2 || exceed) {
      p.next = {
        val: exceed
      }
    }

    p = p.next
  }
  return result
}