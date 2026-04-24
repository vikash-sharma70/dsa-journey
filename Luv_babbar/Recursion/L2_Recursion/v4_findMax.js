//=====Using Math.min function=======//
/*
let arr = [20,4,2,0,34,21];

let result = findMax(arr, 0);

console.log("Max num is:", result);

function findMax(arr, index){
    //base case
    if(index === arr.length - 1){
        return arr[index]
    }

    //recursion
    let recAns = findMax(arr, index+1);

    return Math.max(arr[index], recAns);
    
}
*/



//========Without using Math.min=========//

let arr = [20, 4, 2, 0, 23, 21];

let result = findMax(arr, 0);
console.log("Maximum is:", result);

function findMax(arr, index) {

    // Base Case
    if (index === arr.length - 1) {
        return arr[index];
    }

    // Recursion
    let recAns = findMax(arr, index + 1);

    // Compare current element with recursive answer
    let currentValue = arr[index];   // current element
    let recursiveValue = recAns;     // baaki array ka minimum

    let result;

    if (currentValue > recursiveValue) {
        result = currentValue;
    } else {
        result = recursiveValue;
    }

    return result;
}
