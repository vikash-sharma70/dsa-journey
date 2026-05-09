let result = averOfElem([20,10,12,11,32])
console.log("typeof1:", typeof(result));
console.log(result);

function averOfElem(arr){
    let sum = 0;

    for(let i=0; i<=arr.length-1; i++){
        sum += arr[i]
    }
    let aver = sum/arr.length;
    console.log("length of array:", arr.length);
    
    return aver;
}
