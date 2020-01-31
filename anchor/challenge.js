const testStr =
  "We're an independent division within Spotify, with the power to move fast, plus the resources of the world's most forward-thinking audio company. Come help us build the future of podcasting! If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";

const stringToArray = str => {
  //split array into array of characters
  const letterArr = str.split("");
  //remove spaces - !! NOTE: I'm not counting spaces as characters
  return letterArr.filter(character => {
    return character !== " ";
  });
};

const createHashTable = arr => {
  //create a hash table with the character and number of times it appears in the paragraph
  const hashTable = {};
  arr.forEach(character => {
    if (!hashTable[character]) {
      hashTable[character] = 1;
    } else {
      hashTable[character] += 1;
    }
  });
  return hashTable;
};

//split object into array of objects by character
const createObjectArray = hashTable => {
  const characterObjectArray = [];

  for (let key in hashTable) {
    characterObjectArray.push({ character: key, num: hashTable[key] });
  }
  return characterObjectArray;
};

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
  while (sortedArray[i].num + charTally < maxChars) {
    //add number to tally
    charTally = charTally + sortedArray[i].num;
    //add character to array
    finalChars.push(sortedArray[i].character);
    //move to next character object
    i++;
  }

  // push leftover chars to array
  let leftoverChars = [];
  while (i < sortedArray.length) {
    leftoverChars.push(sortedArray[i].character);
    i++;
  }

  return {
    numOfCharsRemoved: charTally,
    uniqueChars: finalChars,
    numOfUniqueCharsRemoved: finalChars.length,
    leftoverChars: leftoverChars,
    leftoverNumOfChars: maxChars - charTally + 50
  };
};

const findMaxChars = str => {
  //split into array of characters, remove spaces
  const letterArr = stringToArray(str);

  //get length of array(num of Chars)
  const paraLength = letterArr.length;

  //get max num of characters that can be removed
  const maxChars = paraLength - 50;

  //create a hash table with the character and number of times it appears in the paragraph
  const characterTable = createHashTable(letterArr);

  //split object into array of objects by character for sorting
  const characterObjectArray = createObjectArray(characterTable);

  //sort object from least char appearances to greatest
  const sorted = mergeSort(characterObjectArray);

  //tally characters
  return (talliedCharacters = tallyCharacters(sorted, maxChars));
};

console.log(findMaxChars(testStr));
