// TODO - Refactor bottom code into properly made linked list
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

} 








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

//FINALIZED IMPLEMENTATION OF SINGLY LINKED LIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linkedlist class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adds an val at the end of the list
  push(val) {
    //make a new Node
    const newNode = new Node(val);
    //if list is empty, make node head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      //otherwise add to end of list
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //add 1 to length
    this.length++;
    //return list
    return this;
  }
  //remove node from end of list
  pop() {
    //if list is empty (has no tail) return false
    if (!this.tail) {
      return false;
    }
    //get removed Node
    const poppedNode = this.tail;
    // if list has more than 1 node
    if (this.head !== this.tail) {
      //find new tail
      const newTail = this.getNodeAtIndex(this.length - 2);
      //remove newtail's reference to poppedNode
      newTail.next = null;
      //make it new tail
      this.tail = newTail;
      //otherwise establish list is empty
    } else {
      this.head = null;
      this.tail = null;
    }
    //subtract 1 from length
    this.length--;
    //return poppedNode
    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    //if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // add current head pointer to new head(new node), and make new node new head
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    //add 1 to length
    this.length++;

    return this;
  }
  //remove first item in list
  shift() {
    //if list is empty return false
    if (!this.head) return false;
    //get shifted node
    const shiftedNode = this.head;
    //get new head (could be NULL if list is length 1)
    const newHead = this.head.next;
    //if newHead is null, reassign tail to newHead(null)
    if (!newHead) {
      this.tail = newHead;
    }
    //assign new head
    this.head = newHead;
    //remove 1 from length
    this.length--;
    //return shiftednode
    return shiftedNode;
  }
  //return node at given index
  getNodeAtIndex(index) {
    //if index is not within list return null
    if (index >= this.length || index < 0) return null;
    //iterate through nodes until finding the one at index
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  //change the node at the given index
  setNodeAtIndex(val, index) {
    //find the node using already built method
    const foundNode = this.getNodeAtIndex(index);
    //if the node is found update and return
    if (foundNode) {
      foundNode.value = val;
      return foundNode;
    }
    //else return null
    return null;
  }
  //insert a new node at the index with the given value
  insertAt(index, val) {
    //if index not valid return false
    if (index < 0 || index > this.length) {
      return false;
    }
    //if index is zero use already built unshift
    if (index === 0) {
      return this.unshift(val);
    }
    //if index is at end of list, use already built push
    if (index === this.length) {
      return this.push(val);
    }
    // make a new node, find the nodes before and after it, make before's next the new node, and the newNode's next the after
    const newNode = new Node(val);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }

  // remove node from index
  removeFrom(index) {
    //if index is invalid return false
    if (index < 0 || index >= this.length) {
      return false;
    }
    //if index is at beginning use already built shift
    if (index === 0) return this.shift();
    //if index is at end use already built pop
    if (index === this.length - 1) return this.pop();
    //get before and after, set before's next to after and remove after's reference from removed Node
    const before = this.getNodeAtIndex(index - 1);
    const removedNode = this.getNodeAtIndex(index);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
  // removeval(val)
  removeVal(val) {
    let current = this.head;
    if (current.val === val) {
      this.head = current.next;
    } else {
      while (current.next.val !== val) {
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
    }
    this.length--;
  }

  //helpers
  isEmpty() {
    if (this.length > 0) {
      return false;
    }
    return true;
  }

  lengthOf() {
    return this.length;
  }

  printList() {
    let current = this.head;
    while (current.next) {
      console.log(current);
      current = current.next;
    }
    console.log(current);
  }
}

let list = new SinglyLinkedList();
list.push("a");
list.push("b");
list.push("c");
list.push("d");

console.log(list.removeFrom(0));
console.log(list.removeFrom(1));
list.printList();
console.log(list.removeFrom(1));

list.printList();