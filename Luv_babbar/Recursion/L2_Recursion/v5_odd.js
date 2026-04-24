let arr = [0,20,31,33,88,10,1];
let index = 0;

checkOdd(arr, index);

function checkOdd(arr, index){

    // Base Case (Stop condition)
    if(index === arr.length){
        return;  
    }

    // Processing / Work (Work of Current element)
    if(arr[index] % 2 === 1){
        console.log(`${arr[index]} is odd number`);
    } else {
        console.log(`${arr[index]} is even number`);
    }

    // Recursive Call (Move to next index)
    checkOdd(arr, index + 1);
}