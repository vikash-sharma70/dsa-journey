function fibo(n){
    console.log("Calling:", n);

    if(n==0) return 0;
    if(n==1) return 1;

    let f1 = fibo(n-1);
    let f2 = fibo(n-2);

    let ans = f1 + f2;

    console.log("Returning:", n, "->", ans);

    return ans;
}

console.log("Main Fibo:",fibo(5));