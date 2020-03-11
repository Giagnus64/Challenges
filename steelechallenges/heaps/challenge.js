class MaxBinaryHeap{
    
    constructor(){
        this.values = []
    }

    swap(index1, index2){
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
        //added for testing purposes
        return this.values;
    }

    bubble(){
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1)/2);
        while(this.values[parentIndex] < this.values[index]){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1)/2);
        }
    }

    insert(value){
        this.values.push(value)
        //calculate parent, if parent is greater swap
        //while loop or recurse
        this.bubble();
        return this.values
    }
}

const heap1 = new MaxBinaryHeap();
heap1.values = [100,99,65,70,45,40,53,44]

heap1.insert(101);
console.log(heap1.values)
heap1.insert(15);
console.log(heap1.values)
heap1.insert(32);
console.log(heap1.values)
heap1.insert(68);
console.log(heap1.values)