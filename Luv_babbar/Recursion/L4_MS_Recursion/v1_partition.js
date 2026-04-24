function partitionSubset(nums, target, index){

    // Base case
    if(target === 0) return true;

    if(target < 0 || index === nums.length) return false;

    // include
    let include = partitionSubset(nums, target - nums[index], index + 1);

    // exclude
    let exclude = partitionSubset(nums, target, index + 1);

    return include || exclude;
}

function canPartition(nums){

    // sum calculate
    let sum = nums.reduce((acc, val) => acc + val, 0);

    if(sum % 2 !== 0) return false;

    let target = sum / 2;

    return partitionSubset(nums, target, 0);
}

// test
let isSubset = canPartition([1,5,11,5]);
console.log("IsSubset:", isSubset);