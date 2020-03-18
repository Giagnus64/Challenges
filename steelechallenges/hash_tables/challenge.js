function hashify(str, arrayLen){
    let total = 0;
    for(let char of str){
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen    
    }
    return total;
}

console.log(hashify("abc", 21))

