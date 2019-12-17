function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
//countDown(5);

function sumRange(num){
    if(num === 1) return 1;
    console.log(num)
    return num + sumRange(num - 1);
}
//sumRange(4);

//return 4 + sumRange(3)
            //3 + sumRange(2)
                //2 + sumRange(1)
                    // 1
                    //4 + 3 + 2 + 1

//factorial
function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num-1)
}
//console.log(factorial(5));

function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1));
    }

    helper(arr);
    return result;
}

//console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//REFACTOR W PURE RECURSION
function collectOddValuesPure(arr){
    //make a new array
    let newArr = [];
    // if the array passed in has no values, return the new array
    if(arr.length === 0){
        return newArr
    }
    //if the 1st element of the passed in array is odd, push it onto the new array
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    //the new array pointer equals the new array plus the array returned by the function when the array is passed in minus the first value
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
//console.log(power(2,0), power(2,2), power(2,4))

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}

//reverse a string

function reverse(str){
    if (str.length === 1) return str[0];
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
//console.log(reverse('string'));

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!

}