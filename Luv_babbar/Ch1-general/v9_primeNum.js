function primeNum(num) {

    if (num <= 1) {
        console.log("No");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("No");
            return;
        }
    }

    console.log("Yes");
}

primeNum(10); // Yes