/* (1)Search an ele in an array and return index
(2)find min value from an arr
(3)find max value from an arr */

//===============Problem-1================//
let arr = [10,20,30,40,50];
let index = 0;

searchEle(40, arr, index)

function searchEle(num, arr, index){
    if(num == arr[index]){
        console.log("index is:", index);
        return index;
    }
    
    let ans = searchEle(num, arr, index+1);
    console.log("Index number is:", ans);
    return ans
}