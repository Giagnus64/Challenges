const testStr = "We're an independent division within Spotify, with the power to move fast, plus the resources of the world's most forward-thinking audio company. Come help us build the future of podcasting! If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

const stringToArray = (str) => {
    //split array into array of characters
    const letterArr = str.split("");
    //remove spaces - !! NOTE: I'm not counting spaces as characters
    return letterArr.filter((character) => {return character !== ' '});
}

const createHashTable = (arr) => {
    //create a hash table with the character and number of times it appears in the paragraph
    const hashTable = {};
    arr.forEach((character) => {
        if(!hashTable[character]){
            hashTable[character] = 1;
        } else {
            hashTable[character] += 1;
        }
    })
    return hashTable;
}

//split object into array of objects by character
const createObjectArray = (hashTable) => {
    const characterObjectArray = [];
    
    for (let key in hashTable){
        characterObjectArray.push({character: key, num: hashTable[key]})
    }
    return characterObjectArray;
}

//specialized merge array for objects
const merge = (arr1, arr2) => {
  //establish a final sorted array to sort the elements, and a pointer for each array
  let sortedArray = [];
  let firstPointer = 0;
  let secondPointer = 0;
  //while the first pointer and the second pointer have not reached the end of their respective arrays
  while (firstPointer < arr1.length && secondPointer < arr2.length) {
    //add lesser number to array, and move pointer
    if (arr2[secondPointer].num >= arr1[firstPointer].num) {
      sortedArray.push(arr1[firstPointer]);
      firstPointer++;
    } else {
      sortedArray.push(arr2[secondPointer]);
      secondPointer++;
    }
  }
  //after arrays have been exhausted, add the rest of the numbers from whatever array's pointer has not reached gone through the array
  while (firstPointer < arr1.length) {
    sortedArray.push(arr1[firstPointer]);
    firstPointer++;
  }
  while (secondPointer < arr2.length) {
    sortedArray.push(arr2[secondPointer]);
    secondPointer++;
  }
  return sortedArray;
};

//merge sort to sort object array
const mergeSort = arr => {
  //if array is SORTED(length is 0 or 1), return array
  if (arr.length <= 1) return arr;
  //find midpoint
  let midpoint = Math.floor(arr.length / 2);
  //split array by midpoint and merge sort the split arrays
  let arr1 = mergeSort(arr.slice(0, midpoint));

  let arr2 = mergeSort(arr.slice(midpoint));
  //return the merged arrays
  return merge(arr1, arr2);
};

//tally characters until max number of characters is reached
const tallyCharacters = (sortedArray, maxChars) => {
    const finalChars = [];
    let charTally = 0;
    let i = 0;
    // while current character's count + current character tally is under max number of characters
    while(sortedArray[i].num +charTally < maxChars){
        //add number to tally
        charTally = charTally + sortedArray[i].num;
        //add character to array 
        finalChars.push(sortedArray[i].character)
        //move to next character object
        i++;
    }
    // push leftover chars to array
    let leftoverChars = []
    while(i < sortedArray.length){
        leftoverChars.push(sortedArray[i].character)
        i++;
    }

    // sortedObj.forEach((charObj) => {
    //     if((charObj.num + charTally) < maxChars){
    //         charTally = charTally + charObj.num
    //         finalChars.push(charObj.char)
    //     }
    // });
    return { 
        numOfCharsRemoved: charTally, 
        uniqueChars: finalChars,
        numOfUniqueCharsRemoved: finalChars.length,
        leftoverChars: leftoverChars,
        leftoverNumOfChars: maxChars - charTally + 50,
    };
}




const findMaxChars = (str) => {
    //split into array of characters, remove spaces 
    const letterArr = stringToArray(str);
    
    //get length of array(num of Chars)
    const paraLength = letterArr.length

    //get max num of characters that can be removed
    const maxChars = paraLength - 50;

    //create a hash table with the character and number of times it appears in the paragraph
    const characterTable = createHashTable(letterArr);

    //split object into array of objects by character for sorting
    const characterObjectArray = createObjectArray(characterTable);

    //sort object from least char appearances to greatest
    const sorted = mergeSort(characterObjectArray);
    
    //tally characters
    return talliedCharacters = tallyCharacters(sorted, maxChars);


}

console.log(findMaxChars(testStr));








// const testStr = "We're an independent division within Spotify, with the power to move fast, plus the resources of the world's most forward-thinking audio company. Come help us build the future of podcasting! If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

// //split array into array of characters
// const letterArr = testStr.split("");

// //remove spaces - !! NOTE: I'm not counting spaces as characters
// const filteredArr = letterArr.filter((character) => {return character !== ' '})

// //get length of array(num of Chars)
// const paraLength = filteredArr.length

// //get max num of characters that can be removed
// const maxChars = paraLength - 50;
// const characterObjectArray = [];
// const uniqueChars = [];

// //create a hash table with the character and number of times it appears in the paragraph, keeping track of unique characters via a seperate array
// filteredArr.forEach((character) => {
//     //if char is NOT in unique characters, add it to the array and 
//     if(!uniqueChars.includes(character)){
//         uniqueChars.push(character)
//         characterObjectArray.push({'char':character, 'num': 1})
//     } else {
//         let entry = hashTable.find((charObj) => {return charObj.char === character})
//         entry.num += 1
//     }
// })
// //console.log(hashTable);

// //sort array of objects from least to most
// const sortingFunc = (a, b) => {
//     if(a.num > b.num){
//         return 1
//     } else{
//         return -1
//     }
// }
// const sorted = hashTable.sort(sortingFunc)

// // if character count + current character tally is under max number of characters, add character to array and add number to tally
// const finalChars = [];
// let charTally = 0;
// sorted.forEach((charObj) => {
//     if((charObj.num + charTally) < maxChars){
//         charTally = charTally + charObj.num
//         finalChars.push(charObj.char)
//     }
//     console.log(charTally)
// })
// console.log(finalChars)



// TEST if length of array with remaining characters is greater than 50
// const filteredTest = filteredArr.filter((character) => {return (character === 'e' || character === 't')})
// console.log(filteredTest, filteredTest.length)
// sorted.forEach((character) => {
//     if(!uniqueChars.includes(character)){
//         uniqueChars.push(character)
//         hashTable[character] = 1
//     } else{
//         hashTable[character] += 1
//     }
// })
// console.log(uniqueChars, hashTable)
// var objArr = Object.entries(hashTable).map(([key, value]) => ({ [key]:value }));

// console.log(objArr);
// find amount of times character appears in array
// hash table with how many times each character appears in the array
// sort them by least to most
// start adding them by least up until you get length of array minus 50(50 characters in the pargraph)
// if its less that 50, break the loop
// take those first characters

