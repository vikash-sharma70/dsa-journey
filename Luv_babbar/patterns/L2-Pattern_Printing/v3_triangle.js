//right angle triangle pattern

trinaglePat(5)

function trinaglePat(n){
    for(let i = 1; i<=5; i++){
        let result = ""
        for(let j = 1; j<=i; j++){
            result += "*"
        }
        console.log(result);
        
    }
    
}