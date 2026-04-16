//=====Using Math.min function=======//
/*
let arr = [20,4,2,0,34,21];

let result = findMin(arr, 0);

console.log("Min num is:", result);

function findMin(arr, index){
    //base case
    if(index === arr.length - 1){
        return arr[index]
    }

    //recursion
    let recAns = findMin(arr, index+1);

    return Math.min(arr[index], recAns);
    
}
*/


//========Without using Math.min=========//

let arr = [20, 4, 2, 0, 23, 21];

let result = findMin(arr, 0);
console.log("Minimum is:", result);

function findMin(arr, index) {

    // Base Case
    if (index === arr.length - 1) {
        return arr[index];
    }

    // Recursion
    let recAns = findMin(arr, index + 1);

    // Compare current vs recursion answer
    // return arr[index] < recAns ? arr[index] : recAns;
    //=======OR=======
    // Compare current element with recursive answer

    let currentValue = arr[index];   // current element
    let recursiveValue = recAns;     // baaki array ka minimum

    let result;

    if (currentValue < recursiveValue) {
        result = currentValue;
    } else {
        result = recursiveValue;
    }

    return result;
}
