/*
>Logic: Each row is composed of some spaces and startTransition
>Spaces: formula is-> n-row
>Stars: formula is-> as you can see in each row odd stars are printing and to find odd there is always maths formula as: 2x-1 or 2x+1 so in our case formula will be (2xRow - 1)
*/

solidPyramidPat(5)

function solidPyramidPat(n){

    //Outer loop
    for(let row = 1; row<=n; row++){
        let result = ""

        //inner loop: spaces
        for(let col = 1; col<= (n-row); col++) {
            result += " "
        }
        //inner loop: stars
        for(let col = 1; col<= (2*row-1); col++){
            result += "*"
        }
        console.log(result);
        

    }


}