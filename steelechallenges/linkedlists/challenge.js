class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //in case of empty list
    if (this.length === 0) {
      return false;
    }
    //get popped node
    const popped = this.tail;
    //save newTail to a variable (could be null)
    const newTail = this.tail.prev;
    //if newTail is not null
    if (newTail) {
      //sever connection to popped node
      newTail.next = null;
      //sever connection from popped node
      this.tail.prev = null;
      //in case of 1 length list
    } else {
      //make sure to edit head in case newTail is null
      this.head = null;
    }
    //assign new tail (could be null)
    this.tail = newTail;
    // subtract length
    this.length--;

    return popped;
  }

  shift() {
    //in case list is empty
    if (!this.head) {
      return false;
    }
    //save shifted node to variable
    const shiftedNode = this.head;
    //make the new head the next (might be null)
    const newHead = this.head.next; //might be null
    //if list is more than 1
    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
      const newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      }else{
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      
      return this
  }

  insertAtIndex(index, val) {
    if (index == 0) {
      this.unshift(val);
    } else if (index == this.length - 1) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      const before = currentNode.prev;
      const after = currentNode;
      after.prev = newNode;
      newNode.next = currentIndex;
      before.next = newNode;
      newNode.prev = before;
      this.length++;
    }
    return this;
  }

  removeAtIndex() {}

  getIndex() {}

  setIndex() {}

  search() {}
}

let list = new DoublyLinkedList()
//console.log(list);
list.push(1);
// console.log(list.pop())
// console.log(list);
list.push(2);
console.log(list.unshift(0))
console.log(list.shift());
console.log(list);
// list.push(3);