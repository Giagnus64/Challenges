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
    constructor(size) 
    { 
        this.head = null; 
        this.size = size; 
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
    
    returnKthToLast(number) {
        if (number > this.size) {
            return false
        }
        const nodeNum = this.size - number;
        let counter = 0;
        let current = this.head;
        while (nodeNum !== counter) {
            current = current.next
            counter++;
            //console.log(current)
        }
        return current;
    } 
    // removeDupsNoBuffer = () => {
    //     let current = this.head;
    //     let searcher = this.head;
    //     while (current.next) {
    //         //console.log('curr:', current, 'searcher:', searcher);
    //         if (current.element === searcher.next.element) {
    //             searcher.next = searcher.next.next
                
    //         } 
    //         searcher = searcher.next
    //         if (searcher === null || searcher.next === null) {
    //             current = current.next
    //             searcher = current.next;
    //             //console.log(current);
    //         }
    //     }
    // }
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

// const node1 = new Node("a")
// const node2 = new Node("b")
// const node3 = new Node("c")
// const node4 = new Node("b")
// const node5 = new Node("a")
// const testList = new LinkedList(5)
// testList.head = node1;
// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5




//testList.removeElement('a');
//testList.insertAt('test', 3);
// console.log(testList);
// testList.printList();
//testList.removeDups();
// console.log(testList.returnKthToLast(3));
// testList.printList();


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

const removeDups = () => {
    let current = this.head;
    let searcher = this.size;
    while(current.next){
        if(searcher.next === null){
            current = current.next
        } else if(current.element === searcher.next.element) {
            searcher.next = searcher.next.next
            searcher = searcher.next
        }
    }
}

// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
//     Hints: #8, #25, #41, #67, #126

const returnKthToLast = (number) =>{
    if (number > this.length){
        return false
    }
    const nodeNum = length - number;
    let counter = 1
    let current = this.head;
    while (nodeNum !== counter){
        current = current.next
    }
    return current;
}

// Delete Middle Node: Implement an algorithm to delete a node in the middle(i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
//     EXAMPLE
// Input: the node c from the linked list a - > b - > c - > d - > e - > f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f Hints: #72
const removeMiddleElement = (element) => {
    let current = this.head;
    while (current.next.element !== element) {
        current = current.next
    }
        current.next = current.next.next
    this.size--;
}
// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.The digits are stored in reverse order, such that the Vs digit is at the head of the list.Write a function that adds the two numbers and returns the sum as a linked list.
// 2.6
// 2.7
// 2.8
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295. Output: 2 -> 1 -> 9. That is, 912.

const node1 = new Node(6)
const node2 = new Node(1)
const node3 = new Node(2)

const testList1 = new LinkedList(3)
testList1.head = node1;
node1.next = node2
node2.next = node3

const nodea = new Node(5)
const nodeb = new Node(9)
const nodec = new Node(2)

const testList2 = new LinkedList(3)
testList2.head = nodea;
nodea.next = nodeb
nodeb.next = nodec

const sum2Lists = (list1, list2) => {
    let ans = getNum(list1) + getNum(list2);
    //let string = ans.toString()
    return generateListBackwards(ans.toString().split(''));
    
}

const getNum = (list) => {
    let digits = [];
    let current = list.head
    while(current.next){
        digits.push(current.element)
        current = current.next;
    }
    digits.push(current.element);
    
    return parseInt(digits.reverse().join(''));
}
const generateListBackwards = (arr) => {
    const newList = new LinkedList(arr.length);
    newList.head = new Node(arr[arr.length - 1]);
    let current = newList.head;
    for(let i = (arr.length - 1); i >= 0; i--){
        if(arr[i - 1]){
            let newNode = new Node(arr[i - 1]);
            current.next = newNode;
            current = newNode;
        }
    }
    return newList;
}

sum2Lists(testList1, testList2).printList();
//generateListBackwards([6,1,2]).printList()


// FOLLOW UP
// Suppose the digits are stored in forward order.Repeat the above problem.EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis, 617 + 295, Output: 9 -> 1 -> 2, Thatis, 912.
// Hints: #7, #30, #71 #95, #109