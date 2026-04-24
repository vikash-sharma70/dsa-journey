let result = isSorted([1,2,7,4,5], 0);
console.log("Result is:", result);

function isSorted(arr, index){

    //base case
    if(index==arr.length-1){
        return true;
    }

    if(arr[index]>arr[index+1]){
        return false;
    }

    return isSorted(arr,index+1);
}