class MaxBinaryHeap{
    
    constructor(){
        this.values = []
    }
    //helper method that swaps the values and two indexes of an array
    swap(index1, index2){
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
        return this.values;
    }
    //helper methods that bubbles up values from end
    bubbleUp(){
        //get index of inserted element
        let index = this.values.length - 1
        //loop while index is not 0 or element no loger needs to bubble
        while(index > 0){
            //get parent index via formula
            let parentIndex = Math.floor((index - 1)/2);
            //if values is greater than parent, swap the two
            if(this.values[parentIndex] < this.values[index]){
                //swap with helper method
                this.swap(index, parentIndex);
                //change current index to parent index
                index = parentIndex;
            } else{
                break;
            }
        }
        return 0;
    }
    // method that pushes new value onto the end and calls the bubble helper
    insert(value){
        this.values.push(value)
        //calculate parent, if parent is greater swap
        //while loop or recurse
        this.bubbleUp();
        return this.values
    }

    bubbleDown(){
        let parentIndex = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true){
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            let leftChild, rightChild;
            let indexToSwap = null;
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild > element){
                    indexToSwap = leftChildIndex;
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if(
                    (rightChild > element && indexToSwap === null) ||
                    (rightChild > leftChild && indexToSwap !== null))
                {
                    indexToSwap = rightChildIndex
                }
            }
            if(indexToSwap === null){
                break;
            } 
            this.swap(parentIndex, indexToSwap);
            parentIndex = indexToSwap;
        }  
    }

    removeMax(){
        //swap first and last element
        this.swap(0, this.values.length - 1);
        //pop max value off of values
        let poppedValue = this.values.pop();
        //re-adjust heap 
        if(this.values.length > 1){
            this.bubbleDown();
        }
        
        return poppedValue;
    }
}

const heap1 = new MaxBinaryHeap();
heap1.values = [100,99]

// heap1.insert(101);
// console.log(heap1.values)
// heap1.insert(15);
// console.log(heap1.values)
// heap1.insert(32);
// console.log(heap1.values)
// heap1.insert(68);
// console.log(heap1.values)

heap1.removeMax();
console.log(heap1.values)
heap1.removeMax();
console.log(heap1.values)