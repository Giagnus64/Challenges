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
      this.tail = newNode
    }
    //add 1 to length
    this.length++;
    //return list
    return this
  }
  //remove node from end of list
  pop() {
      //if list is empty (has no tail) return false
      if(!this.tail){
          return false
      }
      //get removed Node
      const poppedNode = this.tail;
      // if list has more than 1 node
      if(this.head !== this.tail){
        //find new tail
        const newTail = this.findAtIndex(this.length - 2);
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
      return poppedNode
  }

  unshift(val){
      const newNode = new Node(val)
      //if list is empty
      if(!this.head){
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
  shift(){
      //if list is empty return false
      if(!this.head) return false;
      //get shifted node
      const shiftedNode = this.head;
      //get new head (could be NULL if list is length 1)
      const newHead = this.head.next;
      //if newHead is null, reassign tail to newHead(null)
      if(!newHead){
          this.tail = newHead;
      }
      //assign new head
      this.head = newHead;
      //remove 1 from length
      this.length--;
      //return shiftednode
      return shiftedNode;
  }

  insertAt(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(val);
    let counter = 0;
    let current = this.head;

    if (location === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (counter + 1 !== location) {
        current = current.next;
        counter++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
    return newNode;
  }
  // removeFrom(location)
  removeFrom(location) {
    //location is an INDEX, starting from 0
    let counter = 0;
    let current = this.head;
    if (location === 0) {
      this.head = this.head.next;
    } else {
      while (counter + 1 !== location) {
        current = current.next;
        counter++;
        console.log(current);
      }
      current.next = current.next.next;
    }
    this.length--;
  }
  // removeval(val)
  removeVal(val){
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
  };

  returnKthToLast(number) {
    if (number > this.length) {
      return false;
    }
    const nodeNum = this.length - number;
    let counter = 0;
    let current = this.head;
    while (nodeNum !== counter) {
      current = current.next;
      counter++;
      //console.log(current)
    }
    return current;
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

  findAtIndex(index){
      if(index >= this.length || index < 0) return null;
      let currentNode = this.head
      let currentIndex = 0;
      while(currentIndex !== index){
          currentNode = currentNode.next
          currentIndex++;
      }
      return currentNode
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
//console.log(list);
// list.push(1);
// // console.log(list.pop())
// // console.log(list);
// list.push(2);
// list.push(3);
console.log(list.unshift(0));




// //DOUBLY LINKED
// class DoubleNode {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     //in case of empty list
//     if (this.length === 0) {
//       return false;
//     }
//     //get popped node
//     const popped = this.tail;
//     //save newTail to a variable (could be null)
//     const newTail = this.tail.prev;
//     //if newTail is not null
//     if (newTail) {
//       //sever connection to popped node
//       newTail.next = null;
//       //sever connection from popped node
//       this.tail.prev = null;
//       //in case of 1 length list
//     } else {
//       //make sure to edit head in case newTail is null
//       this.head = null;
//     }
//     //assign new tail (could be null)
//     this.tail = newTail;
//     // subtract length
//     this.length--;

//     return popped;
//   }

//   shift() {
//     //in case list is empty
//     if (!this.head) {
//       return false;
//     }
//     //save shifted node to variable
//     const shiftedNode = this.head;
//     //make the new head the next (might be null)
//     const newHead = this.head.next; //might be null
//     //if list is more than 1
//     if (this.head !== this.tail) {
//       newHead.prev = null;
//       shiftedNode.next = null;
//     } else {
//       this.tail = null;
//     }
//     this.head = newHead;
//     this.length--;
//     return shiftedNode;
//   }

//   unshift(val) {
//       const newNode = new Node(val);
//       if(!this.head){
//           this.head = newNode;
//           this.tail = newNode;
//       }else{
//         this.head.prev = newNode;
//         newNode.next = this.head;
//         this.head = newNode;
//       }
//       this.length++;
//       return this
//   }

//   insertAtIndex(index, val) {
//     //if index doesn't exist
//     if(index > this.length){
//         return false
//     }
//     if (index === 0) {
//       this.unshift(val);
//     } else if (index === this.length) {
//       this.push(val);
//     } else {
//       const newNode = new Node(val);
//       const after = this.accessAtIndex(index);
//       const before = after.prev;
//       after.prev = newNode;
//       before.next = newNode;
//       newNode.next = after;
//       newNode.prev = before;
//       this.length++;
//     }
//     return this;
//   }

//   removeAtIndex(index) {
//     let removedNode;
//     if(index >= this.length){
//         return false
//     }
//     if (index == 0) {
//         removedNode = this.shift();
//     } else if (index == this.length - 1) {
//         removedNode = this.pop();
//     } else {
//         removedNode = this.accessAtIndex(index)
//         const after = removedNode.next;
//         const before = removedNode.prev;
//         removedNode.next = null;
//         removedNode.prev = null;
//         before.next = after;
//         after.prev = before;
//         this.length--;
//     }
//     return removedNode;
//   }

//   accessAtIndex(index){
//       if (index >= this.length) {
//         return false;
//       }
//       let currentIndex = 0;
//       let currentNode = this.head;
//       while (currentIndex !== index) {
//         currentNode = currentNode.next;
//         currentIndex++;
//       }
//       return currentNode
//   }

//   getIndex(val) {
//       let currentIndex = 0;
//       let currentNode = this.head;
//       while (currentNode.value!== val) {
//         currentNode = currentNode.next;
//         currentIndex++;
//       }
//       return currentNode;
//   }

//   setIndex() {}

//   search(val) {
//       let currentNode = this.head;
//       while (currentNode.value !== val) {
//         currentNode = currentNode.next;
//       }
//       return currentNode;
//   }
// }


// console.log(list.removeAtIndex(1));
// list.push(3);
//console.log(list.accessatIndex(1));