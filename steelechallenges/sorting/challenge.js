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
function bubbleSortAlt(arr){
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
// console.log(bubbleSort([8,1,2,3,4,5]))
//console.log(bubbleSort([8,4,6,2,1,34,56,25]))

function selectionSort(arr){
    let smallest = 0;
    let current = 1;
    let beginning = 0;
    
    while(beginning < arr.length){
       
        while(current < arr.length){

            if(arr[smallest] > arr[current]){
                smallest = current;
            } 
            current++;

        }

        if(smallest !== beginning){
            swap(arr, smallest, beginning)
        }

        beginning++;
        current = beginning + 1;
        smallest = beginning;
    }
    return arr;
}

function selectionSortAlt(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;

        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            swap(arr, i, lowest);
        }

    }
    return arr;
}
//console.log(selectionSort([3,5,6,2,4,5,3,5,4]))
//console.log(selectionSortAlt([3,5,6,2,4,5,3,5,4]))

function insertionSortAlt(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal

    }
    return arr;
}

function insertionSort(arr){
    let beginningIndex = 1;
    let currentIndex = 2;

    while(beginningIndex < arr.length && currentIndex < arr.length){
        
        while(currentIndex >= 0){
            currentVal = arr[currentIndex];
            
            if(currentVal <= arr[currentIndex - 1]){
                swap(arr, currentIndex, currentIndex - 1);
                currentIndex--;
            } else{
                break;
            }
        
        }
        beginningIndex++;

        currentIndex = beginningIndex + 1;

    }

    return arr;
}


console.log(insertionSort([3, 5, 4, 2, 1]))
console.log(insertionSort([3,5,6,2,4,5,3,5,4]))