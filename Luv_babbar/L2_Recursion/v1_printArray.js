// function printArray(arr, size, index) {
//     if(index >= size) {
//         return;
//     }

//     console.log("Array is:", arr[index]);
//     printArray(arr, size, index+1);
    

// }

let arr = [10, 20, 30, 40, 50];
let size = 5;
let index= 0;

// printArray(arr, size, index)
reverseArr(arr, size, index)


//============================================//

function reverseArr(arr, size){
    if(size == 0){
        return;
    }

    console.log("Reverse Arr:", arr[size-1]);
    reverseArr(arr, size-1);
    
}