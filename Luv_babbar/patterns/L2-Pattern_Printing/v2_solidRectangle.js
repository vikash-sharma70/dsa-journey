rectangelPat(3,5)

function rectangelPat(length, breadth){

    for(let i = 1; i <= length; i++){
        let result = "";
        for(let j = 1; j<=breadth; j++){
            if(j==breadth){
                result += "*"
            } else{
                result += "* "
            }
        }
        console.log(result);
        
    }
}