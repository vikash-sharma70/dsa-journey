// ✅ 1️⃣ Brute Force (Sorting) ❌
let arr = [1,0,1,0,1,0];

arr.sort((a,b) => a - b);

console.log(arr);

//2️⃣ Count Method (Better)
let result = sortZerosOnes([1,0,1,0,1,0,1])
console.log(result);

function sortZerosOnes(arr){
    let countZeros=0

    let newArr = arr;

    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            countZeros++;
        }
    }

    for(let i=0; i<countZeros; i++){
        newArr[i] = 0;
    }

    for(let i=countZeros; i<arr.length; i++){
        newArr[i] =1;
    }

    return newArr

}


//============ 3️⃣ Best Approach (Two Pointer)
let result1 = sortZeroOne([1,0,1,0,1,0,1])
console.log("Two pointer:",result1);

function sortZeroOne(arr){

    let left = 0;
    let right = arr.length-1;
    let newArr = arr;

    while(left<right){
        if(newArr[left] === 0){
            left++
        }
        else if(newArr[right] ===1){
            right--;
        }
        else{
            let temp = newArr[left];
            newArr[left]=newArr[right];
            newArr[right] = temp;
        }

    }

    return newArr;
}

