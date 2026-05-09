let arr = [10, 20, 30, 40];
let result = [];

for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
}

console.log(result);

//==========or by using array build in method=========//
let arr1 = [10, 20, 30, 40];
arr1.reverse();

console.log(arr1);



//===============Best Approach (Two Pointer)===========//

let arr2 = [22,12,0,43,9]
revArrayTwoPointer(arr2)
console.log(arr2);

function revArrayTwoPointer(arr2){

    let left = 0 //from 0 index
    let right = arr2.length-1

    while(left<=right){
        let temp = arr2[left];
        arr2[left] = arr2[right];
        arr2[right] = temp;
        left++;
        right--;
    }


}
