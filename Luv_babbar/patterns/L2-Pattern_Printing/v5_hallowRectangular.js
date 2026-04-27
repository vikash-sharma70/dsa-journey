//Hallow Recutanular Pattern
halloRecPat(4,6);

function halloRecPat(length, breadth){

    for(let i = 1; i<= length; i++){
        let result = "";

        for(let j=1; j<=breadth; j++){
            if(i == 1 || i == length || j==1 || j==breadth){
                result += "*"
            } else {
                result += " "
            }
        }
        console.log(result);
        
    }
}