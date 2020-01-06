const {insertionSort, bubbleSort, selectionSort, swap} = require('./challenge');

test('Swaps two array entries', () => {
    expect(swap([1,2,3], 0, 1)).toStrictEqual([2,1,3]);
});

test('Sorts array from lowest to highest', () => {

    expect (insertionSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);

});

test('Sorts array from lowest to highest', () => {

    expect (bubbleSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);

});

test('Sorts array from lowest to highest', () => {

    expect (selectionSort([8,5,3,1,2,4])).toStrictEqual([1,2,3,4,5,8]);

});

