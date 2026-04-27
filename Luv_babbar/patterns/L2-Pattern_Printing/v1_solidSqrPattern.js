function solidSqr(num){

    //Outer loop - no of rows
    for(let row = 1; row <= num; row++){
        let result = "";
        
        //inner loop - no of columns, define the logic in inner loop
        for(let col = 1; col <= num; col++){
            if(col === num){
                result += "*";   // Don't add space at last
            } else {
                result += "* ";
            }
        }

        console.log(result);
    }
}

solidSqr(5);