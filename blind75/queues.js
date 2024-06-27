
// ? Implement Queue using Stacks - Implement a queue using only two stacks. The implemented queue should support all the functions of a normal queue(push, peek, pop, and empty)

/*
    Implement the MyQueue class:
        - push() - Pushes element to the back of the queue
        - pop() - Removes element at the front of the queue
        - peek() - Returns the element at the front of the queue
        - boolean empty() - Returns true if the queue is empty, false otherwise



*/

// Since stacks are first in first out
// I would push all values in one stack before popping them off that stack and storing it in the other stack
// The last stack being popped should be last value in the other stack which would be the first 

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x) {
        this.stack2.push(x)
       
    }

    pop() {
        if (this.stack1.length === 0) {
            while(this.stack2.length > 0) {
                this.stack1.push(this.stack2.pop())
            }

        }
        
        this.stack1.pop();

    }

    peek() {
       if (this.stack1.length === 0) {
           while(this.stack2.length > 0) {
               this.stack1.push(this.stack2.pop())
           }

       }

        return this.stack1[this.stack1.length -1]
    }

    empty() {
        if (this.stack1.length > 0 || this.stack2.length > 0) return false
        else return true
    }
 
    
}

