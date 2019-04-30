// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.max = [];

  }
  peek() {
    // Write your code here.
    return this.stack[this.stack.length-1];
  }

  pop() {
    // Write your code here.
    const value = this.stack.pop();
    if (this.min[this.min.length - 1] === value) {
      this.min.pop();
    }
    if (this.max[this.max.length - 1] === value) {
      this.max.pop();
    }
    return value;
  }

  push(number) {
    // Write your code here.
    this.stack.push(number);
		if (!this.min.length || number <= this.min[this.min.length - 1]) {
      this.min.push(number);
    }
		if (!this.max.length || number >= this.max[this.max.length - 1]) {
      this.max.push(number);
    }
  }

  getMin() {
    // Write your code here.
    return this.min[this.min.length - 1];
  }

  getMax() {
    // Write your code here.
    return this.max[this.max.length - 1];
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;

let s = new MinMaxStack();
console.log(s.push(2));
console.log(s.getMin(), s.getMax(), s.peek());



