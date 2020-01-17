class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// linkedlist class
class LinkedList {
  constructor(length) {
    this.head = null;
    this.length = length;
  }

  //adds an element at the end of the list
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }


  insertAt(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(element);
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
    this.size++;
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
    this.size--;
  }
  // removeElement(element)
  removeElement = element => {
    let current = this.head;
    if (current.element === element) {
      this.head = current.next;
    } else {
      while (current.next.element !== element) {
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
    }
    this.size--;
  };

  returnKthToLast(number) {
    if (number > this.size) {
      return false;
    }
    const nodeNum = this.size - number;
    let counter = 0;
    let current = this.head;
    while (nodeNum !== counter) {
      current = current.next;
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
  isEmpty() {
    if (this.size > 0) {
      return false;
    }
    return true;
  }

  sizeOf() {
    return this.size;
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




//DOUBLY LINKED
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
      this.length++;
      return this
  }

  insertAtIndex(index, val) {
    //if index doesn't exist
    if(index > this.length){
        return false
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const after = this.accessAtIndex(index);
      const before = after.prev;
      after.prev = newNode;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
      this.length++;
    }
    return this;
  }

  removeAtIndex(index) {
    let removedNode;
    if(index >= this.length){
        return false
    }
    if (index == 0) {
        removedNode = this.shift();
    } else if (index == this.length - 1) {
        removedNode = this.pop();
    } else {
        removedNode = this.accessAtIndex(index)
        const after = removedNode.next;
        const before = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;
    }
    return removedNode;
  }

  accessAtIndex(index){
      if (index >= this.length) {
        return false;
      }
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode
  }

  getIndex(val) {
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentNode.value!== val) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentIndex;
  }

  setIndex() {}

  search(val) {
      let currentNode = this.head;
      while (currentNode.value !== val) {
        currentNode = currentNode.next;
      }
      return currentNode;
  }
}

let list = new DoublyLinkedList()
//console.log(list);
list.push(1);
// console.log(list.pop())
// console.log(list);
list.push(2);
list.push(3);
// console.log(list.removeAtIndex(1));
// list.push(3);
//console.log(list.accessatIndex(1));