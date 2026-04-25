function solidSqr(num){

    for(let i = 1; i <= num; i++){
        let result = "";
        
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