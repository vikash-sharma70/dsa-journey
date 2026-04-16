function printArray(arr, size, index) {
    if(index >= size) {
        return;
    }

    console.log("Array is:", arr[index]);
    printArray(arr, size, index+1);
    

}

let arr = [10, 20, 30, 40, 50];
let size = 5;
let index= 0;

printArray(arr, size, index)