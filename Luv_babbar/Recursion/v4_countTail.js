function countTail(current, num){
    if(current > num) return;

    console.log("Current num is:", current);
    countTail(current+1, num)
}

countTail(5, 10)