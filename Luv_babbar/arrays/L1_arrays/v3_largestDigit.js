let result = largestNum(74638201)
console.log(result);


function largestNum(n){

    let largest = -Infinity

    while(n!=0){

        digit = n%10
        if(digit > largest){
            largest = digit
        }

        n = Math.floor(n/10)
    }

    return largest
}