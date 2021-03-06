//Array implementation of a stack using push/pop
//STACK = LAST IN FIRST OUT
const stack = [];
/*
stack.push({"Willow Rosenberg": "A"});
console.log(stack);
//[{ "Willow Rosenberg": "A" }]

stack.push({"Xander Harris": "C"});
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
console.log(stack);

stack.push({"Cordelia Chase": "B+"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

stack.push({"Buffy Summers": "B"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]

//REMOVAL
const firstOut = stack.pop();
// { "Buffy Summers": "B" }
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

const secondOut = stack.pop();
//{"Cordelia Chase": "B+"}
console.log(stack);
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
*/

//Array implementation of a stack using shift/unshift

/*
stack.unshift({"Willow Rosenberg": "A"});
console.log(stack);
//[{ "Willow Rosenberg": "A" }]

stack.unshift({"Xander Harris": "C"});
//[ { 'Xander Harris': 'C' }, { 'Willow Rosenberg': 'A' } ]
console.log(stack);

stack.unshift({"Cordelia Chase": "B+"});
console.log(stack);
//[{ 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

stack.unshift({"Buffy Summers": "B"});
console.log(stack);
//[{ "Buffy Summers": "B" }, { 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

//REMOVAL
const firstOut = stack.shift();
// { "Buffy Summers": "B" }
console.log(stack);
//[{ 'Cordelia Chase': 'B+' }, { 'Xander Harris': 'C' },  { 'Willow Rosenberg': 'A' }]

const secondOut = stack.shift();
//{"Cordelia Chase": "B+"}
console.log(stack);
//[ { 'Xander Harris': 'C' }, { 'Willow Rosenberg': 'A' } ]
*/

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
        //add 1 to size
        this.size++;

        return this;
    }
    pop(){
        //if stack is empty return false
        if (this.size === 0) return false;
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
        //remove reference to list
        poppedNode.next = null;
        //remove 1 from size
        this.size--;
        //return shiftednode
        return poppedNode;
        }
    log(){
           let currentNode = this.first
           let i = 0;
           while(currentNode){
               console.log(i, currentNode.value)
               i++;
               currentNode = currentNode.next
           }
        }
}

const studentStack = new Stack; 
studentStack.push({"Willow Rosenberg": "A"});
studentStack.log();
//[{ "Willow Rosenberg": "A" }]

studentStack.push({"Xander Harris": "C"});
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
studentStack.log();

studentStack.push({"Cordelia Chase": "B+"});
studentStack.log();
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

studentStack.push({"Buffy Summers": "B"});
studentStack.log();
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]


const firstOut = studentStack.pop();
// { "Buffy Summers": "B" }
studentStack.log();
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

const secondOut = studentStack.pop();
//{"Cordelia Chase": "B+"}
studentStack.log();
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]


//Array implementation of a queue using unshift and pop

//NOT ideal

const queue = [];
/*
queue.unshift("Resume.docx");
console.log(queue);
//[ 'Resume.docx' ]
queue.unshift("Data_Report.csv");
console.log(queue);
//[ "Data_Report.csv", "Resume.docx" ]
queue.unshift("Picture_of_Biscuit.png");
console.log(queue);
//["Picture_of_Biscuit.png", "Data_Report.csv", "Resume.docx"]

queue.pop();
//"Resume.docx"
console.log(queue);
//["Picture_of_Biscuit.png", "Data_Report.csv"]

queue.pop();
//"Data_report.csv"
console.log(queue);
//["Picture_of_Biscuit.png"];
*/
//Array implementation of queue using push and shift


queue.push("Resume.docx");
console.log(queue);
//[ 'Resume.docx' ]

queue.push("Data_Report.csv");
console.log(queue);
//["Resume.docx", "Data_Report.csv"]

queue.push("Picture_of_Biscuit.png");
console.log(queue);
//["Resume.docx", "Data_Report.csv", "Picture_of_Biscuit.png"]

queue.shift();
//"Resume.docx"
console.log(queue);
//["Data_Report.csv","Picture_of_Biscuit.png"]

queue.shift();
//"Data_report.csv"
console.log(queue);
// ["Picture_of_Biscuit.png"];


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //newnode goes to back of the line/end of the queue
    enqueue(value){
        const newNode = new Node(value);
        //if queue is empty
        if (this.size === 0) {
          this.first = newNode;
          this.last = newNode;
          // add current first pointer to new first(new node), and make new node new first
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
        //add 1 to size
        this.size++;

        return this;
    }
    // dequeue nodes off the front of the line
    dequeue(){
         //if queue is empty return false
        if (this.size === 0) return false;
        //get dequeuedNode
        const dequeuedNode = this.first;
        //get new first (could be NULL if stack is length 1)
        const newFirst = this.first.next;
        //if newFirst is null, reassign last to newFirst(null)
        if (!newFirst) {
            this.last = newFirst;
        }
        //assign new first
        this.first = newFirst;
        //remove refernce to list
        dequeuedNode.next = null;
        //remove 1 from size
        this.size--;
        //return dequeuednode
        return dequeuedNode;
        }

        log(){
           let currentNode = this.first
           let i = 0;
           while(currentNode){
               console.log(i, currentNode.value)
               i++;
               currentNode = currentNode.next
           }
        }
 }

 const printQueue = new Queue();

 printQueue.enqueue("Data_Report.csv");
 printQueue.log()
 //["Resume.docx", "Data_Report.csv"]

 printQueue.enqueue("Picture_of_Biscuit.png");
 printQueue.log()
 //["Resume.docx", "Data_Report.csv", "Picture_of_Biscuit.png"]

 printQueue.dequeue();
 //"Resume.docx"
 printQueue.log()
 //["Data_Report.csv","Picture_of_Biscuit.png"]

 printQueue.dequeue();
 //"Data_report.csv"
 printQueue.log()


