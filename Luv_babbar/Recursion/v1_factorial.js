function fact(num) {
    if(num == 1){
        return 1;
    }
     let ans = fact(num -1);
      let finalAns = num * ans;
      console.log("Factorial is:", finalAns)
      return finalAns;
}

fact(5);