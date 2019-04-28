function findLoop(head) {
  // Write your code here.
  let node1 = head.next.next;
  let node2 = head.next;

  while (node1 !== node2) {
    node1 = node1.next.next;
    node2 = node2.next;
  }

  while (head !== node2) {
    head = head.next;
    node2 = node2.next;
  }
  return head;
}