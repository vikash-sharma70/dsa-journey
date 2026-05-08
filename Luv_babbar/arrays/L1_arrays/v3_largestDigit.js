let result = largestNum(74638201)
console.log(result);


function largestNum(n){

    let largest = -Infinity

    while(n!=0){

        let digit = n%10
        // if(digit > largest){
        //     largest = digit
        // }
        //=========OR============
        largest = Math.max(digit, largest);

        n = Math.floor(n/10)
    }

    return largest
}