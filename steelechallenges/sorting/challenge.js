// bubble sort


function swap (arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    //added for testing purposes
    return arr;
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
        //console.log("one pass done!")
        if(swaps === 0) break;
    }
    return arr;
}


function bubbleSort(arr){
    let endIndex = arr.length - 1;

    while(endIndex > 0){
        
        let swaps = 0;
        let currentIndex = 0;
        
        while(currentIndex < endIndex){
            // console.log(arr, arr[currentIndex], arr[currentIndex + 1])
            if(arr[currentIndex] > arr[currentIndex + 1]){

                swap(arr, currentIndex, currentIndex + 1);
                swaps++;
            }
            currentIndex++;
        }
        
        if(swaps === 0) break;
        endIndex--;

    }

    return arr;
}

// console.log(bubbleSort([8,4,6,2,7]))
// console.log(bubbleSort([8,1,2,3,4,5]))
// console.log(bubbleSort([8,4,6,2,1,34,56,25]))

function selectionSort(arr){
    let smallestIndex = 0;
    let currentIndex = 1;
    let beginningIndex = 0;
    
    while(beginningIndex < arr.length){
       
        while(currentIndex < arr.length){

            if(arr[smallestIndex] > arr[currentIndex]){
                smallestIndex = currentIndex;
            } 
            currentIndex++;

        }

        if(smallestIndex !== beginningIndex){
            swap(arr, smallestIndex, beginningIndex)
        }

        beginningIndex++;
        currentIndex = beginningIndex + 1;
        smallestIndex = beginningIndex;
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
    let beginningIndex = 0;
    let currentIndex = 1;

    while(currentIndex < arr.length){
        
        while(currentIndex > 0){
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


// console.log(insertionSort([8, 5, 4, 2, 1]))
// console.log(insertionSort([3,5,6,2,4,5,3,5,4]))

// module.exports = {insertionSort, swap}

// merge sort
// start with merging array function
//ASSUMES THE ARRAYS ARE SORTED*****
const merge = (arr1, arr2) => {
    //establish a final sorted array to sort the elements, and a pointer for each array
    let sortedArray = [];
    let firstPointer = 0;
    let secondPointer = 0;
    //while the first pointer and the second pointer have not reached the end of their respective arrays
    while (firstPointer <  arr1.length && secondPointer < arr2.length){
        //add lesser number to array, and move pointer
        if(arr2[secondPointer] >= arr1[firstPointer]){
            sortedArray.push(arr1[firstPointer])
            firstPointer++;
        } else{
            sortedArray.push(arr2[secondPointer])
            secondPointer++;
        } 
    }
    //after arrays have been exhausted, add the rest of the numbers from whatever array's pointer has not reached gone through the array
    while(firstPointer < arr1.length) {
        sortedArray.push(arr1[firstPointer]);
        firstPointer++;
    } 
    while(secondPointer < arr2.length) {
        sortedArray.push(arr2[secondPointer])
        secondPointer++;
    }
    return sortedArray
}


const mergeSort = (arr) => {
    //if array is SORTED(length is 0 or 1), return array
    if (arr.length <= 1) return arr;
    //find midpoint
    let midpoint = Math.floor(arr.length/2);
    //split array by midpoint and merge sort the split arrays
    let arr1 = mergeSort(arr.slice(0, midpoint))
    
    let arr2 = mergeSort(arr.slice(midpoint))
    //return the merged arrays
    return merge(arr1, arr2)
}

console.log(mergeSort([4,1,5,2,7]))


//Quick Sort
const pivot = (arr, startIndex = 0, endIndex = arr.length - 1) => {
    let pivotNum = arr[0]
    let pivotIndex = 0;
    while(startIndex <= endIndex){
        if(pivotNum > arr[startIndex]){
            pivotIndex++;
            swap(arr, startIndex, pivotIndex) 
        }
        startIndex++; 
    }
    return swap(arr, pivotIndex, 0)
}

console.log(pivot([28,41,4,11,16,1,40,14,36,37,42,18]))