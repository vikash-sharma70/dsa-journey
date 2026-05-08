// Why 1 is Not Prime:Definition Constraints: A prime number must have exactly two distinct factors (1 and the number itself). The number 1 has only one factor.

let result = isPrime(16)
console.log(result);

function isPrime(n){
     if(n==0 || n===1){
        return false
     }

     for(let start = 2; start<=n-1; start++){
        if(n%start===0){
            return false
        } else{
            return true
        }
     }

}
