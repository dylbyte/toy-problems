/*
 ** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 ** Implement the MinStack class:
 **  MinStack() initializes the stack object.
 **  void push(int val) pushes the element val onto the stack.
 **  void pop() removes the element on the top of the stack.
 **  int top() gets the top element of the stack.
 **  int getMin() retrieves the minimum element in the stack.
 */

class MinStack {
  constructor() {
    this.items = [];
    this.min = null;
  }

  push(val) {
    this.items.push(val);
    if (!this.min || val < this.min) this.min = val;
  }

  pop() {
    const top = this.top();
    if (top === this.min) {
      this.min = null;
      this.getMin();
    }
    return;
  }

  getMin() {
    if (this.min) return this.min;

    this.min = this.items.reduce((min, val) => {
      let newMin = min;
      if (val < min) newMin = val;
      return newMin;
    }, Number.MAX_SAFE_INTEGER);
  }

  top() {
    return this.items[this.items.length - 1];
  }
}

module.exports = MinStack;
