//Inverted right angle triangle

invertedRightAngleTriPat(5)

function invertedRightAngleTriPat(n) {
    for(let i = n; i<=n && i>=1; i--){
        let result = ""

        for(let j=1; j<= i; j++){
            result += "*"
        }
        console.log(result);
        
    }
}