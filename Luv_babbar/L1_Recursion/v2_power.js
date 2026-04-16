function power(num) {
    if(num == 0) { return 1; }

    let recAns = power(num-1)
    console.log("ans is:", recAns)
    let myAns = 2 * recAns;
    console.log("MyAns is:", myAns)
    return myAns;
}

power(4);