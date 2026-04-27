function solidSqr(num){

    //Outer loop - no of rows
    for(let i = 1; i <= num; i++){
        let result = "";
        
        //inner loop - no of columns, define the logic in inner loop
        for(let j = 1; j <= num; j++){
            if(j === num){
                result += "*";   // Don't add space at last
            } else {
                result += "* ";
            }
        }

        console.log(result);
    }
}

solidSqr(5);