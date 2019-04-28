function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let node1 = head;
  let node2 = head;
  for (let i = 0; i < k; i++) {
    if (!node1) {
      return null;
    }
    node1 = node1.next;
  }
  if (node1 === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (node1.next) {
    node1 = node1.next;
    node2 = node2.next;
  }

  node2.next = node2.next.next;
}