function countPairs(numbers, k) {
  // Write your code here
  let firstPointer = 0;
  let secondPointer = 1;
  let validPairs = 0;
  const validPairArray = [];
  function checkNums(num1, num2) {
    if (Math.abs(num1 - num2) === k) {
      return true;
    } else {
      return false;
    }
  }
  function checkPair(num1, num2) {
    if(validPairArray.find(element => element[num1] === num2) || validPairArray.find(element => element[num2] === num1) ) {
        return false;
    } else {
      validPairArray.push( {[num1]: num2});
      validPairArray.push( {[num2]: num1});
      return true;
    }
  }
  //iterate through array finding valid pairs using 2 pointers
  while (firstPointer < numbers.length) {
    while (secondPointer < numbers.length) {
      if (checkNums(numbers[firstPointer], numbers[secondPointer])) {
        if (checkPair(numbers[firstPointer], numbers[secondPointer])) {
          validPairs++;
        }
      }
      secondPointer++;
    }
    firstPointer++;
    secondPointer = firstPointer + 1;
  }
  console.log(validPairArray);
  return validPairs;
}

//console.log(countPairs([1,1,2,2,3,3],1))

console.log("push 4"[5])