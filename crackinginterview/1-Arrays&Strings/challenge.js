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

// console.log(checkPalinPerm(testStr5));
// console.log(checkPalinPerm(testStr6));
// console.log(checkPalinPerm(testStr7));
// console.log(checkPalinPerm(testStr8));

// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.Given two strings, write a function to check if they are one edit(or zero edits) away.

const testArr1 = ['pine', 'pin'];
const testArr2 = ['lime', 'rime'];
const testArr3 = ['limit', 'lim'];

const oneAway = (str1, str2) => {
    const strLen1 = str1.length;
    const strLen2 = str2.length;
    let larger;
    let smaller;

    if (Math.abs(strLen1 - strLen2) > 1) {
        return false;
    }

    if(strLen1 >= strLen2){
        larger = strToObj(str1);
        smaller = strToObj(str2);
    } else {
        larger = strToObj(str2);
        smaller = strtoObj(str1)
    }

    let differences = 0;

    for(char in larger){
        if (smaller[char]){
            differences += Math.abs(larger[char] - smaller[char])
        } else{
            differences += larger[char];
        }
    }
    if(differences > 1){
        return false
    }
    return true;
}

// console.log(oneAway(testArr3[0], testArr3[1]));
// console.log(oneAway(testArr2[0], testArr2[1]));
// console.log(oneAway(testArr1[0], testArr1[1]));


// String Compression: Implement a method to perform basic string compression using the counts of repeated characters.For example, the string aabcccccaaa would become a2blc5a3, If the "compressed" string would not become smaller than the original string, your method should return the original string.You can assume the string has only uppercase and lowercase letters(a - z).

const testStr9 = "aabcccccaaa"
const testStr10 = "aaaabbbcddccccssaaaw"
const testStr11 = "abcdefg"

const compress = (str) => {
    const length = str.length;
    const strArr = str.split('');
    const charObjArr = [];
    let counter = 1;
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === strArr[i + 1]){
            counter++;
        } else{
           charObjArr.push({[strArr[i]]: counter})
           counter = 1; 
        }
    }
    let finalStr = "";
    charObjArr.forEach((charObj) => {
        finalStr += Object.keys(charObj)[0];
        finalStr += Object.values(charObj)[0];
    })
    if(finalStr.length >= length){
        return str
    }
    return finalStr
}
// console.log(compress(testStr9));
// console.log(compress(testStr10));
// console.log(compress(testStr11));
