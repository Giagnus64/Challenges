// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
const testStr1 = "nonunique";
const testStr2 = "uniq";
const testStr3 = "qniu"

const uniq = (str) => {
    //split string into array
    let arr = str.split("")
    //establish array of unique characters
    let uniqueArr = [];
    //establish ans
    let ans = true;
    arr.forEach((ele) => {
        //if unique array has same character, ans becomes nfalse
        if(uniqueArr.includes(ele)){
            ans = false
        }else{
            //push character to unique array
            uniqueArr.push(ele)
        }
    })
    return ans
}

//What if you cannot use additional data structures?


//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const strToObj = (testStr) => {
     const letterArr = testStr.split("");
    //remove spaces
    const filteredArr = letterArr.filter((character) => { return character !== ' ' })
    //sort array for readability
    filteredArr.sort()
    const strObj = {};
    const uniqueChars = [];
    filteredArr.forEach((character) => {
    if(!uniqueChars.includes(character)){
        uniqueChars.push(character)
        strObj[character] = 1
    } else{
        strObj[character] += 1
    }
        })
    return strObj
    //var objArr = Object.entries(hashTable).map(([key, value]) => ({ [key]:value }));
}


const checkPermutation = (str1, str2) => {
    const hash1 = strToObj(str1);
    const hash2 = strToObj(str2);
    let isPerm = true
    for(char in hash1){
        if (hash2[char] !== hash1[char]){
            isPerm = false;
        }
    }
    return isPerm;
} 
//console.log(checkPermutation(testStr3, testStr2))


//URLify: Write a method to replace all spaces in a string with '%20'.You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

const testStr4 = "www.testurl.com/?=search term divided by spaces"

const URLify = (str) => {
    let regexp = /\s/g
    return str.replace(regexp, '%20')
}

URLify(testStr4)

// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

const testStr5 = "tact coa"
const testStr6 = "ten animals i slam in a net"
const testStr7 = "aabbccddeeeeffffdddddd"
const testStr8 = "gohangasalami"

//get string length without spaces
const lengthWithoutSpaces = str => {
  const letterArr = str.split("");
  const filteredArr = letterArr.filter(character => {
    return character !== " ";
  });
  return filteredArr.length;
};

// if string length is even and all letters are even, it passes
const checkPalinPerm = (str) => {
    const strLen = lengthWithoutSpaces(str);
    //split characters to map
    const charMap = strToObj(str);
    //count number of characters that appear an odd or even number of times
    let oddCounter = 0;
    let evenCounter = 0;
    for (char in charMap){
        charMap[char] % 2 === 0 ? evenCounter++ : oddCounter++
    }
    //console.log(charMap, strLen, oddCounter, evenCounter);
    //if string length is even, if there are no odd appearances of characters, return true
    if(strLen % 2 === 0){
        if(oddCounter === 0){
        return true;
        }
    // or, if string length is odd, and there is only 1 odd appearance of characters, return true
    } else if(oddCounter === 1) {
        return true
    }
    return false;
    
    
}

console.log(checkPalinPerm(testStr5));
console.log(checkPalinPerm(testStr6));
console.log(checkPalinPerm(testStr7));
console.log(checkPalinPerm(testStr8));

