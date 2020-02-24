class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBFS(){
        //if there is no root, return false
        if(!this.root){
            return false
        }
        //start a new Queue
        const queue = new Queue()
        //keep a tally of all values in the tree
        const treeValues = [];
        //add root to queue
        queue.enqueue(this.root)
        //while queue is not empty
        while(queue.size !== 0){
            //get TreeNode Children
            const nodeChildren = queue.first.value.children
            //if node has children, loop and add each to queue
            if(nodeChildren.length !== 0){
                nodeChildren.forEach((child) => queue.enqueue(child));
            }
            //push the first item in the queue to the tree values
            treeValues.push(queue.first.value);
            //remove first node from queue
            queue.dequeue();
        }
        //return values, should be all TreeNodes
        return treeValues;
    }

    traverseDFS(){
         //if there is no root, return false
        if(!this.root){
            return false
        }
        const treeValues = [];
        let current = this.root;
        
        const preOrderHelper = (node) =>{
            treeValues.push(node.value);
            if(node.children.length !== 0){
                node.children.forEach((child) => {preOrderHelper(child)})
            }
            return true;
        }

        const postOrderHelper = (node) =>{
            if (node.children.length !== 0) {
              node.children.forEach(child => {
                preOrderHelper(child);
              });
            }
            treeValues.push(node.value);
            return true;
        }

        const inOrderHelper = (node) =>{
            if(node.children.length !== 0) {
                if(node.children.length > 1){
                    const halfway = Math.floor(node.children.length/2)
                    for(let i = 0; i < halfway; i++){
                        inOrderHelper(node.children[i])
                        //treeValues.push(node.children[i]);
                    }
                    treeValues.push(node.value)
                    for(let i = halfway; i < node.children.length; i++){
                        inOrderHelper(node.children[i]);
                        //treeValues.push(node.children[i]);
                    }

                } else{
                    node.children.forEach(child => {
                      inOrderHelper(child);
                    });
                    treeValues.push(node.value);
                }
            } else{
                treeValues.push(node.value);
            }
            return true;
        }
        
        inOrderHelper(current);
        return treeValues
    }

}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //newnode goes to back of the line/end of the queue
  enqueue(value) {
    const newNode = new QueueNode(value);
    //if queue is empty
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      // add current first pointer to new first(new node), and make new node new first
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    //add 1 to size
    this.size++;

    return this;
  }
  // dequeue nodes off the front of the line
  dequeue() {
    //if queue is empty return false
    if (this.size === 0) return false;
    //get dequeuedNode
    const dequeuedNode = this.first;
    //get new first (could be NULL if stack is length 1)
    const newFirst = this.first.next;
    //if newFirst is null, reassign last to newFirst(null)
    if (!newFirst) {
      this.last = newFirst;
    }
    //assign new first
    this.first = newFirst;
    //remove refernce to list
    dequeuedNode.next = null;
    //remove 1 from size
    this.size--;
    //return dequeuednode
    return dequeuedNode;
  }

  log() {
    let currentNode = this.first;
    let i = 0;
    while (currentNode) {
      console.log(i, currentNode.value);
      i++;
      currentNode = currentNode.next;
    }
  }
}

const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("e"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode('l'));
testTree.root.children[0].children.push(new TreeNode('o'));
testTree.root.children[0].children.push(new TreeNode('W'));
testTree.root.children[1].children.push(new TreeNode('o'));
testTree.root.children[1].children.push(new TreeNode('r'));
testTree.root.children[1].children.push(new TreeNode('l'));
testTree.root.children[1].children.push(new TreeNode('d'));

//console.log(testTree.traverseBFS());
console.log(testTree.traverseDFS());