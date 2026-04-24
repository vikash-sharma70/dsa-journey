function main(num){
    let evens = ""
    for(let i = 2; i<=num; i++){
        let result = i%2;
        if(result===0){
            evens += i;
            evens += " "
        }

    }

    console.log("Evens:", evens);
    
}

main(10)