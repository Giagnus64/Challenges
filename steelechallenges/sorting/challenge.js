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

//console.log(mergeSort([4,1,5,2,7]))


//Quick Sort
const pivot = (arr, startIndex = 0, endIndex = arr.length - 1) => {
    //pick a pivot number (In this case, the 1st number in array)
    let pivotNum = arr[startIndex]
    //keep track of index where pivot is swapped to
    let pivotIndex = startIndex;
    //iterate through the numbers and if the pivot number is greater, swap the current number and the number at the pivot index, and increase the pivot index by one
    for(let i = startIndex + 1; i < arr.length; i++) {
        if(pivotNum > arr[i]){
            pivotIndex++;
            swap(arr, i, pivotIndex) 
        }
    }
    //finally, swap the pivot number with the pivotIndex
    swap(arr, pivotIndex, startIndex)
    return pivotIndex;
}


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    //if the array is 1 item or less
    if(left < right){
        //get the pivot index
        let pivotIndex = pivot(arr, left, right);
        //pass in the sort for the left side of the pivot
        quickSort(arr, left, pivotIndex - 1);
        //pass in the sort for the right side of the pivot
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
//console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));

//ONLY WORKS FOR BASE 10
const getDigit = (num, place) => {
    //move the decimal point over to the requested digit (absolute value tp consider negative numbers)
    const divided = Math.abs(num) / Math.pow(10, place);
    //round down to eliminate digits after the decimal
    const floored = Math.floor(divided);
    //modulo to get remainder when number is divided by it's base (10)
    const digit = floored % 10;

    return digit
    //return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//get digit count
const digitCount = (num) => {
    //special case to ignore running log10 on 0
    if(num === 0) return 1;
    //since we are in base 10, how many times does 10 need to be multipled to get the passed in number?
    const power = Math.log10(Math.abs(num))
    //floor it to get rid of the nums after the decimal
    const floored = Math.floor(power)
    //add 1 digit to account for nums after the decimal
    return floored + 1
    //return Math.floor(Math.log10(Math.abs(num))) + 1
}

//get max number of digits to account for in list
const mostDigits = (nums) => {
    //set a variable for max digits
    let maxDigits = 0;
    // iterate over list
    for(let i = 0; i < nums.length; i++){
        //get maximum of current max digits and digitcount of current itreration of list
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits
}
const radixSort = (nums) => {
    //get the max digits for the list
    let maxDigits = mostDigits(nums);

    const sortedList = [];
    //iterate from 0 to number of max digits
    //digit place iterator
    for(let i = 0; i < maxDigits; i++){
        // make out digit buckets but crafting an array with 10 arrays inside it
        //const bucketContainer = [[],[],[],[],[],[],[],[],[],[]]
        let digitBuckets = Array.from({length:10}, () => [])
        //iterate over our numbers and place them into the proper bucket using helper functions
        for(let j = 0; j < nums.length; j++){
            //get the digit at the current digit iterator place
            let digitized = getDigit(nums[j], i)
            //place into the proper bucket based on digit
            digitBuckets[digitized].push(nums[j])
        }
        //reassign nums to a new array from the spreading of the digit buckets array (like flattening the arrays)
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

//console.log(radixSort([23,456,56,1,3,7654,6789,432345,24,45,2,5,6]));

