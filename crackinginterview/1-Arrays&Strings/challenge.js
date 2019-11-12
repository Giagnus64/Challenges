// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
const testStr1 = "nonunique";
const testStr2 = "Uniq";

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