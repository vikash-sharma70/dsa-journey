// ex:598153076 so in this number 0 is the smallest

let smallestNumIs = smallestNum(598153076)
console.log(smallestNumIs);


function smallestNum(n){

    let smallest=Infinity;

    while(n!=0){

        let digit = n%10;
        // if(digit<smallest){
        //     smallest = digit
        // }

        //=========OR============
        smallest = Math.min(digit, smallest);
        n = Math.floor(n/10)
    }

    return smallest

}