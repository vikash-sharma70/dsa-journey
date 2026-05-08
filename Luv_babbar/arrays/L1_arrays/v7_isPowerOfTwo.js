let result = isPowerOfTwo(16);
console.log(result);

function isPowerOfTwo(n){

    if(n<= 0) return false;

    while (n%2===0){
        n = Math.floor(n/2)
    }

    return n===1 //true(like if n==1 then it's true)
}
