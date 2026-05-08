let result = factOfNum(5)
console.log(result);

function factOfNum(n){

    let fact = 1;

    for(let i = 1; i<=n; i++){
        fact = fact*i
    }
    return fact
}
