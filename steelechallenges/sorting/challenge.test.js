const {insertionSort, swap} = require('./challenge');


test('Swaps two array entries', () => {
     const arr1 = [1, 2, 3];
     swap(arr1, 0, 1);
     expect(arr1).toStrictEqual([2, 1, 3]);
});

test('Sorts array from lowest to highest - insertion sort', () => {

    expect (insertionSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);
    expect (insertionSort([1,2,4])).toStrictEqual([1,2,4]);
//     //sorting fails if given an undefined or not a number
//     //expect (insertionSort([1,6,undefined,8,4])).toStrictEqual([1,6,undefined,4,8]);
//     //expect (insertionSort([1,'b',8,4])).toStrictEqual([1,'b',4,8]);
    
});

// test('Sorts array from lowest to highest - bubble sort', () => {

//     expect (bubbleSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);
//     expect (bubbleSort([1,2,4])).toStrictEqual([1,2,4]);

// });

// test('Sorts array from lowest to highest - selection sort', () => {

//     expect (selectionSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);
//     expect (selectionSort([1,2,4])).toStrictEqual([1,2,4]);

// });

