// agar %(modulus) ko ignore kr skte he means agar program ko without using modulus bna skte ho to jarur banao kuki % operation bohot heavy op hote he to hum bitwise operator & ka use krke bhi is even or odd program ko bna skte he and bitwise operator se fast kuchh bhi nhi hota he.

function checkEvOd(num){
/*
    if(num%2==0){
        return "Even"
    } else{
        return "Odd"
    }
        */

    //======OR using bitwise op========
    if(num & 1){
        return "Odd"
    } else{
        return "Even"
    }
}

let result = checkEvOd(451)
console.log(result);




//===============Program2==============//
let result1 = findEvenOddDigits(6458932);
console.log("digits:",result1);

function findEvenOddDigits(n){

    let evenDigits = [];
    let oddDigits = [];

    while(n != 0){

        let digit = n % 10;

        if(digit % 2 === 0){
            evenDigits.push(digit);
        } else {
            oddDigits.push(digit);
        }

        n = Math.floor(n / 10);
    }

    return {
        even: evenDigits,
        odd: oddDigits
    };
}
