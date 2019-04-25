//medium

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    if (value < this.value) { //go left
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    // Write your code here.
    if (!this) {
      return null;
    }
    if (this.value === value) {
      return true;
    }
    let left = false; let right = false;
    if (this.left) {
      left = this.left.contains(value);
    }
    if (this.right) {
      right = this.right.contains(value);
    }
    return left || right;

  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    if (this.value === value) {
      this.value = this.right.findTheNextSmallest(this);
      console.log(this.value);
    }

    if (this.left && this.left.value === value) {
      this.left = null;
    } else if (this.right && this.right.value === value) {
      this.right = null;
    }
    if (this.left) {
      this.left.remove(value);
    }
    if (this.right) {
      this.right.remove(value);
    }
    return this;
  }

  findTheNextSmallest(parentNode) {
    if (this.left) {
      return this.left.findTheNextSmallest(this)
    } else if (this.right) {
      return this.right.findTheNextSmallest(this)
    } else {
      if (parentNode.left && parentNode.left.value === this.value) {
        let res = this.value;
        parentNode.left = null;
        return res;
      } else {
        let res = this.value;
        parentNode.right = null;
        return res;
      }
    }
  }
}

const node10 = new BST(10);
const node5 = new BST(5);
const node15 = new BST(15);
const node2 = new BST(2);
const node52 = new BST(5);
const node13 = new BST(13);
const node22 = new BST(22);
const node1 = new BST(1);
const node14 = new BST(14);

node10.left = node5;
node10.right = node15;
node5.left = node2;
node2.left = node1;
node5.right = node52;
node15.left = node13;
node15.right = node22;
node13.right = node14;

node10.insert(12);
console.log(node10.remove(10))


function findTheNextSmallest(node) {
	if (node.left) {
		if (node.left.left) {
      return node.left.findTheNextSmallest();
    } else {
      let leftVal = node.left.value;
      this.left = null;
      return leftVal;
    }
  }
}