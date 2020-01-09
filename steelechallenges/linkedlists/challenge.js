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
        const newNode(val)
        if(!this.head){
            const newNode = new Node(val);
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

    pop(){}

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

