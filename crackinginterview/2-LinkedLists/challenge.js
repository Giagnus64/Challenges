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
  
     
    //adds an element at the end of the list
    add(element){
        const newNode = new Node(element);

        if (!this.head){
            this.head = newNode
        } else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }

        this.size++;
    }

    // insertAt(element, location) 
    insertAt(element, location){

        if(location < 0 || location > this.size){
            return false;
        }
        const newNode = new Node(element);
        let counter = 0
        let current = this.head;

        if(location === 0){
           newNode.next = this.head
           this.head = newNode 
        } else {
            while(!counter + 1 == location){
                current = current.next
                counter++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
        return newNode;
    }
    // removeFrom(location) 
    // removeElement(element) 
  
    //helpers
    isEmpty(){
        if(this.size > 0){
            return false
        }
        return true
    }
    
    sizeOf() {
        return this.size
    }
    
    printList(){
        let current = this.head;
        while (current.next) {
          console.log(current);
          current = current.next;
        }
        console.log(current)
    }

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




//console.log(testList);
