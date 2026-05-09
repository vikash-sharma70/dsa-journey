let result = searchEle([2,5,3,5,12,99,32,0], 99)
console.log(result);

function searchEle(arr, ele){
    for(let i = 0; i<=arr.length; i++){
        if(arr[i]==ele){
            return i
        }
    }
    return -1
}
