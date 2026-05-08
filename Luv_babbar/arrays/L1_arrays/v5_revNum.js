let result = reverseNum(857601)
console.log(result);


function reverseNum(num){

    let rev = "";

    while(num!=0){
        let digit = num % 10;
        rev += digit
        num = Math.floor(num/10)
    }
    return rev
}