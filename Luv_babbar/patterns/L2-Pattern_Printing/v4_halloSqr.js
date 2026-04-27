//Hallow square pattern
hallowSqrPtr(5);

function hallowSqrPtr(n){
    for(let i = 1; i<=n; i++){

        let result = ""
        for(let j=1; j<=n; j++){

            if(i==1 || i==n){
                result += "*"
            } else if(j==1 || j==n){
                result += "*"
            } else {
                result += " "
            }
        }
        console.log(result);
        
    }
}