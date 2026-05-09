let result = largestElem([2,3,6,12,65,0,12,1])
console.log(result);

function largestElem(arr){
    let largestNum = -Infinity;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largestNum){
            largestNum=arr[i]
        }
    }
    return largestNum
}
