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