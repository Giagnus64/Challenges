//Linear Search

function linearSearch(arr, ele){
    let i = 0;
    while(i < arr.length){
        if(arr[i] === ele) return i;
        i++;
    }
    return -1;
}

function binarySearch(arr, ele){
    let lesser = 0;
    let greater = arr.length - 1;
    
    while(lesser <= greater){
        let middle = Math.floor((lesser + greater) / 2)
        if (ele === arr[middle]){
            return middle
        } else if (ele < arr[middle]){
            greater = middle - 1;
        } else if(ele > arr[middle]){
            lesser = middle + 1;
        }
    }
    return -1;
  }
