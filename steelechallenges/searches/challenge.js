//Linear Search

function linearSearch(arr, ele){
    let i = 0;
    while(i < arr.length){
        if(arr[i] === ele) return i;
        i++;
    }
    return -1;
}

function binarySearch(arr, ele){
    let lesser = 0;
    let greater = arr.length - 1;
    
    while(lesser <= greater){
        let middle = Math.floor((lesser + greater) / 2)
        if (ele === arr[middle]){
            return middle
        } else if (ele < arr[middle]){
            greater = middle - 1;
        } else if(ele > arr[middle]){
            lesser = middle + 1;
        }
    }
    return -1;
  }

//count the number of times a smaller string appears in a larger string
function naiveSearch(str, matchStr){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < matchStr.length; j++){
            if(matchStr[j] !== str[i+j]) break;
            if(j === matchStr.length - 1) count++;
        }
    }
    return count;
}
console.log(naiveSearch("lorie loled", "pop"));
console.log(naiveSearch("lorie loled", "lol"));
console.log(naiveSearch("lorie loled", "lo"));