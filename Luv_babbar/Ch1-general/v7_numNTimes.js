function main(num){
    let result = "";

    for(let i = 1; i<=num; i++){
        result += i;

        if(i !== num){
            result += " "
        }
    }
    console.log("Result is:", result);
    
}

main(10)