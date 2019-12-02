const testStr = "We're an independent division within Spotify, with the power to move fast, plus the resources of the world's most forward-thinking audio company. Come help us build the future of podcasting! If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50."

//split array into array of characters
const letterArr = testStr.split("");
//remove spaces
const filteredArr = letterArr.filter((character) => {return character !== ' '})
//sort array for readability
filteredArr.sort()
//get length of array(num of Chars)
const paraLength = filteredArr.length
//get max num of characters that can be removed
const maxChars = paraLength - 50;
const hashTable = [];
const uniqueChars = [];
//create a hash table with the character and number of times it appears in the paragraph, keeping track of unique characters via a seperate array
filteredArr.forEach((character) => {
    if(!uniqueChars.includes(character)){
        uniqueChars.push(character)
        hashTable.push({ 'char':character, 'num': 1})
    } else {
        let entry = hashTable.find((charObj) => {return charObj.char === character})
        entry.num += 1
    }
})
//console.log(hashTable);

//sort array of objects from least to most
const sortingFunc = (a, b) => {
    if(a.num > b.num){
        return 1
    } else{
        return -1
    }
}
const sorted = hashTable.sort(sortingFunc)

// if character count + current character tally is under max number of characters, add character to array and add number to tally
const finalChars = [];
let charTally = 0;
sorted.forEach((charObj) => {
    if((charObj.num + charTally) < maxChars){
        charTally = charTally + charObj.num
        finalChars.push(charObj.char)
    }
    console.log(charTally)
})
console.log(finalChars)


//TEST if length of array with remaining characters is greater than 50
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
//find amount of times character appears in array
//hash table with how many times each character appears in the array
//sort them by least to most
//start adding them by least up until you get length of array minus 50(50 characters in the pargraph)
//if its less that 50, break the loop
//take those first characters

