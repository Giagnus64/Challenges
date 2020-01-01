// bubble sort

function swap (arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// i starts at the end of the array and is the "gatekeeper" for the last comparison, so we dont compare undefined
// j end at comparing i - 1, enforcing the gatekeeping of the first loop
// j goes through each element in the array
// check for swaps with shortcircuit
function bubbleSort(arr){
    let swaps;

    for(let i = arr.length; i > 0; i--){
        swaps = 0;
        for(let j = 0; j < i-1; j++){

            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                swaps++;
            }
        
        }
        console.log("one pass done!")
        if(swaps === 0) break;
    }
    return arr;
}

//console.log(bubbleSort([8,4,6,2,7]))
console.log(bubbleSort([8,1,2,3,4,5]))
//console.log(bubbleSort([8,4,6,2,1,34,56,25]))