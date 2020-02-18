class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

const testTree = new BinarySearchTree();
testTree.root = new Node(10);
testTree.root.right = new Node(15);
testTree.root.left = new Node(8);