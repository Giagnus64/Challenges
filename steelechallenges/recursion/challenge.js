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
console.log(factorial(5));

console.log(5*4*3*2*1);