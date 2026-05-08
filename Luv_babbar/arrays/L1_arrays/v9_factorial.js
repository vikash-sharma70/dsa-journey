let result = factOfNum(5)
console.log(result);

function factOfNum(n){

    let fact = 1;

    for(let i = 1; i<=n; i++){
        fact = fact*i
    }
    return fact
}


//========OR Recursion=======
function factorial(n){

    // base case
    if(n === 0 || n === 1){
        return 1;
    }

    // recursion
    return n * factorial(n - 1);
}

// test
console.log(factorial(6)); // 120
