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
}