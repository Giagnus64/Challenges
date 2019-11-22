// User defined class node


class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedlist class 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 5; 
    } 
  
    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 

const node1 = new Node("a")
const node2 = new Node("b")
const node3 = new Node("c")
const node4 = new Node("d")
const node5 = new Node("e")
const testList = new LinkedList()
testList.head = node1;
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(testList);