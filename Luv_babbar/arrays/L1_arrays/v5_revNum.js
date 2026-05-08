let result = reverseNum(857601)
console.log(result);


function reverseNum(num){

    //Number ko string me convert kar diya ❌ so this approach is not good, use below one
    let rev = "";

    while(num!=0){
        let digit = num % 10;
        rev += digit
        num = Math.floor(num/10)
    }
    return rev
}


//===========OR another approach============//

let result1 = reverseNum1(857601)
console.log(result1);


function reverseNum1(num){

    let rev = 0;

    while(num!=0){
        let digit = num % 10;
        rev = rev*10 + digit
        num = Math.floor(num/10)
    }
    return rev
}


//===========Rev -ive or +iv num===========
function reverseInteger(num){

    // Step 1: store the sign
    let sign = num < 0 ? -1 : 1;

    // Step 2: Make number positive
    num = Math.abs(num);

    let rev = 0;

    // Step 3: reverse logic
    while(num != 0){

        let digit = num % 10;

        rev = rev * 10 + digit;

        num = Math.floor(num / 10);
    }

    // Step 4: apply sign again
    return rev * sign;
}


console.log(reverseInteger(748372));   // 273847
console.log(reverseInteger(-748372));  // -273847