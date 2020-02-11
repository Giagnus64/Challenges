// //Array implementation of a stack using push/pop
// //STACK = LAST IN FIRST OUT
// const stack = [];

// stack.push({"Willow Rosenberg": "A"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" }]

// stack.push({"Xander Harris": "C"});
// //[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
// console.log(stack);

// stack.push({"Cordelia Chase": "B+"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

// stack.push({"Buffy Summers": "B"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]

// //REMOVAL
// const firstOut = stack.pop();
// // { "Buffy Summers": "B" }
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

// const secondOut = stack.pop();
// //{"Cordelia Chase": "B+"}
// console.log(stack);
// //[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]

//Array implementation of a stack using shift/unshift
//STACK = LAST IN FIRST OUT
const stack = [];

stack.unshift({"Willow Rosenberg": "A"});
console.log(stack);
//[{ "Willow Rosenberg": "A" }]

stack.unshift({"Xander Harris": "C"});
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
console.log(stack);

stack.unshift({"Cordelia Chase": "B+"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

stack.unshift({"Buffy Summers": "B"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]

//REMOVAL
const firstOut = stack.shift();
// { "Buffy Summers": "B" }
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

const secondOut = stack.shift();
//{"Cordelia Chase": "B+"}
console.log(stack);
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]

//linked list implementation of stack adding and removing to the beginning for constant time
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Node(val);
        //if stack is empty
        if (!this.first) {
          this.first = newNode;
          this.last = newNode;
          // add current first pointer to new first(new node), and make new node new first
        } else {
          newNode.next = this.first;
          this.first = newNode;
        }
        //add 1 to length
        this.length++;

        return this;
    }
    pop(){
        //if stack is empty return false
        if (this.length === 0) return false;
        //get poppednode
        const poppedNode = this.first;
        //get new first (could be NULL if stack is length 1)
        const newFirst = this.first.next;
        //if newFirst is null, reassign last to newFirst(null)
        if (!newFirst) {
            this.last = newFirst;
        }
        //assign new first
        this.first = newFirst;
        //remove 1 from length
        this.length--;
        //return shiftednode
        return poppedNode;
        }
}



