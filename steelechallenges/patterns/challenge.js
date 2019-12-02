//Anagram challenge



const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    const freqTable1 = makeFreqTable(str1);
    const freqTable2 = makeFreqTable(str2);
    console.log(freqTable1, freqTable2);
    for(char in freqTable1){
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