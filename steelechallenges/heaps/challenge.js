class MaxBinaryHeap{
    
    constructor(){
        this.values = []
    }

    swap(index1, index2){
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
        return this.values;
    }
    //helper methods that bubbles up values from end
    bubble(){
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