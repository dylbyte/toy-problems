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
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    // compare top of minStack to val
    const min = Math.min(
      val,
      this.minStack.length ? this.minStack[this.minStack.length - 1] : val
    );
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

module.exports = MinStack;
