let result = isPalindrom(34543)
console.log(result);

function isPalindrom(n){

    let originalNum = n
    let rev = 0;

    while(n!=0){

        let digit = n%10;
        rev = rev*10 + digit;
        n = Math.floor(n/10)
    }

    if(rev==originalNum){
        return "Num is palindrome"
    } else{
        return "Num is not palindrome"
    }
}
