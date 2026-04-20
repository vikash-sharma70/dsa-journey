function printDigits(num) {
    
    //base case
    if(num == 0){
        return
    }

    let digit = num%10;
    num = Math.floor(num / 10);

    printDigits(num);
    console.log("Digits:", digit);

}

printDigits(452)
