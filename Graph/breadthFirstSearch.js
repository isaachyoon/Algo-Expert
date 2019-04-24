//medium

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [];
    queue.push(this);
    while (queue.length) {
      const queueLen = queue.length;
      for (let i = 0; i < queueLen; i++) {
        const node = queue.shift();
        array.push(node.name);
        queue.push(...node.children);
      }
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
