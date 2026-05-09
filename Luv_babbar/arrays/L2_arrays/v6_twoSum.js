// ✅ 1️⃣ Brute Force (Basic)
let result = twoSum([2,7,11,15], 22)
console.log(result);

function twoSum(arr, target){

    for(let i = 0; i< arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == target){
                return [i, j]
            }
        }
    }
    return "Target is not matching with array"
}

//==============✅ 2️⃣ Best Approach (HashMap – 🔥🔥)============
let arr = [2,7,11,15];
let target = 9;

console.log("hashmap:",twoSum1(arr, target));

function twoSum1(arr, target){

    let map = {};  // value → index

    for(let i = 0; i < arr.length; i++){

        let complement = target - arr[i];

        if(map[complement] !== undefined){
            return [map[complement], i];
        }

        map[arr[i]] = i;
    }

    return [];
}
