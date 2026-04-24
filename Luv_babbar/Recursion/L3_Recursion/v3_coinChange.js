function coinChange(amount, coins) {

    function solve(index, amount) {

        //Base Case 1: exact amount bana liya
        if (amount === 0) {
            return 1;
        }

        //Base Case 2: amount negative or coins finished
        if (amount < 0 || index === coins.length) {
            return 0;
        }

        //Include current coin
        let include = solve(index, amount - coins[index]);

        //Exclude current coin
        let exclude = solve(index + 1, amount);

        return include + exclude;
    }

    return solve(0, amount);
}

console.log(coinChange(5, [1,2,5]));


//Recommended way to solve this using DP