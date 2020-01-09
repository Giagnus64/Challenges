class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
  
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        //in case of empty list
        if(this.length ===0){
            return false;
        }
        //get popped node
        const popped = this.tail
        //save newTail to a variable (could be null)
        const newTail = this.tail.prev
        //if newTail is not null
        if(newTail){
            //sever connection to popped node
            newTail.next = null;
            //sever connection from popped node
            this.tail.prev = null;
            //in case of 1 length list
        } else {
            //mkre sure to edit head in case newTail is null
            this.head = null;
        }
        //assign new tail (could be null)
        this.tail = newTail;
        // subtract length
        this.length--;
        
        return popped;
    }

    shift(){

    }

    unshift(){

    }

    insertAtIndex(){}

    removeAtIndex(){}

    getIndex(){}

    setIndex(){}

    search(){}
}

let list = new DoublyLinkedList()
//console.log(list);
list.push(1);
console.log(list.pop())
console.log(list);
// list.push(2);
// console.log(list);
// list.push(3);