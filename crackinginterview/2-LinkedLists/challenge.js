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
            while(counter + 1 !== location){
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
    removeFrom(location){
        //location is an INDEX, starting from 0
        let counter = 0;
        let current = this.head;
        if(location === 0){
            this.head = this.head.next
        } else{
            while (counter + 1 !== location){
                current = current.next
                counter++;
                console.log(current);
            }
            current.next = current.next.next
        }
        this.size--;

    }
    // removeElement(element) 
    removeElement = (element) => {
        let current = this.head;
        if(current.element === element){
            this.head = current.next
        } else {
            while (current.next.element !== element) {
                    current = current.next
                    counter++;
                }
                current.next = current.next.next
            }
            this.size--;
    }
    removeDups = () => {
        let current = this.head;
        let uniqElements = [];
        while (current.next) {
            if (uniqElements.includes(current.next.element)) {
                current.next = current.next.next
            } else {
                uniqElements.push(current.element)
                current = current.next
            }

        }
    } 
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
const node4 = new Node("b")
const node5 = new Node("a")
const testList = new LinkedList()
testList.head = node1;
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5




//testList.removeElement('a');
//testList.insertAt('test', 3);
console.log(testList);
testList.printList();
testList.removeDups();
testList.printList();


// Remove Dups: Write code to remove duplicates from an unsorted linked list.

// const removeDups = () => {
//     let current = this.head;
//     let uniqElements = [];
//     while(current.next){
//         if(uniqElements.includes(current.next.element)){
//             current.next = current.next.next
//         } else {
//             uniqElements.push(current.element)
//             current = current.next
//         }
        
//     }
// } 

//FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed ? Hints : #9, #40



// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
//     Hints: #8, #25, #41, #67, #126

// Delete Middle Node: Implement an algorithm to delete a node in the middle(i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
//     EXAMPLE
// Input: the node c from the linked list a - > b - > c - > d - > e - > f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f Hints: #72
