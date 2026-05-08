// ex: num is 4829 then the sum of these digits should be 23

let result = sumOfDigits(4829)
console.log(result);

function sumOfDigits(n){

    let sum = 0;

    while(n!=0){
        num = Math.floor(n%10)
        sum += num;
        n = Math.floor(n/10)
    }
    return sum;
}
