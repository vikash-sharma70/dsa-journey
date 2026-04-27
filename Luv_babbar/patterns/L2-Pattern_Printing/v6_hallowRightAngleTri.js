//Hallow right angle tringular pattern

hallowRightAngTriPat(8)

function hallowRightAngTriPat(n){

    for(let i = 1; i<=n; i++){
        let result = ""

        for(let j=1; j<=i; j++){
            if(i==1 || i==n || j==1 || j==i){
                result += "*"
            } else {
                result += " "
            }
        }
        console.log(result);
        
    }
}