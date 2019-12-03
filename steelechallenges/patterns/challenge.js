// *********** Frequency Tables *************

//Anagram challenge
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    const freqTable1 = makeFreqTable(str1);
    const freqTable2 = makeFreqTable(str2);
    console.log(freqTable1, freqTable2);
    for(let char in freqTable1){
        console.log(char);
        if(freqTable1[char] !== freqTable2[char]){
            return false
        } 
    }
    return true;
}

const makeFreqTable = (str) => {
    const strTable = {}
    for(let i = 0; i < str.length; i++){
        strTable[str[i]] = (strTable[str[i]] || 0) + 1
    }
    return strTable
}

console.log(validAnagram('aaz', 'zza'));

//check same frequency of digits

const sameFrequency = (num1, num2) => {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    const freqTable1 = makeFreqTable(str1);
    const freqTable2 = makeFreqTable(str2);

    for(let char in freqTable1) {
        console.log(char);
        if (freqTable1[char] !== freqTable2[char]) {
            return false
        }
    }
    return true;

}

// ************** Multiple Pointers ************************


//count unique values in sorted array
const countUniqueValues = (arr) => {
    let i = 0;
    let j = 1;
    while(j < arr.length) {
        if(arr[i] === arr[j]){
            j++;
        }else{
            i++;
            arr.splice(i, 0, arr[j]);
            j++;
        }
    }
    return i + 1
}

//check duplicate arguments
const areThereDuplicates = (...args) =>{
    let i = 0;
    let j = 1;
    while (i < args.length - 1) {
        if (args[i] == args[j]) {
            return true;
        }
        if (j == args.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return false;
}

// check average
const getAvg = (num1, num2) => {
    return (parseFloat(num1) + parseFloat(num2)) / 2
}

function averagePair(arr, avg) {
    let i = 0;
    let j = 1;
    if (arr.length === 0) {
        return false;
    }
    while (i < arr.length - 1) {
        if (getAvg(arr[i], arr[j]) === avg) {
            return true
        }
        if (j === arr.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return false;
}
// FASTER SOLUTION
function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}

//********************** SLIDING WINDOW PATTERN *********************/

// find maxSubarr
function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    if (num > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = 1; j < arr.length - num + 1; j++) {
        tempSum = (tempSum - arr[j - 1]) + arr[j + num - 1];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}