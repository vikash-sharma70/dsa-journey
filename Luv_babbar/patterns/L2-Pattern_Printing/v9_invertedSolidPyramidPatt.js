/*
>Logic: Each row is composed of some spaces and startTransition
>Spaces: formula is-> row-1
>Stars: formula is-> (2*n)-(2*row-1)
*/
invertedSolidPyraPatt(5)


function invertedSolidPyraPatt(n){

    for(let row= 1; row<= n; row++){
        let result = ""

        //spaces
        for(let col=1; col<=(row-1); col++){
            result += " "
            
        }

        for(let col=1; col<=((2*n)-(2*row-1)); col++){
            result += "*"
        }

        console.log(result);
        
    }


}